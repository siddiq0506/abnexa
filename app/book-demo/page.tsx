import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Book a Demo | ConstructOS by Abnexa",
  description: "Schedule a personalized demonstration of ConstructOS. Track costs, manage projects, and scale your construction business.",
};

export default function BookDemoPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Experience the Power of <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">ConstructOS</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Fill out the form below to schedule a personalized walkthrough and see how we can eliminate margin leakage in your projects.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-3xl shadow-xl shadow-blue-900/5 border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-12">
              <form action="/contact?success=true" className="space-y-6">

                <div className="grid grid-cols-1 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Enter your name"
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    />
                  </div>

                  {/* Product Dropdown */}
                  <div>
                    <label htmlFor="product" className="block text-sm font-semibold text-gray-700 mb-2">
                      Select Product
                    </label>
                    <select
                      id="product"
                      name="product"
                      required
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none appearance-none"
                    >
                      <option value="ConstructOS">ConstructOS</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 px-8 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-0.5 active:scale-[0.98]"
                  >
                    Schedule Demo Now
                  </button>
                </div>
              </form>
            </div>

            {/* Trust Footer */}
            <div className="bg-gray-50 px-8 py-6 border-t border-gray-100 flex items-center justify-center space-x-8 grayscale opacity-70">
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Trusted by leading contractors</span>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500">
              Prefer to talk now? <Link href="/contact" className="text-blue-600 font-semibold hover:underline">Contact Sales</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
