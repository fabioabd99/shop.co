import { SiX, SiFacebook, SiInstagram, SiGithub } from 'react-icons/si';

type NavLink = {
  label: string;
  href: string;
  subLinks?: { label: string; href: string }[]; // opcional — só o Shop tem
};

export const NAV_LINKS: NavLink[] = [
  {
    label: 'Shop',
    href: '/shop',
    subLinks: [
      { label: 'T-Shirts', href: '/shop/t-shirts' },
      { label: 'Shorts', href: '/shop/shorts' },
      { label: 'Shirts', href: '/shop/shirts' },
      { label: 'Hoodie', href: '/shop/hoodie' },
      { label: 'Jeans', href: '/shop/jeans' },
    ],
  },
  { label: 'On Sale', href: '/on-sale' },
  { label: 'New Arrivals', href: '/new-arrivals' },
  { label: 'Brands', href: '/brands' },
];

export const FOOTER_LINKS = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Features', href: '/features' },
      { label: 'Works', href: '/works' },
      { label: 'Career', href: '/career' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Customer Support', href: '/support' },
      { label: 'Delivery Details', href: '/delivery' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  },
  {
    title: 'FAQ',
    links: [
      { label: 'Account', href: '/faq/account' },
      { label: 'Manage Deliveries', href: '/faq/deliveries' },
      { label: 'Orders', href: '/faq/orders' },
      { label: 'Payments', href: '/faq/payments' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Free eBooks', href: '/resources/ebooks' },
      { label: 'Development Tutorial', href: '/resources/tutorials' },
      { label: 'How to - Blog', href: '/blog' },
      { label: 'Youtube Playlist', href: '/resources/youtube' },
    ],
  },
];

export const SOCIAL_LINKS = [
  { label: 'Twitter', href: 'https://twitter.com', Icon: SiX },
  { label: 'Facebook', href: 'https://facebook.com', Icon: SiFacebook },
  { label: 'Instagram', href: 'https://instagram.com', Icon: SiInstagram },
  { label: 'GitHub', href: 'https://github.com', Icon: SiGithub },
];
