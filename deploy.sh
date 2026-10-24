#!/usr/bin/env bash
# IOS-UG — GitHub Pages push helper
set -e
cd "$(dirname "$0")"

read -p "GitHub username: " USERNAME
read -p "Repository name (e.g. IOS-UG): " REPO

git remote remove origin 2>/dev/null || true
git remote add origin "https://github.com/${USERNAME}/${REPO}.git"
git branch -M main

echo "Pushing to https://github.com/${USERNAME}/${REPO}.git ..."
echo "Use your Personal Access Token as the password (not your GitHub password)."
git push -u origin main

cat <<EOF

Pushed! Now open:
  https://github.com/${USERNAME}/${REPO}/settings/pages
  → Source: "Deploy from a branch" → Branch: main → Save

Your site will be live at:
  https://${USERNAME}.github.io/${REPO}/
EOF
