# Apex Homewares — static Next.js site

## Run locally

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`.

## Update business information

Edit `src/data/site.ts` for the company name, email, WhatsApp number, and address.

## Manage products without a database

Edit `src/data/products.ts`. Each product is one object. Duplicate an object to add a product, use a unique `slug`, and change `image`, `name`, `description`, `moq`, `price`, and `specs`.

`/admin` is an on-site visual reference to the current product data and the editing procedure. It deliberately has no login or write API, so the deployed project remains completely static and server-free.

## Build static files

```powershell
npm run build
```

Next.js writes deployable static files to `out/`.

## Deploy to GitHub

Create a new empty GitHub repository first, then run (replace the URL):

```powershell
git add .
git commit -m "Initial static B2B appliance website"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/apex-homewares-next.git
git push -u origin main
```

## Deploy to Vercel

1. Sign in at https://vercel.com, select **Add New → Project**, and import this GitHub repository.
2. Vercel detects Next.js automatically. Keep the default build command `next build` and deploy.
3. Every future `git push` automatically publishes an update.

Or, with the Vercel CLI:

```powershell
npm install -g vercel
vercel --prod
```

This project uses `output: 'export'`; it needs no database or server.
