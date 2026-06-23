import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { Mail } from 'lucide-react';

export default function NewsletterSection() {
  return (
    <section className="py-9 bg-linear-to-b from-white from-50% to-surface to-50%">
      <Container>
        <div className="bg-black text-white rounded-2xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase max-w-lg">
            Stay upto date about our latest offers
          </h2>

          <div className="flex flex-col gap-3 w-full md:w-auto">
            <div className="flex items-center gap-3 bg-white text-black rounded-full px-4 py-3">
              <Mail size={20} />
              <input
                type="email"
                placeholder="Enter your email address"
                aria-label="Email address"
                className="bg-transparent outline-none text-sm w-64"
              />
            </div>
            <Button variant="secondary">Subscribe to Newsletter</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
