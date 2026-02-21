import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CTAButton from '../../components/CTAButton';

export const metadata: Metadata = {
  title: 'Enterprise ERP Software Solutions | Abnexa Technologies',
  description: 'Abnexa provides comprehensive ERP software solutions tailored for enterprises to optimize operations, enhance efficiency, and drive strategic growth across all departments.',
};

export default function ErpSoftwarePage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
            Enterprise-Grade <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">ERP Software</span> for Modern Businesses
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Unify your operations, streamline complex processes, and gain real-time insights with Abnexa's powerful, scalable ERP solutions built for the future of enterprise.
          </p>
          <CTAButton text="Request a Personalized Demo" href="/contact" size="lg" />
        </div>
      </section>

      {/* Introduction to ERP */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Transform Your Enterprise with Integrated Planning</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                In today's fast-paced business environment, enterprises face unprecedented challenges in managing resources, optimizing workflows, and maintaining a competitive edge. Abnexa Technologies offers a robust ERP software suite designed to address these complexities head-on. Our solutions integrate critical business functions—from finance and human resources to supply chain and project management—into a single, cohesive platform. This holistic approach eliminates data silos, improves inter-departmental communication, and provides a unified view of your entire operation, empowering decision-makers with actionable intelligence.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Beyond mere integration, Abnexa ERP is built for scalability and flexibility. We understand that every enterprise has unique requirements, which is why our software is highly customizable. Whether you operate in manufacturing, services, or a specialized niche, our modular architecture allows us to tailor the system to your specific needs, ensuring a perfect fit without unnecessary features. Experience unparalleled efficiency and unlock new growth opportunities with an ERP system that evolves with your business.
              </p>
              <Link href="/erp-for-contractors" className="text-blue-600 font-medium hover:underline">Discover ERP for Contractors &rarr;</Link>
            </div>
            <div className="relative h-64 sm:h-80 lg:h-96 w-full rounded-2xl shadow-xl overflow-hidden">
              <Image
                src="/images/erp-overview.jpg" // Placeholder, replace with actual image
                alt="ERP Software Overview Dashboard"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Modules/Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Benefits of Abnexa ERP</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive suite delivers tangible advantages across your organization, fostering growth and resilience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '📊',
                title: 'Financial Management',
                desc: 'Gain complete control over your finances with robust accounting, budgeting, and reporting tools. Real-time visibility into cash flow and profitability.'
              },
              {
                icon: '📦',
                title: 'Supply Chain Optimization',
                desc: 'Streamline procurement, inventory management, and logistics to reduce costs and improve delivery times.'
              },
              {
                icon: '👷',
                title: 'Project Management',
                desc: 'Plan, execute, and monitor projects with precision. Track progress, allocate resources, and manage budgets effectively.'
              },
              {
                icon: '🧑‍💻',
                title: 'Human Resources',
                desc: 'Automate HR processes from recruitment to payroll, ensuring compliance and enhancing employee experience.'
              },
              {
                icon: '📈',
                title: 'Business Intelligence',
                desc: 'Transform raw data into actionable insights with advanced analytics and customizable dashboards.'
              },
              {
                icon: '🔒',
                title: 'Enhanced Security',
                desc: 'Protect your sensitive data with enterprise-grade security features and robust data privacy protocols.'
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

      {/* Call to Action with Customer Story */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Drive Your Enterprise Forward?</h2>
          <p className="text-blue-100 mb-10 text-lg max-w-3xl mx-auto">
            Join leading enterprises that have transformed their operations with Abnexa ERP. Our team is ready to help you implement a solution that truly fits your strategic objectives.
          </p>
          <CTAButton text="Get Your Custom ERP Proposal" href="/contact" size="lg" variant="secondary" />
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions about Enterprise ERP</h2>
          <div className="space-y-6">
            {[
              {
                q: "What makes Abnexa ERP different from other solutions?",
                a: "Abnexa ERP stands out due to its highly customizable, modular architecture, enterprise-grade scalability, and a strong focus on real-time data insights, specifically designed to adapt to unique business processes rather than forcing a one-size-fits-all approach."
              },
              {
                q: "How long does an ERP implementation take?",
                a: "Implementation timelines vary based on the complexity and customization required. Our team works closely with you through a structured methodology to ensure a smooth, efficient deployment with minimal disruption to your operations. A typical enterprise implementation can range from 6 to 18 months."
              },
              {
                q: "Is Abnexa ERP cloud-based or on-premise?",
                a: "Abnexa ERP is primarily a cloud-native solution, offering the benefits of accessibility, scalability, and reduced infrastructure costs. We also provide hybrid deployment options to meet specific compliance or data residency requirements."
              },
              {
                q: "What kind of support can we expect after implementation?",
                a: "We offer comprehensive post-implementation support, including dedicated account management, 24/7 technical assistance, regular software updates, and continuous training programs to ensure your team maximizes the value of your ERP system."
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
                  "name": "What makes Abnexa ERP different from other solutions?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Abnexa ERP stands out due to its highly customizable, modular architecture, enterprise-grade scalability, and a strong focus on real-time data insights, specifically designed to adapt to unique business processes rather than forcing a one-size-fits-all approach."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does an ERP implementation take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Implementation timelines vary based on the complexity and customization required. Our team works closely with you through a structured methodology to ensure a smooth, efficient deployment with minimal disruption to your operations. A typical enterprise implementation can range from 6 to 18 months."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Abnexa ERP cloud-based or on-premise?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Abnexa ERP is primarily a cloud-native solution, offering the benefits of accessibility, scalability, and reduced infrastructure costs. We also provide hybrid deployment options to meet specific compliance or data residency requirements."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What kind of support can we expect after implementation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer comprehensive post-implementation support, including dedicated account management, 24/7 technical assistance, regular software updates, and continuous training programs to ensure your team maximizes the value of your ERP system."
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
