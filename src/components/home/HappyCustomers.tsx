'use client';
import Container from '@/components/ui/Container';
import Rating from '@/components/ui/Rating';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight, BadgeCheck } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah M.',
    rating: 5,
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: 'Alex K.',
    rating: 5,
    text: 'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable.',
  },
  {
    name: 'James L.',
    rating: 5,
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but on-point with the latest trends.",
  },
  {
    name: 'Mooen M.',
    rating: 5,
    text: 'The quality of the clothes exceeded my expectations, and the customer service was top notch. Highly recommend Shop.co to everyone.',
  },
];

export default function HappyCustomers() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' });

  return (
    <section className="py-12">
      <Container>
        <div className="flex justify-between items-end md:items-center mb-8">
          <h2 className="font-heading text-4xl uppercase font-bold">
            Our Happy Customers
          </h2>
          <div className="flex gap-4">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => emblaApi?.scrollPrev()}
            >
              <ArrowLeft />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => emblaApi?.scrollNext()}
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* VIEWPORT — a janela */}
        <div className="overflow-hidden" ref={emblaRef}>
          {/* CONTAINER — a fita */}
          <div className="flex gap-5">
            {reviews.map((review) => (
              // SLIDE — cada card
              <div
                key={review.name}
                className="min-w-0 flex-[0_0_100%] md:flex-[0_0_calc(33.333%-14px)] border border-gray-200 rounded-2xl p-7"
              >
                <Rating value={review.rating} />
                <div className="flex items-center gap-1 mt-3">
                  <h3 className="font-bold">{review.name}</h3>
                  <BadgeCheck className="fill-green-500 text-white" size={20} />
                </div>
                <p className="text-gray-600 mt-3">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
