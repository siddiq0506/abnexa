import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Construction ERP vs Excel: Why Spreadsheets Are No Longer Enough",
    description: "The limitations of spreadsheets in construction and why automated ERP systems are necessary for scaling.",
};

export default function ExcelVsERPPage() {
    return (
        <div className="flex flex-col min-h-screen pt-20 bg-white dark:bg-gray-950">
            <nav className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-500">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                    <li><span className="mx-2">/</span></li>
                    <li><Link href="/resources" className="hover:text-blue-600">Resources</Link></li>
                    <li><span className="mx-2">/</span></li>
                    <li className="font-medium text-gray-900 dark:text-gray-100">ERP vs Excel</li>
                </ol>
            </nav>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight">
                    Construction ERP vs Excel: Why Spreadsheets Are No Longer Enough
                </h1>

                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-10">
                    <p className="text-xl">
                        Excel remains the default tool for many contractors because it feels flexible and familiar. However, flexibility without structure creates operational risk.
                    </p>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">The Limitations of Excel</h2>
                            <ul className="space-y-4 list-none p-0">
                                {[
                                    "No real time synchronization between site and office",
                                    "Manual data entry prone to human error",
                                    "No automated BOQ linkage",
                                    "No centralized project profitability view",
                                    "No integrated labour attendance system"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 items-start">
                                        <span className="text-red-500 font-bold">✕</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 p-6 bg-red-50 dark:bg-red-950/20 rounded-xl border border-red-100 dark:border-red-900/50 text-center">
                                <p className="text-xl font-bold text-red-900 dark:text-red-400 italic">Excel is a recording tool.</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What Construction ERP Enables</h2>
                            <ul className="space-y-4 list-none p-0">
                                {[
                                    "Real time cost tracking",
                                    "Automated cost accumulation",
                                    "Daily margin visibility",
                                    "Centralized vendor management",
                                    "Project wise financial dashboards"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 items-start">
                                        <span className="text-green-500 font-bold">✓</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800 text-center">
                                <p className="text-xl font-bold text-blue-900 dark:text-blue-400 italic">Construction ERP is a management system.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <p className="mb-4">
                            As project size increases, Excel complexity increases exponentially. Formulas become fragile, sheets become disconnected, and visibility becomes reactive.
                        </p>
                        <p className="text-lg font-bold text-gray-900 dark:text-white">
                            A construction company aiming for sustainable growth cannot rely on manual systems indefinitely.
                        </p>
                    </div>
                </div>
            </section>

            <footer className="bg-slate-50 dark:bg-gray-950 py-16 border-t border-gray-100 dark:border-gray-800 mt-auto">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Ready to transition from spreadsheets?</h2>
                    <Link href="/book-demo" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-md active:scale-95">
                        Book a Demo
                    </Link>
                </div>
            </footer>
        </div>
    );
}
