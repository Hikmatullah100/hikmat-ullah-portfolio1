# Hikmat Ullah — Web Developer Portfolio

## Requirements
- Node.js 20.19.0 or newer (Node.js 22 LTS recommended)
- npm

## Run locally (Windows / VS Code)

1. Extract this ZIP into a folder whose path does **not** contain `;` (semicolon). Example:
   `D:\MyPortfolio\hikmat-ullah-web-developer-portfolio`
2. Open that folder in VS Code (`File` → `Open Folder`).
3. Open the VS Code terminal and run:

   ```powershell
   npm install
   ```

   If npm reports that install scripts are awaiting approval, run:

   ```powershell
   npm install-scripts approve esbuild
   npm install
   ```

4. Start the frontend development server:

   ```powershell
   npm run dev
   ```

5. Open the localhost URL printed by Vite (usually `http://localhost:5173`).

## Production build

```powershell
npm run build
npm run preview
```

The production website files are generated in `dist/`.

## Optional Express API server

The `dev` command runs the Vite frontend. The optional Express server is available with:

```powershell
npm run dev:server
```

The contact form uses the Formspree endpoint when `VITE_FORMSPREE_ENDPOINT` is configured. Set it in a local `.env` file (copy `.env.example` and add your own endpoint). Do not commit secrets.

## GitHub upload

```powershell
git init
git add .
git commit -m "Initial portfolio upload"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/hikmat-ullah-portfolio.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.
