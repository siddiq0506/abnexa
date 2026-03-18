import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Abnexa Technologies | Custom AI Solutions & 30 Day MVP Development",
  description: "Abnexa Technologies builds intelligent AI agents, autonomous business workflows, and production ready software products. Launch your idea in 30 days with our AI accelerated MVP playbook.",
};

function IconCode() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}
function IconRocket() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.82m2.56-5.84a14.927 14.927 0 00-2.58 5.841" />
    </svg>
  );
}
function IconBrain() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}
function IconLightning() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}
function IconChart() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}
function IconLayers() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2l10 6.5-10 6.5L2 8.5 12 2zM2 15.5l10 6.5 10-6.5M2 11.5l10 6.5 10-6.5" />
    </svg>
  );
}

const services = [
  {
    icon: <IconCode />,
    title: 'Custom Software Products',
    description: 'We design and build bespoke software tailored precisely to your business needs. Robust, scalable, and built to last.',
    color: 'indigo',
  },
  {
    icon: <IconRocket />,
    title: '30 Day MVP Development',
    description: 'Launch your product in weeks, not months. We build lean, functional MVPs that validate your idea and attract real users fast.',
    color: 'violet',
  },
  {
    icon: <IconBrain />,
    title: 'AI Agents',
    description: 'Intelligent autonomous agents that handle complex workflows, decision making, and operations across your business systems.',
    color: 'purple',
  },
  {
    icon: <IconLightning />,
    title: 'AI Automation',
    description: 'Replace repetitive manual processes with intelligent automation. Save time, reduce errors, and scale operations effortlessly.',
    color: 'indigo',
  },
  {
    icon: <IconChart />,
    title: 'AI Business Solutions',
    description: 'End to end AI systems designed to deliver measurable outcomes. From intelligent analytics to predictive decision engines.',
    color: 'violet',
  },
  {
    icon: <IconLayers />,
    title: 'Platform Development',
    description: 'Scalable digital platforms built for growth. From SaaS products to enterprise grade platforms that serve thousands of users.',
    color: 'purple',
  },
];

