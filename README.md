# Personal Portfolio

A simple React + TypeScript + Vite portfolio with two main areas: CV and Projects.

## Requirements

- Node.js (current LTS recommended)
- Visual Studio Code
- Git (for pushing to GitHub)

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal.

## Build

```bash
npm run build
npm run preview
```

The production build is generated in `dist/`.

## Customize

1. Update your name, role and introduction in `src/data/profile.ts`.
2. Update project cards in `src/data/projects.ts`.
3. Put your CV PDF at `public/cv.pdf`.
4. Put project screenshots in `public/projects/` and update each project's `image` field.
5. Replace the example email and social links in `src/data/profile.ts`.

## Push to GitHub

Create an empty repository on GitHub, then run these commands from this folder:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the remote URL with your own repository URL.

## GitHub Pages note

If deploying to `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`, set `base` in `vite.config.ts` to `"/YOUR-REPOSITORY/"` before building. For deployment, enable GitHub Pages from the repository settings or use a deployment workflow.

Do not commit company documents, customer data, API keys, or confidential screenshots. Use only personal projects and data you have permission to publish.
