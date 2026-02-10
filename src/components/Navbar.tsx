import { useState, useEffect } from 'react';
import { Menu, X, ChevronUp } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#planes' },
  { label: 'Paquetes', href: '#paquetes' },
  { label: 'Marketing', href: '#marketing' },
  { label: 'Tecnología', href: '#tecnologia' },
  { label: 'Costos', href: '#costos' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handle = () => {
      setScrolled(window.scrollY > 50);
      setShowTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-strong shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                IE
              </div>
              <div className="hidden sm:block">
                <span className="text-white font-bold text-sm tracking-wide">
                  CONTINENTAL
                </span>
                <span className="block text-xs text-slate-400 -mt-0.5">
                  Propuesta Digital
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-slate-300 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#paquetes"
                className="ml-3 px-5 py-2.5 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 rounded-xl text-sm font-bold hover:shadow-lg hover:shadow-amber-500/30 transition-all hover:scale-105"
              >
                Ver Paquetes
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="glass-strong border-t border-white/10 px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-slate-300 hover:text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#paquetes"
              onClick={() => setIsOpen(false)}
              className="block text-center mt-3 px-5 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 rounded-xl text-sm font-bold"
            >
              Ver Paquetes
            </a>
          </div>
        </div>
      </nav>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg shadow-blue-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ChevronUp size={24} />
      </button>
    </>
  );
}
