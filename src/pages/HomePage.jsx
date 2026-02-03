import React, { useContext } from 'react';
import CTAButton from '../components/CTAButton';
import { ThemeContext } from '../main';
import FounderProfile from '../components/FounderProfile';

// Icons/Visual placeholders (using simple SVG placeholders for now)
const CodeIcon = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 8l-4 4 4 4" /></svg>;
const CloudIcon = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-2.006M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>;
const AiIcon = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;

const CTA_CONSULTATION_LINK = "#contact";
const CTA_SERVICES_LINK = "#services"; // Will link to ServicesPage component later

const ServiceCardPlaceholder = ({ title, description, icon: Icon }) => (
    <div className="p-6 bg-secondary rounded-xl shadow-lg border border-gray-200 hover:border-accent/50 transform hover:translate-y-[-4px] transition duration-300 animate-fade-in-up">
        <Icon className="w-10 h-10 text-accent mb-3" />
        <h4 className="text-xl font-semibold mb-2 text-gray-900">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
    </div>
);


const HomePage = () => {
  // ThemeContext usage removed as toggle is gone

  const servicesSummary = [
    { title: "Website Development", description: "High performance landing pages and dynamic web applications.", icon: CodeIcon },
    { title: "SaaS Product Development", description: "From MVP scoping to building scalable, robust production systems.", icon: CloudIcon },
    { title: "AI Powered Applications", description: "Integrating custom AI, chatbots, and intelligent data analytics.", icon: AiIcon },
  ];

  const processSteps = [
    { name: "Discovery & Planning", description: "Deep dive into requirements, roadmap creation, and tech stack selection." },
    { name: "UI/UX Design", description: "Crafting elegant, conversion focused, and intuitive user interfaces." },
    { name: "Development", description: "Clean code implementation using modern, modular practices." },
    { name: "Testing & Deployment", description: "Rigorous QA and seamless, zero downtime deployment." },
    { name: "Post launch Support", description: "Ongoing maintenance, monitoring, and scaling infrastructure." },
  ];

  const whyChooseUsPoints = [
    "End to end development lifecycle ownership.",
    "Startup friendly flexibility, enterprise grade resilience.",
    "Fanatical focus on performance, UX, and scalability.",
    "AI first thinking integrated from concept to launch.",
    "Transparent, agile communication channels.",
  ];

  return (
    <div className="space-y-16 md:space-y-24 pb-16">

      {/* 1. Hero Section */}
      <section id="hero" className="pt-16 pb-12 md:pt-24 md:pb-24 text-center relative overflow-hidden">
        {/* Futuristic Abstract Visual Placeholder - Subtle background effect */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="w-64 h-64 md:w-96 md:h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-subtle-float absolute top-[-10%] left-[-10%]"></div>
            <div className="w-64 h-64 md:w-72 md:h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-subtle-float animation-delay-1000 absolute bottom-[-10%] right-[-10%]"></div>
        </div>

        <h1 className="text-[clamp(2.5rem,5vw+1rem,5rem)] font-extrabold tracking-tight mb-6 relative z-10 leading-tight text-gray-900 px-4">
          We Build Scalable Software, <br className='hidden sm:inline'/> SaaS & AI Powered Products
        </h1>
        <p className="text-lg sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 relative z-10 animate-fade-in-up animation-delay-500 px-6">
          Your end to end digital solutions partner, transforming complex challenges into high conversion, high performance software.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 relative z-10 animate-fade-in-up animation-delay-1000 px-6">
          <a href={CTA_CONSULTATION_LINK} className="w-full sm:w-auto">
            <CTAButton primary={true} className="w-full sm:w-auto justify-center">Book a Free Consultation</CTAButton>
          </a>
          <a href={CTA_SERVICES_LINK} className="w-full sm:w-auto">
            <CTAButton primary={false} className="w-full sm:w-auto justify-center">View Our Services</CTAButton>
          </a>
        </div>
      </section>

      {/* 2. Services Overview Section */}
      <section id="services-summary" className="pt-12 px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 md:mb-16 text-gray-900">
            Our Digital Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {servicesSummary.map((service, index) => (
            <ServiceCardPlaceholder 
              key={index} 
              title={service.title} 
              description={service.description} 
              icon={service.icon} 
            />
          ))}
        </div>
      </section>

      {/* 3. Founder Profile Section */}
      <FounderProfile />

      {/* 4. Why Choose Us Section */}
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
                    <h4 className="text-xl font-semibold mb-1 text-gray-900">{point.split(':')[0]}</h4>
                    <p className="text-gray-600">{point.split(': ')[1] || point}</p>
                </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Process Section */}
      <section id="process" className="pt-12 px-4">
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
      
      {/* 6. Tech Stack Section (Optional Enhancement) */}
      <section id="tech-stack" className="pt-12 text-center">
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

      {/* Floating CTA Button (Optional Enhancement) - Note: This would ideally use CSS positioning absolute relative to the viewport, but we'll use a fixed container relative to the page for simplicity here */}
      <a href={CTA_CONSULTATION_LINK} className="fixed bottom-8 right-8 z-50 hidden lg:block animate-fade-in-up">
        <CTAButton primary={true} className="text-base shadow-2xl">
            Book Now
        </CTAButton>
      </a>

    </div>
  );
};

export default HomePage;