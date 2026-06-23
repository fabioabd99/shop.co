import Container from '@/components/ui/Container';
import { FOOTER_LINKS, SOCIAL_LINKS } from '@/lib/constants';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 py-12">
          <div className=" col-span-2">
            <h2 className="font-heading font-bold text-2xl">SHOP.CO</h2>
            <p className="text-sm text-gray-600 mt-4 max-w-xs">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex gap-3 mt-6">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-black transition-colors"
                >
                  <social.Icon
                    className="text-black group-hover:text-white transition-colors"
                    size={16}
                  />
                </Link>
              ))}
            </div>
          </div>
          {FOOTER_LINKS.map((column) => (
            <div key={column.title}>
              <h3 className="font-medium uppercase tracking-wider text-sm mb-4">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="opacity-60 hover:opacity-100 transition-opacity"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-300 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          {/* ícones de pagamento */}
        </div>
      </Container>
    </footer>
  );
}
