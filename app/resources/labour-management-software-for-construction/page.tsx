import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Modern Labour Management Software for Construction Teams",
    description: "Solving the labour productivity puzzle with GPS, biometrics, and integrated ERP payroll.",
};

export default function LabourPage() {
    return (
        <div className="flex flex-col min-h-screen pt-20 bg-white dark:bg-gray-950">
            <nav className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-500">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                    <li><span className="mx-2">/</span></li>
                    <li><Link href="/resources" className="hover:text-blue-600">Resources</Link></li>
                    <li><span className="mx-2">/</span></li>
                    <li className="font-medium text-gray-900">Labour Management</li>
                </ol>
            </nav>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight">
                    Labour Management Software for Construction
                </h1>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-8">
                    <p className="text-xl leading-relaxed">
                        Labour management is one of the biggest challenges in construction. Inflated attendance, ghost workers, and manual tracking often lead to unnecessary payouts.
                    </p>

                    <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-xl">
                        <p className="text-2xl font-bold mb-4">The ConstructOS Solution</p>
                        <p className="text-blue-100 text-lg">
                            ConstructOS solves this with simple and reliable verification. Labour attendance is marked using live GPS location and camera photo proof. Every entry is stored and linked to daily cost calculation.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">With ConstructOS you can:</h2>
                        <ul className="grid sm:grid-cols-2 gap-4 list-none p-0">
                            {[
                                "Verify site presence of workers",
                                "Calculate labour cost automatically",
                                "Track manpower per project",
                                "Reduce fake attendance",
                                "Gain visibility without visiting the site"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800">
                                    <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <p className="text-lg font-medium text-gray-900 dark:text-white italic border-l-4 border-blue-600 pl-6 py-2">
                        This brings discipline and transparency into site operations and helps protect margins that are often lost through labour inefficiencies.
                    </p>
                </div>
            </section>
        </div>
    );
}
