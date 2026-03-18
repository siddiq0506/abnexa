import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Services | AI Agents, Autonomous Workflows & MVP Development",
  description: "Explore our AI first services: from autonomous AI agents and intelligent automation to rapid 30 Day MVP development and scalable platform engineering.",
};

const services = [
  {
    title: 'Custom Software Products',
    description: 'We design and build bespoke software precisely tailored to your business. From internal tools to customer facing products, every solution is architected for performance, reliability, and scale.',
    tags: ['Web Applications', 'Mobile Apps', 'Enterprise Software', 'API Development'],
  },
  {
    title: '30 Day MVP Development',
    description: 'Get your product in front of real users in weeks. We build lean, functional MVPs that validate your concept, gather real feedback, and attract early adopters and investors.',
    tags: ['Rapid Prototyping', 'User Validation', 'Fast Launch', 'Go to Market'],
  },
  {
    title: 'AI Agents',
    description: 'We build autonomous AI agents that handle complex, multi step workflows across your business systems. From research agents to sales agents to operational agents, we design AI that works for you around the clock.',
    tags: ['Autonomous Workflows', 'LLM Integration', 'Multi Agent Systems', 'Business Automation'],
  },
  {
    title: 'AI Automation',
    description: 'Transform repetitive manual processes into intelligent, automated workflows. We identify your highest value automation opportunities and build systems that free your team to focus on work that matters.',
    tags: ['Process Automation', 'Workflow Intelligence', 'Data Pipelines', 'Integration'],
  },
  {
    title: 'AI Business Solutions',
    description: 'End to end AI systems designed to deliver measurable business outcomes. From predictive analytics to intelligent recommendation engines, we build AI that integrates into your operations and drives results.',
    tags: ['Predictive Analytics', 'AI Strategy', 'Custom AI Models', 'Business Intelligence'],
  },
  {
    title: 'Platform Development',
    description: 'Scalable digital platforms built for growth and reliability. Whether you are building a SaaS product, a marketplace, or an enterprise platform, we architect systems that serve thousands of users with confidence.',
    tags: ['SaaS Platforms', 'Marketplace Development', 'Cloud Architecture', 'Scalable Infrastructure'],
  },
  {
    title: 'Technology Strategy and Consulting',
    description: 'Not sure what to build or how to build it? We work with founders and leadership teams to define technology roadmaps, make the right architectural decisions, and build teams that can execute.',
    tags: ['Technology Roadmap', 'Architecture Review', 'Team Building', 'Product Strategy'],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#090914]">

      {/* Hero */}
      <section className="pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-indigo-400/8 dark:bg-indigo-600/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-5">Services</p>
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight leading-tight">
              What We Build
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
              From custom software products to advanced AI systems, we build the technology that helps modern businesses operate, scale, and compete.
            </p>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="group p-8 md:p-10 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 hover:border-indigo-200 dark:hover:border-indigo-800/40 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold font-heading">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="flex-1">
                    <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-white mb-3">
                      {service.title}
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6 max-w-2xl">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/5"
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

      {/* CTA */}
      <section className="py-24 border-t border-slate-100 dark:border-white/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Not sure which service fits your needs?
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-10">
            Talk to our team. We will help you identify the right approach and get the right solution built.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 group"
          >
            Get in Touch
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>

    </div>
  );
}
