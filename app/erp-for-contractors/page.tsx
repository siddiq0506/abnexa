import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CTAButton from '../../components/CTAButton';

export const metadata: Metadata = {
  title: 'ERP Software for Contractors | Abnexa Technologies',
  description: 'Abnexa provides specialized ERP software for contractors, offering solutions to manage projects, financials, and resources efficiently, tailored for the construction industry.',
};

export default function ErpForContractorsPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-indigo-50 to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">ERP Software</span> Built for Contractors
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Optimize your construction projects from bid to closeout with Abnexa’s powerful ERP, designed to handle the unique demands of contracting businesses.
          </p>
          <CTAButton text="See Contractor-Specific Features" href="/contact" size="lg" />
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overcoming Contractor Challenges with Smart ERP</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Contractors operate in a dynamic environment, constantly balancing tight deadlines, complex budgets, and extensive resource management. Without a centralized system, these challenges can lead to costly delays, budget overruns, and diminished profitability. Abnexa ERP for Contractors is specifically engineered to tackle these pain points. Our software provides comprehensive tools for project planning, cost tracking, labor management, and equipment utilization, all within a single, integrated platform. This means better visibility, improved control, and more efficient operations for every project.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                From small-scale renovations to large infrastructure projects, our ERP solution scales to meet your needs. We focus on delivering real-time data, enabling you to make informed decisions swiftly, mitigate risks, and maximize your project margins. Say goodbye to fragmented data and manual processes, and embrace a streamlined workflow that empowers your team to deliver projects on time and within budget, consistently.
              </p>
              <Link href="/construction-erp" className="text-blue-600 font-medium hover:underline">Explore Construction ERP &rarr;</Link>
            </div>
            <div className="relative h-64 sm:h-80 lg:h-96 w-full rounded-2xl shadow-xl overflow-hidden">
              <Image
                src="/images/contractor-erp.jpg" // Placeholder, replace with actual image
                alt="ERP for Contractors Dashboard"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Modules for Contractors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Modules for Contractor Success</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our tailored features directly address the operational needs of contracting businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🏗️',
                title: 'Project Costing & Budgeting',
                desc: 'Accurate cost tracking, budget adherence, and variance analysis for every project phase.'
              },
              {
                icon: '👷',
                title: 'Resource & Labor Management',
                desc: 'Optimize workforce deployment, track labor hours, and manage equipment allocation across sites.'
              },
              {
                icon: '🤝',
                title: 'Subcontractor & Vendor Management',
                desc: 'Streamline onboarding, contract management, and payment processing for all external partners.'
              },
              {
                icon: '📄',
                title: 'Document Management',
                desc: 'Centralized repository for contracts, blueprints, permits, and communications, ensuring easy access and version control.'
              },
              {
                icon: '💰',
                title: 'Financials & Billing',
                desc: 'Integrated accounting, invoicing, accounts payable, and receivable tailored for project-based accounting.'
              },
              {
                icon: '⚠️',
                title: 'Risk Management',
                desc: 'Identify, assess, and mitigate project risks with proactive alerts and reporting tools.'
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
      <section className="py-20 bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Smarter?</h2>
          <p className="text-indigo-100 mb-10 text-lg max-w-3xl mx-auto">
            Empower your contracting business with Abnexa ERP. Let us help you streamline operations and achieve project excellence.
          </p>
          <CTAButton text="Get a Free Consultation" href="/contact" size="lg" variant="secondary" />
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions for Contractors</h2>
          <div className="space-y-6">
            {[
              {
                q: "How does Abnexa ERP handle project-specific accounting?",
                a: "Abnexa ERP offers robust project-based accounting features, allowing for detailed cost tracking, revenue recognition, and profitability analysis at the individual project level, integrating seamlessly with your general ledger."
              },
              {
                q: "Can I manage multiple construction sites from one system?",
                a: "Yes, our platform is designed for multi-site operations, providing a centralized dashboard to monitor progress, resources, and financials across all your active construction projects."
              },
              {
                q: "Is the software mobile-friendly for field teams?",
                a: "Absolutely. Abnexa ERP includes mobile-responsive interfaces and dedicated apps (where applicable) for field teams to access critical information, submit reports, and track progress on-the-go."
              },
              {
                q: "What kind of reporting capabilities are available?",
                a: "Our ERP offers comprehensive reporting, including customizable dashboards, progress reports, cost analysis, labor productivity, and compliance reports, giving you deep insights into every aspect of your contracting business."
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
                  "name": "How does Abnexa ERP handle project-specific accounting?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Abnexa ERP offers robust project-based accounting features, allowing for detailed cost tracking, revenue recognition, and profitability analysis at the individual project level, integrating seamlessly with your general ledger."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I manage multiple construction sites from one system?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our platform is designed for multi-site operations, providing a centralized dashboard to monitor progress, resources, and financials across all your active construction projects."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is the software mobile-friendly for field teams?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Abnexa ERP includes mobile-responsive interfaces and dedicated apps (where applicable) for field teams to access critical information, submit reports, and track progress on-the-go."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What kind of reporting capabilities are available?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our ERP offers comprehensive reporting, including customizable dashboards, progress reports, cost analysis, labor productivity, and compliance reports, giving you deep insights into every aspect of your contracting business."
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
