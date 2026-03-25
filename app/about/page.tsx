import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "About | Abnexa Technologies",
  description: "Learn about Abnexa Technologies' mission to build high quality software faster using an efficient human and AI execution model.",
  alternates: { canonical: 'https://abnexatechnologies.in/about' }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-slate-950 selection:bg-indigo-600 selection:text-white overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-20%] w-[60%] h-[60%] bg-indigo-600/10 rounded-full blur-[140px] animate-subtle-float"></div>
        <div className="absolute bottom-[0%] right-[-10%] w-[50%] h-[50%] bg-violet-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mb-32">
          <p className="text-xs font-black text-indigo-400 uppercase tracking-widest mb-10 animate-fade-in">Brand Identity</p>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-12 tracking-tighter leading-[0.9] animate-fade-in-up">
            Architecting <br />
            <span className="gradient-text">Absolute Intent</span>
          </h1>
          <p className="text-2xl text-slate-400 leading-relaxed font-light max-w-3xl opacity-80 animate-fade-in delay-200">
            Abnexa Technologies was founded to eliminate the friction between business goals and technical execution. We replace traditional systems with modern models that prioritize speed, efficiency, and real world results.
          </p>
        </div>

        {/* Founder & Mission */}
        <div className="grid lg:grid-cols-2 gap-32 items-center mb-48">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="aspect-[4/5] bg-slate-900 overflow-hidden relative z-10 shadow-[0_0_80px_rgba(0,0,0,0.5)] transform group-hover:scale-[1.02] transition-transform duration-700">
              <Image
                src="/IMG_6714.jpg"
                alt="Founder Abubakr Siddiq"
                fill
                className="object-cover hover:grayscale-0 transition-all duration-1000"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-12 z-20 shadow-2xl hidden lg:block border border-slate-100">
                <p className="text-slate-950 font-black text-3xl uppercase tracking-widest">Abubakr Siddiq</p>
                <div className="flex items-center gap-4 mt-4">
                    <span className="w-12 h-1 bg-indigo-600"></span>
                    <p className="text-slate-500 font-black uppercase tracking-widest text-xs">Founder</p>
                </div>
            </div>
          </div>
          
          <div className="space-y-20 relative z-10">
            <div className="group">
              <h2 className="text-4xl font-black text-white mb-8 tracking-tighter uppercase leading-none italic group-hover:text-indigo-400 transition-colors">The Inefficiency Problem</h2>
              <p className="text-xl text-slate-400 leading-relaxed font-light">
                Traditional software companies rely on large teams and billable hours. This model encourages delays and rewards inefficiency. We saw a gap where serious founders and businesses were losing time and capital on projects that should have been delivered in weeks.
              </p>
            </div>
            <div className="group">
              <h2 className="text-4xl font-black text-white mb-8 tracking-tighter uppercase leading-none italic group-hover:text-indigo-400 transition-colors">Our Execution Model</h2>
              <p className="text-xl text-slate-400 leading-relaxed font-light">
                We combine senior human expertise with advanced intelligent systems to eliminate the waste found in traditional development pipelines. This allows us to deliver high quality products like our 14 Day MVPs and AI Growth Systems with absolute precision and at a fraction of the traditional cost.
              </p>
            </div>
            <div className="pt-10">
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-6 px-12 py-6 bg-white text-slate-950 font-black text-xl uppercase tracking-widest transition-all shadow-2xl hover:bg-indigo-50 active:scale-95 translate-y-0 hover:-translate-y-2"
                >
                    Build with Abnexa
                    <svg className="w-6 h-6 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </Link>
            </div>
          </div>
        </div>

        {/* Core Differentiation Banner */}
        <div className="p-32 bg-white text-slate-950 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-slate-50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
            <div className="relative z-10">
                <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter uppercase italic leading-[0.9]">High Quality <br /> <span className="text-indigo-600">& High Speed</span></h2>
                <p className="text-2xl md:text-3xl text-slate-500 max-w-5xl mx-auto leading-relaxed font-light italic opacity-80">
                    We do not position ourselves as the cheapest option. We position ourselves as the most efficient and outcome driven partner in the market. We build correctly from day one.
                </p>
            </div>
        </div>

      </div>
    </div>
  );
}
