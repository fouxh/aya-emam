# Aya Emam

Personal real-estate consulting website for Aya Emam — a premium, advisory-led landing page rather than a property portal.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Resend for contact form delivery

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Set the following in `.env.local` before the contact form can deliver email:

```
CONTACT_EMAIL=
FROM_EMAIL=
RESEND_API_KEY=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Content

All first-version copy lives in `data/`. Empty contact and social fields are intentional placeholders. Do not invent unverified biography.

Portrait files in `public/images/aya/` are placeholders until final photography is available.
