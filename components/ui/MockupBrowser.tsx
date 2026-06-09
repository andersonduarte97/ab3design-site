"use client";

import { useEffect, useState, useRef } from 'react';
import { Star } from 'lucide-react';

/* ── tiny inline typewriter hook ──────────────────────────────────── */
function useTypewriter(text: string, speed = 60, startDelay = 0) {
  const [display, setDisplay] = useState('');
  const [done, setDone] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    let charIndex = 0;

    timer = setTimeout(() => {
      started.current = true;
      const tick = () => {
        if (charIndex <= text.length) {
          setDisplay(text.slice(0, charIndex));
          charIndex++;
          timer = setTimeout(tick, speed);
        } else {
          setDone(true);
        }
      };
      tick();
    }, startDelay);

    return () => clearTimeout(timer);
  }, [text, speed, startDelay]);

  return { display, done };
}

/* ── code lines for the "live coding" strip ──────────────────────── */
const codeLines = [
  { indent: 0, tokens: [
    { text: '<', color: '#94A3B8' },
    { text: 'section', color: '#7C3AED' },
    { text: ' class=', color: '#94A3B8' },
    { text: '"hero"', color: '#06B6D4' },
    { text: '>', color: '#94A3B8' },
  ]},
  { indent: 1, tokens: [
    { text: '<', color: '#94A3B8' },
    { text: 'h1', color: '#7C3AED' },
    { text: '>', color: '#94A3B8' },
    { text: 'Seu negócio', color: '#E2E8F0' },
    { text: '</', color: '#94A3B8' },
    { text: 'h1', color: '#7C3AED' },
    { text: '>', color: '#94A3B8' },
  ]},
  { indent: 1, tokens: [
    { text: '<', color: '#94A3B8' },
    { text: 'p', color: '#7C3AED' },
    { text: '>', color: '#94A3B8' },
    { text: 'merece destaque', color: '#E2E8F0' },
    { text: '</', color: '#94A3B8' },
    { text: 'p', color: '#7C3AED' },
    { text: '>', color: '#94A3B8' },
  ]},
  { indent: 0, tokens: [
    { text: '</', color: '#94A3B8' },
    { text: 'section', color: '#7C3AED' },
    { text: '>', color: '#94A3B8' },
  ]},
];

/* ── Live code reveal component ──────────────────────────────────── */
function LiveCodeReveal({ delayMs = 0 }: { delayMs?: number }) {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    let current = 0;
    timer = setTimeout(() => {
      const show = () => {
        current++;
        setVisibleLines(current);
        if (current < codeLines.length) {
          timer = setTimeout(show, 400 + Math.random() * 300);
        }
      };
      show();
    }, delayMs);
    return () => clearTimeout(timer);
  }, [delayMs]);

  return (
    <div className="font-mono text-[7px] sm:text-[8px] leading-[1.6] select-none">
      {codeLines.map((line, li) => (
        <div
          key={li}
          style={{
            paddingLeft: line.indent * 12,
            opacity: li < visibleLines ? 1 : 0,
            transform: li < visibleLines ? 'translateY(0)' : 'translateY(4px)',
            transition: 'opacity 0.35s ease, transform 0.35s ease',
          }}
        >
          {line.tokens.map((t, ti) => (
            <span key={ti} style={{ color: t.color }}>{t.text}</span>
          ))}
        </div>
      ))}
      {/* blinking cursor on last visible line */}
      {visibleLines > 0 && visibleLines <= codeLines.length && (
        <span
          className="animate-pulse inline-block w-[4px] h-[9px] ml-0.5 align-middle"
          style={{ background: '#7C3AED', borderRadius: 1 }}
        />
      )}
    </div>
  );
}

/* ── typing label for badges ─────────────────────────────────────── */
function MockupTypeLabel({
  text, speed = 50, startDelay = 0, className = '', style = {},
}: {
  text: string; speed?: number; startDelay?: number; className?: string;
  style?: React.CSSProperties;
}) {
  const { display } = useTypewriter(text, speed, startDelay);

  return (
    <span className={className} style={style}>
      {display}
      <span className="animate-pulse" style={{ opacity: display.length < text.length ? 1 : 0 }}>|</span>
    </span>
  );
}

/* ── card data ────────────────────────────────────────────────────── */
const featureCards = [
  { icon: '🎨', label: 'Design' },
  { icon: '⚡', label: 'Rápido' },
  { icon: '📱', label: 'Responsivo' },
];

