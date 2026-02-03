import React, { useState } from 'react';
import CTAButton from '../components/CTAButton';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectIdea: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // In a real app: Send data to backend/API
    alert('Thank you for your inquiry! We will review your project idea shortly.');
    setFormData({ name: '', email: '', projectIdea: '' });
  };

  const InputField = ({ label, name, type = 'text', isTextarea = false }) => (
    <div className="mb-6">
      <label htmlFor={name} className="block text-sm font-medium mb-2 text-gray-900">
        {label}
      </label>
      {isTextarea ? (
        <textarea
          id={name}
          name={name}
          rows="4"
          value={formData[name]}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-accent focus:ring-1 focus:ring-accent transition duration-200 resize-none shadow-sm"
          placeholder={`Describe your ${label.toLowerCase()}...`}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-accent focus:ring-1 focus:ring-accent transition duration-200 shadow-sm"
          placeholder={`Enter your ${label.toLowerCase()}`}
        />
      )}
    </div>
  );

  return (
    <div className="py-16 max-w-6xl mx-auto space-y-20">
      
      {/* CTA Headline */}
      <header className="text-center px-4">
        <h1 className="text-[clamp(2rem,5vw+1rem,4.5rem)] font-extrabold text-gray-900 mb-4 tracking-tight">
          Let’s Build Something Powerful
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Share your vision, and let our expert team structure the blueprint for your success.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Contact Form */}
        <div className="p-6 md:p-8 lg:p-10 glass rounded-3xl shadow-2xl border-t-4 border-accent">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Project Intake Form</h2>
            <form onSubmit={handleSubmit}>
                <InputField label="Full Name" name="name" />
                <InputField label="Work Email" name="email" type="email" />
                <InputField label="Project Idea / Scope Summary" name="projectIdea" isTextarea={true} />
                
                <div className="mt-8 flex justify-end">
                    <CTAButton primary={true} type="submit">
                        Submit Idea & Request Follow up
                    </CTAButton>
                </div>
            </form>
        </div>

        {/* Contact Information & Trust Block */}
        <div className="flex flex-col space-y-8">
            <div className="p-6 md:p-8 lg:p-10 glass rounded-3xl shadow-xl border-l-4 border-accent flex flex-col h-full">
                <h3 className="text-3xl font-bold text-gray-900 mb-10">
                    Get in Touch
                </h3>
                
                <div className="space-y-10">
                    {/* Phone */}
                    <div className="flex items-start space-x-5 group cursor-pointer">
                        <div className="p-4 bg-accent/10 rounded-2xl group-hover:bg-accent/20 transition duration-300 border border-accent/20">
                            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Phone</p>
                            <a href="tel:+918884944408" className="text-2xl font-bold text-gray-900 hover:text-accent transition duration-300 font-mono">
                                +91 8884944408
                            </a>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start space-x-5 group cursor-pointer">
                        <div className="p-4 bg-accent/10 rounded-2xl group-hover:bg-accent/20 transition duration-300 border border-accent/20">
                            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Email</p>
                            <a href="mailto:abnexatechnologies@gmail.com" className="text-xl sm:text-2xl font-bold text-gray-900 hover:text-accent transition duration-300 break-all">
                                abnexatechnologies@gmail.com
                            </a>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-8">
                        <p className="text-gray-500 italic">
                            "We reply to all business inquiries within 24 hours."
                        </p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;