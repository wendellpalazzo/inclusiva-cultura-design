import os
import re
import pandas as pd
import requests
import firebase_admin
from firebase_admin import credentials, firestore
from datetime import datetime


# --- Inicializa Firebase ---
cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

# --- Função para buscar posts do Instagram (exemplo genérico) ---
def fetch_instagram_posts(username):
    # aqui você pode colocar sua lógica de scraping ou API
    # retornando lista de dicts: id, legenda, url_imagem, data_post
    url = "https://www.instagram.com/api/v1/users/web_profile_info/?username=instituto_maos_de_ouro"

    headers = {
        "accept": "*/*",
        "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
        "x-ig-app-id": "936619743392459",  # esse é importante
        "referer": "https://www.instagram.com/instituto_maos_de_ouro/",
    }

    response = requests.get(url, headers=headers)
    data = response.json()
    
    user = data["data"]["user"]

    edges = user.get("edge_owner_to_timeline_media", {}).get("edges", [])
    posts_data = []

    for edge in edges:
        node = edge["node"]
        posts_data.append({
            "id": node.get("id"),
            "curtidas": node.get("edge_liked_by", {}).get("count"),
            "comentarios": node.get("edge_media_to_comment", {}).get("count"),
            "data_post": node.get("taken_at_timestamp"),
            "legenda": node.get("edge_media_to_caption", {}).get("edges", [{}])[0].get("node", {}).get("text"),
            "url_imagem": node.get("display_url"),
            "video_url": node.get("video_url", ""),
            "is_video": node.get("is_video", False)
        })

    df_posts = pd.DataFrame(posts_data)

    filtered_posts = df_posts[df_posts["legenda"].str.contains(r"(?mi)#site|#vaiprosite", regex=True, na=False)]

    return filtered_posts

# --- Função pra criar slug ---
def slugify(text, max_length=50):
    # remove hashtags e caracteres especiais
    text = re.sub(r"#\w+", "", text)       # remove #hashtags
    text = re.sub(r"[^\w\s-]", "", text)   # remove tudo que não é letra, número, espaço ou hífen
    text = text.lower().strip()            # minúsculas e remove espaços extras
    text = re.sub(r"[\s_-]+", "-", text)  # substitui espaços e underscores por hífen
    return text[:max_length].rstrip("-")

# --- Pega posts ---
posts = fetch_instagram_posts("instituto_maos_de_ouro")

# Cria DataFrame
df_posts = pd.DataFrame(posts)

# Filtra posts por hashtags (#site ou #vaiprosite)
filtered_posts = df_posts[df_posts["legenda"].str.contains(r"(?mi)#site|#vaiprosite", regex=True, na=False)]

# --- Pasta para arquivos ---
base_path = "../../src/data/blog"
os.makedirs(base_path, exist_ok=True)

new_files_count = 0
# Mapeamento manual dos meses em português
MESES_PT = [
    "janeiro", "fevereiro", "marco", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
]

for _, row in filtered_posts.iterrows():
    text = row["legenda"]
    # blob = TextBlob(text)

    slug = slugify(text)
    file_path = os.path.join(base_path, f"{slug}.js")

    # --- Backup no Firestore ---
    doc_ref = db.collection("instagram_posts").document(str(row["id"]))
    doc_ref.set(row.to_dict())

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
        img_folder = f"../../public/assets/contents/blog/{slug}/"
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
  "title": "{row['legenda'][:60]}",
  "description": "{row['legenda'][:150]}",
  "image": "{gallery_path}",
  "fullDescription": `{row['legenda']}`,
  "url": "{post_url}",
  "color": "bg-primary",
  "date": "{date_field}",
  "dateFormated": "{formatted_date}",
  "location": "Breves - PA",
  "category": "",
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

    new_files_count += 1

print(f"✅ {len(filtered_posts)} posts salvos no Firestore e {new_files_count} novos arquivos criados em {base_path}")
