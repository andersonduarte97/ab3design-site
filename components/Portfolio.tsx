"use client";

import { useState } from 'react';
import {
  ExternalLink,
  TrendingUp,
  Building2,
  Sparkles,
  HeartPulse,
  FileText,
  Shield,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Client {
  name: string;
  segment: string;
  description: string;
  url: string;
  image: string;
  Icon: LucideIcon;
}

const clients: Client[] = [
  {
    name: 'Grupo R3R',
    segment: 'Finanças & Crédito',
    description:
      'Consultoria financeira com 25 anos de mercado em crédito, consórcio e investimentos. Plataforma que comunica solidez e conecta empresas às melhores soluções financeiras.',
    url: 'https://www.grupor3r.com.br',
    image: '/images/clients/grupor3r.webp',
    Icon: TrendingUp,
  },
  {
    name: 'Grupo Via',
    segment: 'Holding Multi-segmento',
    description:
      'Holding estratégico com atuação em finanças, saúde, educação e tecnologia. Identidade digital unificada que representa a força do grupo em cada área de negócio.',
    url: 'https://www.grupoviaprime.com.br',
    image: '/images/clients/grupoviaprime.webp',
    Icon: Building2,
  },
  {
    name: 'Via Prime',
    segment: 'Inteligência Empresarial',
    description:
      'Ecossistema de contabilidade, BPO financeiro e assessoria jurídica com 500+ empresas atendidas. Site que transforma serviços complexos em proposta clara para gestores.',
    url: 'https://via-prime.com',
    image: '/images/clients/viaprime.webp',
    Icon: Sparkles,
  },
  {
    name: 'Via Prime Health',
    segment: 'Saúde & Contabilidade',
    description:
      'Especialista em gestão financeira e tributária para médicos, clínicas e gestores de saúde. Plataforma que transmite confiança para um público altamente qualificado.',
    url: 'https://www.viaprimehealth.com.br',
    image: '/images/clients/viaprimehealth.webp',
    Icon: HeartPulse,
  },
  {
    name: 'Coopersec Via Prime',
    segment: 'Consultoria Fiscal',
    description:
      'Landing page especializada em IR para caminhoneiros autônomos. Projeto focado em conversão com linguagem direta para quem precisa de simplicidade e segurança fiscal.',
    url: 'https://lpcoopervesc.via-prime.com',
    image: '/images/clients/coopersec.webp',
    Icon: FileText,
  },
  {
    name: 'Taamin Seguradora',
    segment: 'Seguros',
    description:
      'Seguradora com foco em proteção personalizada para empresas e pessoas físicas. Presença digital que transmite confiança e solidez em cada apólice emitida.',
    url: 'https://www.taamin.com.br',
    image: '/images/clients/taamin.webp',
    Icon: Shield,
  },
];

/* ── Accordion item ── */
interface ItemProps {
  client: Client;
  isActive: boolean;
  onMouseEnter: () => void;
}

function AccordionItem({ client, isActive, onMouseEnter }: ItemProps) {
  const { Icon } = client;
  return (
    <div
      className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ease-in-out"
      style={{
        flex: isActive ? '6 1 0%' : '1 1 0%',
        minWidth: isActive ? undefined : '56px',
      }}
      onMouseEnter={onMouseEnter}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url('${client.image}')`,
          backgroundSize: isActive ? '100% auto' : 'cover',
          backgroundPosition: 'top center',
          filter: isActive
            ? 'grayscale(0) brightness(1)'
            : 'grayscale(1) brightness(0.25)',
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-600"
        style={{
          background: isActive
            ? 'linear-gradient(to top, rgba(2,6,23,1) 0%, rgba(2,6,23,0.92) 35%, rgba(2,6,23,0.55) 60%, rgba(2,6,23,0.0) 100%)'
            : 'linear-gradient(to top, rgba(2,6,23,0.98) 0%, rgba(2,6,23,0.88) 100%)',
        }}
      />

      {/* Border */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl transition-all duration-500"
        style={{
          boxShadow: isActive
            ? 'inset 0 0 0 1px rgba(6,182,212,0.22)'
            : 'inset 0 0 0 1px rgba(255,255,255,0.05)',
        }}
      />

      {/* Icon — top right */}
      <div
        className="absolute top-4 right-4 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-400 z-20"
        style={{
          background: isActive ? 'rgba(6,182,212,0.12)' : 'rgba(255,255,255,0.05)',
          border: `1px solid ${isActive ? 'rgba(6,182,212,0.28)' : 'rgba(255,255,255,0.08)'}`,
          backdropFilter: 'blur(10px)',
        }}
      >
        <Icon
          size={14}
          style={{
            color: isActive ? '#06B6D4' : 'rgba(255,255,255,0.28)',
            transition: 'color 400ms',
          }}
        />
      </div>

      {/* Collapsed — vertical centered label */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-500"
        style={{ opacity: isActive ? 0 : 1 }}
      >
        <span
          className="text-white/35 text-[10px] font-semibold tracking-[0.22em] uppercase whitespace-nowrap"
          style={{ transform: 'rotate(-90deg)', display: 'block' }}
        >
          {client.name}
        </span>
      </div>

      {/* Active — bottom info panel */}
      <div
        className="absolute bottom-0 left-0 right-0 px-6 pb-6 pt-16 z-10 transition-all duration-500"
        style={{
          opacity: isActive ? 1 : 0,
          transform: isActive ? 'translateY(0)' : 'translateY(16px)',
        }}
      >
        {/* Segment tag */}
        <span className="inline-flex items-center text-[9px] font-bold tracking-[0.18em] uppercase mb-3" style={{ color: '#06B6D4' }}>
          <span className="w-3 h-px mr-2" style={{ backgroundColor: 'rgba(6,182,212,0.6)' }} />
          {client.segment}
        </span>

        {/* Client name */}
        <h3
          className="text-white font-bold text-xl leading-snug mb-2.5"
          style={{ letterSpacing: '-0.03em', textShadow: '0 1px 12px rgba(0,0,0,0.6)' }}
        >
          {client.name}
        </h3>

        {/* Description */}
        <p
          className="text-white/75 text-[11px] leading-relaxed mb-5 line-clamp-2"
          style={{ textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}
        >
          {client.description}
        </p>

        {/* Separator */}
        <div className="w-full h-px bg-white/[0.07] mb-4" />

        {/* CTA */}
        <a
          href={client.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#06B6D4] hover:text-[#06B6D4]/85 transition-colors duration-200 group/link"
        >
          Ver site
          <ExternalLink
            size={10}
            className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          />
        </a>
      </div>
    </div>
  );
}

/* ── Mobile card ── */
function MobileCard({ client }: { client: Client }) {
  const { Icon } = client;
  return (
    <div
      className="relative overflow-hidden rounded-2xl h-44"
      style={{
        backgroundImage: `url('${client.image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
      }}
    >
      {/* Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(2,6,23,1) 0%, rgba(2,6,23,0.85) 40%, rgba(2,6,23,0.35) 100%)',
        }}
      />
      {/* Border */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(6,182,212,0.18)' }}
      />

      {/* Icon */}
      <div
        className="absolute top-3 right-3 w-7 h-7 rounded-lg flex items-center justify-center"
        style={{
          background: 'rgba(6,182,212,0.12)',
          border: '1px solid rgba(6,182,212,0.28)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Icon size={13} style={{ color: '#06B6D4' }} />
      </div>

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 z-10">
        <span className="inline-flex items-center text-[9px] font-bold tracking-[0.18em] uppercase mb-1.5" style={{ color: '#06B6D4' }}>
          <span className="w-3 h-px mr-2" style={{ backgroundColor: 'rgba(6,182,212,0.6)' }} />
          {client.segment}
        </span>
        <div className="flex items-end justify-between gap-3">
          <h3
            className="text-white font-bold text-base leading-snug"
            style={{ letterSpacing: '-0.03em' }}
          >
            {client.name}
          </h3>
          <a
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1 text-[11px] font-semibold text-[#06B6D4] pb-0.5"
          >
            Ver site
            <ExternalLink size={10} />
          </a>
        </div>
        <p className="text-white/60 text-[11px] leading-relaxed mt-1.5 line-clamp-2">
          {client.description}
        </p>
      </div>
    </div>
  );
}

/* ── Section ── */
export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="portfolio"
      className="py-24 px-4"
      style={{
        background:
          'radial-gradient(circle at 80% 20%, rgba(124,58,237,0.07) 0%, rgba(15,23,42,0) 50%), #0F172A',
      }}
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">

          {/* Left — text */}
          <div className="w-full lg:w-[380px] shrink-0">
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-violet-400 mb-5">
              Portfólio
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-[1.05] mb-6"
              style={{ letterSpacing: '-0.04em' }}
            >
              Projetos que já
              <br />
              entregamos.
            </h2>
            <p className="text-slate-400/80 font-light text-sm leading-relaxed mb-10 max-w-sm">
              Cada site foi criado do zero: estratégia, design e código pensados especificamente para o negócio de cada cliente.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-8">
              <div>
                <p
                  className="text-3xl font-bold text-white leading-tight"
                  style={{ letterSpacing: '-0.04em' }}
                >
                  6+
                </p>
                <p className="text-xs text-slate-500 font-light mt-0.5">Sites entregues</p>
              </div>
              <div className="w-px h-10 bg-white/8" />
              <div>
                <p
                  className="text-3xl font-bold text-white leading-tight"
                  style={{ letterSpacing: '-0.04em' }}
                >
                  100%
                </p>
                <p className="text-xs text-slate-500 font-light mt-0.5">Satisfação</p>
              </div>
            </div>
          </div>

          {/* Right — accordion (desktop) */}
          <div className="w-full lg:flex-1 min-w-0">
            {/* Desktop: horizontal accordion */}
            <div className="hidden lg:flex gap-2.5 h-[520px]">
              {clients.map((client, i) => (
                <AccordionItem
                  key={client.name}
                  client={client}
                  isActive={i === activeIndex}
                  onMouseEnter={() => setActiveIndex(i)}
                />
              ))}
            </div>

            {/* Mobile: vertical card stack */}
            <div className="flex lg:hidden flex-col gap-3">
              {clients.map((client) => (
                <MobileCard key={client.name} client={client} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
