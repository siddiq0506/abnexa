import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "What is Construction ERP? | Complete Definition & Benefits",
    description: "A comprehensive definition of Construction ERP software and why it differs from traditional financial accounting tools.",
};

export default function DefinitionPage() {
    return (
        <div className="flex flex-col min-h-screen pt-20 bg-white dark:bg-gray-950">
            <nav className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-500">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                    <li><span className="mx-2">/</span></li>
                    <li><Link href="/resources" className="hover:text-blue-600">Resources</Link></li>
                    <li><span className="mx-2">/</span></li>
                    <li className="font-medium text-gray-900 dark:text-gray-100">What is Construction ERP?</li>
                </ol>
            </nav>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight">
                    What is Construction ERP?
                </h1>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-8">
                    <p className="text-xl leading-relaxed">
                        Construction ERP (Enterprise Resource Planning) is specialized software designed specifically for construction companies to manage project execution, financial control, procurement, labour management, and BOQ based billing in one integrated system.
                    </p>

                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">How it differs from Generic ERP</h2>
                        <p className="mb-4">Unlike generic ERP systems built for manufacturing or retail, Construction ERP understands that construction is:</p>
                        <ul className="grid sm:grid-cols-2 gap-4 list-none p-0">
                            <li className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800 flex items-start gap-3">
                                <span className="text-blue-600 mt-1">✓</span>
                                <span><strong>Project driven</strong>, not inventory driven</span>
                            </li>
                            <li className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800 flex items-start gap-3">
                                <span className="text-blue-600 mt-1">✓</span>
                                <span><strong>Site based</strong>, not warehouse based</span>
                            </li>
                            <li className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800 flex items-start gap-3">
                                <span className="text-blue-600 mt-1">✓</span>
                                <span><strong>Quantity measured</strong>, not unit counted</span>
                            </li>
                            <li className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800 flex items-start gap-3">
                                <span className="text-blue-600 mt-1">✓</span>
                                <span><strong>Labour intensive</strong>, not automation heavy</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The "Temporary Business Unit" Reality</h2>
                        <p className="mb-4">
                            In construction, every project operates like a temporary business unit. Each site has independent labour deployment, separate material procurement, unique BOQ structure, and distinct billing milestones.
                        </p>
                        <p>
                            Without a structured system, contractors often manage projects using Excel sheets, WhatsApp communication, manual registers, and fragmented accounting tools. This creates visibility gaps.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Real Time Connection</h2>
                        <p className="mb-6">A modern Construction ERP system connects site execution data, BOQ quantities, cost accumulation, vendor payments, revenue billing, and project wise profitability in real time.</p>

                        <div className="border-l-4 border-blue-600 pl-6 py-2 bg-blue-50/30 dark:bg-blue-900/10">
                            <p className="text-lg font-medium text-gray-900 dark:text-white italic">
                                The core objective of Construction ERP is simple: Give contractors live financial control before margins disappear.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA section */}
            <section className="bg-slate-50 dark:bg-gray-950 py-16 border-t border-gray-100 dark:border-gray-800 mt-auto">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Ready to see Construction ERP in action?</h2>
                    <Link href="/book-demo" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-md active:scale-95">
                        Book a ConstructOS Demo
                    </Link>
                </div>
            </section>
        </div>
    );
}