const colorMap: Record<string, { bg: string; text: string }> = {
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600' },
  violet: { bg: 'bg-violet-50', text: 'text-violet-600' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600' },
};

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We start by deeply understanding your business, users, and goals. No assumptions, only precise clarity on what to build and why.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'We architect the solution with a focus on user experience, technical scalability, and future growth. Every decision is intentional.',
  },
  {
    number: '03',
    title: 'Development',
    description: 'We build with precision using modern technology stacks. AI accelerators allow us to move fast without compromising quality.',
  },
  {
    number: '04',
    title: 'Deployment',
    description: 'We launch, monitor, and iterate. Your product goes from code to real users with full support and performance oversight.',
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col bg-white">

      {/* ─── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-white">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100/60 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-100/40 rounded-full blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-28">

          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium mb-10">
            <span className="flex h-2 w-2 rounded-full bg-indigo-500" />
            Global Software and AI Solutions
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(2.6rem,5.5vw,4.75rem)] font-heading font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.08]">
            Build Your <span className="gradient-text">MVP in 30 Days</span>
            <br className="hidden md:block" />
            AI Automation and
            <br className="hidden md:block" />
            Custom Software Solutions
          </h1>

          {/* Subtext */}
          <p className="text-[clamp(1.05rem,1.8vw,1.275rem)] text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            We build high performance digital products and intelligent business systems. From rapid 30 day MVP development to AI automation and autonomous agents that scale your operations.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-[15px] shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              Start Your Project
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 font-semibold text-[15px] border border-slate-200 hover:border-slate-300 transition-all duration-200 active:scale-95 text-center"
            >
              Explore Services
            </Link>
          </div>

          <p className="mt-12 text-sm text-slate-400">
            Trusted by businesses across industries worldwide
          </p>
        </div>
      </section>

      {/* ─── MVP HIGHLIGHT ────────────────────────────── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-[2rem] p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-heading font-black mb-6 leading-tight uppercase tracking-tight">
              Build your MVP in 30 days
            </h2>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto leading-relaxed font-medium mb-8">
              Stop waiting months to launch. We take your idea from concept to a production ready product in exactly four weeks.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="px-10 py-4 bg-white text-indigo-600 font-bold text-lg rounded-xl hover:bg-indigo-50 transition-all shadow-lg active:scale-95"
              >
                Start Your 30 Day Countdown
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────────── */}
      <section className="py-28 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-4">What We Build</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
              Technology Services Built for the Modern Business
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              We combine deep technical expertise with strategic thinking to deliver software products and AI solutions that create real business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => {
              const c = colorMap[service.color];
              return (
                <div
                  key={i}
                  className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`inline-flex p-3 rounded-xl ${c.bg} ${c.text} mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 30 DAY MVP ───────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 p-[1px]">
              <div className="bg-white rounded-3xl p-10 md:p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-[80px] pointer-events-none" />

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white text-xs font-bold uppercase tracking-widest mb-8">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  30 Day MVP
                </div>

                <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                  The fastest path from{' '}
                  <span className="gradient-text">idea to product</span>
                </h2>

                <p className="text-lg text-slate-600 mb-6 leading-relaxed max-w-2xl">
                  There is only one way to understand how well a product works and how it can improve. Put it in front of real users.
                </p>
                <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
                  Abnexa Technologies uses AI accelerators to speed up development and deliver working MVPs quickly. This allows faster feedback, better decisions, and stronger products.
                </p>

                <div className="mt-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 group"
                  >
                    Build Your MVP
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  {['AI Accelerated', 'Real User Feedback', 'Rapid Iteration', 'Production Quality'].map((chip) => (
                    <span
                      key={chip}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY ABNEXA ───────────────────────────────── */}
      <section className="py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[120px]" />
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-5">Why Abnexa</p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
                Technology expertise meets business clarity
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                We combine deep technology expertise with practical business understanding. Every product we build is designed to solve a real problem, not just demonstrate technical skill.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { title: 'We Build Fast', desc: 'AI accelerated development pipelines mean you get to market sooner and stay ahead of the competition.', icon: '⚡' },
                { title: 'We Build Scalable', desc: 'Every system is architected to handle growth from day one, so you never have to rebuild from scratch.', icon: '📈' },
                { title: 'Real Outcomes', desc: 'We measure success by your business results, not just delivery milestones. Your growth is our metric.', icon: '🎯' },
                { title: 'AI First Development', desc: 'We integrate AI at the core of development to accelerate delivery and build smarter systems.', icon: '🧠' },
              ].map((pillar, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-400/30 transition-all duration-300"
                >
                  <div className="text-2xl mb-4">{pillar.icon}</div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ──────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-4">How We Work</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              From idea to deployment
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              A clear, proven process that takes your vision from concept to a live, working product.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%_-_24px)] w-[calc(100%_-_32px)] h-px bg-gradient-to-r from-indigo-200 to-transparent z-0" />
                )}
                <div className="relative z-10">
                  <div className="text-5xl font-heading font-black text-slate-100 mb-4 leading-none select-none">
                    {step.number}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ────────────────────────────────────── */}
      <section className="py-28 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-5">About Abnexa</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
              A technology company built for the intelligent era
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-6">
              Abnexa Technologies is a modern technology company focused on building intelligent software systems and AI powered solutions for businesses globally.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed">
              We work closely with founders, product teams, and enterprise leaders to design and deliver custom software products that drive real growth. Our approach is precise, collaborative, and always outcomes focused.
            </p>
            <div className="mt-12">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors group"
              >
                Learn more about us
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RESOURCES ────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-slate-50 border border-slate-100">
            <div>
              <h2 className="font-heading text-xl md:text-2xl font-bold text-slate-900 mb-1">
                Insights and Resources
              </h2>
              <p className="text-slate-500 text-sm">
                Guides, insights, and thinking on software, AI, and technology strategy.
              </p>
            </div>
            <Link
              href="/resources"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-100 hover:border-slate-300 transition-all duration-200 group"
            >
              Browse Resources
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────── */}
      <section className="py-32 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-600/20 rounded-full blur-[120px]" />
          <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-violet-600/10 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-3xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-900/60 border border-indigo-700/50 text-indigo-300 text-sm font-medium mb-10">
            Ready to build something great
          </div>

          <h2 className="font-heading text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
            Ready to build your next product or{' '}
            <span className="gradient-text">AI system</span>
          </h2>

          <p className="text-xl text-slate-400 mb-12 leading-relaxed">
            Start your journey with Abnexa Technologies. Tell us what you are building and we will help you build it right.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-9 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-1 active:scale-95 transition-all duration-200"
            >
              Start a Project
            </Link>
            <Link
              href="/services"
              className="px-9 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-lg border border-white/15 hover:border-white/25 transition-all duration-200 active:scale-95"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
