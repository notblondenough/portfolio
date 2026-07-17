# Alok Ranjan Shukla — portfolio

Personal portfolio for Alok Ranjan Shukla, software engineer, Bengaluru.
Next.js (App Router) + TypeScript + plain CSS Modules. Deploys to Vercel with zero config.

## Design rationale — *Paris, Texas* (1984)

The site is art-directed around the mood of Wim Wenders' *Paris, Texas* and Robby Müller's cinematography: sun-bleached highway, motel neon against dusk, telephone poles against a big empty sky. No film assets are used anywhere — the theme is carried entirely by color, type, layout, and a few original SVG/CSS devices.

**The signature device** is the home page itself: one day on the road. The scroll runs noon → night. The hero sits in overexposed daylight (`--glare`, `--bone`); the work history crosses late afternoon into golden hour (`--sand`, `--gold`); a wordless sunset band — the only pictorial moment, an original telephone-pole silhouette (`components/Horizon.tsx`) against a sunset-to-indigo gradient — carries you into dusk; projects sit in dusk with the first neon; the contact form waits at full night under a motel sign. Sub-pages hold a fixed hour: `/projects` at dusk, `/journal` at night.

**Palette** — every color is a grading decision, not a brand color (see `app/globals.css`):
sun-bleached warm whites that are never pure white; golden-hour ambers (`--sunset #e8863a`, `--ember #c4502c`); indigo — not gray — darks (`--dusk`, `--night`, `--asphalt`); and two neons used at most once per dark section: motel-vacancy red `#ff4f58` and fluorescent green `#3fe0b0`, the two lights Müller kept setting against blue dusk.

**Type**:
- **Overpass** (headings, nav) — descends directly from Highway Gothic, the US road-signage typeface. Every heading is literally set in the letters of the interstate.
- **Source Serif 4** (body) — the register of a letter read aloud on a long drive; carries readability.
- **Overpass Mono** (dates, kickers, mile markers) — keeps the signage family consistent.

**Motifs**, each grounded in the film rather than generic western tropes: the experience timeline is a road log strung on a dashed highway center-line with mono mile-marker date chips; competitive-programming ratings are roadside route shields; project cards are postcards (card stock, airmail edge, dashed postage-stamp date) — Travis carried a photograph of an empty lot, these carry commits; the contact header is an original neon **VACANCY / open to interesting work** sign; a near-invisible SVG film-grain overlay sits over everything.

**Motion** is Ry Cooder pacing: slow, sparse fade-ups (1.1s, gentle easing) via IntersectionObserver, and a 7-second neon "hum". All of it — including smooth scrolling — is disabled under `prefers-reduced-motion`. Content is visible without JavaScript.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (what Vercel runs)
```

> Note: `.npmrc` in this folder pins the public npm registry (the machine's global config points at a private one).

## Deploying

Push to a Git remote and import the repo at [vercel.com/new](https://vercel.com/new) — no configuration needed. After the first deploy, update `site.url` in `content/site.ts` so canonical/OG URLs are correct.

## Editing content

All copy lives in data files, not JSX:

- `content/site.ts` — name, tagline, email, social links
- `content/experience.ts` — roles and education
- `content/projects.ts` — projects with GitHub/live URLs
- `content/skills.ts`, `content/achievements.ts`
- `content/journal/*.md` — journal posts (markdown + frontmatter: `title`, `date`, `summary`, optional `sample: true`). The shipped post is a clearly-marked sample; delete it when real posts exist.

## Contact form

`app/api/contact/route.ts` validates and logs submissions (visible in Vercel function logs) but does not deliver mail yet. To wire it up, swap the `console.log` for a provider call — e.g. [Resend](https://resend.com) (`await resend.emails.send(...)`) or point the form at a [Formspree](https://formspree.io) endpoint. The mailto link in the footer works regardless.

## Accessibility

Skip-to-content link, semantic landmarks, visible neon-green `:focus-visible` rings, keyboard-reachable everything, `aria-live` form status, reduced-motion respected throughout, AA-checked text/background pairs.
