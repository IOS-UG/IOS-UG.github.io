# IOS-UG

Dark-blue themed iOS certificate installer site (ESign / KSign), rebranded from the
original project with all ad & tracking scripts removed.

## Contents

| File/Dir | Purpose |
|---|---|
| `index.html` | The whole site (HTML + CSS + JS in one file) |
| `css/` | Original stylesheets from the source project (referenced, not required) |
| `images/` | Site avatar / icons |
| `deploy.sh` | Helper script to push this repo to GitHub |

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy to GitHub Pages (free hosting)

1. Create a GitHub account at https://github.com/signup
2. Create a new **public** repository (name it e.g. `IOS-UG`)
3. Push this folder:

```bash
./deploy.sh
# prompts for your GitHub username and repo name
```

> When it asks for a password, paste a **Personal Access Token**
> (GitHub → Settings → Developer settings → Personal access tokens →
> Tokens (classic) → Generate, tick the `repo` scope). Passwords no longer work.

4. Enable Pages: open `https://github.com/<username>/<repo>/settings/pages`
   → **Source:** "Deploy from a branch" → **Branch:** `main` / `/ (root)` → **Save**
5. Your site goes live at `https://<username>.github.io/<repo>/`
   (allow 1–2 minutes on first deploy)

**Tip:** if you name the repo `<username>.github.io`, the site is served from the
root: `https://<username>.github.io/`

## Deploy with the GitHub web UI (no terminal needed)

1. Create the repo, then click **"uploading an existing file"**
2. Drag in `index.html`, `.nojekyll` and the `css/` + `images/` folders
3. Commit → enable Pages exactly as in step 4 above

## App install behavior

The ESign / KSign INSTALL buttons use the original `itms-services` manifest links.
They only launch the native iOS installer when opened in **Safari on
iPhone/iPad**; on other browsers a toast explains that.

## Housekeeping

Commit author was set as a placeholder. To put your own identity on the commit:

```bash
git config user.name "Your Name"
git config user.email "you@example.com"
git commit --amend --reset-author --no-edit
```
