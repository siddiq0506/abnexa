import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Case Study: Achieving Real Time Margin Control | ConstructOS",
    description: "How a leading infrastructure firm reduced margin leakage by 4% using ConstructOS financial controls.",
};

export default function CaseStudyMarginPage() {
    return (
        <div className="flex flex-col min-h-screen pt-20">
            <nav className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-500">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                    <li><span className="mx-2">/</span></li>
                    <li><Link href="/resources" className="hover:text-blue-600">Resources</Link></li>
                    <li><span className="mx-2">/</span></li>
                    <li className="font-medium text-gray-900 dark:text-gray-100">Case Study: Margin Control</li>
                </ol>
            </nav>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight">
                    Case Study: Margin Control
                </h1>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-8">
                    <p className="text-xl">
                        A mid sized contractor implemented ConstructOS across running projects. Within weeks, they were able to see real time margin percentage and daily cost trends.
                    </p>

                    <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl border border-blue-100 dark:border-blue-800">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-left">The Turning Point</h2>
                        <p className="mb-4">They identified excessive labour deployment on one site and high material consumption on another. By correcting these early, they improved overall margin by nearly 3 percent.</p>
                    </div>

                    <div className="text-center py-12">
                        <p className="text-2xl font-bold text-gray-900 dark:text-white italic">"Clear data led to better decisions. Better decisions led to protected profit."</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
