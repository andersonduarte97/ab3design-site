"use client";

import { ArrowRight } from 'lucide-react';
import { scrollTo } from '@/lib/scrollTo';

interface ActionButtonProps {
  label: string;
  href?: string;
  dark?: boolean;
  variant?: 'purple' | 'cyan';
}

export default function ActionButton({ label, href = '#', dark = false, variant = 'purple' }: ActionButtonProps) {
  const bgClass = variant === 'cyan' ? 'bg-[#06B6D4]' : 'bg-[#7C3AED]';
  return (
    <a
      href={href}
      onClick={(e) => scrollTo(e, href)}
      className={`group inline-flex items-center gap-3 rounded-full pl-6 pr-2 py-2 shrink-0 transition-transform duration-300 hover:scale-105 ${
        dark ? 'bg-zinc-900' : bgClass
      }`}
    >
      <span className={`font-medium text-sm whitespace-nowrap text-white`}>
        {label}
      </span>
      <span
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
          dark
            ? variant === 'cyan' ? 'bg-[#06B6D4] group-hover:bg-[#0891B2]' : 'bg-[#7C3AED] group-hover:bg-[#6D28D9]'
            : 'bg-zinc-900 group-hover:bg-zinc-800'
        }`}
      >
        <ArrowRight size={16} className="text-white" />
      </span>
    </a>
  );
}
