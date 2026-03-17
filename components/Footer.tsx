import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Custom Software', href: '/services' },
    { name: 'MVP Development', href: '/services' },
    { name: 'AI Agents', href: '/services' },
    { name: 'AI Automation', href: '/services' },
    { name: 'Platform Development', href: '/services' },
  ];

  const company = [
    { name: 'About', href: '/about' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <span className="font-heading text-xl font-bold text-white tracking-tight">Abnexa Technologies</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              We build intelligent software products and AI powered systems for modern businesses globally.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Services</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.name}>
                  <Link href={s.href} className="text-sm hover:text-white transition-colors duration-200">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Company</h3>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.name}>
                  <Link href={c.href} className="text-sm hover:text-white transition-colors duration-200">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} Abnexa Technologies. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Building intelligent software for the future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
