import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CTAButton from '../../components/CTAButton';

export const metadata: Metadata = {
  title: 'Construction ERP Software | Abnexa Technologies',
  description: 'Abnexa provides advanced ERP software specifically designed for the construction industry, enhancing project management, financial control, and operational efficiency.',
};

export default function ConstructionErpPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
            Specialized <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Construction ERP</span> Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Revolutionize your construction projects with Abnexa’s integrated ERP, delivering unparalleled control and insight from groundbreaking to handover.
          </p>
          <CTAButton text="Request a Construction ERP Demo" href="/contact" size="lg" />
        </div>
      </section>

      {/* Introduction to Construction ERP */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Building Success with Purpose-Built Construction ERP</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The construction industry faces unique challenges, including complex project lifecycles, stringent regulatory requirements, and fluctuating material costs. Generic ERP solutions often fall short in addressing these specific needs. Abnexa’s Construction ERP is purpose-built to navigate these complexities, offering specialized modules that cater directly to every aspect of your construction business. From precise bid management and project scheduling to robust financial tracking and equipment maintenance, our solution provides a comprehensive suite of tools designed to optimize every phase of your project.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our platform provides real-time data visibility across all your sites, enabling project managers and stakeholders to monitor progress, identify potential issues, and make proactive decisions. This enhanced control not only boosts operational efficiency but also significantly reduces risks and enhances profitability. Empower your teams with a system that understands the nuances of construction, helping you deliver projects on time, within budget, and to the highest quality standards.
              </p>
              <Link href="/erp-software" className="text-blue-600 font-medium hover:underline">Explore General ERP Solutions &rarr;</Link>
            </div>
            <div className="relative h-64 sm:h-80 lg:h-96 w-full rounded-2xl shadow-xl overflow-hidden">
              <Image
                src="/images/construction-erp.jpg" // Placeholder, replace with actual image
                alt="Construction ERP Dashboard"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Modules for Construction */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Essential Modules for Construction Excellence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our integrated modules ensure every aspect of your construction project is managed with precision.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🏗️',
                title: 'Project Planning & Scheduling',
                desc: 'Advanced tools for Gantt charts, critical path analysis, and resource leveling to keep projects on track.'
              },
              {
                icon: '💲',
                title: 'Cost Estimation & Bid Management',
                desc: 'Accurate cost forecasting, bid preparation, and change order management to maximize profitability.'
              },
              {
                icon: '🚜',
                title: 'Equipment & Fleet Management',
                desc: 'Track equipment usage, maintenance schedules, and depreciation to optimize asset utilization.'
              },
              {
                icon: '👷',
                title: 'Field Service Management',
                desc: 'Dispatch, schedule, and track field teams with real-time updates and mobile accessibility.'
              },
              {
                icon: '🔒',
                title: 'Compliance & Safety Management',
                desc: 'Ensure adherence to industry regulations and safety standards with integrated checklists and reporting.'
              },
              {
                icon: '📊',
                title: 'Progress Tracking & Reporting',
                desc: 'Comprehensive dashboards and reports to monitor project progress, budget status, and key performance indicators.'
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Future with Confidence?</h2>
          <p className="text-purple-100 mb-10 text-lg max-w-3xl mx-auto">
            Empower your construction business with Abnexa ERP. Streamline operations, reduce costs, and enhance project delivery.
          </p>
          <CTAButton text="Talk to a Construction ERP Expert" href="/contact" size="lg" variant="secondary" />
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Construction ERP: Your Questions Answered</h2>
          <div className="space-y-6">
            {[
              {
                q: "How does Abnexa ERP help with bid management?",
                a: "Our ERP includes sophisticated bid management tools that allow you to create accurate cost estimates, manage proposal submissions, and track bid statuses, improving your success rate and project acquisition."
              },
              {
                q: "Can it integrate with CAD/BIM software?",
                a: "Abnexa ERP is designed with integration capabilities, supporting connections with popular CAD/BIM software to ensure seamless data flow between design, planning, and execution phases of your projects."
              },
              {
                q: "What kind of training and support is provided for construction teams?",
                a: "We offer specialized training programs for construction professionals, covering all modules relevant to their roles. Our support team is available to assist with any operational queries or technical issues, ensuring continuous project flow."
              },
              {
                q: "How does the software handle regulatory compliance in construction?",
                a: "Our compliance module is built to help you meet industry-specific regulations and safety standards through automated checklists, documentation management, and audit trails, reducing risks and ensuring adherence."
              }
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-100 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How does Abnexa ERP help with bid management?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our ERP includes sophisticated bid management tools that allow you to create accurate cost estimates, manage proposal submissions, and track bid statuses, improving your success rate and project acquisition."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can it integrate with CAD/BIM software?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Abnexa ERP is designed with integration capabilities, supporting connections with popular CAD/BIM software to ensure seamless data flow between design, planning, and execution phases of your projects."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What kind of training and support is provided for construction teams?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer specialized training programs for construction professionals, covering all modules relevant to their roles. Our support team is available to assist with any operational queries or technical issues, ensuring continuous project flow."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does the software handle regulatory compliance in construction?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our compliance module is built to help you meet industry-specific regulations and safety standards through automated checklists, documentation management, and audit trails, reducing risks and ensuring adherence."
                  }
                }
              ]
            }),
          }}
        />
      </section>
    </main>
  );
}
