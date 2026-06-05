"use client";

import ActionButton from './ui/ActionButton';
import { Typewriter } from './ui/typewriter-text';
import { Star } from 'lucide-react';

const stats = [
  { metric: '100%', label: 'Clientes satisfeitos' },
  { metric: '14d',  label: 'Prazo médio de entrega' },
  { metric: '3×',   label: 'Revisões por projeto' },
];

const phrases = [
  'Com um site que vende por você.',
  'Com design que ninguém esquece.',
  'Com código que cresce com você.',
  'Com automações que nunca param.',
  'Com uma marca que abre portas.',
];

export default function Hero() {
  return (
    <section className="px-4 pt-4 pb-8">
      <div
        className="grain relative overflow-hidden rounded-[2.5rem] flex flex-col min-h-[580px] md:h-[72vh] md:min-h-[620px]"
        style={{ backgroundColor: '#0F172A' }}
      >
        {/* Background layers */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
          <div
            style={{
              position: 'absolute', inset: 0,
              backgroundImage: "url('/hero-bg.jpg')",
              backgroundSize: 'cover', backgroundPosition: 'center',
              opacity: 0.1,
            }}
          />

          <div style={{
            position: 'absolute', width: 520, height: 520,
            top: '-12%', right: '6%', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'float-orb 14s ease-in-out infinite',
          }} />
          <div style={{
            position: 'absolute', width: 420, height: 420,
            bottom: '8%', left: '3%', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'float-orb 18s ease-in-out infinite reverse',
          }} />
          <div style={{
            position: 'absolute', width: 280, height: 280,
            top: '38%', left: '32%', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)',
            filter: 'blur(50px)',
            animation: 'float-orb 22s ease-in-out infinite 5s',
          }} />

          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, transparent, rgba(15,23,42,0.1) 50%, rgba(15,23,42,0.75))',
          }} />
        </div>

        {/* Content */}
        <div className="relative flex flex-col flex-1" style={{ zIndex: 1 }}>

          {/* Main content */}
          <div className="flex-1 flex items-center px-6 lg:px-20 pt-14 lg:pt-20">
            <div className="w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

              {/* Left */}
              <div className="flex-1 min-w-0 w-full">

                {/* Eyebrow */}
                <p
                  className="text-[11px] font-bold tracking-[0.2em] uppercase text-violet-400 mb-5"
                  style={{ animation: 'var(--animate-fade-in-up-d1)' }}
                >
                  Agência digital · AB3Design
                </p>

                {/* Static headline */}
                <h1
                  className="text-[1.9rem] sm:text-4xl md:text-5xl lg:text-[4.5rem] font-bold text-white leading-[1.1] mb-3 lg:mb-4"
                  style={{ letterSpacing: '-0.04em', animation: 'var(--animate-fade-in-up-d1)' }}
                >
                  Você entende do negócio.
                  <br />
                  <span style={{ color: '#F59E0B' }}>A gente faz o mundo entender.</span>
                </h1>

                {/* Typewriter rotativo */}
                <div
                  className="mb-6 lg:mb-7 min-h-[2rem]"
                  style={{ animation: 'var(--animate-fade-in-up-d2)' }}
                >
                  <Typewriter
                    text={phrases}
                    speed={65}
                    deleteSpeed={35}
                    delay={2200}
                    loop={true}
                    cursor="_"
                    className="text-lg md:text-xl lg:text-2xl font-light text-white/70 tracking-tight"
                  />
                </div>

                <div
                  className="flex items-center gap-4 flex-wrap"
                  style={{ animation: 'var(--animate-fade-in-up-d3)' }}
                >
                  <ActionButton label="Iniciar projeto" href="#contato" />
                </div>
              </div>

              {/* Right — browser mockup (all screens) */}
              <div
                className="shrink-0 relative w-full flex justify-center lg:w-auto lg:block"
                style={{ animation: 'var(--animate-fade-in-up-d2)' }}
              >
                <div
                  style={{
                    position: 'absolute', inset: '-40px', borderRadius: '3rem',
                    background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.18) 0%, transparent 70%)',
                    filter: 'blur(30px)', pointerEvents: 'none',
                  }}
                />
                <div
                  className="relative w-[280px] sm:w-[340px] lg:w-[400px] rounded-[1.5rem] overflow-hidden"
                  style={{
                    background: '#0D1526',
                    border: '1px solid rgba(255,255,255,0.09)',
                    boxShadow: '0 40px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04) inset',
                    transform: 'perspective(1200px) rotateY(-5deg) rotateX(2deg)',
                  }}
                >
                  <div className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3" style={{ background: '#07090F', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full" style={{ background: '#FF5F57' }} />
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full" style={{ background: '#FEBC2E' }} />
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full" style={{ background: '#28C840' }} />
                    <div className="flex-1 mx-2 sm:mx-3 h-5 rounded-md px-3 flex items-center" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <span className="text-[8px] sm:text-[9px] text-white/25 font-mono">seusite.com.br</span>
                    </div>
                  </div>
                  <div className="p-3 sm:p-5 space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-3 w-14 rounded-md" style={{ background: 'rgba(255,255,255,0.12)' }} />
                      <div className="flex gap-2">
                        {[10, 12, 10].map((w, i) => (
                          <div key={i} className={`h-2 w-${w} rounded`} style={{ background: 'rgba(255,255,255,0.07)' }} />
                        ))}
                      </div>
                      <div className="h-5 w-16 sm:h-6 sm:w-20 rounded-full" style={{ background: '#7C3AED' }} />
                    </div>
                    <div className="rounded-xl p-3 sm:p-5" style={{ background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div className="h-2.5 w-20 rounded mb-2.5" style={{ background: 'rgba(124,58,237,0.45)' }} />
                      <div className="h-4 sm:h-5 w-3/4 sm:w-44 rounded mb-1.5" style={{ background: 'rgba(255,255,255,0.15)' }} />
                      <div className="h-4 sm:h-5 w-1/2 sm:w-32 rounded mb-3 sm:mb-4" style={{ background: 'rgba(245,158,11,0.55)' }} />
                      <div className="h-2 w-full rounded mb-1.5" style={{ background: 'rgba(255,255,255,0.05)' }} />
                      <div className="h-2 w-4/5 rounded mb-4 sm:mb-5" style={{ background: 'rgba(255,255,255,0.04)' }} />
                      <div className="h-7 w-24 sm:h-8 sm:w-28 rounded-full" style={{ background: '#F59E0B' }} />
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                      {[0, 1, 2].map((i) => (
                        <div key={i} className="rounded-lg p-2 sm:p-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md mb-1.5 sm:mb-2" style={{ background: `rgba(124,58,237,${0.2 + i * 0.07})` }} />
                          <div className="h-1.5 w-full rounded mb-1" style={{ background: 'rgba(255,255,255,0.1)' }} />
                          <div className="h-1.5 w-3/4 rounded" style={{ background: 'rgba(255,255,255,0.06)' }} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="px-3 sm:px-5 pb-3 sm:pb-4 flex items-center justify-between" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="flex items-center gap-1.5 sm:gap-2 pt-2.5 sm:pt-3">
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#28C840' }} />
                      <span className="text-[8px] sm:text-[9px] font-mono text-white/35">Live · 1.2k visitas hoje</span>
                    </div>
                    <div className="flex items-center gap-0.5 pt-2.5 sm:pt-3">
                      {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={8} fill="#F59E0B" stroke="none" />)}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Stats bar */}
          <div
            className="px-6 lg:px-20 py-5 shrink-0"
            style={{
              borderTop: '1px solid rgba(255,255,255,0.07)',
              background: 'rgba(15,23,42,0.65)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <div className="flex items-center">
              {stats.map((stat, i) => (
                <div key={stat.metric} className="flex items-center">
                  <div className="pr-4 sm:pr-5 lg:pr-16">
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.04em' }}>
                      {stat.metric}
                    </p>
                    <p className="text-[9px] sm:text-[10px] md:text-xs text-white/45 font-light mt-0.5">{stat.label}</p>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="w-px h-7 lg:h-10 bg-white/10 mr-4 sm:mr-5 lg:mr-16 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
