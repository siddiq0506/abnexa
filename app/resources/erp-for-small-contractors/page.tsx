import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Why Small Contractors Need Construction ERP | ConstructOS",
    description: "Why small contractors don't need complex enterprise software. Scaling with lean construction technology.",
};

export default function SmallContractorsPage() {
    return (
        <div className="flex flex-col min-h-screen pt-20 bg-white dark:bg-gray-950">
            <nav className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-500">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                    <li><span className="mx-2">/</span></li>
                    <li><Link href="/resources" className="hover:text-blue-600">Resources</Link></li>
                    <li><span className="mx-2">/</span></li>
                    <li className="font-medium text-gray-900 dark:text-gray-100">Small Contractors</li>
                </ol>
            </nav>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight">
                    Why Small Contractors Need Construction ERP
                </h1>

                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-10">
                    <p className="text-xl">
                        Small and growing contractors often believe ERP is only for large companies. In reality, small contractors need financial control even more.
                    </p>

                    <div className="bg-red-50 dark:bg-red-950/20 p-8 rounded-2xl border border-red-100 dark:border-red-900/50">
                        <p className="text-lg font-medium text-red-900 dark:text-red-400">
                            When margins are tight, even 2 to 3 percent loss can affect cash flow and business stability.
                        </p>
                    </div>

                    <p className="text-lg">ConstructOS makes project management simple and affordable for small contractors.</p>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">It helps you:</h2>
                        <ul className="grid sm:grid-cols-2 gap-4 list-none p-0">
                            {[
                                "Track daily expenses without confusion",
                                "Monitor labour attendance easily",
                                "Update executed quantity from BOQ",
                                "Know your exact margin every day",
                                "Avoid material wastage and hidden costs"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800">
                                    <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <p>
                        You do not need a big team to manage it. Everything is accessible from your phone or laptop.
                    </p>

                    <div className="bg-gray-900 text-white p-10 rounded-3xl shadow-xl text-center">
                        <p className="text-2xl font-bold mb-4">Financial Clarity Without Complexity</p>
                        <p className="text-blue-300 text-xl italic">
                            ConstructOS gives small contractors the same level of financial clarity that large companies enjoy.
                        </p>
                    </div>
                </div>
            </section>

            <footer className="bg-slate-50 dark:bg-gray-950 py-16 border-t border-gray-100 dark:border-gray-800 mt-auto">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Ready to grow your contracting business?</h2>
                    <Link href="/book-demo" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-md active:scale-95">
                        Book a Demo
                    </Link>
                </div>
            </footer>
        </div>
    );
}
