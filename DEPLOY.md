# Deploying to GitHub Pages

Target repo: **https://github.com/mzayaan/My-Portfolio**
Live URL once deployed: **https://mzayaan.github.io/My-Portfolio/**

Everything needed is already in the project — `.github/workflows/deploy.yml` builds and publishes on every push to `main`, and `vite.config.ts` picks up the right base path automatically.

## One-time setup

### 1. Push the code

Open a terminal in `C:\Users\user\Documents\Project\Portfolio` and run:

```bash
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/mzayaan/My-Portfolio.git
git push -u origin main
```

If the repo already has commits and Git refuses the push, pull first:

```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### 2. Turn on Pages

On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

That's it. The workflow runs on the push you just made — watch it under the **Actions** tab. First run takes about a minute, then the site is live at https://mzayaan.github.io/My-Portfolio/

## Every time after

```bash
git add .
git commit -m "what changed"
git push
```

The site rebuilds and redeploys itself.

## Notes

- **Do not commit `node_modules`** — `.gitignore` already covers it, along with `dist`.
- **Base path** is handled for you. The workflow detects the repo name and builds with `VITE_BASE=/My-Portfolio/`. If you ever rename the repo to `mzayaan.github.io`, it switches to `/` on its own and the site moves to https://mzayaan.github.io — no code change needed.
- **Asset paths** go through `asset()` in `src/lib/asset.ts`, so images resolve correctly under the subpath. Use it for any new file you add to `public/`:
  ```ts
  import { asset } from '../lib/asset';
  <img src={asset('my-image.png')} />
  ```
- **Custom domain** (optional): add it under Settings → Pages, then create a `public/CNAME` file containing just the domain.
- **Build failing?** Run `npm run build` locally first — the same command runs in CI, so anything that breaks there breaks here.
