import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us | Abnexa Technologies',
  description: 'Learn about Abnexa Technologies and our mission to build intelligent software products and AI solutions for modern businesses worldwide.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 animate-fade-in-up bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Building the Future of <br />
            <span className="text-indigo-600 dark:text-indigo-400">Intelligent Software</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Abnexa Technologies is a modern technology company focused on building intelligent software systems and AI powered solutions for businesses globally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="flex flex-col items-center w-full">
            <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(79,70,229,0.1)] border border-gray-100 dark:border-gray-800">
              <div className="absolute inset-0 bg-indigo-600/10"></div>
              <Image
                src="/IMG_6714.jpg"
                alt="Founder Profile Picture"
                fill
                className="object-cover z-10"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="mt-8 text-xl md:text-2xl font-bold italic text-gray-900 dark:text-white text-center uppercase tracking-tight">
              FOUNDER Abubakr Siddiq
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
              We recognized that the traditional software development process was too slow for the modern era. Businesses need to move from idea to market in weeks, not months, and they need intelligent systems that can scale without massive overhead.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              Abnexa Technologies was built to solve this. We combine deep technical expertise with AI accelerated development to build custom software products, 30 Day MVPs, and autonomous AI agents that drive real growth and operational efficiency.
            </p>
            <Link href="/contact" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-300">
              Build with us <span className="ml-2">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
