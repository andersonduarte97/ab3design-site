"use client";

import { ArrowRight } from 'lucide-react';
import { scrollTo } from '@/lib/scrollTo';

interface ActionButtonProps {
  label: string;
  href?: string;
  dark?: boolean;
}

export default function ActionButton({ label, href = '#', dark = false }: ActionButtonProps) {
  return (
    <a
      href={href}
      onClick={(e) => scrollTo(e, href)}
      className={`group inline-flex items-center gap-3 rounded-full pl-6 pr-2 py-2 shrink-0 transition-transform duration-300 hover:scale-105 ${
        dark ? 'bg-zinc-900' : 'bg-[#F59E0B]'
      }`}
    >
      <span className={`font-medium text-sm whitespace-nowrap ${dark ? 'text-white' : 'text-zinc-900'}`}>
        {label}
      </span>
      <span
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
          dark
            ? 'bg-[#7C3AED] group-hover:bg-[#6D28D9]'
            : 'bg-zinc-900 group-hover:bg-zinc-800'
        }`}
      >
        <ArrowRight size={16} className="text-white" />
      </span>
    </a>
  );
}
