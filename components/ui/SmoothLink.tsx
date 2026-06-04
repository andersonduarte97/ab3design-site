"use client";

import { scrollTo } from '@/lib/scrollTo';

interface SmoothLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export default function SmoothLink({ href, onClick, children, ...props }: SmoothLinkProps) {
  return (
    <a
      href={href}
      onClick={(e) => {
        scrollTo(e, href);
        onClick?.(e);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
