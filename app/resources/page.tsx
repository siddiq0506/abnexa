import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Strategic Intelligence | Abnexa Technologies",
    description: "Deep dives and strategy playbooks for building 14 Day MVPs and AI Growth Systems. High authority insights for modern business founders.",
    alternates: { canonical: 'https://abnexatechnologies.in/resources' }
};

export default function ResourcesPage() {
    return (
        <div className="flex flex-col min-h-screen pt-32 bg-slate-950 selection:bg-indigo-600 selection:text-white overflow-hidden">

            {/* Background Effects */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[140px] animate-pulse"></div>
                <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-violet-600/10 rounded-full blur-[120px] animate-subtle-float"></div>
            </div>

            {/* Hero Section */}
            <section className="py-32 relative z-10 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-xs font-black text-indigo-400 uppercase tracking-widest mb-10 animate-fade-in">Authority Hub</p>
                    <h1 className="text-6xl md:text-8xl font-black text-white mb-12 tracking-tighter leading-[0.9] animate-fade-in-up">
                        Strategic <br />
                        <span className="gradient-text">Intelligence</span>
                    </h1>
                    <p className="text-2xl text-slate-400 max-w-4xl mx-auto mb-20 leading-relaxed font-light opacity-80 animate-fade-in delay-200">
                        Access technical deep dives, strategy playbooks, and insights on building high quality software products and AI growth systems at absolute speed.
                    </p>
                    <div className="flex justify-center opacity-0 animate-fade-in delay-300 fill-mode-forwards">
                        <Link
                            href="/contact"
                            className="bg-white text-slate-950 px-12 py-6 font-black text-xl uppercase tracking-widest hover:bg-indigo-50 transition-all shadow-2xl transform hover:scale-105 active:scale-95"
                        >
                            Request Strategy Session
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Playbook Section */}
            <section className="py-48 bg-white text-slate-950 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-slate-950 p-16 md:p-32 shadow-[0_0_100px_rgba(0,0,0,0.4)] border-l-8 border-indigo-600 max-w-6xl mx-auto relative group overflow-hidden">
                        
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 transform translate-x-32 -translate-y-32 rotate-45 group-hover:bg-indigo-600/20 transition-colors"></div>
                        
                        <div className="relative z-10">
                            <span className="inline-block px-6 py-2 bg-white/5 text-indigo-300 text-xs font-black mb-12 uppercase tracking-[0.2em] border border-white/10">
                                Primary Playbook
                            </span>
                            <h2 className="text-5xl md:text-8xl font-black text-white mb-10 leading-[0.9] tracking-tighter italic">
                                The 14 Day MVP: <br /> <span className="text-indigo-500">Speed as a Moat</span>
                            </h2>
                            <p className="text-2xl text-slate-400 mb-16 leading-relaxed max-w-4xl font-light italic opacity-80">
                                Everything necessary for rapid product development in the age of AI. Learn how to validate your concept, architect for absolute scale, and launch in exactly two weeks.
                            </p>
                            <div className="flex">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center text-white font-black text-2xl hover:text-indigo-400 group transition-all"
                                >
                                    Start Building Your MVP
                                    <svg className="w-8 h-8 ml-6 group-hover:translate-x-4 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Evaluation Hub Section */}
            <section className="py-48 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-5xl font-black text-white mb-24 tracking-tighter uppercase italic">Technology Hub</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "AI Growth Systems vs Traditional Sales", href: "#ai-growth-vs-traditional" },
                            { title: "Custom Software Strategy for Founders", href: "#custom-software-strategy" },
                            { title: "Building at Speed with AI Models", href: "#building-at-speed" },
                            { title: "Modern Tech Stacks for 2026", href: "#modern-tech-stacks" }
                        ].map((card, i) => (
                            <Link key={i} href={card.href} className="p-12 bg-white/5 border border-white/10 backdrop-blur-xl hover:border-indigo-500 hover:bg-white/10 transition-all shadow-2xl group flex flex-col justify-between aspect-square">
                                <h3 className="text-2xl font-black text-white mb-8 group-hover:text-indigo-400 transition-colors uppercase tracking-tight leading-[1.1]">{card.title}</h3>
                                <span className="text-slate-500 font-black uppercase tracking-widest text-[10px] inline-flex items-center group-hover:text-white transition-colors">
                                    Deep Dive
                                    <svg className="w-5 h-5 ml-4 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies Section */}
            <section className="py-48 bg-white text-slate-950 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-5xl font-black text-slate-950 mb-24 tracking-tighter uppercase italic leading-none">Real World <br /> <span className="text-indigo-600">Outcomes</span></h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: "14 Day MVP Launch", desc: "Took a fintech concept from pitch deck to market in exactly two weeks.", metric: "Launch in 14 Days" },
                            { title: "AI Sales Engine", desc: "Automated lead generation and follow ups for a global brand.", metric: "300% Output Boost" },
                            { title: "Modern Integration", desc: "Migrated enterprise operations to an AI enabled platform.", metric: "40% Margin Gain" }
                        ].map((study, i) => (
                            <div
                                key={i}
                                className="p-16 bg-slate-50 border border-slate-100 flex flex-col justify-between group hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
                            >
                                <div>
                                    <div className="w-16 h-1 bg-indigo-600 mb-12 group-hover:w-32 transition-all duration-500"></div>
                                    <h3 className="text-3xl font-black mb-8 tracking-tighter italic uppercase">{study.title}</h3>
                                    <p className="text-xl text-slate-500 font-light leading-relaxed mb-12 italic opacity-80">{study.desc}</p>
                                </div>
                                <div className="pt-10 border-t border-slate-200">
                                    <p className="text-slate-400 text-xs font-black uppercase tracking-[0.2em] mb-4">Outcome</p>
                                    <p className="text-slate-950 font-black text-2xl tracking-tight italic">{study.metric}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Outcome Statement */}
            <section className="py-48 bg-slate-950 text-white relative h-screen flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-transparent opacity-10 blur-3xl pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-600 rounded-full"></div>
                </div>
                <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-6xl md:text-9xl font-black text-white mb-16 tracking-tighter uppercase leading-[0.85] italic opacity-0 animate-fade-in-up fill-mode-forwards">Define the <br /> <span className="gradient-text">Future</span></h2>
                    <p className="text-2xl text-slate-400 font-light italic mb-20 leading-relaxed max-w-3xl mx-auto opacity-0 animate-fade-in delay-500 fill-mode-forwards">
                        Abnexa is for those who value speed without compromising on quality or absolute clarity.
                    </p>
                    <div className="opacity-0 animate-fade-in delay-700 fill-mode-forwards">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-6 px-16 py-8 bg-white text-slate-950 font-black text-2xl uppercase tracking-[0.2em] transform hover:scale-110 active:scale-95 transition-all shadow-2xl"
                        >
                            Inquire Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
