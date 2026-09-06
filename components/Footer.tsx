"use client";

import Image from 'next/image';
import { scrollTo } from '@/lib/scrollTo';

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const links = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Design', href: '#design' },
  { label: 'Automação', href: '#automacao' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f4f8] pt-14 pb-8 px-4">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-10 pb-10 border-b border-black/[0.06]">
          {/* Logo + tagline */}
          <div className="max-w-xs">
            <Image
              src="/images/logo.svg?v=4"
              alt="AB3Design"
              width={118}
              height={100}
              className="h-8 w-auto"
            />
            <p className="text-sm text-[#0f0a1e]/60 mt-4">
              Sites modernos, identidades que ficam na memória e automações que trabalham por você.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#0f0a1e]/40 mb-4">
              Mapa do site
            </h3>
            <ul className="flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-sm text-[#0f0a1e]/60 hover:text-[#7131F8] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#0f0a1e]/40 mb-4">
              Redes sociais
            </h3>
            <a
              href="https://www.instagram.com/ab3design_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AB3Design no Instagram"
              className="inline-flex items-center gap-2 text-sm text-[#0f0a1e]/60 hover:text-[#7131F8] transition-colors duration-200"
            >
              <InstagramIcon size={18} />
              @ab3design_
            </a>
          </div>
        </div>

        <p className="text-xs text-[#0f0a1e]/50 pt-6">
          © {new Date().getFullYear()} ab3Design. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
