import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Abnexa Technologies | Premium Construction ERP & ConstructOS Platform",
  description: "Abnexa Technologies builds scalable ERP software for contractors and construction companies. Track costs, manage projects, prevent margin leakage, and scale with intelligent ERP solutions.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col animate-fade-in-up">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-white to-white dark:from-blue-900/20 dark:via-gray-950 dark:to-gray-950 opacity-70"></div>
          {/* subtle moving orb effect */}
          <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>
          <div className="absolute bottom-[20%] left-[10%] w-[600px] h-[600px] bg-indigo-400/10 dark:bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping"></span>
            Abnexa Technologies
          </div>

          <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-extrabold tracking-tight text-gray-900 dark:text-white mb-8 leading-[1.1]">
            ConstructOS: The Advanced <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">Construction ERP</span>
          </h1>

          <p className="text-[clamp(1.125rem,2vw,1.25rem)] text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Construction today cannot rely on spreadsheets and delayed reporting. ConstructOS is an intelligent ERP software built specifically for contractors to eliminate margin leakage, control project costs, and scale operations with real-time financial visibility.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/products"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-[0_8px_30px_rgb(37,99,235,0.25)] hover:shadow-[0_12px_40px_rgb(37,99,235,0.4)] transition-all duration-300 hover:-translate-y-1 active:scale-95 flex items-center justify-center group"
            >
              Explore ConstructOS
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
            <Link
              href="/book-demo"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm hover:shadow-md transition-all duration-300 active:scale-95 text-center"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* The Construction Problem Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 relative border-t border-gray-200/50 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              The Silent <span className="text-red-600 dark:text-red-500">Margin Leakage</span> Problem
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Most contracting companies silently lose 3% to 5% of their project margin. Why? Because generic management tools fail to connect the chaotic reality of a construction site with backend financial accounting.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Untracked Site Expenses</h3>
              <p className="text-gray-600 dark:text-gray-400">Petty cash, ad-hoc material purchases, and unverified daily expenses pile up without centralized procurement oversight, destroying estimated margins.</p>
            </div>
            <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Labour Inflation</h3>
              <p className="text-gray-600 dark:text-gray-400">Fake attendance, ghost workers, and manual wage calculations lead to thousands inevitably lost in manpower leakages every single month.</p>
            </div>
            <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Poor BOQ Visibility</h3>
              <p className="text-gray-600 dark:text-gray-400">When Billing of Quantities (BOQ) is disconnected from daily site execution, project managers accidentally over-execute without the ability to bill the client.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase Section */}
      <section className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              Engineered for <span className="text-blue-600 dark:text-blue-400">Construction Excellence</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              ConstructOS connects the field to the office, providing real-time analytics, automated BOQ parsing, and deeply integrated vendor management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Real-Time Financial Control',
                desc: 'Live financial intelligence. Track BOQ vs executed, revenue vs planned value, and daily accumulated costs with automated variance alerts.',
                icon: (
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                )
              },
              {
                title: 'Integrated HRMS & Labour',
                desc: 'Complete workforce discipline inside your ERP. GPS based attendance, camera verified site presence, and automatic labour cost calculations.',
                icon: (
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                )
              },
              {
                title: 'Material & Inventory Control',
                desc: 'Material inward/outward tracking linked to site execution. Monitor consumption variance and real-time stock positions to instantly reduce wastage.',
                icon: (
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                )
              },
            ].map((feature, i) => (
              <div key={i} className="group bg-white dark:bg-gray-900/50 p-10 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgb(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgb(37,99,235,0.08)] dark:hover:shadow-[0_8px_30px_rgb(37,99,235,0.05)] border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 dark:bg-blue-900/20 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/40 flex items-center justify-center mb-8 border border-blue-100 dark:border-blue-800/50 group-hover:bg-blue-600/10 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">{feature.desc}</p>
                <Link href="/products" className="inline-flex items-center font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                  Discover capabilities
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Generic ERP vs Construction ERP */}
      <section className="py-24 bg-slate-50 dark:bg-gray-900/50 border-t border-gray-200/50 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Why Choose ConstructOS Over Generic ERP Software?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Standard enterprise resource planning software is built for manufacturing or retail. ConstructOS is an exclusive ERP built ground-up for the chaotic nuances of the construction industry.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-gray-950 border-l-4 border-red-500 shadow-sm">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Traditional Generic ERPs</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm list-disc list-inside">
                  <li>Cannot parse or understand complex BOQs natively.</li>
                  <li>Treat construction sites like traditional inventory warehouses.</li>
                  <li>Disconnected Daily Site Reports (DSR) and physical execution.</li>
                  <li>Clunky interfaces that field engineers refuse to use daily.</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-white dark:bg-gray-950 border-l-4 border-blue-600 shadow-lg relative transform md:translate-x-4">
                <div className="absolute -left-3 -top-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">ConstructOS</div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 mt-2">Specialized Construction ERP</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm list-disc list-inside">
                  <li>AI-driven BOQ ingestion, mapping, and structure parsing out of the box.</li>
                  <li>Materials are linked directly to execution progress algorithms.</li>
                  <li>Mobile-first Daily Execution entry that automatically syncs with back-office billing.</li>
                  <li>Simple, intuitive architecture driving 100% field adoption rates.</li>
                </ul>
              </div>
            </div>
            <div className="hidden md:block relative h-[500px] w-full bg-gray-200 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/90 to-indigo-900/80 flex flex-col items-center justify-center p-12 text-center z-10">
                <svg className="w-16 h-16 text-blue-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                <h3 className="text-2xl font-bold text-white mb-4">The Standard in Contracting Operations</h3>
                <p className="text-blue-100">Abnexa Technologies is committed to migrating the construction industry away from fragmented spreadsheets into complete, real-time financial control.</p>
              </div>
              {/* Abstract background for image block */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 dark:bg-blue-900"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to deploy a true Construction ERP?</h2>
          <p className="text-xl text-blue-100 mb-10">Stop relying on outdated spreadsheets and generic software. Join the forward-thinking organizations scaling with ConstructOS.</p>
          <div className="flex justify-center gap-4">
            <Link href="/book-demo" className="px-8 py-4 rounded-full bg-white text-blue-600 font-bold hover:bg-gray-50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              Schedule a Live Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
