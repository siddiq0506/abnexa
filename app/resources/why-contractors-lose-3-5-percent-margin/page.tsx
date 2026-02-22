import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Why Contractors Lose 3–5% Margin: The Silent Leakage Problem",
    description: "Identifying the root causes of margin leakage in contracting and how technology can plug these gaps.",
};

export default function MarginPage() {
    return (
        <div className="flex flex-col min-h-screen pt-20 bg-white dark:bg-gray-950">
            <nav className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-500">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                    <li><span className="mx-2">/</span></li>
                    <li><Link href="/resources" className="hover:text-blue-600">Resources</Link></li>
                    <li><span className="mx-2">/</span></li>
                    <li className="font-medium text-gray-900 dark:text-gray-100">Margin Leakage</li>
                </ol>
            </nav>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight">
                    Why Most Construction Companies Lose 3–5% Margin Without Realising It
                </h1>

                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-10">
                    <p className="text-xl">
                        Construction businesses typically operate on tight margins — often between 8–15%. Losing even 3–5% silently can cut profitability by nearly half.
                    </p>

                    <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-8 rounded-r-2xl">
                        <h2 className="text-2xl font-bold text-red-900 dark:text-red-400 mb-2">The Silent Leakage</h2>
                        <p className="text-red-800 dark:text-red-300">The loss rarely comes from major mistakes. It comes from daily micro leakages.</p>
                    </div>

                    <div className="grid gap-8">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">1. Untracked Site Expenses</h3>
                            <p>Small daily purchases such as emergency materials, local hardware buys, transport costs, and fuel adjustments often remain undocumented in real time. By the time accounts reconcile, cost overruns are already irreversible.</p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">2. Manual Labour Tracking</h3>
                            <p>Labour is one of the largest cost components in construction. Without digital attendance systems, ghost labour entries go unnoticed, wage miscalculations occur, and overtime tracking becomes inconsistent. Even minor daily inflation compounds significantly across months.</p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">3. BOQ Execution Mismatch</h3>
                            <p>When execution quantities exceed BOQ allocations, contractors perform additional work that cannot always be billed. Without structured BOQ tracking integrated into daily operations, this mismatch silently erodes revenue.</p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">4. Vendor Rate Variations</h3>
                            <p>Procurement inconsistencies across sites can lead to different rates for the same material, lack of negotiation tracking, and an inability to compare historical prices.</p>
                        </div>
                    </div>

                    <div className="bg-blue-600 text-white p-10 rounded-3xl shadow-xl">
                        <h2 className="text-2xl font-bold mb-4">The ConstructOS Solution</h2>
                        <p className="text-blue-100 mb-6">A Construction ERP system eliminates these blind spots by integrating execution, accounting, procurement, and billing into a centralized dashboard.</p>
                        <p className="text-lg font-bold italic">
                            Margin protection is not about working harder. It is about working with structured financial intelligence.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-950 py-16 border-t border-gray-100 dark:border-gray-800">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Stop the leakage today.</h2>
                    <Link href="/book-demo" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-md active:scale-95">
                        Book a Demo
                    </Link>
                </div>
            </section>
        </div>
    );
}
