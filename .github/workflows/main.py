import os
import re
import pandas as pd
import requests
import firebase_admin
from firebase_admin import credentials, firestore
from google.cloud.firestore_v1.base_query import FieldFilter
from datetime import datetime
from google import genai
from google.genai import types
import json

client = genai.Client(api_key=os.getenv("GEMINI_API"))  # Use your actual API key here

# --- Função pra criar slug ---
def slugify(text, max_length=50):
    # remove hashtags e caracteres especiais
    text = re.sub(r"#\w+", "", text)       # remove #hashtags
    text = re.sub(r"[^\w\s-]", "", text)   # remove tudo que não é letra, número, espaço ou hífen
    text = text.lower().strip()            # minúsculas e remove espaços extras
    text = re.sub(r"[\s_-]+", "-", text)  # substitui espaços e underscores por hífen
    return text[:max_length].rstrip("-")

# --- Inicializa Firebase ---
cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

# --- Pasta para arquivos ---
repo_path = os.getcwd()  # ou os.environ['GITHUB_WORKSPACE']
base_path = os.path.join(repo_path, "src/data/blog")

os.makedirs(base_path, exist_ok=True)

new_files_count = 0

filtered_posts = (
    db.collection("instagram_posts")
    .where(filter=FieldFilter("published", "==", False))
    .stream()
)

# Mapeamento manual dos meses em português
MESES_PT = [
    "janeiro", "fevereiro", "marco", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
]

for row in filtered_posts:
    row = row.to_dict()

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        config=types.GenerateContentConfig(
            response_mime_type="application/json",
            thinking_config=types.ThinkingConfig(thinking_budget=0), # Disables thinking
            system_instruction=f"""
                Você é um especialista em criar posts para blogs.
                Baseado na descrição dada você deve:
                 - $tituto: criar um título, este mesmo deve ter no máximo 80 caracteres. Trocar aspas duplas (") para aspas simples (') para não quebrar o JSON.
                 - $slug: um slug usando este titulo (tudo minusculo, sem acentos, divididos por hífens).
                 - $descricao: uma breve descricao, este mesmo deve conter no máximo 150 caracteres. Trocar aspas duplas (") para aspas simples (') para não quebrar o JSON.
                 - $legenda: a legenda original do post que foi dada como input pelo usuário, apenas faça correções pontuais
                 de ortografia e gramática. Trocar aspas duplas (") para aspas simples (') para não quebrar o JSON. mas não mude nada além disso. Também ajuste para ser um html formatado, conforme este exemplo dado:
                   - use uma <div class='space-y-2'></div> para agrupar todos os parágrafos
                   - separe todos os parágrafos em tags <p> distintas.
                Retorne como um objeto JSON apenas, sempre usando este formato {{$slug, $titulo, $descricao, $legenda}}, mas antes de retornar verifique se todo o objeto JSON está correto.
                Não precisa explicar mais nada apenas retornar o JSON.
                """,
            temperature=1
        ),
        contents=[row['legenda']]
    )

    response = json.loads(response.text) if response.text else ""

    slug = response.get("slug", slugify(row['title']))
    row['title'] = response.get("titulo", row['title'])
    row['description'] = response.get("descricao", row['legenda'][:150])
    row['legenda'] = response.get("legenda", row['legenda'])

    file_path = os.path.join(base_path, f"{slug}.js")

    # --- Cria arquivos só se não existir ---
    if os.path.exists(file_path):
        continue
    
    # converte timestamp unix
    post_date = datetime.fromtimestamp(row["data_post"]) if not pd.isna(row["data_post"]) else datetime.now()
    formatted_date = f"{post_date.day} de {MESES_PT[post_date.month-1]} de {post_date.year}"
    date_field = post_date.strftime("%Y-%m-%d")
    post_url = f"https://www.instagram.com/p/{row['id']}/" if 'id' in row else ''
    img_url = row.get("url_imagem", "")
    video_url = row.get("video_url", "")  # caso exista

    if img_url:
        img_folder = os.path.join(repo_path, "public/assets/contents/blog", slug)

        os.makedirs(img_folder, exist_ok=True)
        
        img_name = "1.png"  # você pode incrementar se quiser várias imagens
        img_path = os.path.join(img_folder, img_name)
        
        # Baixa a imagem
        try:
            img_data = requests.get(img_url).content
            with open(img_path, "wb") as f:
                f.write(img_data)
        except Exception as e:
            print(f"Erro ao baixar imagem {img_url}: {e}")

    # No template .js
    gallery_path = f"/assets/contents/blog/{slug}/{img_name}"
    # print(row.get('is_video'))
    # print(video_url)
    if row.get("is_video") == True and video_url:
        videos_array = [[video_url, 1]]
    else:
        videos_array = []

    content = f"""export default {{
        "slug": "{slug}",
        "title": "{row['title']}",
        "description": "{row['description']}",
        "image": "{gallery_path}",
        "fullDescription": `{row['legenda']}`,
        "url": "{post_url}",
        "color": "bg-primary",
        "date": "{date_field}",
        "dateFormated": "{formatted_date}",
        "location": "Breves - PA",
        "category": "Vai Pro Site",
        "videos": {videos_array},
        "gallery": [
            [
            "{gallery_path}"
            ]
        ],
        "objectives": [],
        "impact": ""
    }}"""
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
        new_files_count+=1
    
    doc_ref = db.collection("instagram_posts").document(str(row["id"]))
    
    if doc_ref.get().exists:
        doc_ref.update({'published': True})

print(f"✅ {new_files_count} novos arquivos criados em {base_path}")
