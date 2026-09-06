"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ActionButton from './ui/ActionButton';
import { Menu, X } from 'lucide-react';
import { scrollTo } from '@/lib/scrollTo';

const links = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Design', href: '#design' },
  { label: 'Automação', href: '#automacao' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  function handleNavClick(e: React.MouseEvent, href: string) {
    scrollTo(e, href);
    setMobileOpen(false);
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          scrolled ? 'p-0' : 'p-4'
        }`}
      >
        <nav
          className={`mx-auto flex items-center justify-between transition-all duration-500 ease-in-out border border-black/[0.06] ${
            scrolled
              ? 'w-full max-w-full rounded-none bg-[#f5f4f8]/95 backdrop-blur-xl px-6 md:px-8 py-4 shadow-xl shadow-black/10'
              : 'w-full max-w-3xl rounded-full bg-[#f5f4f8] backdrop-blur-md px-5 md:px-6 py-2.5 shadow-lg shadow-black/10 hover:border-black/10'
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center transition-transform duration-300 hover:scale-105"
            aria-label="Ir para o topo"
          >
            <Image
              src="/images/logo.svg?v=4"
              alt="AB3Design"
              width={118}
              height={100}
              className="h-9 md:h-10 w-auto"
              priority
            />
          </button>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-[#0f0a1e]/70 hover:text-[#0f0a1e] hover:bg-black/[0.04] rounded-full px-4 py-2 text-sm transition-all duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <ActionButton label="Fale conosco" href="#contato" />
            </div>
            <button
              className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-[#0f0a1e]/70 hover:text-[#0f0a1e] hover:bg-black/[0.04] transition-all duration-200"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col transition-all duration-300 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: '#080E1C' }}
      >
        <div className="flex items-center justify-between px-6 pt-6 pb-4 bg-[#f5f4f8]">
          <Image
            src="/images/logo.svg?v=4"
            alt="AB3Design"
            width={118}
            height={100}
            className="h-9 w-auto"
          />
          <button
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#0f0a1e]/60 hover:text-[#0f0a1e] hover:bg-black/[0.04] transition-all duration-200"
            onClick={() => setMobileOpen(false)}
            aria-label="Fechar menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 flex flex-col justify-center px-8 gap-1">
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-white/60 hover:text-white text-[2rem] font-bold py-3.5 border-b border-white/[0.05] transition-colors duration-200"
              style={{ letterSpacing: '-0.02em', transitionDelay: `${i * 30}ms` }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="px-8 pb-12 pt-6">
          <a
            href="#contato"
            onClick={(e) => handleNavClick(e, '#contato')}
            className="flex items-center justify-center w-full rounded-full py-4 font-semibold text-base transition-transform duration-200 active:scale-95"
            style={{ background: '#7C3AED', color: '#fff' }}
          >
            Iniciar projeto
          </a>
        </div>
      </div>
    </>
  );
}
