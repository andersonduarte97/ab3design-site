import ActionButton from './ui/ActionButton';
import { ArrowRight, Star } from 'lucide-react';

const stats = [
  { metric: '50+',  label: 'Projetos entregues' },
  { metric: '100%', label: 'Clientes satisfeitos' },
  { metric: '14d',  label: 'Prazo médio' },
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
                <h1
                  className="text-4xl md:text-5xl lg:text-[5rem] font-bold text-white leading-[1.08] mb-4 lg:mb-5"
                  style={{ letterSpacing: '-0.04em', animation: 'var(--animate-fade-in-up-d1)' }}
                >
                  Design que{' '}
                  <span style={{ color: '#F59E0B' }}>converte.</span>
                  <br />
                  Código que escala.
                </h1>

                <p
                  className="text-[#94A3B8] font-light text-base lg:text-lg mb-6 max-w-md leading-relaxed"
                  style={{ animation: 'var(--animate-fade-in-up-d2)' }}
                >
                  Sites que vendem, identidades que ficam na memória e
                  automações que trabalham por você enquanto você foca
                  no que realmente importa: crescer.
                </p>

                <div
                  className="flex items-center gap-4 flex-wrap"
                  style={{ animation: 'var(--animate-fade-in-up-d3)' }}
                >
                  <ActionButton label="Iniciar projeto" href="#contato" />
                  <a
                    href="#servicos"
                    className="group flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors duration-200"
                  >
                    Ver serviços
                    <ArrowRight
                      size={14}
                      className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200"
                    />
                  </a>
                </div>
              </div>

              {/* Right — browser mockup (desktop only) */}
              <div
                className="shrink-0 hidden lg:block relative"
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
                  className="relative w-[400px] rounded-[1.5rem] overflow-hidden"
                  style={{
                    background: '#0D1526',
                    border: '1px solid rgba(255,255,255,0.09)',
                    boxShadow: '0 40px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04) inset',
                    transform: 'perspective(1200px) rotateY(-5deg) rotateX(2deg)',
                  }}
                >
                  <div className="flex items-center gap-2 px-4 py-3" style={{ background: '#07090F', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F57' }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FEBC2E' }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28C840' }} />
                    <div className="flex-1 mx-3 h-5 rounded-md px-3 flex items-center" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <span className="text-[9px] text-white/25 font-mono">seusite.com.br</span>
                    </div>
                  </div>
                  <div className="p-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-3 w-14 rounded-md" style={{ background: 'rgba(255,255,255,0.12)' }} />
                      <div className="flex gap-2">
                        {[10, 12, 10].map((w, i) => (
                          <div key={i} className={`h-2 w-${w} rounded`} style={{ background: 'rgba(255,255,255,0.07)' }} />
                        ))}
                      </div>
                      <div className="h-6 w-20 rounded-full" style={{ background: '#7C3AED' }} />
                    </div>
                    <div className="rounded-xl p-5" style={{ background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div className="h-2.5 w-20 rounded mb-2.5" style={{ background: 'rgba(124,58,237,0.45)' }} />
                      <div className="h-5 w-44 rounded mb-1.5" style={{ background: 'rgba(255,255,255,0.15)' }} />
                      <div className="h-5 w-32 rounded mb-4" style={{ background: 'rgba(245,158,11,0.55)' }} />
                      <div className="h-2 w-full rounded mb-1.5" style={{ background: 'rgba(255,255,255,0.05)' }} />
                      <div className="h-2 w-4/5 rounded mb-5" style={{ background: 'rgba(255,255,255,0.04)' }} />
                      <div className="h-8 w-28 rounded-full" style={{ background: '#F59E0B' }} />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[0, 1, 2].map((i) => (
                        <div key={i} className="rounded-lg p-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <div className="w-6 h-6 rounded-md mb-2" style={{ background: `rgba(124,58,237,${0.2 + i * 0.07})` }} />
                          <div className="h-1.5 w-full rounded mb-1" style={{ background: 'rgba(255,255,255,0.1)' }} />
                          <div className="h-1.5 w-3/4 rounded" style={{ background: 'rgba(255,255,255,0.06)' }} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="px-5 pb-4 flex items-center justify-between" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="flex items-center gap-2 pt-3">
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#28C840' }} />
                      <span className="text-[9px] font-mono text-white/35">Live · 1.2k visitas hoje</span>
                    </div>
                    <div className="flex items-center gap-0.5 pt-3">
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
                  <div className="pr-5 lg:pr-16">
                    <p className="text-xl lg:text-2xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.04em' }}>
                      {stat.metric}
                    </p>
                    <p className="text-[10px] md:text-xs text-white/45 font-light mt-0.5">{stat.label}</p>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="w-px h-8 lg:h-10 bg-white/10 mr-5 lg:mr-16 shrink-0" />
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
