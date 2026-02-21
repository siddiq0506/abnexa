import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us | Abnexa Technologies',
  description: 'Learn about Abnexa Technologies and our mission to digitize and optimize the construction industry through cutting edge ERP software.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 animate-fade-in-up bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Building the Future of <br />
            <span className="text-blue-600 dark:text-blue-400">Construction Technology</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Abnexa Technologies is on a mission to bring true digital transformation to contractors and enterprises, eliminating inefficiencies through intelligent software.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="flex flex-col items-center w-full">
            <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border border-gray-100 dark:border-gray-800">
              <div className="absolute inset-0 bg-blue-600/10"></div>
              <Image
                src="/IMG_6714.jpg"
                alt="Founder Profile Picture"
                fill
                className="object-cover z-10"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="mt-8 text-xl md:text-2xl font-bold italic text-gray-900 dark:text-white text-center">
              FOUNDER - Abubakr Siddiq
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
              We recognized a critical gap in the construction industry: while buildings were being erected using state of the art physical engineering, the internal operations were still running on disjointed spreadsheets and legacy systems.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              ConstructOS was born to bridge this gap. We provide a seamless, robust, and highly scalable ERP that connects the job site to the boardroom, ensuring real time visibility and unparalleled efficiency.
            </p>
            <Link href="/contact" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300">
              Join our journey <span className="ml-2">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
