import Link from 'next/link';
import Container from '@/components/ui/Container';
import { Menu, Search, ShoppingCart, User } from 'lucide-react';
import NavLinks from '@/components/layout/NavLinks';

export default function Navbar() {
  return (
    <header className="border-b border-surface">
      <Container>
        <nav className="flex items-center justify-between h-16">
          {/* Mobile: hamburger (escondido em desktop) */}
          <button className="md:hidden" type="button" aria-label="Open menu">
            <Menu />
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="font-heading font-bold text-xl tracking-widest"
          >
            SHOP.CO
          </Link>

          {/* Links — escondidos em mobile */}
          <NavLinks className="hidden md:flex" />

          {/* Search bar — escondida em mobile */}
          <div className="hidden md:flex items-center gap-2 bg-surface rounded-full px-4 py-2 w-80">
            <Search size={18} className="text-gray-400 shrink-0" />
            <input
              placeholder="Search for products..."
              aria-label="Search products"
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          {/* Ícones — sempre visíveis */}
          <div className="flex gap-3">
            <ShoppingCart />
            <User />
          </div>
        </nav>
      </Container>
    </header>
  );
}
