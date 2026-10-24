# IOS-UG

Dark-blue themed iOS certificate installer site (ESign / KSign), rebranded from the
original project with all ad & tracking scripts removed.

## Contents

| File/Dir | Purpose |
|---|---|
| `index.html` | The whole site (HTML + CSS + JS in one file) |
| `apps.json` | The ESign/KSign app list (rendered by `index.html`) |
| `admin.html` | Private admin panel — add/remove/edit apps online, publishes via GitHub API |
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

## Online admin panel (`admin.html`)

Available at **https://ios-ug.github.io/admin.html** (never linked from the site; search engines are told to ignore it).

1. **Create your admin key** (once, ~2 min):
   - GitHub → Settings → Developer settings → **Fine-grained personal access tokens** → *Generate new token*
   - **Repository access:** *Only select repositories* → `IOS-UG/IOS-UG.github.io`
   - **Permissions → Repository permissions → Contents: Read and write** (optionally **Pages: Read** to see build status)
   - Expiration: 30 days recommended; regenerate when it expires
2. Open the admin URL, paste the token, press **Connect**
3. Edit the lists: ➕ add, ✏️ edit inline (name / description / badge / plist id), 🗑 delete
4. **📥 Sync from source** imports any new certificates added to `apps.js` on the origin site
5. **☁️ Commit changes** writes `apps.json` to the repo → GitHub Pages rebuilds → live in ~1 minute

Edits stay in your browser until you commit. The token is stored only in your
browser's local storage — never in the code and never sent to third parties.
Reload discards unsaved edits.

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
