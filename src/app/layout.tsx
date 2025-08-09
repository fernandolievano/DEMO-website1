import AppProvider from '@/contexts/AppContext';
import type { ChildrenInterface } from '@/interfaces/general';
import { inter } from '@/utils/fonts';
import './globals.css';
import { NotFoundProvider } from '@/contexts/404Context';
import { Metadata } from 'next';
import Script from 'next/script';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
const baseURl = 'https://demo-hotel.vercel.app'; // TODO: change later

export const metadata: Metadata = {
  title: 'DEMO Hotel',
  description: 'A peaceful retreat where nature’s beauty meets exceptional service — every moment of your stay is designed to inspire rest and pleasure.',
  metadataBase: new URL(baseURl),
  openGraph: {
    title: 'DEMO Hotel',
    url: baseURl,
    siteName: 'DEMO Hotel',
    locale: 'en_EN',
    type: 'website',
    description:
      'A peaceful retreat where nature’s beauty meets exceptional service — every moment of your stay is designed to inspire rest and pleasure.',
    images: [
      {
        url: `${baseURl}/images/home/home-demo-1.webp`,
        width: 1200,
        height: 628,
        alt: 'DEMO Hotel'
      }
    ]
  }
};

export default function RootLayout({ children }: ChildrenInterface) {
  return (
    <html>
      <head>
        <Script
          src="https://kit.fontawesome.com/e9eb1278c5.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`antialiased ${inter} relative`}>
        <AppProvider>
          <NotFoundProvider>
            <Navbar />
            {children}
            <Footer />
          </NotFoundProvider>
        </AppProvider>
      </body>
    </html>
  );
}
