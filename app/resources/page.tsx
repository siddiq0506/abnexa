import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "AI & Software Development Resources | Abnexa Insights",
    description: "Explore our resources on AI automation, MVP development, and custom software strategy. Expert guides and case studies for modern businesses.",
};

export default function ResourcesPage() {
    return (
        <div className="flex flex-col min-h-screen pt-20 bg-white dark:bg-gray-950">
            {/* Breadcrumbs */}
            <nav className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-500">
                <ol className="flex items-center space-x-2">
                    <li>
                        <Link href="/" className="hover:text-indigo-600">Home</Link>
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
                        AI & Software Engineering Insights
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                        Welcome to our authority hub for modern technology. Access expert guides, technical deep dives, and strategy playbooks for building intelligent software products.
                    </p>
                    <div className="flex justify-center">
                        <Link
                            href="/contact"
                            className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-700 transition-all shadow-md active:scale-95"
                        >
                            Request a Strategy Session
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. Featured Mega Guide Section */}
            <section className="py-20 bg-slate-50 dark:bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-white dark:bg-gray-950 rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl border border-indigo-100 dark:border-indigo-900/20 max-w-4xl mx-auto">
                        <span className="inline-block px-4 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold mb-6 uppercase tracking-wider">
                            Mega Guide
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            The 30 Day MVP Playbook: From Idea to Market at AI Speed
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                            Everything you need to know about rapid product development in the age of AI. Learn how to validate your concept, architect for scale, and launch in 30 days.
                        </p>
                        <div className="flex justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center text-indigo-600 font-bold text-xl hover:text-indigo-700 group px-8 py-3 rounded-xl border border-indigo-100 hover:bg-indigo-50 transition-all"
                            >
                                Start Building Your MVP
                                <svg className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Comparison Hub Section */}
            <section className="py-20 bg-white dark:bg-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Technology Evaluation Hub</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "AI Agents vs Traditional Automation", href: "#ai-agents-vs-automation" },
                            { title: "Custom Software vs Off the Shelf", href: "#custom-vs-off-the-shelf" },
                            { title: "Building In House vs Agency Partners", href: "#in-house-vs-agency" },
                            { title: "Modern Tech Stacks for 2026", href: "#modern-tech-stacks-2026" }
                        ].map((card, i) => (
                            <Link key={i} href={card.href} className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-indigo-300 hover:bg-white dark:hover:bg-gray-800 transition-all shadow-sm hover:shadow-md group">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-600 transition-colors">{card.title}</h3>
                                <span className="text-indigo-600 dark:text-indigo-400 font-semibold inline-flex items-center">
                                    Explore More
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
                            { title: "What are Autonomous AI Agents?", href: "#what-are-ai-agents" },
                            { title: "Why Most Software Projects Fail", href: "#why-projects-fail" },
                            { title: "AI Strategy for Small Businesses", href: "#ai-strategy-smb" },
                            { title: "Scaling from MVP to Platform", href: "#mvp-to-platform" },
                            { title: "The ROI of Intelligent Automation", href: "#roi-intelligent-automation" }
                        ].map((article, i) => (
                            <Link key={i} href={article.href} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{article.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">Expert analysis of key technology trends and business automation challenges.</p>
                                <span className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">Read Article →</span>
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
                            { title: "30 Day MVP Launch", desc: "How we took a fintech concept to market in 4 weeks.", href: "#case-study-mvp", color: "from-indigo-600 to-indigo-400" },
                            { title: "AI Agent Implementation", desc: "Automating customer operations for a global brand.", href: "#case-study-ai-agents", color: "from-violet-600 to-violet-400" },
                            { title: "Legacy System Transformation", desc: "Migrating enterprise operations to a modern platform.", href: "#case-study-legacy", color: "from-purple-600 to-purple-400" }
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
                                    <span className="text-[10px] uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400 mb-2 block">Case Study</span>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                        {study.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                        {study.desc}
                                    </p>
                                </div>

                                <div className="mt-8 flex items-center text-sm font-bold text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    View Results <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <div className="bg-slate-50 dark:bg-gray-900/50 py-20 border-t border-gray-100 dark:border-gray-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
                    
                    {/* Evaluation Content */}
                    <article id="ai-agents-vs-automation" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-tight">AI Agents vs Traditional Automation</h2>
                        <div className="prose prose-slate dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
                            <p>Traditional automation follows a rigid if this then that structure. It is excellent for repetitive tasks with zero variation. However, business environments are rarely static.</p>
                            <p>AI Agents represent a paradigm shift. Instead of being programmed with specific steps, they are given goals. They use large language models to reason, make decisions, and adapt to new information in real time. This allows them to handle complex workflows that previously required human intervention.</p>
                        </div>
                    </article>

                    <article id="custom-vs-off-the-shelf" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-tight">Custom Software vs Off the Shelf</h2>
                        <div className="prose prose-slate dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
                            <p>Off the shelf software is built for the average user. It often forces you to change your business processes to fit the tool. While the initial cost is lower, the long term cost of inefficiency and lack of competitive advantage can be massive.</p>
                            <p>Custom software is built around your unique workflows. It scales with you and provides a platform for innovation. With AI accelerated development, the cost and time gap between custom and generic solutions is closing rapidly.</p>
                        </div>
                    </article>

                    <article id="in-house-vs-agency" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-tight">Building In House vs Agency Partners</h2>
                        <div className="prose prose-slate dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
                            <p>Building an in house team is a long term commitment that requires significant management overhead and talent acquisition effort. For many businesses, it is not their core competency.</p>
                            <p>An agency partner like Abnexa provides instant access to senior talent and specialized expertise in AI and modern architecture. This allows you to scale up or down based on project needs without the burden of full time hiring.</p>
                        </div>
                    </article>

                    <article id="modern-tech-stacks-2026" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-tight">Modern Tech Stacks for 2026</h2>
                        <div className="prose prose-slate dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
                            <p>The tech stack of 2026 is defined by AI integration, serverless architecture, and edge computing. We focus on tools like Next.js for high performance frontends, Python for AI services, and scalable cloud infrastructure that requires minimal maintenance.</p>
                            <p>Performance, security, and the ability to rapidly iterate are the core requirements for any modern digital product.</p>
                        </div>
                    </article>

                    {/* Educational Content */}
                    <article id="what-are-ai-agents" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-tight">What are Autonomous AI Agents?</h2>
                        <div className="prose prose-slate dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
                            <p>Autonomous AI Agents are software programs that can perceive their environment, reason about how to achieve a goal, and take actions to accomplish it without constant human oversight.</p>
                            <p>They can use tools, browse the web, and interact with other software systems. In a business context, they can act as virtual employees handling everything from sales outreach to complex data analysis.</p>
                        </div>
                    </article>

                    <article id="why-projects-fail" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-tight">Why Most Software Projects Fail</h2>
                        <div className="prose prose-slate dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
                            <p>Most software projects fail not because of technical incompetence, but because of poor communication, scope creep, and a lack of focus on user needs. Building too much too soon is a common trap.</p>
                            <p>Our 30 Day MVP approach mitigates these risks by focusing on the core value proposition and getting a working product into the hands of real users as fast as possible.</p>
                        </div>
                    </article>

                    <article id="ai-strategy-smb" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-tight">AI Strategy for Small Businesses</h2>
                        <div className="prose prose-slate dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
                            <p>Small businesses often feel that AI is only for large enterprises. In reality, AI is the great equalizer. It allows small teams to compete with much larger organizations by automating heavy lifting and providing deep insights.</p>
                            <p>The key is to start small with high impact use cases like customer support automation or intelligent lead generation.</p>
                        </div>
                    </article>

                    <article id="mvp-to-platform" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-tight">Scaling from MVP to Platform</h2>
                        <div className="prose prose-slate dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
                            <p>An MVP is just the beginning. Scaling to a full platform requires a modular architecture that can grow without breaking. We design MVPs with this future in mind, ensuring that the foundation we build today can support the platform of tomorrow.</p>
                        </div>
                    </article>

                    <article id="roi-intelligent-automation" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-tight">The ROI of Intelligent Automation</h2>
                        <div className="prose prose-slate dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
                            <p>Return on investment for intelligent automation is measured not just in hours saved, but in error reduction, faster response times, and the ability to scale operations without proportional increases in headcount.</p>
                            <p>Businesses that embrace AI automation see immediate improvements in operational margins and employee satisfaction.</p>
                        </div>
                    </article>

                    {/* Case Study Content */}
                    <article id="case-study-mvp" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-tight">Case Study: 30 Day MVP Launch</h2>
                        <div className="prose prose-slate dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
                            <p>We partnered with a fintech startup to take their complex lending concept from a pitch deck to a live, production grade MVP in just 4 weeks. By leveraging our AI accelerated development pipeline, we were able to deliver a functional product that helped them secure their seed round of funding within months.</p>
                        </div>
                    </article>

                    <article id="case-study-ai-agents" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-tight">Case Study: AI Agent Implementation</h2>
                        <div className="prose prose-slate dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
                            <p>For a global retail brand, we implemented a swarm of AI agents to handle customer inquiries across multiple languages and time zones. This reduced their response time by 90 percent and allowed their human team to focus on high value loyalty programs.</p>
                        </div>
                    </article>

                    <article id="case-study-legacy" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-tight">Case Study: Legacy System Transformation</h2>
                        <div className="prose prose-slate dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
                            <p>We migrated a decades old enterprise operation from a fragmented on premise system to a modern, AI enabled cloud platform. The result was a 40 percent increase in operational efficiency and complete visibility for the leadership team.</p>
                        </div>
                    </article>

                </div>
            </div>

            {/* 6. Why Choose Abnexa Section */}
            <section className="py-24 bg-indigo-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose Abnexa Technologies</h2>
                        <p className="text-xl text-indigo-100 font-light">
                            We build the technology that allows modern businesses to scale without complexity.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "AI First Development Architecture",
                                desc: "We dont just use AI tools; we build AI into the core of your product. This ensures your software is intelligent, predictive, and ready for the future of business operations."
                            },
                            {
                                title: "Launch in 30 Days with MVP Playbook",
                                desc: "Stop waiting months for a launch. Our structured 30 Day MVP process gets your product to market fast, allowing you to gather real data and iterate based on actual user behavior."
                            },
                            {
                                title: "Autonomous AI Agents for Workflows",
                                desc: "We design agents that handle complex business tasks autonomously. From lead qualification to data processing, our agents work 24/7 to reduce your operational overhead."
                            },
                            {
                                title: "Scalable Infrastructure from Day One",
                                desc: "We build for growth. Every product is architected using modern cloud standards, ensuring your system can serve 100 or 100,000 users without needing a complete rebuild."
                            },
                            {
                                title: "Outcome Focused Technology Strategy",
                                desc: "Technology is a tool for business growth. We focus on the metrics that matter to you revenue, efficiency, and scale rather than just shipping code."
                            },
                            {
                                title: "Dedicated Partnership and Support",
                                desc: "We stay with you beyond the launch. As your technology partner, we provide ongoing support and strategy to ensure your product continues to lead the market."
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
                        <p className="text-3xl md:text-4xl font-extrabold text-indigo-300">Build the systems that define the future of business.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
