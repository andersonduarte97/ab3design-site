"use client";

import ActionButton from './ui/ActionButton';
import { Typewriter } from './ui/typewriter-text';
import MockupBrowser from './ui/MockupBrowser';

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
        className="grain relative overflow-hidden rounded-[2.5rem] flex flex-col min-h-[580px] md:min-h-[640px] xl:h-[72vh] xl:min-h-[680px]"
        style={{ backgroundColor: '#09090B' }}
      >
        {/* Background layers */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundSize: 'cover', backgroundPosition: 'center',
            opacity: 0.1,
          }} />
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
            background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'float-orb 18s ease-in-out infinite reverse',
          }} />
          <div style={{
            position: 'absolute', width: 280, height: 280,
            top: '38%', left: '32%', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,58,237,0.16) 0%, transparent 70%)',
            filter: 'blur(50px)',
            animation: 'float-orb 22s ease-in-out infinite 5s',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, transparent, rgba(9,9,11,0.1) 50%, rgba(9,9,11,0.75))',
          }} />
        </div>

        {/* Content */}
        <div className="relative flex flex-col flex-1" style={{ zIndex: 1 }}>

          {/* Main content */}
          <div className="flex-1 flex items-center px-6 md:px-12 xl:px-20 pt-10 xl:pt-20">
            <div className="w-full flex flex-col xl:flex-row items-center gap-8 xl:gap-16">

              {/* Left — text */}
              <div className="flex-1 min-w-0 w-full text-center xl:text-left">

                <p
                  className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-4"
                  style={{ color: '#7C3AED', animation: 'var(--animate-fade-in-up-d1)' }}
                >
                  Agência digital · AB3Design
                </p>

                <h1
                  className="text-[1.9rem] sm:text-4xl md:text-5xl xl:text-[4.5rem] font-bold text-white leading-[1.1] mb-3 xl:mb-4"
                  style={{ letterSpacing: '-0.04em', animation: 'var(--animate-fade-in-up-d1)' }}
                >
                  Você entende do negócio.
                  <br />
                  <span style={{ color: '#7C3AED' }}>A gente faz o mundo entender.</span>
                </h1>

                <div
                  className="mb-6 xl:mb-7 min-h-[2rem]"
                  style={{ animation: 'var(--animate-fade-in-up-d2)' }}
                >
                  <Typewriter
                    text={phrases}
                    speed={65}
                    deleteSpeed={35}
                    delay={2200}
                    loop={true}
                    cursor="_"
                    className="text-lg md:text-xl xl:text-2xl font-light text-white/70 tracking-tight"
                  />
                </div>

                <div
                  className="flex items-center justify-center xl:justify-start gap-4 flex-wrap"
                  style={{ animation: 'var(--animate-fade-in-up-d3)' }}
                >
                  <ActionButton label="Iniciar projeto" href="#contato" />
                </div>
              </div>

              {/* Right — mockup: oculto no mobile, visível em md+, lado a lado só em xl */}
              <div
                className="shrink-0 w-full hidden md:flex justify-center xl:w-auto xl:block pb-2 xl:pb-0"
                style={{ animation: 'var(--animate-fade-in-up-d2)' }}
              >
                <div className="relative w-full max-w-[320px] md:max-w-[360px] xl:max-w-none">
                  <div style={{
                    position: 'absolute', inset: '-40px', borderRadius: '3rem',
                    background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.18) 0%, transparent 70%)',
                    filter: 'blur(30px)', pointerEvents: 'none', zIndex: 0,
                  }} />
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <MockupBrowser />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Stats bar */}
          <div
            className="px-6 md:px-12 xl:px-20 py-5 shrink-0"
            style={{
              borderTop: '1px solid rgba(255,255,255,0.07)',
              background: 'rgba(9,9,11,0.65)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <div className="flex items-center justify-center xl:justify-start">
              {stats.map((stat, i) => (
                <div key={stat.metric} className="flex items-center">
                  <div className="pr-4 sm:pr-6 xl:pr-16">
                    <p className="text-lg sm:text-xl xl:text-2xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.04em' }}>
                      {stat.metric}
                    </p>
                    <p className="text-[9px] sm:text-[10px] md:text-xs text-white/45 font-light mt-0.5">{stat.label}</p>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="w-px h-7 xl:h-10 bg-white/10 mr-4 sm:mr-6 xl:mr-16 shrink-0" />
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
