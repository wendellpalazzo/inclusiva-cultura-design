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
    
    if "data" not in data:
        return exit("Não existem dados a serem buscados")

    user = data["data"]["user"]

    edges = user.get("edge_owner_to_timeline_media", {}).get("edges", [])
    posts_data = []

    for edge in edges:
        node = edge["node"]
        posts_data.append({
            "id": node.get("id"),
            "data_post": node.get("taken_at_timestamp"),
            "title": node.get("edge_media_to_caption", {}).get("edges", [{}])[0].get("node", {}).get("text")[:60],
            "published": False,
            "legenda": node.get("edge_media_to_caption", {}).get("edges", [{}])[0].get("node", {}).get("text"),
            "url_imagem": node.get("display_url"),
            "video_url": node.get("video_url", ""),
            "is_video": node.get("is_video", False)
        })

    df_posts = pd.DataFrame(posts_data)

    filtered_posts = df_posts[df_posts["legenda"].str.contains(r"(?mi)#site|#vaiprosite", regex=True, na=False)]
    return filtered_posts

# --- Pega posts ---
posts = fetch_instagram_posts("instituto_maos_de_ouro")

# Cria DataFrame
df_posts = pd.DataFrame(posts)

# Filtra posts por hashtags (#site ou #vaiprosite)
filtered_posts = df_posts[df_posts["legenda"].str.contains(r"(?mi)#site|#vaiprosite", regex=True, na=False)]

backups_count = 0
for _, row in filtered_posts.iterrows():
    
    doc_ref = db.collection("instagram_posts").document(str(row["id"]))
    
    if not doc_ref.get().exists:
        doc_ref.set(row.to_dict())
        backups_count += 1

print(f"✅ {backups_count} posts salvos no Firestore")
