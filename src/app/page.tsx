import BrandsStrip from '@/components/home/BrandsStrip';
import DressStyle from '@/components/home/DressStyle';
import HappyCustomers from '@/components/home/HappyCustomers';
import Hero from '@/components/home/Hero';
import ProductSection from '@/components/product/ProductSection';
import Container from '@/components/ui/Container';
import { prisma } from '@/lib/prisma';

export default async function Home() {
  const newArrivals = await prisma.product.findMany({
    where: { isNewArrival: true },
    orderBy: { createdAt: 'desc' },
    take: 4,
  });

  const topSelling = await prisma.product.findMany({
    where: { isTopSelling: true },
    orderBy: { createdAt: 'desc' },
    take: 4,
  });

  return (
    <>
      <Hero />
      <BrandsStrip />
      <ProductSection title="New Arrivals" products={newArrivals} />
      <Container>
        <hr className="border-gray-200" />
      </Container>
      <ProductSection title="Top Selling" products={topSelling} />
      <DressStyle />
      <HappyCustomers />
    </>
  );
}
