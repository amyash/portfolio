# Amy Ash — Portfolio 2026

Editorial-style portfolio inspired by [AI in Design Report 2026](https://stateofaidesign.com/), built with React and Vite.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Customize

- **Content:** Edit `src/data.js` (chapters, case studies, timeline, stats).
- **Copy & sections:** Edit `src/App.jsx`.
- **Visual style:** Edit CSS variables in `src/index.css` and rules in `src/App.css`.

## Deploy to amyash.co.uk

Your site is on **LiteSpeed shared hosting**. Pushing to `main` builds the site and deploys it automatically via GitHub Actions.

### Push to deploy (recommended)

Every push to `main` runs `.github/workflows/deploy.yml`: build → rsync over SSH → live site.

#### One-time GitHub setup

1. Enable **SSH** in cPanel → **SSH Access**.
2. Create a deploy key (if you don’t already have one):

```bash
ssh-keygen -t ed25519 -C "github-deploy-amyash" -f ~/.ssh/amyash_deploy -N ""
```

3. Add the **public** key to the server (cPanel → SSH Access → Manage SSH Keys, or append to `~/.ssh/authorized_keys` on the host).
4. In GitHub → **Settings → Secrets and variables → Actions**, add:

| Secret | Value |
| --- | --- |
| `SSH_PRIVATE_KEY` | Full contents of `~/.ssh/amyash_deploy` (the private key) |
| `SSH_HOST` | `amyash.co.uk` (or your server hostname) |
| `SSH_USER` | Your cPanel username |
| `SSH_REMOTE_DIR` | `/home/USERNAME/public_html` |
| `SSH_PORT` | `22` (optional) |
| `SSH_DELETE` | `false` (optional; set `true` to remove remote files not in the build) |

5. Push to `main` (or run the workflow manually under **Actions → Deploy**).

### Manual deploy (local)

```bash
cp .deploy.env.example .deploy.env   # first time
# edit .deploy.env with SSH_HOST, SSH_USER, SSH_REMOTE_DIR
chmod +x scripts/deploy-ssh.sh       # first time
npm run deploy
```

FTP alternative: `npm run deploy:ftp`

**Note:** The build can be large because case-study video assets are still in `public/`. We can exclude them later to speed up deploys.
