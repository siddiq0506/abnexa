import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Abnexa Technologies | 14 Day MVP & AI Growth Systems",
  description: "Abnexa Technologies builds high quality products faster and more efficiently. Launch your MVP in 14 days and scale with our AI Growth Systems.",
};

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-950 text-white overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] bg-indigo-600/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] bg-violet-600/20 rounded-full blur-[100px] animate-subtle-float"></div>
        <div className="absolute bottom-[-10%] right-[20%] w-[40%] h-[40%] bg-cyan-700/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]"></div>
        {/* Abstract Grid Overlay */}
        <div 
            className="absolute inset-0 opacity-[0.05]" 
            style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-40 pb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping"></span>
            <span className="text-xs font-black uppercase tracking-widest text-indigo-300">Efficient Execution Model</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9] animate-fade-in-up">
          Build Your <br />
          <span className="gradient-text drop-shadow-[0_0_50px_rgba(99,102,241,0.3)]">MVP in 14 Days</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-16 max-w-3xl mx-auto leading-relaxed font-light opacity-80 animate-fade-in delay-200">
          We combine intelligent systems with expert execution to build high quality products faster and more efficiently than traditional software companies.
          <br className="hidden md:block mt-4" />
          <span className="font-bold text-white italic mt-6 block uppercase tracking-widest text-sm">Serious Clients Preferred</span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 animate-fade-in delay-300">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-12 py-6 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-black text-lg transition-all duration-300 uppercase tracking-widest rounded-none shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_50px_rgba(99,102,241,0.6)] hover:-translate-y-1"
          >
            Start Your MVP
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-12 py-6 bg-white/5 backdrop-blur-xl text-white font-black text-lg border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 uppercase tracking-widest rounded-none"
          >
            Strategy Call
          </Link>
        </div>
      </div>
    </section>
  );
}

function DifferentiationSection() {
  return (
    <section className="py-40 bg-white text-slate-950 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
            <p className="text-sm font-black text-indigo-600 uppercase tracking-widest mb-4">The Smarter Model</p>
            <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter">A Smarter Way to Build</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 font-light text-xl leading-relaxed">
          <div className="p-10 border border-slate-100 bg-slate-50 relative overflow-hidden group">
            <div className="text-slate-200 text-8xl font-black absolute -bottom-5 -right-5 opacity-50 group-hover:opacity-100 transition-opacity">01</div>
            <p className="relative z-10 text-slate-600">Traditional companies rely on large teams and billable hours.</p>
          </div>
          <div className="p-10 border-2 border-indigo-600 bg-white shadow-2xl scale-105 relative overflow-hidden group">
             <div className="text-indigo-50 text-8xl font-black absolute -bottom-5 -right-5 opacity-50 group-hover:opacity-100 transition-opacity">02</div>
             <p className="relative z-10 text-slate-900 font-bold">We use a modern execution model combining human expertise with intelligent systems to eliminate inefficiencies.</p>
          </div>
          <div className="p-10 border border-slate-100 bg-slate-50 relative overflow-hidden group">
            <div className="text-slate-200 text-8xl font-black absolute -bottom-5 -right-5 opacity-50 group-hover:opacity-100 transition-opacity">03</div>
            <p className="relative z-10 text-slate-600">This allows us to provide better output without unnecessary cost and delays.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MVPSection() {
  return (
    <section className="py-40 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-600/20 rounded-full blur-[80px]"></div>
            <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter leading-tight relative z-10">
              Launch Your <br />
              <span className="text-indigo-400 font-black">Product in 14 Days</span>
            </h2>
            <ul className="space-y-12 relative z-10">
              {[
                "Turn your idea into a working product quickly",
                "Built with a strong and scalable foundation",
                "Designed for real users and real feedback"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-2xl text-slate-300 font-light group">
                  <span className="w-12 h-1 bg-indigo-600 mr-8 group-hover:w-20 transition-all duration-300"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-20 flex flex-col items-center justify-center relative shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-50"></div>
             <div className="relative z-10 text-center">
                <div className="text-[200px] leading-none font-black text-white drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]">14</div>
                <div className="text-3xl font-black text-indigo-400 uppercase tracking-widest mt-4">Days to Launch</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AIGrowthSection() {
  return (
    <section className="py-40 bg-white text-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-end mb-24">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
                AI Systems That <br />
                <span className="text-indigo-600">Drive Revenue</span>
            </h2>
            <p className="text-2xl text-slate-500 font-light leading-relaxed max-w-xl">
                We design and implement autonomous systems that increase output and reduce manual overhead.
            </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Automate lead generation", desc: "Constant streams of qualified opportunities without manual effort." },
            { title: "Automate sales & follow ups", desc: "Never miss a lead. Intelligent systems that close deals." },
            { title: "Increase system output", desc: "Scale your operations without adding headcount." },
            { title: "Reduce manual effort", desc: "Free your team for high value strategic work." }
          ].map((item, i) => (
             <div key={i} className="p-12 bg-slate-50 border border-slate-100 hover:bg-white hover:border-indigo-600 transition-all duration-300 group shadow-sm hover:shadow-2xl">
               <span className="text-slate-200 text-3xl font-black mb-6 block group-hover:text-indigo-600 transition-colors">0{i + 1}</span>
               <h3 className="text-3xl font-black mb-4 tracking-tighter">{item.title}</h3>
               <p className="text-lg text-slate-500 font-light">{item.desc}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TargetAudienceSection() {
  return (
    <section className="py-40 bg-slate-950 text-white relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 italic">Who This Is For</h2>
            <p className="text-xl text-slate-400 font-light uppercase tracking-widest">Selectivity is our Strength</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
           <div className="bg-white/5 border border-white/10 p-16 shadow-2xl relative group overflow-hidden">
             <div className="absolute top-0 right-0 w-2 h-full bg-indigo-500 transform translate-x-1 group-hover:translate-x-0 transition-transform"></div>
             <h3 className="text-3xl font-black text-white mb-10 uppercase tracking-widest">We Work With</h3>
             <ul className="space-y-8 text-2xl text-slate-300 font-light">
               <li className="flex items-center"><span className="w-4 h-4 rounded-full bg-indigo-500 mr-6"></span> Serious founders</li>
               <li className="flex items-center"><span className="w-4 h-4 rounded-full bg-indigo-500 mr-6"></span> Growth focused businesses</li>
               <li className="flex items-center"><span className="w-4 h-4 rounded-full bg-indigo-500 mr-6"></span> Decision makers</li>
             </ul>
           </div>
           <div className="p-16 border border-white/5 opacity-40">
             <h3 className="text-3xl font-black text-slate-500 mb-10 uppercase tracking-widest">We Do Not Work With</h3>
             <ul className="space-y-8 text-2xl text-slate-500 font-light">
               <li className="flex items-center"><span className="w-4 h-px bg-slate-800 mr-6"></span> Casual explorers</li>
             </ul>
           </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col bg-white selection:bg-indigo-600 selection:text-white">
      <HeroSection />
      <DifferentiationSection />
      <MVPSection />
      <AIGrowthSection />
      <TargetAudienceSection />
    </div>
  );
}
