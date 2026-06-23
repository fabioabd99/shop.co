'use client';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface NavLinksProps {
  className?: string;
}

export default function NavLinks({ className }: NavLinksProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <ul className={cn('flex gap-6', className)}>
      {NAV_LINKS.map((link) => (
        <li
          key={link.href}
          onMouseEnter={() => setOpenDropdown(link.label)}
          onMouseLeave={() => setOpenDropdown(null)}
          className="relative flex items-center gap-1"
        >
          {link.subLinks ? (
            // é um dropdown — usa button
            <button
              className="flex items-center gap-1"
              type="button"
              aria-expanded={openDropdown === link.label}
            >
              {link.label}
              <ChevronDown
                size={16}
                className={cn(
                  'transition-transform duration-200',
                  openDropdown === link.label && 'rotate-180'
                )}
              />
            </button>
          ) : (
            // é um link normal
            <Link href={link.href}>{link.label}</Link>
          )}
          {link.subLinks && openDropdown === link.label && (
            <div className="absolute top-full left-0 pt-2">
              <ul className="min-w-40 bg-white border border-surface rounded-lg shadow-lg py-1 z-50">
                {link.subLinks.map((sub) => (
                  <li key={sub.href}>
                    <Link
                      href={sub.href}
                      className="block px-4 py-2 hover:bg-surface"
                    >
                      {sub.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
