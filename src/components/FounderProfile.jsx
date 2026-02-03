import React from 'react';

const FounderProfile = () => {
  return (
    <section id="about" className="py-24 animate-fade-in-up">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-gray-900">
            The Founder
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Founder Photo */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-1">
            <div className="relative group w-full max-w-md">
                {/* Decorative background element */}
                <div className="absolute -inset-4 bg-gradient-to-r from-accent to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                
                <div className="relative glass rounded-2xl overflow-hidden shadow-2xl transform transition duration-500 hover:scale-[1.02]">
                    <img 
                      src="/Assets/IMG_6714.jpg" // Corrected image path based on file structure
                      alt="Abubakr Siddiq - Founder of Abnexa Technologies" 
                      className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition duration-500"
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="order-2 lg:order-2 space-y-6">
            <h3 className="text-3xl font-bold text-accent">Abubakr Siddiq</h3>
            <p className="text-xl font-medium text-gray-700 italic">Founder – Abnexa Technologies</p>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                    Abubakr Siddiq is a tech driven businessman who specialises in creating SaaS platforms, scalable software, and digital solutions driven by AI. He collaborates closely with clients to turn concepts into dependable, high performing products because he is passionate about fusing engineering and business strategy.
                </p>
                <p>
                    His strategy places a strong emphasis on execution, clarity, and long term scalability to produce software that not only functions but also expands with the company. Abubakr wants to use this business to develop significant digital products that use contemporary technology to address real world issues.
                </p>
            </div>
            
            {/* Professional touches */}
            <div className="pt-6 border-t border-gray-200 flex space-x-6">
                <div className="flex flex-col">
                    <span className="text-accent font-bold text-2xl">Focus</span>
                    <span className="text-gray-600 text-sm tracking-wider">Engineering & Strategy</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-accent font-bold text-2xl">Vision</span>
                    <span className="text-gray-600 text-sm tracking-wider">Scalable AI Products</span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FounderProfile;