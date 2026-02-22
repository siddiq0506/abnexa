import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Case Study: Precision BOQ Tracking & Billing | ConstructOS",
    description: "How automated BOQ management accelerated billing cycles and improved cash flow by 30%.",
};

export default function CaseStudyBOQPage() {
    return (
        <div className="flex flex-col min-h-screen pt-20 bg-white dark:bg-gray-950">
            <nav className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-500">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                    <li><span className="mx-2">/</span></li>
                    <li><Link href="/resources" className="hover:text-blue-600">Resources</Link></li>
                    <li><span className="mx-2">/</span></li>
                    <li className="font-medium text-gray-900 dark:text-gray-100">Case Study: Precision BOQ Tracking</li>
                </ol>
            </nav>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight">
                    Case Study: Precision BOQ Tracking
                </h1>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-8">
                    <p className="text-xl leading-relaxed">
                        In many projects, quantity tracking is delayed and inaccurate. This leads to billing confusion and margin surprises.
                    </p>

                    <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Live Execution Data</h3>
                        <p className="mb-4">With ConstructOS, engineers entered daily executed quantities directly from BOQ items. Remaining quantities were updated automatically.</p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl border border-blue-100 dark:border-blue-800 text-center">
                        <p className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-2">The Outcome</p>
                        <p className="text-gray-600 dark:text-gray-300 italic">The contractor gained clarity on work progress and revenue earned. Billing became more accurate and predictable.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
