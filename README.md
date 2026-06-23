# SHOP.CO

A full-stack e-commerce storefront built from a Figma design. This is a learning project focused on translating a real design into production-quality code — from design tokens all the way to a database-backed product catalog.

🎨 **Design:** [SHOP.CO E-commerce Template (Figma Community)](https://www.figma.com/design/T7jUpSPpuFXoXeKFzThY2I/E-commerce-Website-Template--Freebie---Community-?node-id=0-1)

## Tech Stack

| Area | Technology |
|------|-----------|
| Framework | [Next.js 16](https://nextjs.org) (App Router) + React 19 |
| Language | TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) (design tokens via `@theme`) |
| Database | [Prisma 7](https://www.prisma.io) ORM + SQLite (`better-sqlite3` driver adapter) |
| Carousel | [Embla Carousel](https://www.embla-carousel.com) |
| Icons | [lucide-react](https://lucide.dev) (UI) + [react-icons](https://react-icons.github.io/react-icons) (brand logos) |
| Fonts | Integral CF + Satoshi (self-hosted via `next/font/local`) |
| Utilities | `clsx` + `tailwind-merge` (`cn()` helper) |

## Features

- **Design system** — centralized color and font tokens, reusable `Button`, `Container` and `Rating` components
- **Shared layout** — announcement bar, responsive navbar with dropdown, newsletter banner, footer
- **Homepage** (data-driven from the database):
  - Hero section
  - Brand strip
  - New Arrivals & Top Selling (queried with `where` / `orderBy` / `take`)
  - Browse by Dress Style (asymmetric CSS grid)
  - Happy Customers (Embla carousel)
- **Product detail page** — dynamic route `/product/[id]` *(in progress)*
- Fully responsive (mobile-first)

## Getting Started

### Prerequisites

- Node.js 22+ (the project uses Node 24)
- npm

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Create the environment file
echo 'DATABASE_URL="file:./dev.db"' > .env

# 3. Set up the database (creates dev.db and runs the migration)
npx prisma migrate dev

# 4. Seed the database with sample products
npx prisma db seed

# 5. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Note:** the database (`dev.db`) and `.env` are intentionally **not** committed — each environment generates its own. The schema and migrations in `prisma/` are the reproducible source of truth.

## Project Structure

```
src/
  app/                  # routes (App Router)
    fonts/              # local font files
    product/[id]/       # dynamic product detail route
    layout.tsx          # root layout (shared across pages)
    page.tsx            # homepage
    globals.css         # Tailwind import + design tokens
  components/
    layout/             # Navbar, Footer, AnnouncementBar, Newsletter
    home/               # homepage sections (Hero, BrandsStrip, ...)
    product/            # ProductCard, ProductSection
    ui/                 # reusable primitives (Button, Container, Rating)
  lib/
    prisma.ts           # Prisma client singleton
    constants.ts        # navigation, footer and social link data
    utils.ts            # cn() helper
prisma/
  schema.prisma         # database schema (source of truth)
  migrations/           # versioned database migrations
  seed.ts               # sample product data
```

## Roadmap

- [ ] Product detail page: image gallery, color/size variants, reviews
- [ ] Category page with filters
- [ ] Shopping cart
- [ ] Database relations (`ProductImage`, `Review`)

## License

This project is for educational purposes. The design belongs to its original authors on Figma Community.
