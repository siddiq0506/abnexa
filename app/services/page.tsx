import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Services | 14 Day MVP & AI Growth Systems",
  description: "Abnexa Technologies provides high speed MVP development and AI growth systems for serious businesses. Launch in 14 days and scale with intelligent automation.",
};

const services = [
  {
    title: 'MVP Development in 14 Days',
    description: 'We eliminate the months of delay associated with traditional software projects. Our execution model combines expert engineering with intelligent systems to deliver a production ready product in exactly two weeks.',
    tags: ['Rapid Launch', 'Scalable Architecture', 'User Validation', 'High Speed Execution'],
    icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    )
  },
  {
    title: 'AI Growth Systems',
    description: 'We build systems that drive revenue. From automated lead generation to intelligent sales follow ups and revenue optimization, our AI systems increase your output while reducing manual effort.',
    tags: ['Revenue Automation', 'Lead Generation', 'Sales Intelligence', 'Growth Engineering'],
    icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    )
  },
  {
    title: 'Modern Execution Model',
    description: 'A smarter way to build software. We use a highly efficient model combining human expertise with autonomous systems to eliminate inefficiencies and deliver better results at a lower cost.',
    tags: ['Human AI Synergy', 'Waste Elimination', 'Cost Efficiency', 'Peak Performance'],
    icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2l10 6.5-10 6.5L2 8.5 12 2zM2 15.5l10 6.5 10-6.5M2 11.5l10 6.5 10-6.5" /></svg>
    )
  },
  {
    title: 'Intelligent Workflows',
    description: 'Replace fragmented manual processes with cohesive intelligent systems. We audit your operations and implement workflows that handle complex decision making and execution without human oversight.',
    tags: ['Process Intelligence', 'System Integration', 'Decision Support', 'Operational Scale'],
    icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
    )
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-indigo-600 selection:text-white">

      {/* Hero */}
      <section className="pt-48 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-violet-600/10 rounded-full blur-[100px] animate-subtle-float"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <p className="text-xs font-black text-indigo-400 uppercase tracking-widest mb-10 animate-fade-in">Precision Services</p>
            <h1 className="font-heading text-6xl md:text-8xl font-black text-white mb-12 tracking-tighter leading-[0.9] animate-fade-in-up">
              Architecting <br />
                <span className="gradient-text">Absolute Success</span>
            </h1>
            <p className="text-2xl text-slate-400 leading-relaxed font-light max-w-2xl opacity-80 animate-fade-in delay-200">
              We replace billable hours with outcome focused execution. High quality products and intelligent systems delivered at the speed of thought.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-40 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="group p-12 md:p-16 bg-slate-50 border border-slate-100 hover:border-indigo-600 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-600/5 group-hover:bg-indigo-600 transition-colors transform translate-x-12 -translate-y-12 rotate-45"></div>
                
                <div className="flex flex-col md:flex-row md:items-start gap-12 relative z-10">
                  <div className="flex-shrink-0 p-6 bg-slate-950 text-white rounded-none shadow-xl transform group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-6 mb-8">
                        <span className="text-slate-200 text-6xl font-black opacity-50">0{i + 1}</span>
                        <h2 className="text-4xl font-black text-slate-950 tracking-tighter uppercase">
                        {service.title}
                        </h2>
                    </div>
                    <p className="text-xl text-slate-600 leading-relaxed mb-12 max-w-4xl font-light">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-6 py-2 text-[10px] font-black uppercase tracking-widest bg-white text-slate-500 border border-slate-200 shadow-sm group-hover:border-indigo-200 group-hover:text-indigo-600 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Result Section */}
      <section className="py-40 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute bottom-[-10%] left-[20%] w-[30%] h-[30%] bg-indigo-600/20 rounded-full blur-[100px]"></div>
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-tight italic">Outcome Driven Execution</h2>
            <p className="text-2xl text-slate-400 leading-relaxed mb-16 font-light max-w-3xl mx-auto italic">
                We work only with serious clients who value speed, quality, and results. We do not participate in bidding wars. We deliver value.
            </p>
            <Link
                href="/contact"
                className="inline-flex items-center gap-6 px-12 py-6 bg-white text-slate-950 font-black text-xl uppercase tracking-widest transition-all shadow-2xl hover:scale-105 active:scale-95"
            >
                Start Your Project
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
        </div>
      </section>

    </div>
  );
}