/* ══════════════════════════════════════════════════════════════════ */
/*  MAIN COMPONENT                                                   */
/* ══════════════════════════════════════════════════════════════════ */
export default function MockupBrowser() {
  const [cardsVisible, setCardsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const headline = useTypewriter('Seu negócio online', 55, 800);
  const subheadline = useTypewriter('Destaque no digital', 55, 2200);

  useEffect(() => {
    const t1 = setTimeout(() => setCardsVisible(true), 3400);
    const t2 = setTimeout(() => setStatsVisible(true), 4200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div
      className="relative w-[280px] sm:w-[340px] lg:w-[400px] rounded-[1.5rem] overflow-hidden"
      style={{
        background: '#0D1526',
        border: '1px solid rgba(255,255,255,0.09)',
        boxShadow:
          '0 40px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04) inset',
        transform: 'perspective(1200px) rotateY(-5deg) rotateX(2deg)',
      }}
    >
      {/* ── Chrome bar ─────────────────────────────────────────────── */}
      <div
        className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3"
        style={{
          background: '#07090F',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full" style={{ background: '#FF5F57' }} />
        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full" style={{ background: '#FEBC2E' }} />
        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full" style={{ background: '#28C840' }} />
        <div
          className="flex-1 mx-2 sm:mx-3 h-5 rounded-md px-3 flex items-center"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <MockupTypeLabel
            text="seusite.com.br"
            speed={70}
            startDelay={200}
            className="text-[8px] sm:text-[9px] font-mono text-white/25"
          />
        </div>
      </div>

      {/* ── Body ───────────────────────────────────────────────────── */}
      <div className="p-3 sm:p-5 space-y-3 sm:space-y-4">

        {/* Fake nav */}
        <div className="flex items-center justify-between">
          <div className="h-3 w-14 rounded-md mockup-shimmer" />
          <div className="flex gap-2">
            {[10, 12, 10].map((w, i) => (
              <div
                key={i}
                className="h-2 rounded mockup-shimmer"
                style={{ width: w * 3, animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
          <div
            className="h-5 w-16 sm:h-6 sm:w-20 rounded-full"
            style={{ background: '#7C3AED' }}
          />
        </div>

        {/* Hero card */}
        <div
          className="rounded-xl p-3 sm:p-5"
          style={{
            background: 'linear-gradient(135deg, #18181B 0%, #09090B 100%)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {/* Badge typing */}
          <div className="mb-2.5 h-3 flex items-center">
            <MockupTypeLabel
              text="Agência Digital"
              speed={50}
              startDelay={500}
              className="text-[8px] sm:text-[9px] font-bold tracking-wider uppercase"
              style={{ color: 'rgba(124,58,237,0.85)' }}
            />
          </div>

          {/* Headline typing */}
          <div className="mb-1.5 min-h-[18px] sm:min-h-[22px]">
            <span className="text-[11px] sm:text-[13px] font-bold text-white/90 leading-tight">
              {headline.display}
              {!headline.done && <span className="animate-pulse text-white/40">|</span>}
            </span>
          </div>

          {/* Sub-headline typing */}
          <div className="mb-3 sm:mb-4 min-h-[16px] sm:min-h-[20px]">
            <span className="text-[10px] sm:text-[12px] font-semibold leading-tight" style={{ color: '#06B6D4' }}>
              {subheadline.display}
              {!subheadline.done && headline.done && (
                <span className="animate-pulse" style={{ color: 'rgba(108,4,58,0.5)' }}>|</span>
              )}
            </span>
          </div>

          {/* Code reveal area */}
          <div
            className="rounded-lg p-2 sm:p-2.5 mb-3 sm:mb-4"
            style={{
              background: 'rgba(0,0,0,0.3)',
              border: '1px solid rgba(255,255,255,0.04)',
            }}
          >
            <LiveCodeReveal delayMs={3000} />
          </div>

          {/* CTA button — fades in after typing */}
          <div
            className="h-7 w-24 sm:h-8 sm:w-28 rounded-full flex items-center justify-center"
            style={{
              background: '#06B6D4',
              opacity: subheadline.done ? 1 : 0,
              transform: subheadline.done ? 'translateY(0)' : 'translateY(6px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
          >
            <span className="text-[8px] sm:text-[9px] font-bold text-[#09090B] tracking-wide uppercase">
              Começar agora
            </span>
          </div>
        </div>

        {/* Feature cards — staggered entrance */}
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
          {featureCards.map((card, i) => (
            <div
              key={i}
              className="rounded-lg p-2 sm:p-3"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? 'translateY(0)' : 'translateY(8px)',
                transition: `opacity 0.4s ease ${i * 0.15}s, transform 0.4s ease ${i * 0.15}s`,
              }}
            >
              <div className="text-sm sm:text-base mb-1 sm:mb-1.5">{card.icon}</div>
              <div className="text-[7px] sm:text-[8px] font-medium text-white/50">{card.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <div
        className="px-3 sm:px-5 pb-3 sm:pb-4 flex items-center justify-between"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div
          className="flex items-center gap-1.5 sm:gap-2 pt-2.5 sm:pt-3"
          style={{
            opacity: statsVisible ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: '#28C840' }}
          />
          <span className="text-[8px] sm:text-[9px] font-mono text-white/35">
            Live · 1.2k visitas hoje
          </span>
        </div>
        <div
          className="flex items-center gap-0.5 pt-2.5 sm:pt-3"
          style={{
            opacity: statsVisible ? 1 : 0,
            transition: 'opacity 0.5s ease 0.2s',
          }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} size={8} fill="#06B6D4" stroke="none" />
          ))}
        </div>
      </div>
    </div>
  );
}
