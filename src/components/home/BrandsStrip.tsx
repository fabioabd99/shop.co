import Container from '@/components/ui/Container';
import Image from 'next/image';

const brands = [
  { name: 'Versace', src: '/brands/versace.svg' },
  { name: 'Zara', src: '/brands/zara.svg' },
  { name: 'Gucci', src: '/brands/gucci.svg' },
  { name: 'Prada', src: '/brands/prada.svg' },
  { name: 'Calvin Klein', src: '/brands/calvin-klein.svg' },
];

export default function BrandsStrip() {
  return (
    <section className="bg-black">
      <Container className="py-8">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-10 gap-y-6">
          {brands.map((brand) => (
            <Image
              key={brand.name}
              src={brand.src}
              alt={brand.name}
              width={120}
              height={28}
              className="h-5 md:h-7 w-auto object-contain"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
