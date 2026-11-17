import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Process', href: '#process' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'process', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030B1B]/85 backdrop-blur-md border-b border-[#12DDF5]/15 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#12DDF5] to-[#278BFF] p-[1.5px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#030B1B] rounded-[10px] flex items-center justify-center">
                <span className="font-bold text-sm tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#12DDF5] to-[#278BFF]">
                  {portfolioData.owner.initials}
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-[#12DDF5] transition-colors">
                {portfolioData.owner.name}
              </span>
              <span className="text-[11px] text-[#A8B6CA] tracking-wider uppercase hidden sm:block">
                {portfolioData.owner.title}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'text-[#12DDF5] bg-[#12DDF5]/10 shadow-[0_0_12px_rgba(18,221,245,0.2)]'
                      : 'text-[#A8B6CA] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCvModal}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-[#12DDF5] to-[#278BFF] text-[#030B1B] hover:opacity-95 transition-all shadow-[0_0_20px_rgba(18,221,245,0.3)] hover:shadow-[0_0_25px_rgba(18,221,245,0.5)] active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#0B1C35] border border-[#12DDF5]/20 text-[#F5F8FF] hover:text-[#12DDF5] focus:outline-none focus:ring-2 focus:ring-[#12DDF5]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-[#07152B]/95 backdrop-blur-xl border border-[#12DDF5]/25 shadow-2xl space-y-2 animate-in fade-in slide-in-from-top duration-200">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-4 py-2.5 text-sm font-medium rounded-xl transition-all ${
                    isActive
                      ? 'text-[#12DDF5] bg-[#12DDF5]/15 border border-[#12DDF5]/30'
                      : 'text-[#A8B6CA] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-2 border-t border-[#12DDF5]/15">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCvModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-xl bg-gradient-to-r from-[#12DDF5] to-[#278BFF] text-[#030B1B] shadow-md"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
