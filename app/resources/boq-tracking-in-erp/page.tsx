import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Precision BOQ Tracking in Construction ERP | ConstructOS",
    description: "How to link your Bill of Quantities directly to site execution and financial accounting.",
};

export default function BOQTrackingPage() {
    return (
        <div className="flex flex-col min-h-screen pt-20 bg-white dark:bg-gray-950">
            <nav className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-500">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                    <li><span className="mx-2">/</span></li>
                    <li><Link href="/resources" className="hover:text-blue-600">Resources</Link></li>
                    <li><span className="mx-2">/</span></li>
                    <li className="font-medium text-gray-900 dark:text-gray-100">BOQ Tracking</li>
                </ol>
            </nav>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight">
                    The Role of BOQ Tracking in Construction ERP
                </h1>

                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-10">
                    <p className="text-xl">
                        BOQ (Bill of Quantities) is the financial blueprint of any construction project. It defines the scope of work, quantity allocations, billable items, and revenue structure.
                    </p>

                    <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl border border-blue-100 dark:border-blue-800">
                        <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-6">The Risk of Poor Tracking</h2>
                        <p className="mb-4">Without structured BOQ tracking:</p>
                        <ul className="space-y-3">
                            <li>Site teams over execute quantities</li>
                            <li>Billing teams miss variation claims</li>
                            <li>Revenue realization gets delayed</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Deep Integration</h2>
                        <p className="mb-6">Construction ERP integrates BOQ into daily site reporting, material consumption tracking, labour allocation, and client billing.</p>

                        <div className="grid sm:grid-cols-2 gap-6 bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm text-center border border-gray-200 dark:border-gray-700">
                                <span className="block text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">Executed</span>
                                <span className="text-gray-500 dark:text-gray-400">Quantities</span>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm text-center border border-gray-200 dark:border-gray-700">
                                <span className="block text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">Billable</span>
                                <span className="text-gray-500 dark:text-gray-400">Quantities</span>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm text-center border border-gray-200 dark:border-gray-700">
                                <span className="block text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">Cost</span>
                                <span className="text-gray-500 dark:text-gray-400">Accumulation</span>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm text-center border border-gray-200 dark:border-gray-700">
                                <span className="block text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">Revenue</span>
                                <span className="text-gray-500 dark:text-gray-400">Expectation</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-center pt-8 border-t border-gray-100 dark:border-gray-800">
                        <p className="text-2xl font-bold text-gray-900 dark:text-white italic">
                            BOQ intelligence protects both revenue and profitability.
                        </p>
                    </div>
                </div>
            </section>

            <footer className="bg-slate-50 dark:bg-gray-950 py-16 border-t border-gray-100 dark:border-gray-800 mt-auto">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Start tracking with precision.</h2>
                    <Link href="/book-demo" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-md active:scale-95">
                        Book a Demo
                    </Link>
                </div>
            </footer>
        </div>
    );
}
