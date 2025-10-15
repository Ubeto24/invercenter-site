InverCenter USA, Inc. — React + Vite + Tailwind

Overview
- Stack: React 18, Vite, TailwindCSS, React Router, react-i18next, Headless UI, Lucide, Framer Motion, Helmet (SEO)
- Locales: Spanish (default) and English; Portuguese-ready
- Identity: Corporate blue/white, rounded-xl, soft shadow, grid layouts

Getting Started
1) Install dependencies
   npm i

2) Run dev server
   npm run dev

3) Build
   npm run build

4) Preview build
   npm run preview

Environment
- Copy .env.example to .env and set VITE_CONTACT_ENDPOINT if not using Netlify Forms.
- Netlify Forms works out-of-the-box via data-netlify attributes.

Project Structure
- index.html — base HTML (lang="es", PWA manifest)
- src/ — application source
  - main.jsx — app bootstrap (Router, i18n, Helmet)
  - App.jsx — layout and routes
  - i18n.js — i18next init
  - styles/tailwind.css — Tailwind layers and utilities
  - components/ — UI components (Header, Footer, Hero, Section, etc.)
  - pages/ — routed pages (Home, Services, Solutions, About, Insights, Contact, NotFound)
  - content/ — structured demo data (services, solutions, testimonials)
  - assets/ — logo and placeholders
- locales/ — es.json, en.json with all copy keys
- public/manifest.webmanifest — basic PWA manifest

Design & Accessibility
- Colors: #0A3D91 (primary), #1E40AF (secondary), #2563EB (accent)
- AA contrast, focus-visible, aria labels, semantic landmarks
- Lazy iframes and images (where applicable); Helmet for titles/descriptions

Deploy (Netlify/Vercel)
- Netlify: Push repo, set build command "npm run build" and publish directory "dist". Netlify Forms enabled by default.
- Vercel: Import project, framework auto-detected (Vite), build output "dist".

Manual deploy (Netlify CLI)
- Configuración inicial (una sola vez):
  - `npm run deploy:login` para autenticarte en Netlify.
  - `npm run deploy:link` para vincular este repo con tu sitio en Netlify.
- Despliegue de vista previa (no producción):
  - `npm run deploy:preview` (construye y publica `dist/` como deploy de preview).
- Despliegue a producción bajo demanda:
  - `npm run deploy:prod` (construye y publica `dist/` en producción).

Notas
- El archivo `netlify.toml` está configurado para saltar builds automáticos en pushes.
- Con Netlify CLI los despliegues publican directamente la carpeta `dist` sin usar CI.

Deploy (GitHub Pages)
- Base path:
  - Si publicas en user/organization site (usuario.github.io): deja `base: '/'` en vite.config.js.
  - Si publicas como project page (usuario.github.io/REPO): cambia `base` a `'/REPO/'`.
- Workflow incluido: .github/workflows/deploy.yml
  1) Crea el repo en GitHub y sube el código (rama main)
  2) En Settings → Pages, selecciona “Source: GitHub Actions”
  3) El workflow construye `dist` y lo despliega automáticamente en cada push a main
- Archivo `public/_redirects` y `public/_headers` no afectan GitHub Pages (se ignoran), pero no interfieren con el build.

Notes
- Replace placeholder images in src/assets/ as needed.
- For PT locale, duplicate en.json as pt.json and translate; register in i18n.js.
