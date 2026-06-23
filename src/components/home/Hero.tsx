import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Image from 'next/image';

export default function Hero() {
  const stats = [
    { value: '200+', label: 'International Brands' },
    { value: '2,000+', label: 'High-Quality Products' },
    { value: '30,000+', label: 'Happy Customers' },
  ];

  return (
    <section className="bg-surface">
      <Container>
        <div className="grid md:grid-cols-2">
          <div className="py-7 md:py-16">
            <h1 className="font-heading font-bold text-4xl md:text-6xl leading-tight">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-base text-gray-600 mt-5 md:mt-9">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>

            <Button className="w-full md:w-auto mt-6 md:mt-9">Shop Now</Button>

            <div className="flex flex-wrap justify-center md:justify-start md:divide-x divide-gray-300 mt-8 text-center md:text-left">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="w-1/2 md:w-auto px-4 md:px-8 mb-4 md:mb-0 md:first:pl-0"
                >
                  <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-100 md:h-auto">
            <Image
              src="/hero.png"
              alt="Casal com roupa em destaque"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
