# SHANWU B2B Home Appliance Website

Static Next.js website for Ningbo Shanwu Technology Co., Ltd. The project exports plain static files to `out/` and requires no application server or database.

## Local development

```powershell
npm.cmd install
npm.cmd run dev
```

Open `http://localhost:3000/`.

## Production build

```powershell
npm.cmd run build
```

The static export is written to `out/`.

## Business information

Edit `src/data/site.ts` to update:

- company name;
- business email;
- WhatsApp number;
- office address;
- production website URL (`baseUrl`).

After connecting a custom domain, update `baseUrl` and rebuild so canonical URLs, sitemap, robots and form redirects use the new domain.

## Product management

- Main products: `src/data/products.ts`
- Personal-care catalogue: `src/data/personal-care-products.ts`
- Product images: `public/`

Each product requires a unique `slug`, English name, category, image, description, MOQ, price text and specification list. Spanish and Arabic translations are optional per product.

## Inquiry form

The static form uses FormSubmit and sends enquiries to the email in `src/data/site.ts`. The recipient must confirm the one-time FormSubmit activation email after the first live test submission.

## SEO

- Global metadata and Organization JSON-LD: `src/app/layout.tsx`
- Product metadata and Product JSON-LD: `src/app/products/[slug]/page.tsx`
- Robots: `src/app/robots.ts`
- Sitemap: `src/app/sitemap.ts`
- Full Chinese handoff guide: `docs/WEBSITE-SEO-GROWTH-HANDOFF-ZH.md`

## Deploy to Vercel

Push to the connected GitHub `main` branch. Vercel builds and deploys automatically.
