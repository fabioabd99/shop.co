import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import Navbar from '@/components/layout/Navbar';
import NewsletterSection from '@/components/layout/NewsletterSection';
import Footer from '@/components/layout/Footer';

const integralCF = localFont({
  src: [
    { path: './fonts/IntegralCF-Regular.woff2', weight: '400' },
    { path: './fonts/IntegralCF-Bold.woff2', weight: '700' },
  ],
  variable: '--font-heading',
});

const satoshi = localFont({
  src: [
    { path: './fonts/Satoshi-Regular.woff2', weight: '400' },
    { path: './fonts/Satoshi-Medium.woff2', weight: '500' },
    { path: './fonts/Satoshi-Bold.woff2', weight: '700' },
  ],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Shop.co',
  description: 'Find clothes that match your style',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${integralCF.variable} ${satoshi.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AnnouncementBar />
        <Navbar />

        <main className="flex-1">{children}</main>

        <NewsletterSection />
        <Footer />
      </body>
    </html>
  );
}
