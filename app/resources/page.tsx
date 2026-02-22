import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Construction ERP Resources & Insights | ConstructOS Authority Hub",
    description: "Explore our comprehensive resources for construction ERP, BOQ tracking, margin control, and labour management. Expert guides and case studies for Indian contractors.",
};

export default function ResourcesPage() {
    return (
        <div className="flex flex-col min-h-screen pt-20 bg-white dark:bg-gray-950">
            {/* Breadcrumbs */}
            <nav className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-500">
                <ol className="flex items-center space-x-2">
                    <li>
                        <Link href="/" className="hover:text-blue-600">Home</Link>
                    </li>
                    <li>
                        <span className="mx-2">/</span>
                    </li>
                    <li className="font-medium text-gray-900 dark:text-gray-100">Resources</li>
                </ol>
            </nav>

            {/* 1. Hero Section */}
            <section className="bg-white dark:bg-gray-950 py-16 md:py-24 border-b border-gray-100 dark:border-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
                        Construction ERP Resources & Insights
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                        Welcome to the definitive authority hub for construction technology in India. Access expert guides, industry comparisons, and deep dives into maximizing project margins through intelligent ERP implementation.
                    </p>
                    <div className="flex justify-center">
                        <Link
                            href="/book-demo"
                            className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-md active:scale-95"
                        >
                            Request a Strategy Session
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. Featured Mega Guide Section */}
            <section className="py-20 bg-slate-50 dark:bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-950 rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100 dark:border-blue-900/20 flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-4 uppercase tracking-wider">
                                Mega Guide
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                The Complete Guide to Construction ERP for Contractors in India
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                Everything you need to know about navigating the digital transformation of your contracting business. From BOQ parsing to real time site execution monitoring.
                            </p>
                            <Link
                                href="/resources/complete-guide-construction-erp"
                                className="inline-flex items-center text-blue-600 font-bold text-lg hover:text-blue-700 group"
                            >
                                Read Guide
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </Link>
                        </div>
                        <div className="w-full md:w-5/12 bg-gray-900 rounded-2xl overflow-hidden shadow-2xl relative group/img border border-gray-800">
                            <img
                                src="/images/resources/mega-guide.png"
                                alt="Complete Guide to Construction ERP"
                                className="w-full h-auto object-contain transition-transform duration-700 group-hover/img:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Comparison Hub Section */}
            <section className="py-20 bg-white dark:bg-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">ERP Comparison & Evaluation</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Best Construction ERP in India", href: "/resources/best-construction-erp-india" },
                            { title: "Construction ERP vs Generic ERP", href: "/resources/construction-erp-vs-generic-erp" },
                            { title: "ConstructOS vs Other ERPs", href: "/resources/constructos-vs-other-erp" },
                            { title: "ERP for Small Contractors", href: "/resources/erp-for-small-contractors" }
                        ].map((card, i) => (
                            <Link key={i} href={card.href} className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-blue-300 hover:bg-white dark:hover:bg-gray-800 transition-all shadow-sm hover:shadow-md group">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors">{card.title}</h3>
                                <span className="text-blue-600 dark:text-blue-400 font-semibold inline-flex items-center">
                                    Compare Now
                                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Educational Articles Section */}
            <section className="py-20 bg-slate-50 dark:bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">Educational Articles</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "What is Construction ERP?", href: "/resources/what-is-construction-erp" },
                            { title: "Why Contractors Lose 3–5% Margin", href: "/resources/why-contractors-lose-3-5-percent-margin" },
                            { title: "ERP vs Excel for Construction", href: "/resources/erp-vs-excel-for-construction" },
                            { title: "BOQ Tracking in ERP", href: "/resources/boq-tracking-in-erp" },
                            { title: "Labour Management Software for Construction", href: "/resources/labour-management-software-for-construction" }
                        ].map((article, i) => (
                            <Link key={i} href={article.href} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{article.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">Expert analysis of key construction technology trends and operational challenges.</p>
                                <span className="text-blue-600 dark:text-blue-400 font-bold hover:underline">Read Article →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Case Studies Section */}
            <section className="py-20 bg-white dark:bg-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">Case Studies</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Scaling Margin Control", desc: "How a mid sized contractor improved margins by 3%.", href: "/resources/case-study-margin-control", color: "from-blue-600 to-blue-400" },
                            { title: "Labour Optimization at Scale", desc: "Reducing discrepancies using GPS verification.", href: "/resources/case-study-labour-optimization", color: "from-indigo-600 to-indigo-400" },
                            { title: "Precision BOQ Tracking", desc: "Closing the gap between site and billing.", href: "/resources/case-study-boq-tracking", color: "from-cyan-600 to-cyan-400" }
                        ].map((study, i) => (
                            <Link
                                key={i}
                                href={study.href}
                                className="group relative p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                            >
                                {/* Decorative Gradient Blur */}
                                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${study.color} opacity-5 group-hover:opacity-10 transition-opacity rounded-full blur-3xl`}></div>

                                <div className="relative z-10">
                                    <div className={`w-12 h-1 bg-gradient-to-r ${study.color} rounded-full mb-6`}></div>
                                    <span className="text-[10px] uppercase tracking-widest font-bold text-blue-600 dark:text-blue-400 mb-2 block">Case Study</span>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {study.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                        {study.desc}
                                    </p>
                                </div>

                                <div className="mt-8 flex items-center text-sm font-bold text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    View Results <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Why Choose ConstructOS Section */}
            <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose ConstructOS</h2>
                        <p className="text-xl text-blue-100 font-light">
                            ConstructOS is built exclusively for construction companies seeking financial clarity and operational discipline.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Protect Up To 5 Percent Extra Profit",
                                desc: "Most construction projects lose 3 to 5 percent margin due to unnoticed cost leakages. ConstructOS tracks revenue versus cost daily and alerts you before profit drops. What usually disappears silently now becomes visible instantly."
                            },
                            {
                                title: "Know Your Exact Margin Every Single Day",
                                desc: "No more waiting till project completion to know profit or loss. ConstructOS calculates real time revenue earned, total cost spent, and shows your live margin percentage on every running project."
                            },
                            {
                                title: "Eliminate Fake Labour and Ghost Attendance",
                                desc: "Labour attendance is verified using live GPS location and camera photo proof. Every entry is recorded and labour cost is calculated automatically, preventing inflated manpower and unnecessary payouts."
                            },
                            {
                                title: "Full BOQ Control With Live Execution Tracking",
                                desc: "Engineers enter daily executed quantity directly from BOQ items. The system automatically updates completion percentage and remaining quantity, ensuring no over execution and no billing confusion."
                            },
                            {
                                title: "Stop Material Wastage Before It Becomes Loss",
                                desc: "Material inward, outward, and daily usage are linked to actual work done. If consumption exceeds expected limits, you detect it early and take action immediately."
                            },
                            {
                                title: "Complete Owner Level Control From One Dashboard",
                                desc: "From margin percentage to cost breakdown, labour data, billing position, and project health everything is visible in one intelligent dashboard. No more constant calls to site for updates."
                            }
                        ].map((feature, i) => (
                            <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-16 text-center">
                        <p className="text-2xl font-bold italic text-white mb-2">Our Objective:</p>
                        <p className="text-3xl md:text-4xl font-extrabold text-blue-300">Protect contractor margins through structured intelligence.</p>
                    </div>
                </div>
            </section>

            {/* 7. FAQ Section */}
            <section className="py-24 bg-white dark:bg-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Frequently Asked Questions</h2>
                        <p className="text-lg text-gray-500 dark:text-gray-400">Common questions about Construction ERP and how ConstructOS works.</p>
                    </div>
                    <div className="max-w-4xl mx-auto divide-y divide-gray-100">
                        {[
                            { q: "What is the purpose of Construction ERP?", a: "Construction ERP centralizes project execution, financial tracking, labour management, and BOQ billing into one system." },
                            { q: "How does Construction ERP improve project profitability?", a: "By tracking daily cost accumulation and aligning it with revenue projections in real time." },
                            { q: "Is ERP expensive for small contractors?", a: "Modern cloud based ERP systems are scalable and suitable for small contractors, with pricing that reflects their scale." },
                            { q: "Can Construction ERP track labour attendance?", a: "Yes. Many systems like ConstructOS include digital attendance, GPS verification, and wage automation features." },
                            { q: "What is margin leakage in construction?", a: "Margin leakage refers to untracked or unmanaged daily cost overruns that reduce final project profit, often silently." },
                            { q: "Does ERP replace accounting software?", a: "Construction ERP often integrates with accounting systems while adding project level intelligence that standard accounting lacks." },
                            { q: "How long does ERP implementation take?", a: "Implementation timelines vary based on project size and customization needs, but cloud systems enable faster onboarding." }
                        ].map((faq, i) => (
                            <div key={i} className="py-8">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{faq.q}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
