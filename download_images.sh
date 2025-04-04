#!/bin/bash

# Define the base directory for JSON files
# JSON_DIR="content/projetos"
JSON_DIR="content/blog"

# Define the target base directory for downloaded images
TARGET_BASE_DIR="public/assets/contents/blog"

# Iterate over all JSON files in the directory
for JSON_FILE in "$JSON_DIR"/*.json; do
  # Extract the project ID from the filename (e.g., "1" from "1.json")
  PROJECT_ID=$(basename "$JSON_FILE" .json)

  # Define the target directory for the current project
  TARGET_DIR="$TARGET_BASE_DIR/$PROJECT_ID"

  # Create the directory if it doesn't exist
  mkdir -p "$TARGET_DIR"

  # Extract the gallery array and image field from the JSON file using jq
  GALLERY_IMGS=$(jq -r '.gallery[]' "$JSON_FILE")
  IMAGE_IMG=$(jq -r '.image' "$JSON_FILE")

  # Download each image in the gallery
  UPDATED_GALLERY=()
  for URL in $GALLERY_IMGS; do
    # Extract the filename from the URL
    FILENAME=$(basename "${URL%%\?*}")
    # Download the image
    curl -o "$TARGET_DIR/$FILENAME.jpg" "$URL"
    # Add the updated path to the gallery array (without "public/")
    UPDATED_GALLERY+=("\"/assets/contents/blog/$PROJECT_ID/$FILENAME.jpg\"")
  done

  # Download the main image
  UPDATED_IMAGE=""
  if [ -n "$IMAGE_IMG" ]; then
    FILENAME=$(basename "${IMAGE_IMG%%\?*}")
    curl -o "$TARGET_DIR/$FILENAME.jpg" "$IMAGE_IMG"
    UPDATED_IMAGE="/assets/contents/blog/$PROJECT_ID/$FILENAME.jpg"
  fi

  # Update the JSON file with the new paths
  jq --arg image "$UPDATED_IMAGE" \
     --argjson gallery "$(printf '[%s]' "$(IFS=,; echo "${UPDATED_GALLERY[*]}")")" \
     '.image = $image | .gallery = $gallery' \
     "$JSON_FILE" > "${JSON_FILE}.tmp" && mv "${JSON_FILE}.tmp" "$JSON_FILE"

  echo "Images for project $PROJECT_ID downloaded and JSON updated in $TARGET_DIR"
done