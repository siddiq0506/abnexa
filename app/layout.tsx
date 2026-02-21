import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://abnexatechnologies.in'),
  title: {
    default: "ConstructOS by Abnexa | Premium Construction ERP for Contractors",
    template: "%s | ConstructOS Construction ERP"
  },
  description: "Advanced modern ERP built specifically for contractors. Protect margins, control costs, and gain real-time financial visibility with ConstructOS Construction ERP.",
  keywords: ["Construction ERP", "ERP for Construction", "ERP for Contractors", "Construction Management Software", "Abnexa Technologies", "ConstructOS", "Margin Protection", "Construction Accounting", "BOQ Management"],
  authors: [{ name: "Abnexa Technologies" }],
  openGraph: {
    title: 'ConstructOS | Advanced Construction ERP',
    description: 'Built to protect margins and deliver total control for modern contractors. Real-time financial visibility, HRMS, and BOQ intelligence.',
    siteName: 'Abnexa Technologies',
    url: 'https://abnexatechnologies.in',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'ConstructOS by Abnexa Technologies - Construction ERP Interface',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ConstructOS | Modern Construction ERP',
    description: 'Stop relying on spreadsheets. Scale your contracting business with intelligent, cloud-native ERP capabilities perfectly tailored for modern projects.',
    images: ['/logo.png'],
  },
  icons: {
    icon: '/favicon.png', // Assuming favicon.png exists in public
  },
  alternates: {
    canonical: 'https://abnexatechnologies.in',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>

        {/* Organization JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "ConstructOS by Abnexa Technologies",
              "applicationCategory": "Enterprise Resource Planning (ERP)",
              "operatingSystem": "Cloud/Web",
              "url": "https://abnexatechnologies.in",
              "image": "https://abnexatechnologies.in/logo.png",
              "description": "ConstructOS is an advanced modern Construction ERP built specifically for contractors to protect margins, control costs, and provide real-time financial visibility.",
              "author": {
                "@type": "Organization",
                "name": "Abnexa Technologies",
                "url": "https://abnexatechnologies.in"
              },
              "offers": {
                "@type": "Offer",
                "category": "B2B SaaS"
              }
            }),
          }}
        />

        {/* Footer Placeholder */}
        <footer className="bg-white border-t border-gray-100 py-12 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div className="mb-4 md:mb-0">
              © {new Date().getFullYear()} Abnexa Technologies. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="/about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="/products" className="hover:text-blue-600 transition-colors">Products</a>
              <a href="/contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
