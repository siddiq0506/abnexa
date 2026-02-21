import React from 'react';
import CTAButton from '../components/CTAButton';
import FounderProfile from '../components/FounderProfile';

// Icons/Visual placeholders (using simple SVG placeholders for now)
const ControlIcon = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v6H4zM4 14h10v6H4zM16 14h4v6h-4z" /></svg>;
const CrmIcon = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7a4 4 0 118 0 4 4 0 01-8 0zm-3 13a6 6 0 1112 0H5zM18 14l3 3m0 0l3-3m-3 3v4" /></svg>;
const AutomationIcon = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3h6v4H9zM5 10h6v4H5zM13 17h6v4h-6zM16 7l-2 3m-4 4-2 3" /></svg>;
const ConstructionIcon = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M4 10l7-7 3 3 6 6M5 19v-6l6-6 2 2 6 6v4" /></svg>;

const CTA_DEMO_LINK = "#contact";
const CTA_HOW_IT_WORKS_LINK = "#constructos";

const ServiceCardPlaceholder = ({ id, title, description, icon: Icon }) => (
  <div id={id} className="p-6 bg-secondary rounded-xl shadow-lg border border-gray-200 hover:border-accent/50 transform hover:-translate-y-1 transition duration-300 animate-fade-in-up">
    <Icon className="w-10 h-10 text-accent mb-3" />
    <h4 className="text-xl font-semibold mb-2 text-gray-900">{title}</h4>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const HomePage = () => {
  const expertise = [
    { 
      id: "custom-erp",
      title: "Custom ERP Development", 
      description: "Centralise projects, finance, procurement, workforce and reporting into one controlled system.", 
      icon: ControlIcon 
    },
    { 
      id: "custom-crm",
      title: "Custom CRM Solutions", 
      description: "Track every enquiry, follow up, payment and client touchpoint with zero leakage.", 
      icon: CrmIcon 
    },
    { 
      title: "Industry Specific Automation", 
      description: "Translate your exact workflows into automated, rules driven systems instead of spreadsheets.", 
      icon: AutomationIcon 
    },
    { 
      title: "Construction Technology Solutions", 
      description: "Real time project, site and finance visibility across BOQ, execution, billing and collections.", 
      icon: ConstructionIcon 
    },
  ];

  const processSteps = [
    { name: "Discovery & Planning", description: "Deep dive into requirements, roadmap creation, and tech stack selection." },
    { name: "UI/UX Design", description: "Crafting elegant, conversion focused, and intuitive user interfaces." },
    { name: "Development", description: "Clean code implementation using modern, modular practices." },
    { name: "Testing & Deployment", description: "Rigorous QA and seamless, zero downtime deployment." },
    { name: "Post launch Support", description: "Ongoing maintenance, monitoring, and scaling infrastructure." },
  ];

  const whyChooseUsPoints = [
    "We think like operators first, technologists second.",
    "We design systems around margin protection and execution discipline.",
    "We build for chaotic site realities, not idealised dashboards.",
    "We obsess over numbers, controls and decision visibility.",
    "We stay long term as technology partners, not one time vendors.",
  ];

  return (
    <div className="space-y-16 md:space-y-24 pb-16">

      {/* 1. Hero Section */}
      <section id="home" className="pt-10 pb-16 md:pt-20 md:pb-24 relative overflow-hidden mx-3 sm:mx-4 lg:mx-0 rounded-3xl sm:rounded-[2.5rem]">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-x-0 -top-40 h-80 bg-gradient-to-br from-accent/40 via-cyan-500/10 to-transparent blur-3xl opacity-60" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-[clamp(2.4rem,4vw+1.5rem,3.6rem)] font-extrabold tracking-tight mb-4 leading-tight text-white">
                Take Control of Every Rupee in Your Construction Business
              </h1>
              <p className="text-base sm:text-lg text-slate-200 max-w-xl mx-auto lg:mx-0 mb-4">
                Custom ERP and CRM solutions built for growing businesses.
              </p>
              <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 mb-8">
                Powered by <span className="font-semibold text-accent-foreground">ConstructOS</span> — built specifically for serious contractors who want complete financial and operational control.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a href={CTA_DEMO_LINK} className="w-full sm:w-auto">
                  <CTAButton primary={true} className="w-full sm:w-auto justify-center">
                    Book a Live Demo
                  </CTAButton>
                </a>
                <a href={CTA_HOW_IT_WORKS_LINK} className="w-full sm:w-auto">
                  <CTAButton primary={false} className="w-full sm:w-auto justify-center">
                    See How It Works
                  </CTAButton>
                </a>
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-700 rounded-3xl p-5 sm:p-6 shadow-2xl backdrop-blur-md">
              <p className="text-xs font-semibold tracking-widest text-accent/80 uppercase mb-4">
                ConstructOS Owner Dashboard
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-slate-800 border border-slate-700">
                  <p className="text-xs text-slate-400 mb-1">Project Margin</p>
                  <p className="text-2xl font-bold text-emerald-400">18.4%</p>
                  <p className="text-xs text-emerald-400 mt-1">+2.3% vs last month</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-800 border border-slate-700">
                  <p className="text-xs text-slate-400 mb-1">Leakage Alerts</p>
                  <p className="text-2xl font-bold text-amber-400">3</p>
                  <p className="text-xs text-amber-400 mt-1">Material / Labour</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-800 border border-slate-700">
                  <p className="text-xs text-slate-400 mb-1">BOQ vs Executed</p>
                  <p className="text-2xl font-bold text-sky-400">92%</p>
                  <p className="text-xs text-sky-400 mt-1">On track</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-800 border border-slate-700">
                  <p className="text-xs text-slate-400 mb-1">Cash Flow Status</p>
                  <p className="text-2xl font-bold text-fuchsia-400">Healthy</p>
                  <p className="text-xs text-fuchsia-400 mt-1">Next 60 days</p>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
                <span>Real time site, finance and margin analytics.</span>
                <span className="text-accent font-semibold">ConstructOS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Expertise */}
      <section id="solutions" className="pt-12 px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6 text-gray-900">
          Our Expertise
        </h2>
        <p className="max-w-3xl mx-auto text-center text-gray-600 mb-10 md:mb-14">
          We design and build business operating systems that give construction leaders control over every rupee, every site, and every project.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {expertise.map((item, index) => (
            <ServiceCardPlaceholder 
              key={index}
              id={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </section>

      {/* 3. Featured Product: ConstructOS */}
      <section id="constructos" className="pt-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="glass rounded-3xl shadow-2xl border border-gray-200 p-6 md:p-8 lg:p-10">
            <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-2">
              Featured Product
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Meet ConstructOS
            </h2>
            <p className="text-lg font-semibold text-gray-700 mb-4">
              The Operating System for Profitable Contractors
            </p>
            <p className="text-base text-gray-600 mb-6">
              ConstructOS is built for serious contractors who want control.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li><span className="font-semibold">Real time cost monitoring</span> of material, labour and site expenses.</li>
              <li><span className="font-semibold">Instant margin leakage alerts</span> before profits silently disappear.</li>
              <li><span className="font-semibold">BOQ vs executed tracking</span> in real time at project and line item level.</li>
              <li><span className="font-semibold">GPS and photo attendance</span> to eliminate fake labour and ghost workers.</li>
              <li><span className="font-semibold">Cash flow and billing intelligence</span> for collections and payment planning.</li>
              <li><span className="font-semibold">Complete owner dashboard control</span> with one clear daily view.</li>
            </ul>
            <div className="mt-8 p-4 rounded-2xl bg-gray-900 text-gray-100">
              <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">Hard truth</p>
              <p className="text-base md:text-lg font-semibold">
                You do not need more projects. You need more control over the ones you already have.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 md:p-7 lg:p-8 rounded-3xl bg-slate-950 text-slate-50 border border-slate-800 shadow-2xl">
              <p className="text-sm font-semibold tracking-widest text-accent/80 uppercase mb-4">
                What ConstructOS Delivers
              </p>
              <p className="text-lg md:text-xl font-semibold mb-4">
                Ruthless visibility into cost, leakage and execution — without drowning your team in data entry.
              </p>
              <p className="text-sm md:text-base text-slate-200 mb-4">
                Designed with contractors, project directors and finance heads who live on sites, not in boardrooms. Every screen exists to answer one question:
              </p>
              <p className="text-base md:text-lg font-semibold text-emerald-400">
                “Are we really making the money we think we are?”
              </p>
            </div>
            <div className="p-5 rounded-2xl glass border border-gray-200">
              <p className="text-sm text-gray-700">
                Early access is available for a limited number of construction companies who are ready to operationalise serious control across their projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Problem Agitation */}
      <section id="gap" className="pt-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Gap Is Widening
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Your competitors are already adopting technology driven construction management.
          </p>
          <p className="text-base text-gray-600 mb-6">
            Every month, the gap between tech enabled contractors and old school contractors is growing wider.
          </p>
          <p className="text-base text-gray-800 mb-2">
            Do not be the contractor who says
          </p>
          <p className="text-xl font-semibold text-red-600 mb-4">
            “We have always done it this way.”
          </p>
          <p className="text-base text-gray-800 mb-2">
            Be the contractor who says
          </p>
          <p className="text-xl font-semibold text-emerald-600">
            “We know our numbers every single day.”
          </p>
        </div>
      </section>

      {/* 5. Value Proposition */}
      <section id="value" className="pt-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Protect Margins. Control Cash Flow. Scale Confidently.
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-10">
            ConstructOS gives owners and leadership teams the tools to run construction like a precision business, not a sequence of firefights.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 glass rounded-2xl border border-gray-200">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Prevent Profit Leakage</h3>
            <p className="text-sm text-gray-600">
              Detect margin erosion early across materials, labour, subcontractors and rework — before it shows up in your P&amp;L.
            </p>
          </div>
          <div className="p-6 glass rounded-2xl border border-gray-200">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Improve Decisions</h3>
            <p className="text-sm text-gray-600">
              Daily numbers, not monthly Excel files. Make approvals, hiring, procurement and pricing decisions with real time data.
            </p>
          </div>
          <div className="p-6 glass rounded-2xl border border-gray-200">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Scale Without Chaos</h3>
            <p className="text-sm text-gray-600">
              Add projects, teams and sites without losing control. Your systems carry discipline to every new project.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Who It Is For */}
      <section id="who-for" className="pt-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Who ConstructOS Is For
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Real estate developers",
              "Civil contractors",
              "Infrastructure companies",
              "Interior contractors",
              "EPC companies",
              "Growing construction firms",
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm font-medium text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Authority / About Section */}
      <section id="about" className="pt-16 px-4">
        <div className="max-w-5xl mx-auto mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A Technology Partner for Ambitious Construction Businesses
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            We are not just software developers. We are business system architects focused on operational control, scalable growth, and ruthless clarity on numbers.
          </p>
        </div>
        <FounderProfile />
      </section>

      {/* 8. Why Choose Us Section */}
      <section id="why-us" className="pt-12 px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 md:mb-14 text-gray-900">
            Why Choose Abnexa Technologies?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
          {whyChooseUsPoints.map((point, index) => (
            <div key={index} className="flex items-start space-x-4 group p-4 rounded-lg hover:bg-gray-50 transition duration-300">
                <div className="p-3 mt-1 rounded-full bg-accent/10 group-hover:bg-accent/20 transition duration-300 flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                    <h4 className="text-xl font-semibold mb-1 text-gray-900">{point}</h4>
                </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Process Section */}
      <section id="process" className="pt-16 px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 md:mb-16 text-gray-900">
            Our Seamless Development Process
        </h2>
        
        <div className="relative max-w-6xl mx-auto">
            {/* Timeline line (Applies to both dark/light mode due to Tailwind config) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 hidden sm:block"></div>
            
            {processSteps.map((step, index) => (
                <div key={index} className={`flex flex-col sm:flex-row items-center w-full mb-10 sm:mb-16 ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                    
                    {/* Content Card */}
                    <div className={`w-full sm:w-1/2 p-6 glass rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${index % 2 === 0 ? 'sm:pr-12' : 'sm:pl-12'} mb-6 sm:mb-0`}>
                        <div className="flex items-center mb-3 sm:hidden">
                            <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold mr-3">{index + 1}</span>
                            <h3 className="text-2xl font-bold text-accent">{step.name}</h3>
                        </div>
                        <h3 className="text-2xl font-bold text-accent mb-2 hidden sm:block">{step.name}</h3>
                        <p className="text-gray-600">{step.description}</p>
                    </div>

                    {/* Circle Marker (Hidden on mobile, centered on desktop) */}
                    <div className="hidden sm:flex w-16 h-16 absolute left-1/2 transform -translate-x-1/2 justify-center items-center z-10">
                        <div className="w-full h-full rounded-full bg-white border-4 border-accent flex items-center justify-center text-accent font-bold text-lg shadow-lg">
                            {index + 1}
                        </div>
                    </div>

                    {/* Empty space for alignment on desktop */}
                    <div className="hidden sm:block sm:w-1/2"></div>
                </div>
            ))}
        </div>
      </section>
      
      {/* 10. Tech Stack Section */}
      <section id="tech-stack" className="pt-16 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-gray-900">
            Built on Modern, Proven Technology
        </h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto p-6 glass rounded-2xl border-gray-200">
            {['React & Next.js', 'Node.js & Express', 'AI/ML Libraries', 'AWS / GCP / Azure', 'TypeScript', 'PostgreSQL'].map((tech, index) => (
                <div key={index} className="p-3 px-5 rounded-lg bg-gray-100 hover:bg-accent/20 transition duration-300 transform hover:scale-105">
                    <p className="text-sm font-medium text-gray-700">{tech}</p>
                </div>
            ))}
        </div>
      </section>

      {/* 11. Final Strong CTA */}
      <section id="book-demo" className="pt-16">
        <div className="max-w-4xl mx-auto text-center px-4 py-10 glass rounded-3xl shadow-2xl border border-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            If You Are Serious About Protecting Your Margins and Scaling Profitably
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            See your numbers clearly. Take control daily. Build profitably.
          </p>
          <a href={CTA_DEMO_LINK}>
            <CTAButton primary={true} className="px-10">
              Book a Live Demo of ConstructOS
            </CTAButton>
          </a>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
