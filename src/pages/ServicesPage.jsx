import React from 'react';
import CTAButton from '../components/CTAButton';

// Icons for Services Page (Reusing previous ones where possible)
const ErpIcon = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v6H4zM4 14h10v6H4zM16 14h4v6h-4z" /></svg>;
const CrmIcon = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7a4 4 0 118 0 4 4 0 01-8 0zm-3 13a6 6 0 1112 0H5zM18 14l3 3m0 0l3-3m-3 3v4" /></svg>;
const AutomationIcon = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3h6v4H9zM5 10h6v4H5zM13 17h6v4h-6zM16 7l-2 3m-4 4-2 3" /></svg>;
const ConstructionIcon = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M4 10l7-7 3 3 6 6M5 19v-6l6-6 2 2 6 6v4" /></svg>;


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
        { 
            title: "Custom ERP Systems", 
            description: "End to end ERP platforms for construction and project driven businesses — covering finance, BOQ, procurement, inventory, HR, billing and executive reporting.", 
            icon: ErpIcon 
        },
        { 
            title: "High Performance CRM", 
            description: "CRM systems that track enquiries, proposals, collections and client relationships with zero leakage across your sales and collections funnels.", 
            icon: CrmIcon 
        },
        { 
            title: "Industry Specific Automation", 
            description: "Automation of core workflows such as site reporting, approvals, checklists and compliance — designed around your reality, not generic templates.", 
            icon: AutomationIcon 
        },
        { 
            title: "Construction Tech Solutions", 
            description: "Jobsite monitoring, BOQ vs executed tracking, contractor performance visibility, and board ready dashboards for owners and leadership.", 
            icon: ConstructionIcon 
        },
    ];

    const processSteps = [
        { name: "Idea / Concept Validation", description: "Initial assessment and defining the core business value." },
        { name: "Design & Prototyping", description: "UI/UX wireframes, high-fidelity mockups, and interactive prototypes." },
        { name: "Build & Implementation", description: "Agile sprints delivering functional, tested code increments." },
        { name: "Launch & Go-Live", description: "Managed deployment and final quality assurance checks." },
        { name: "Scale & Optimize", description: "Monitoring performance and planning future feature iterations." },
    ];

    const benefits = [
        "Systems designed around profit protection and execution control.",
        "Architecture built to handle multi site, multi project realities.",
        "Operational visibility for owners, finance and project heads.",
        "Tight integration between ERP, CRM and on site reality.",
        "Implementation support that stays with you beyond go live.",
    ];

    return (
        <div className="space-y-24 pt-8 pb-16">
            <header className="text-center max-w-4xl mx-auto">
                <h1 className="text-[clamp(2rem,5vw+1rem,4rem)] font-bold mb-4 text-gray-900">
                    Solutions for Serious, Scale Focused Businesses
                </h1>
                <p className="text-lg sm:text-xl text-gray-600">
                    We design and implement ERP, CRM and automation systems that give you control over every project, rupee and relationship.
                </p>
                <div className='mt-8'>
                    <a href="#contact">
                        <CTAButton primary={true}>Start Your Project</CTAButton>
                    </a>
                </div>
            </header>

            {/* Services Section */}
            <section id="services-cards">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-900">Our Core Solutions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesData.map((service, index) => (
                        <ServiceCard 
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
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
