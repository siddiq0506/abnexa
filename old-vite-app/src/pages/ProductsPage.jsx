import React from 'react';
import CTAButton from '../components/CTAButton';
//
// ConstructOS product page – deep dive into the flagship construction ERP.
//

const PillarCard = ({ title, description, icon: Icon }) => (
  <div className="p-6 glass rounded-2xl shadow-xl border border-gray-200 transition duration-300 hover:border-accent/60">
    <div className="flex items-center space-x-3 mb-3">
      <div className="p-2 rounded-lg bg-accent/10">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/40">
    {children}
  </span>
);

// Minimal, cohesive icon set
const ControlIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m-4-4h8M4 6h16v12H4z" />
  </svg>
);
const ProfitIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18M7 13l3 3 7-7" />
  </svg>
);
const ReportIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10M7 11h10M7 15h6M5 4h14v16H5z" />
  </svg>
);
const LabourIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12a5 5 0 100-10 5 5 0 000 10zm-7 9a7 7 0 0114 0H5z" />
  </svg>
);
const MaterialIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4 8 4 8-4zm-8 4l8-4v10l-8 4-8-4V7l8 4z" />
  </svg>
);
const DashboardIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13h8V3H3v10zm10 8h8V11h-8v10zM3 21h8v-6H3v6z" />
  </svg>
);

const ProductsPage = () => {
  return (
    <div className="space-y-20 pt-10 pb-16">
      {/* Page Header */}
      <header className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-[clamp(2rem,5vw+1rem,4rem)] font-bold mb-4 text-gray-900">
          ConstructOS — The Operating System for Profitable Contractors
        </h1>
        <p className="text-lg text-gray-600">
          A construction focused ERP built to give owners ruthless visibility into cost, leakage and execution across every project.
        </p>
      </header>

      {/* ConstructOS Premium Card */}
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Product Overview */}
          <div className="p-6 md:p-8 lg:p-10 glass rounded-3xl shadow-2xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">ConstructOS</h2>
              <Badge>Flagship Product</Badge>
            </div>
            <p className="text-xl text-gray-700 font-medium mb-6">
              ConstructOS is an advanced ERP built exclusively for contractors and construction companies to eliminate cost leakages, bring real time site control, and dramatically increase project profitability.
            </p>
            <div className="space-y-4 text-gray-600">
              <p>
                ConstructOS is not just another software or project management tool. It is a profit control and execution system designed for the chaos of real construction sites.
              </p>
              <p>
                It brings discipline, transparency, and financial clarity so you move from reactive firefighting to controlled, data driven execution.
              </p>
            </div>
            <div className="mt-8">
              <CTAButton primary={true}>
                Book a Live Demo of ConstructOS
              </CTAButton>
            </div>
          </div>

          {/* Right: Value Pillars */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <PillarCard
                title="Total Site Control"
                description="Real time visibility into daily site activities, progress, and execution — without micromanagement."
                icon={ControlIcon}
              />
              <PillarCard
                title="Profit & Cost Optimization"
                description="Identify material wastage, labour over spending, and hidden leakages before they turn into losses."
                icon={ProfitIcon}
              />
              <PillarCard
                title="Elimination of Fake Reporting"
                description="Daily work tracking strictly mapped to BOQ quantities with real progress percentages — no vague reports, no manipulation."
                icon={ReportIcon}
              />
              <PillarCard
                title="Labour Discipline & HR Control"
                description="GPS based, camera verified attendance for site engineers and staff, reducing fake attendance and payroll inflation."
                icon={LabourIcon}
              />
              <PillarCard
                title="Material Intelligence"
                description="Track inward, consumption, and deviations to prevent theft, over ordering, and silent wastage."
                icon={MaterialIcon}
              />
              <PillarCard
                title="Owner Level Command Dashboard"
                description="A single executive view highlighting risks, delays, cost overruns, and payment bottlenecks — without drowning in data."
                icon={DashboardIcon}
              />
            </div>
            <div className="p-6 glass rounded-2xl border border-gray-700/50">
              <p className="text-lg text-gray-200">
                ConstructOS is a profit machine for construction businesses — designed to reduce costs, increase margins, and put owners back in control.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
