import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Best Construction ERP in India (2026 Comparison) | ConstructOS",
    description: "Comparing the top construction ERP solutions available in India to help you choose the right platform for your contracting business.",
};

export default function BestERPPage() {
    return (
        <div className="flex flex-col min-h-screen pt-20 bg-white dark:bg-gray-950">
            <nav className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-500">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                    <li><span className="mx-2">/</span></li>
                    <li><Link href="/resources" className="hover:text-blue-600">Resources</Link></li>
                    <li><span className="mx-2">/</span></li>
                    <li className="font-medium text-gray-900">Best ERP India</li>
                </ol>
            </nav>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight">
                    Best Construction ERP in India (2026 Evaluation)
                </h1>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-8">
                    <p className="text-xl leading-relaxed">
                        Construction companies in India face daily challenges in tracking costs, labour, materials, and project margins. Many contractors still depend on spreadsheets and manual reporting, which leads to confusion and hidden losses.
                    </p>

                    <p>
                        ConstructOS is built specifically for the construction industry. It gives contractors real time visibility of revenue earned, total cost spent, and exact margin percentage on every running project.
                    </p>

                    <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl border border-blue-100 dark:border-blue-800 my-10">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">With ConstructOS you can:</h2>
                        <ul className="space-y-4 list-none p-0">
                            {[
                                "See your live margin every day",
                                "Track BOQ versus executed work with percentage completion",
                                "Monitor labour attendance using GPS and photo verification",
                                "Control material consumption linked to site execution",
                                "Access complete project data from one dashboard"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                    <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <p>
                        On average, contractors lose 3 to 5 percent of margin due to unnoticed leakages. ConstructOS helps detect these early and protect profit before it disappears.
                    </p>

                    <p className="text-lg font-medium text-gray-900 dark:text-white italic bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border-l-4 border-blue-600">
                        It is not just an ERP. It is a margin protection system designed for Indian contractors who want clarity, control, and a stress free way to manage projects.
                    </p>
                </div>
            </section>
        </div>
    );
}
