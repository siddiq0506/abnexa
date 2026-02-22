import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "ConstructOS vs Other ERP Solutions | Detailed Feature Matrix",
    description: "How ConstructOS stacks up against major competitors in the construction ERP market. Feature by feature comparison.",
};

export default function CompareConstructOSPage() {
    return (
        <div className="flex flex-col min-h-screen pt-20 bg-white dark:bg-gray-950">
            <nav className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-500">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                    <li><span className="mx-2">/</span></li>
                    <li><Link href="/resources" className="hover:text-blue-600">Resources</Link></li>
                    <li><span className="mx-2">/</span></li>
                    <li className="font-medium text-gray-900">ConstructOS vs Others</li>
                </ol>
            </nav>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight">
                    ConstructOS vs Other Construction ERPs: A Detailed Comparison
                </h1>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-8">
                    <p className="text-xl">
                        Most ERP systems are generic. They are built for trading, manufacturing, or accounting, and later adapted for construction.
                    </p>

                    <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <p className="mb-4">Construction is different. Projects change daily. Site level data matters. Margins are tight.</p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">ConstructOS is built only for contractors.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Unlike generic ERP systems, ConstructOS focuses on:</h2>
                        <ul className="grid sm:grid-cols-2 gap-4 list-none p-0">
                            {[
                                "Real time margin monitoring",
                                "Daily BOQ versus executed tracking",
                                "Verified labour attendance with GPS and camera proof",
                                "Material usage linked directly to work completed",
                                "Clear owner level financial dashboard"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800">
                                    <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <p className="text-xl font-medium text-gray-900 dark:text-white text-center py-6 border-y border-gray-100 dark:border-gray-800">
                        Generic ERP systems record data. <span className="text-blue-600">ConstructOS protects profit.</span>
                    </p>

                    <p>
                        With ConstructOS, contractors do not have to struggle with complex systems or unnecessary features. Everything is designed to make project control simple, clear, and stress free.
                    </p>
                </div>
            </section>
        </div>
    );
}
