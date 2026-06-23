import Container from '@/components/ui/Container';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const styles = [
  {
    name: 'Casual',
    href: '/shop/casual',
    src: '/styles/casual.png',
    span: 'md:col-span-1',
  },
  {
    name: 'Formal',
    href: '/shop/formal',
    src: '/styles/formal.png',
    span: 'md:col-span-2',
  },
  {
    name: 'Party',
    href: '/shop/party',
    src: '/styles/party.png',
    span: 'md:col-span-2',
  },
  {
    name: 'Gym',
    href: '/shop/gym',
    src: '/styles/gym.png',
    span: 'md:col-span-1',
  },
];

export default function DressStyle() {
  return (
    <section className="py-12">
      <Container>
        <div className="bg-surface rounded-[20px] md:rounded-[40px] p-6 md:p-16">
          <h2 className="font-heading text-4xl text-center uppercase mb-10 font-bold">
            Browse by dress style
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {styles.map((style) => (
              <Link
                key={style.name}
                href={style.href}
                className={cn(
                  'relative h-48 md:h-72 rounded-2xl overflow-hidden bg-white',
                  style.span
                )}
              >
                <Image
                  src={style.src}
                  alt={style.name}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-5 left-6 text-2xl font-bold">
                  {style.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
