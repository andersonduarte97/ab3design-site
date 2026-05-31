"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ActionButton from './ui/ActionButton';

const links = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Design', href: '#design' },
  { label: 'Automação', href: '#automacao' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Run once on mount to handle initial state in case of a reload mid-page
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled ? 'p-0' : 'p-4'
      }`}
    >
      <nav
        className={`mx-auto flex items-center justify-between transition-all duration-500 ease-in-out border border-white/[0.08] ${
          scrolled
            ? 'w-full max-w-full rounded-none bg-slate-950/85 backdrop-blur-xl px-8 py-4 shadow-xl shadow-black/20'
            : 'w-full max-w-3xl rounded-full bg-white/[0.03] backdrop-blur-md px-6 py-2.5 shadow-lg shadow-black/10 hover:border-white/15'
        }`}
      >
        <a href="#" className="flex items-center transition-transform duration-300 hover:scale-102">
          <Image
            src="/images/logo.svg?v=2"
            alt="AB3Design"
            width={100}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-white/80 hover:text-white hover:bg-white/10 rounded-full px-4 py-2 text-sm transition-all duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <ActionButton label="Fale conosco" href="#contato" />
      </nav>
    </header>
  );
}

