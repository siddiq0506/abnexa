import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Products & Solutions | ConstructOS',
    description: 'Explore the ConstructOS platform capabilities, modules, and industry specific tools designed exclusively for contractors and enterprise construction companies.',
};

export default function ProductsPage() {
    return (
        <div className="min-h-screen pt-24 pb-12 animate-fade-in-up bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
                        ConstructOS
                        <span className="block text-blue-600 dark:text-blue-400 mt-2 text-3xl md:text-4xl">Advanced Modern ERP for Contractors</span>
                    </h1>
                    <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                        Built to Protect Margins and Deliver Total Control
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                        Construction today cannot rely on spreadsheets and delayed reporting.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        ConstructOS is an advanced modern ERP built specifically for contractors to protect margins, control costs, and provide real time financial visibility across every project.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {/* Card 1 */}
                    <div className="p-8 rounded-3xl bg-white dark:bg-gray-900 shadow-lg shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Margin Protection Engine</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium italic">
                            Most projects silently lose 3 to 5 percent of margin due to untracked site expenses, labour inflation, material wastage, and poor BOQ visibility.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                            ConstructOS continuously monitors revenue versus cost and detects margin variance before it turns into irreversible loss.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-8 rounded-3xl bg-white dark:bg-gray-900 shadow-lg shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Real Time Financial Control</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">This is not basic project tracking. This is live financial intelligence.</p>
                        <ul className="space-y-2 mb-6 text-gray-600 dark:text-gray-400 list-disc list-inside">
                            <li>BOQ versus executed tracking with completion percentage</li>
                            <li>Revenue earned versus planned value</li>
                            <li>Daily accumulated cost including labour, materials and misc expenses</li>
                            <li>Real time margin percentage</li>
                            <li>Automated variance alerts</li>
                        </ul>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold">Know your exact financial position every single day.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-8 rounded-3xl bg-white dark:bg-gray-900 shadow-lg shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Integrated HRMS and Labour Verification</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">Complete workforce discipline inside your ERP.</p>
                        <ul className="space-y-2 mb-6 text-gray-600 dark:text-gray-400 list-disc list-inside">
                            <li>GPS based attendance</li>
                            <li>Camera verified site presence</li>
                            <li>Automatic labour cost calculation</li>
                            <li>Leave and workforce tracking</li>
                        </ul>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold">Eliminate fake attendance and manpower leakages.</p>
                    </div>

                    {/* Card 4 */}
                    <div className="p-8 rounded-3xl bg-white dark:bg-gray-900 shadow-lg shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">BOQ and Execution Intelligence</h3>
                        <ul className="space-y-2 mb-6 text-gray-600 dark:text-gray-400 list-disc list-inside">
                            <li>Flexible BOQ upload</li>
                            <li>Daily execution entry</li>
                            <li>Automatic remaining quantity update</li>
                            <li>Billing linked to executed quantity</li>
                            <li>Over execution alerts</li>
                        </ul>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold">Total quantity control across projects.</p>
                    </div>

                    {/* Card 5 */}
                    <div className="p-8 rounded-3xl bg-white dark:bg-gray-900 shadow-lg shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Material and Inventory Control</h3>
                        <ul className="space-y-2 mb-6 text-gray-600 dark:text-gray-400 list-disc list-inside">
                            <li>Material inward and outward tracking</li>
                            <li>Usage linked with site execution</li>
                            <li>Consumption variance monitoring</li>
                            <li>Real time stock position</li>
                        </ul>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold">Reduce wastage. Improve accountability.</p>
                    </div>

                    {/* Card 6 */}
                    <div className="p-8 rounded-3xl bg-white dark:bg-gray-900 shadow-lg shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Owner War Room Dashboard</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">Enterprise level visibility for decision makers.</p>
                        <ul className="space-y-2 mb-6 text-gray-600 dark:text-gray-400 list-disc list-inside">
                            <li>Planned versus actual margin</li>
                            <li>Complete cost breakdown</li>
                            <li>Revenue tracking</li>
                            <li>Financial health across projects</li>
                        </ul>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold">One dashboard. Complete control.</p>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-10 md:p-16 flex flex-col items-center text-center shadow-2xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 opacity-10 rounded-full blur-3xl"></div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">ConstructOS is more than just software.</h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-3xl relative z-10 font-light">
                        It is a <strong className="font-semibold text-white">modern construction ERP</strong> engineered to protect profit, bring financial discipline into the industry, and scale your contracting business securely.
                    </p>
                    <div className="relative z-10 w-full md:w-auto">
                        <Link href="/book-demo" className="inline-flex w-full md:w-auto px-10 py-5 bg-white text-blue-900 hover:bg-gray-50 rounded-full font-bold text-lg transition-transform hover:-translate-y-1 shadow-xl items-center justify-center">
                            Book a live demo today
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </Link>
                    </div>
                </div>
            </div>

            {/* FAQ JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "What is Construction ERP software?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Construction ERP (Enterprise Resource Planning) is a unified software platform designed specifically for contractors to manage their entire lifecycle of business operations, including project management, financial accounting, labour tracking, material inventory, and procurement in real-time."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How does ConstructOS prevent margin leakage?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "ConstructOS prevents margin leakage by continuously tracking the planned BOQ value against daily executed costs, material wastage, and labour inflation, giving real-time variance alerts before budget overflows occur."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is ConstructOS suitable for general contractors?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, ConstructOS is built specifically for general contractors, civil engineers, and enterprise construction operations who require tight financial controls over multiple distributed project sites."
                                }
                            }
                        ]
                    })
                }}
            />
        </div>
    );
}
