import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-heading', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://abnexatechnologies.in'),
  title: {
    default: "Abnexa Technologies | MVP Development and AI Solutions",
    template: "%s | Abnexa Technologies"
  },
  description: "Build your MVP in 14 days and scale your business with AI powered systems and automation. Abnexa Technologies delivers high quality software for serious businesses.",
  keywords: [
    "MVP development company",
    "build MVP in 14 days",
    "AI automation for business",
    "AI solutions company",
    "custom software MVP",
    "Rapid Prototyping",
    "AI Agents",
    "AI Growth Systems",
    "Abnexa Technologies"
  ],
  authors: [{ name: "Abnexa Technologies" }],
  openGraph: {
    title: 'Abnexa Technologies | MVP Development and AI Solutions',
    description: 'Build your MVP in 14 days and automate your business with AI systems. High quality software products for modern founders.',
    siteName: 'Abnexa Technologies',
    url: 'https://abnexatechnologies.in',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Abnexa Technologies' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abnexa Technologies | MVP Development and AI Solutions',
    description: 'Build your MVP in 14 days and automate your business with AI systems.',
    images: ['/og-image.png'],
  },
  icons: { icon: '/favicon.png' },
  alternates: { canonical: 'https://abnexatechnologies.in' }
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
              "@type": "SoftwareCompany",
              "name": "Abnexa Technologies",
              "url": "https://abnexatechnologies.in",
              "logo": "https://abnexatechnologies.in/logo.png",
              "description": "Abnexa Technologies is an MVP development and AI solutions company helping businesses build products and automate growth in record time.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "offers": {
                "@type": "Service",
                "name": "MVP Development and AI Solutions",
                "description": "14 Day MVP Development, AI Agents, AI Automation, AI Growth Systems"
              }
            }),
          }}
        />

        <Footer />
      </body>
    </html>
  );
}
