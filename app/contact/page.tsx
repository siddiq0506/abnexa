import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Abnexa Technologies',
  description: 'Get in touch with the Abnexa Technologies team to schedule a demo of ConstructOS or inquire about custom ERP implementations.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 animate-fade-in-up bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Let's start a conversation.</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
              Whether you need to schedule a product demo, request a custom enterprise quote, or explore partnership opportunities, our team is ready to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-800/50">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email Us</h3>
                  <a href="mailto:abnexatechnologies@gmail.com" className="text-blue-600 dark:text-blue-400 mt-1 hover:underline">abnexatechnologies@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-800/50">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Call Us</h3>
                  <a href="tel:+918884944408" className="text-blue-600 dark:text-blue-400 mt-1 hover:underline">Ph - +91 8884944408</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-gray-100 dark:border-gray-800 relative z-10">
            <form name="contact" method="POST" data-netlify="true" action="/contact?success=true" className="space-y-6">
              <input type="hidden" name="form-name" value="contact" />

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                  <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                  <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Work Email</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white" placeholder="john@company.com" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">How can we help?</label>
                <textarea id="message" name="message" required rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none dark:text-white" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-md active:scale-[0.98]">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
