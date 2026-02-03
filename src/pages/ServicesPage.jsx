import React from 'react';
import CTAButton from '../components/CTAButton';

// Icons for Services Page (Reusing previous ones where possible)
const WebDevIcon = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>; // Reusing a generic/layout icon placeholder for now
const CloudIcon = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-2.006M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>;
const AiIcon = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const CustomIcon = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253" /></svg>;
const StartupIcon = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8L10 14m5-7l-7 7" /></svg>;


const ServiceCard = ({ title, description, icon: Icon }) => (
    <div className="p-6 md:p-8 glass rounded-2xl shadow-xl border border-gray-200 flex flex-col h-full transition duration-300 hover:shadow-2xl hover:border-accent/60 group">
        <div className="p-4 bg-accent/10 rounded-lg inline-flex self-start mb-4 transition duration-300 group-hover:bg-accent/20">
            <Icon className="w-8 h-8 text-accent" />
        </div>
        <h4 className="text-2xl font-bold mb-3 text-gray-900">{title}</h4>
        <p className="text-gray-600 flex-grow">{description}</p>
    </div>
);

const ServiceBenefit = ({ text }) => (
    <li className="flex items-center space-x-3 text-lg text-gray-700 animate-fade-in-up">
        <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        <span>{text}</span>
    </li>
);

const ServicesPage = () => {
    const servicesData = [
        { title: "Website Design & Development", description: "Bespoke landing pages, corporate sites, and complex internal web applications. Focus on modern standards and conversion rate optimization (CRO)." },
        { title: "SaaS Product Development", description: "Full lifecycle support: From initial MVP feature set to architecting scalable, multi tenant production applications ready for rapid growth." },
        { title: "AI Powered App Development", description: "Harnessing Machine Learning, custom LLMs, intelligent chatbots, and predictive analytics to automate processes and unlock new value." },
        { title: "Custom Software Solutions", description: "Tailored software built from the ground up for startups and established businesses needing unique operational advantages." },
        { title: "API Integrations & Dashboards", description: "Building robust backend infrastructure, secure REST/GraphQL APIs, and insightful admin panels/dashboards for operational clarity." },
        { title: "Ongoing Maintenance & Scaling", description: "Proactive support, performance monitoring, security patching, and infrastructure scaling to meet evolving demand." },
    ];

    const processSteps = [
        { name: "Idea / Concept Validation", description: "Initial assessment and defining the core business value." },
        { name: "Design & Prototyping", description: "UI/UX wireframes, high-fidelity mockups, and interactive prototypes." },
        { name: "Build & Implementation", description: "Agile sprints delivering functional, tested code increments." },
        { name: "Launch & Go-Live", description: "Managed deployment and final quality assurance checks." },
        { name: "Scale & Optimize", description: "Monitoring performance and planning future feature iterations." },
    ];

    const benefits = [
        "Blazing Fast Load Speeds",
        "Scalability baked into the architecture",
        "Enterprise grade Security posture",
        "Maintainable, Clean Code Standards",
        "Maximum ROI through UX focus"
    ];

    return (
        <div className="space-y-24 pt-8 pb-16">
            <header className="text-center max-w-4xl mx-auto">
                <h1 className="text-[clamp(2rem,5vw+1rem,4rem)] font-bold mb-4 text-gray-900">
                    Complete Digital Solutions Portfolio
                </h1>
                <p className="text-lg sm:text-xl text-gray-600">
                    We deliver technology solutions that solve complex problems and drive measurable business outcomes across every layer of the digital stack.
                </p>
                <div className='mt-8'>
                    <a href="#contact">
                        <CTAButton primary={true}>Start Your Project</CTAButton>
                    </a>
                </div>
            </header>

            {/* Services Section */}
            <section id="services-cards">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-900">Our Core Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <ServiceCard 
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={
                                index === 0 ? WebDevIcon : 
                                index === 1 ? CloudIcon : 
                                index === 2 ? AiIcon : 
                                index === 3 ? CustomIcon : StartupIcon
                            }
                        />
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <section id="service-process">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-900">Our Development Blueprint</h2>
                <div className="relative max-w-6xl mx-auto">
                    {/* Timeline line (Visual enhancement) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-[98%] w-0.5 bg-gray-300 hidden sm:block"></div>
                    
                    {processSteps.map((step, index) => (
                        <div key={index} className={`flex items-center w-full mb-10 sm:mb-16 ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                            
                            {/* Content Card */}
                            <div className={`w-full sm:w-1/2 p-6 md:p-8 glass rounded-xl shadow-lg transition duration-500 ${index % 2 === 0 ? 'sm:pr-12' : 'sm:pl-12'}`}>
                                <div className="flex items-center mb-2 sm:hidden">
                                    <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold mr-3 text-sm shrink-0">{index + 1}</span>
                                    <h3 className="text-xl font-bold text-accent">{step.name}</h3>
                                </div>
                                <h3 className="hidden sm:block text-2xl font-bold text-accent mb-2">{step.name}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>

                            {/* Circle Marker */}
                            <div className="hidden sm:flex w-16 h-16 absolute left-1/2 transform -translate-x-1/2 justify-center items-center z-10">
                                <div className="w-full h-full rounded-full bg-white border-4 border-accent flex items-center justify-center text-accent font-bold text-lg shadow-lg animate-fade-in-up">
                                    {index + 1}
                                </div>
                            </div>

                            <div className="hidden sm:block sm:w-1/2"></div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-10">
                    <p className="text-gray-600 italic text-sm">
                        Blueprint: Idea &rarr; Design &rarr; Build &rarr; Launch &rarr; Scale
                    </p>
                </div>
            </section>

            {/* Benefits Section */}
            <section id="benefits" className="pt-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 text-gray-900">The Abnexa Advantage</h2>
                <ul className="space-y-4 max-w-3xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <ServiceBenefit key={index} text={benefit} />
                    ))}
                </ul>
            </section>

        </div>
    );
};

export default ServicesPage;