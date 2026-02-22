import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Case Study: Labour Optimization at Scale | ConstructOS",
    description: "Reducing workforce costs and eliminating fraud across 15+ concurrent project sites.",
};

export default function CaseStudyLabourPage() {
    return (
        <div className="flex flex-col min-h-screen pt-20 bg-white dark:bg-gray-950">
            <nav className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-500">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                    <li><span className="mx-2">/</span></li>
                    <li><Link href="/resources" className="hover:text-blue-600">Resources</Link></li>
                    <li><span className="mx-2">/</span></li>
                    <li className="font-medium text-gray-900 dark:text-gray-100">Case Study: Labour Optimization</li>
                </ol>
            </nav>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight">
                    Case Study: Labour Optimization at Scale
                </h1>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-8">
                    <p className="text-xl">
                        A contractor managing multiple sites struggled with manual attendance and inflated labour cost.
                    </p>

                    <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-xl">
                        <p className="text-2xl font-bold mb-4">The Impact of Verification</p>
                        <p className="text-blue-100 text-lg">
                            After implementing GPS and photo verified attendance, discrepancies reduced significantly. Labour cost became transparent and controlled.
                        </p>
                    </div>

                    <p className="text-lg font-medium text-gray-900 dark:text-white italic border-l-4 border-blue-600 pl-6 py-2">
                        The result was improved discipline, reduced overpayment, and better manpower planning across projects.
                    </p>
                </div>
            </section>
        </div>
    );
}
