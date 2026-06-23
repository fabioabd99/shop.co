import ProductCard from '@/components/product/ProductCard';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { Product } from '@/generated/prisma/client';

type ProductSectionProps = {
  title: string;
  products: Product[];
};

export default function ProductSection({
  title,
  products,
}: ProductSectionProps) {
  return (
    <section className="py-16">
      <Container>
        <h2 className="font-heading font-bold text-4xl text-center uppercase mb-10">
          {title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center mt-9">
          <Button variant="secondary">View All</Button>
        </div>
      </Container>
    </section>
  );
}
