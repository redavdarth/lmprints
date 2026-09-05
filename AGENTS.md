# LM Prints — Base44 dev environment

## What this is
A React + Vite single-page app for "LM Prints" printing services, converted from the
original Canva-exported static HTML (`lmprints.html`, kept for reference). Uses
Tailwind CSS v3, lucide-react icons, and the Poppins font from Google Fonts.

## Project structure
- `src/App.jsx` — composes the page sections
- `src/components/` — Navbar, Hero, Services, Pricing, CTA, Contact, Footer, Reveal
- `src/index.css` — Tailwind directives + all custom CSS (gradients, animations, etc.)
- `public/lm-prints-logo.png` — logo served at `/lm-prints-logo.png`
- `index.html` — Vite entry, loads Google Fonts

## Running it
`docker compose -f docker-compose.base44.yml up -d` — a `node:22-alpine` container
installs deps and runs `vite --host 0.0.0.0` (dev server with HMR) on host port 3000.
Source is bind-mounted, so edits hot-reload live.

## Verifying
`curl -sf -H "Host: external-preview.example.com" http://localhost:3000/` should
return the Vite HTML shell (HTTP 200). In the preview, confirm all sections render:
hero (#home), services (#services), pricing (#pricing with 4 price cards), CTA, and
contact (#contact), plus the footer.

## Secrets
None required — fully static frontend, no external service credentials.
