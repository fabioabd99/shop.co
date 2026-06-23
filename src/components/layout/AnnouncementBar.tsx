'use client';

import Link from 'next/link';
import { useState } from 'react';
import Container from '@/components/ui/Container';

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <section className="bg-black">
      <Container>
        <div className="relative flex items-center justify-center text-white py-3 text-sm">
          <p>
            Sign up and get 20% off to your first order.
            <Link href="/signup" className="font-bold underline pl-1">
              Sign Up Now
            </Link>
          </p>
          <button
            onClick={() => setVisible(false)}
            aria-label="Close announcement"
            className="absolute right-0 hidden md:block"
          >
            ×
          </button>
        </div>
      </Container>
    </section>
  );
}
