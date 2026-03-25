"use client";

import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 animate-fade-in bg-slate-50 selection:bg-slate-950 selection:text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-950 mb-8 tracking-tight">Let's build something great.</h1>
            <p className="text-2xl text-slate-600 mb-12 font-light leading-relaxed">
              We work with serious founders and businesses focused on growth. Tell us about your project, your timeline, and your required outcomes.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-slate-950 flex items-center justify-center shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-slate-950 uppercase tracking-widest mb-1">Email Us</h3>
                  <a href="mailto:abnexatechnologies@gmail.com" className="text-slate-500 font-medium hover:text-slate-950 transition-colors">abnexatechnologies@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-16 h-16 bg-slate-950 flex items-center justify-center shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-slate-950 uppercase tracking-widest mb-1">Call Us</h3>
                  <a href="tel:+918884944408" className="text-slate-500 font-medium hover:text-slate-950 transition-colors">Ph +91 8884944408</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-14 shadow-[0_30px_60px_rgba(15,_23,_42,_0.08)] border border-slate-100">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
