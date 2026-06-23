import 'dotenv/config';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { PrismaClient } from '../src/generated/prisma/client';

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

const products = [
  {
    name: 'Gradient Graphic T-shirt',
    description: 'A stylish gradient print tee.',
    price: 145,
    rating: 3.5,
    category: 'Casual',
    type: 'T-shirt',
    imageUrl: '/products/1.png',
    isNewArrival: true,
  },
  {
    name: 'Polo with Tipping Details',
    description: 'Classic polo with contrast tipping.',
    price: 180,
    rating: 4.5,
    category: 'Casual',
    type: 'Shirt',
    imageUrl: '/products/2.png',
    isNewArrival: true,
  },
  {
    name: 'Black Striped T-shirt',
    description: 'Bold striped tee.',
    price: 120,
    originalPrice: 150,
    rating: 5.0,
    category: 'Casual',
    type: 'T-shirt',
    imageUrl: '/products/3.png',
    isNewArrival: true,
  },
  {
    name: 'Skinny Fit Jeans',
    description: 'Comfortable skinny fit denim.',
    price: 240,
    originalPrice: 260,
    rating: 3.5,
    category: 'Casual',
    type: 'Jeans',
    imageUrl: '/products/4.png',
    isNewArrival: true,
  },
  {
    name: 'Checkered Shirt',
    description: 'Red checkered casual shirt.',
    price: 180,
    rating: 4.5,
    category: 'Casual',
    type: 'Shirt',
    imageUrl: '/products/5.png',
    isTopSelling: true,
  },
  {
    name: 'Sleeve Striped T-shirt',
    description: 'Striped tee with contrast sleeves.',
    price: 130,
    originalPrice: 160,
    rating: 4.5,
    category: 'Casual',
    type: 'T-shirt',
    imageUrl: '/products/6.png',
    isTopSelling: true,
  },
  {
    name: 'Vertical Striped Shirt',
    description: 'Elegant vertical stripes.',
    price: 212,
    originalPrice: 232,
    rating: 5.0,
    category: 'Formal',
    type: 'Shirt',
    imageUrl: '/products/7.png',
    isTopSelling: true,
  },
  {
    name: 'Courage Graphic T-shirt',
    description: 'Graphic print statement tee.',
    price: 145,
    rating: 4.0,
    category: 'Casual',
    type: 'T-shirt',
    imageUrl: '/products/8.png',
    isTopSelling: true,
  },
  {
    name: 'Loose Fit Bermuda Shorts',
    description: 'Relaxed denim shorts.',
    price: 80,
    rating: 3.0,
    category: 'Casual',
    type: 'Shorts',
    imageUrl: '/products/9.png',
    isTopSelling: true,
  },
  {
    name: 'One Life Graphic T-shirt',
    description: 'Crafted from soft cotton.',
    price: 260,
    originalPrice: 300,
    rating: 4.5,
    category: 'Casual',
    type: 'T-shirt',
    imageUrl: '/products/10.png',
    isNewArrival: true,
  },
];

async function main() {
  await prisma.product.deleteMany();
  await prisma.product.createMany({ data: products });
  console.log(`✅ Seeded ${products.length} products`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
