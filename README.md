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

Your site is on **LiteSpeed shared hosting**. The built site lives in `dist/` after `npm run build`.

### One-time setup

1. Enable **SSH** in your hosting control panel (cPanel → **SSH Access**).
2. Copy the example env file and add your details:

```bash
cp .deploy.env.example .deploy.env
```

3. Edit `.deploy.env`:
   - `SSH_HOST` — usually `amyash.co.uk` or your server hostname
   - `SSH_USER` — your cPanel username
   - `SSH_REMOTE_DIR` — usually `/home/USERNAME/public_html`
4. Ensure your SSH key is on the server, or be ready to enter your password when prompted.

### Publish (SSH)

```bash
chmod +x scripts/deploy-ssh.sh   # first time only
npm run deploy
```

This builds the site and rsyncs `dist/` to your server.

### Publish (FTP alternative)

```bash
npm run deploy:ftp
```

### Manual upload (FileZilla / Cyberduck)

1. Run `npm run build`
2. Connect via **SFTP** or **FTPS**
3. Upload the **contents** of `dist/` into `public_html`

**Note:** The build is ~200MB because case-study video assets are still in `public/`. The live site doesn’t use them yet, but they upload with the build. We can exclude them later to speed up deploys.

### GitHub backup

Code is at `github.com:amyash/portfolio.git`. Commit and push separately — hosting is SSH/FTP, not GitHub Pages.
