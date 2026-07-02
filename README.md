# catsu-site

Landing page for **Catsu** — the world's first living card game — served at
[catsugame.com](https://catsugame.com).

Built with Next.js 16 (App Router) + next-intl + Tailwind v4, following the same
architecture as `icatstudios-site`. Deployed on Vercel from GitHub
(`icatstudios/catsu-site`).

## Develop

```bash
npm install
npm run dev
# http://localhost:3000  → redirects to /en
```

## Structure

- `src/app/[locale]/page.tsx` — the mystery teaser (logo, tagline, "coming soon").
- `src/i18n/routing.ts` — the 19 supported locales (mirrors icatstudios-site).
- `messages/<locale>.json` — translated strings (`meta` + `teaser`).
- `src/components/LanguageSwitcher.tsx` — flag/native-name locale menu.
- `public/catsu-logo.png` — brand logo.

## Add a language

1. Add the code to `locales` in `src/i18n/routing.ts` (plus `localeNames` /
   `localeFlags`, and `rtlLocales` if right-to-left).
2. Create `messages/<code>.json`.

## Deploy

Push to `main` → Vercel builds and deploys automatically. Set the production
domain to `catsugame.com` in the Vercel project settings.
