import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-heading', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://abnexatechnologies.com'),
  title: {
    default: "Abnexa Technologies | Custom Software Development and AI Solutions",
    template: "%s | Abnexa Technologies"
  },
  description: "Abnexa Technologies builds custom software products, AI powered systems, and scalable digital platforms for businesses worldwide. MVP development, AI agents, AI automation, and technology strategy.",
  keywords: [
    "Custom Software Development",
    "MVP Development",
    "AI Agents",
    "AI Automation",
    "AI Business Solutions",
    "Custom Software Products",
    "Software Development Company",
    "AI Powered Solutions",
    "Platform Development",
    "Technology Strategy",
    "Abnexa Technologies"
  ],
  authors: [{ name: "Abnexa Technologies" }],
  openGraph: {
    title: 'Abnexa Technologies | Custom Software and AI Solutions',
    description: 'We build intelligent software products and AI powered systems for modern businesses. From MVP development to advanced AI automation.',
    siteName: 'Abnexa Technologies',
    url: 'https://abnexatechnologies.com',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Abnexa Technologies' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abnexa Technologies | Custom Software and AI Solutions',
    description: 'Building intelligent software products, AI agents, and scalable platforms for businesses globally.',
    images: ['/og-image.png'],
  },
  icons: { icon: '/favicon.png' },
  alternates: { canonical: 'https://abnexatechnologies.com' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen bg-white text-slate-900 flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Abnexa Technologies",
              "url": "https://abnexatechnologies.com",
              "logo": "https://abnexatechnologies.com/logo.png",
              "description": "Abnexa Technologies builds custom software products, AI powered systems, and scalable digital platforms for businesses worldwide.",
              "offers": {
                "@type": "Service",
                "name": "Custom Software Development and AI Solutions",
                "description": "MVP Development, AI Agents, AI Automation, AI Business Solutions, Platform Development"
              }
            }),
          }}
        />

        <Footer />
      </body>
    </html>
  );
}
