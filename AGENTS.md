# LM Prints — Base44 dev environment

## What this is
A single static HTML page (`lmprints.html`) exported from Canva, plus a logo image
(`lm-prints-logo.png`). No build step, no backend, no dependencies to install.

## Running it
`docker compose -f docker-compose.base44.yml up -d` — nginx:alpine serves the repo
root on host port 3000. Source is bind-mounted read-only, so edits appear on reload
(call `reload_preview` after editing — there is no live-reload dev server for static
HTML).

## Quirks
- The repo root dir is `drwx------` (700), so the default nginx worker user can't
  read it → 403. `nginx.base44.conf` sets `user root;` to work around this.
- `lmprints.html` references `/_sdk/*.js` (Canva editor SDKs) which 404 harmlessly —
  they are not needed to display the page.
- Tailwind, Lucide icons, and Google Fonts load from public CDNs, so the sandbox
  needs outbound internet access to render fully.
- The `<img>` for the logo has a duplicate `src` attribute; browsers use the first
  (`lm-prints-logo.png`, at the repo root), which exists.

## Verifying
`curl -sf -H "Host: external-preview.example.com" http://localhost:3000/` should
return the page (HTTP 200) with `<title>LM Prints | Printing Services</title>`.

## Secrets
None required — fully static, no external service credentials.
