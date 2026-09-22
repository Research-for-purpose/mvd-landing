# MVD marketing site

Marketing, product education, installation, methodology, support, privacy, and terms pages for the Misinformation Virality Detector Chrome extension.

MVD is presented as an assessment aid—not a fact-checker or truth-detection service.

## Stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS 4 (with the project visual system defined in `app/globals.css`)
- Self-hosted Newsreader, Manrope, and IBM Plex Mono font files via Fontsource
- Static content with no CMS, analytics, email collection, or feedback form

## Local development

Requirements: Node.js 20.9 or newer (Node.js 22 recommended) and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verification

```bash
npm run check
```

## Configuration

Set `NEXT_PUBLIC_SITE_URL` to the canonical production origin, with no trailing slash. It is used for metadata, `robots.txt`, and `sitemap.xml`. On Vercel, the app automatically falls back to the project production URL (and then the preview URL), so this variable is optional until a custom domain is connected.

No analytics or collection service is configured. If one is added later, update the privacy policy and obtain any consent required before enabling it.

## Required launch checklist

Search the project for `TODO before launch` and resolve every item. In particular:

- legal owner and jurisdiction;
- public website domain;
- support and privacy email address;
- Chrome Web Store listing URL;
- content, invite, and session record-retention periods;
- deletion-request process;
- complete subprocessor list and processing locations;
- international-transfer and jurisdiction-specific legal language;
- copyright year and owner in the footer.

The visible TODO notices are intentional. They prevent the draft policy and terms from implying facts that have not been confirmed.

## Deploy to Vercel

No deployment is performed by this repository setup.

1. Import the repository into Vercel.
2. Keep the detected framework preset as **Next.js**.
3. If using a custom domain, add `NEXT_PUBLIC_SITE_URL` with the final HTTPS origin.
4. Deploy and then verify every route, `robots.txt`, and `sitemap.xml`.
5. Add the final domain, operator, contacts, retention facts, and store URL before public launch.

The Vercel build command is `npm run build`; no custom output directory is required. The repository declares its supported Node.js runtime and uses Next.js’s supported webpack builder for reliable CSS processing in restricted build environments.
