import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: '14 Day MVP Development', href: '/services' },
    { name: 'AI Growth Systems', href: '/services' },
    { name: 'Efficiency Consulting', href: '/services' },
    { name: 'Modern Systems', href: '/services' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Resources Hub', href: '/resources' },
    { name: 'Inquire Now', href: '/contact' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-500 py-32 selection:bg-indigo-600 selection:text-white border-t border-white/5 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mb-32">
          
          {/* Brand Restoration */}
          <div className="md:col-span-1">
            <Link href="/" className="group inline-block mb-10">
              <span className="font-heading text-4xl font-black italic tracking-tighter text-white hover:text-indigo-400 transition-colors duration-300 select-none">
                ABN<span className="text-indigo-500 group-hover:text-white transition-colors duration-300">EXA</span>
              </span>
            </Link>
            <p className="text-xl leading-relaxed font-light text-slate-400 max-w-sm italic opacity-80">
                We use an efficient human and AI execution model to deliver high quality products faster and more cost effectively than traditional companies.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-12">Offerings</h3>
            <ul className="space-y-8">
              {services.map((s) => (
                <li key={s.name}>
                  <Link href={s.href} className="text-sm font-black uppercase tracking-widest text-slate-500 hover:text-indigo-400 transition-colors duration-300">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-12">Organization</h3>
            <ul className="space-y-8">
              {company.map((c) => (
                <li key={c.name}>
                  <Link href={c.href} className="text-sm font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors duration-300">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-24 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-12 font-black uppercase tracking-[0.2em] text-[10px]">
          <div className="text-slate-600">
            &copy; {currentYear} Abnexa Technologies
          </div>
          <div className="flex gap-12 text-slate-400">
            <span className="hover:text-indigo-400 transition-colors cursor-default">Premium Execution</span>
            <span className="hover:text-indigo-400 transition-colors cursor-default">Outcome Driven</span>
            <span className="text-white border-b border-indigo-600 pb-1">Serious Inquiries Only</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
