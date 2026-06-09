"use client";

import { useState, useEffect } from "react";
import Reveal from "@/components/ui/Reveal";
import { scrollTo } from "@/lib/scrollTo";
import {
  Presentation,
  BarChart3,
  Target,
  Sparkles,
  FileCheck,
  ArrowRight,
} from "lucide-react";

/* ── Data ─────────────────────────────────────────────────────────── */

const HIGHLIGHTS = [
  {
    icon: Target,
    title: "Estratégia e narrativa",
    desc: "Construímos uma narrativa persuasiva que guia o espectador do problema à solução, com storytelling aplicado a cada slide.",
  },
  {
    icon: Sparkles,
    title: "Design premium e sob medida",
    desc: "Layouts profissionais, gráficos customizados e identidade visual alinhada à sua marca — nada de templates genéricos.",
  },
  {
    icon: BarChart3,
    title: "Dados que convencem",
    desc: "Infográficos, gráficos e indicadores apresentados com clareza visual para que seus números contem a história certa.",
  },
  {
    icon: FileCheck,
    title: "Arquivo editável incluso",
    desc: "Você recebe o arquivo final em PowerPoint, Google Slides ou PDF, pronto para apresentar e fácil de atualizar.",
  },
];

const USE_CASES = [
  "Pitch para investidores",
  "Apresentação institucional",
  "Proposta comercial",
  "Relatório de resultados",
  "Onboarding de clientes",
  "Treinamento interno",
  "Apresentação de produto",
  "Keynote para eventos",
];

/* ── Slide mockup component ───────────────────────────────────────── */

function SlideMockup() {
  const MONTHS = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 2800);
    return () => clearInterval(id);
  }, []);

  // Derive everything from tick so there's zero race-condition risk
  const bars = Array.from({ length: 7 }, (_, i) => {
    const mIdx = (tick + i) % 12;
    // Seed a pseudo-random but deterministic height per tick+i
    const seed = Math.sin((tick + i) * 2.37 + i * 1.13) * 0.5 + 0.5;
    const h = 25 + seed * 65; // 25-90 range
    return { month: MONTHS[mIdx], height: h };
  });

  const revenue = 12.5 + tick * 0.9;
  const clients = 48 + tick * 3;
  const conversion = 3.2 + Math.sin(tick * 0.6) * 0.8;

  return (
    <div
      className="relative w-full rounded-[1.5rem] overflow-hidden select-none"
      style={{
        aspectRatio: "16 / 10",
        background: "linear-gradient(160deg, #09090B 0%, #18122B 100%)",
        boxShadow:
          "0 40px 100px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.06) inset",
      }}
    >
      {/* Decorative bg orbs */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 300, height: 300, top: "-20%", right: "-10%",
          background: "radial-gradient(circle, rgba(108,4,58,0.22) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 200, height: 200, bottom: "0%", left: "-8%",
          background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Slide content */}
      <div className="relative z-10 h-full flex flex-col px-[7%] py-[5%]">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div
              className="w-5 h-5 rounded-md flex items-center justify-center"
              style={{ background: "rgba(108,4,58,0.35)" }}
            >
              <span className="text-[6px] font-extrabold" style={{ color: "#F9A8D4" }}>ab3</span>
            </div>
            <span className="text-[8px] text-white/35 font-light tracking-wide">
              Pitch de Investidores
            </span>
          </div>
          <span className="text-[8px] text-white/20 font-mono">03 / 12</span>
        </div>

        {/* Main content */}
        <div className="flex-1 flex gap-[4%] items-stretch">
          {/* Left column — KPI cards + text */}
          <div className="flex-1 flex flex-col justify-center gap-3 min-w-0">
            {/* Section tag */}
            <div className="h-1 w-10 rounded-full" style={{ background: "#6C043A" }} />

            {/* Title lines */}
            <div>
              <div className="h-3 w-[88%] rounded mb-1.5" style={{ background: "rgba(255,255,255,0.16)" }} />
              <div className="h-3 w-[55%] rounded" style={{ background: "rgba(108,4,58,0.45)" }} />
            </div>

            {/* Mini KPI row */}
            <div className="flex gap-2 mt-1">
              {[
                { label: "MRR", val: `R$ ${revenue.toFixed(0)}k`, color: "#6C043A" },
                { label: "Clientes", val: String(clients), color: "#7C3AED" },
                { label: "Conversão", val: `${conversion.toFixed(1)}%`, color: "#06B6D4" },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  className="flex-1 rounded-lg px-2 py-1.5"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <p className="text-[5px] text-white/35 uppercase tracking-wider mb-0.5">{kpi.label}</p>
                  <p
                    className="text-[11px] font-bold leading-none"
                    style={{ color: kpi.color, fontVariantNumeric: "tabular-nums", transition: "color 0.3s" }}
                  >
                    {kpi.val}
                  </p>
                </div>
              ))}
            </div>

            {/* Paragraph lines */}
            <div className="space-y-1 mt-1">
              <div className="h-1 w-full rounded" style={{ background: "rgba(255,255,255,0.05)" }} />
              <div className="h-1 w-[90%] rounded" style={{ background: "rgba(255,255,255,0.04)" }} />
              <div className="h-1 w-[70%] rounded" style={{ background: "rgba(255,255,255,0.03)" }} />
            </div>
          </div>

          {/* Right column — Chart */}
          <div
            className="w-[46%] shrink-0 rounded-xl flex flex-col"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "clamp(8px, 3%, 16px)",
            }}
          >
            {/* Chart header */}
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-[6px] text-white/45 uppercase tracking-wider leading-none mb-1">Receita Mensal</p>
                <p className="text-sm font-bold text-white leading-none" style={{ fontVariantNumeric: "tabular-nums", transition: "all 0.5s" }}>
                  R$ {revenue.toFixed(0)}k
                </p>
              </div>
              <div className="flex items-center gap-1 rounded-full px-1.5 py-0.5" style={{ background: "rgba(40,200,64,0.12)" }}>
                <span className="text-[5px] font-bold" style={{ color: "#28C840" }}>▲ 24%</span>
              </div>
            </div>

            {/* Bars */}
            <div className="flex-1 flex items-end gap-[3px] min-h-0">
              {bars.map((bar, i) => (
                <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                  <div
                    className="w-full rounded-t-sm"
                    style={{
                      height: `${bar.height}%`,
                      background:
                        i === bars.length - 1
                          ? "linear-gradient(to top, #6C043A, #9b1060)"
                          : i === bars.length - 2
                            ? "linear-gradient(to top, rgba(108,4,58,0.45), rgba(108,4,58,0.7))"
                            : "linear-gradient(to top, rgba(108,4,58,0.15), rgba(108,4,58,0.35))",
                      transition: "height 1s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  />
                  <span className="text-[5px] text-white/25 mt-1 leading-none">{bar.month}</span>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex items-center gap-2 mt-2 pt-1.5" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-[2px]" style={{ background: "#6C043A" }} />
                <span className="text-[5px] text-white/40">Atual</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-[2px]" style={{ background: "rgba(108,4,58,0.35)" }} />
                <span className="text-[5px] text-white/40">Anterior</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="rounded-full"
                style={{
                  width: i === 2 ? 14 : 4,
                  height: 4,
                  background: i === 2 ? "#6C043A" : "rgba(255,255,255,0.12)",
                }}
              />
            ))}
          </div>
          <span className="text-[7px] text-white/12 font-light">ab3design.com.br</span>
        </div>
      </div>
    </div>
  );
}

/* ── Main section ─────────────────────────────────────────────────── */

export default function ProcessBoard() {
  return (
    <section
      id="processo"
      className="py-28 md:py-36 px-4"
      style={{ background: "#F7F7F8" }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* ── Section header — centered ── */}
        <Reveal className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-5">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "rgba(108,4,58,0.1)" }}
            >
              <Presentation size={16} style={{ color: "#6C043A" }} />
            </span>
            <span
              className="text-xs font-bold tracking-[0.18em] uppercase"
              style={{ color: "#6C043A" }}
            >
              Apresentações profissionais
            </span>
          </div>
          <h2
            className="text-4xl md:text-[3.5rem] font-bold text-zinc-900 leading-[1.08] mb-5"
            style={{ letterSpacing: "-0.04em" }}
          >
            Slides que apresentam.
            <br />
            <span style={{ color: "#6C043A" }}>Narrativas que convencem.</span>
          </h2>
          <p className="text-zinc-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
            Criamos apresentações sob medida para pitch de investidores,
            propostas comerciais, relatórios e eventos — com design de alto
            impacto e narrativa estratégica que faz sua audiência agir.
          </p>
        </Reveal>

        {/* ── Main grid: mockup + highlights ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-20">
          {/* Left — Slide mockup */}
          <Reveal direction="left">
            <div className="relative pb-6 pr-2">
              {/* Glow behind mockup */}
              <div
                className="absolute -inset-6 rounded-[3rem] pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(108,4,58,0.12) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }}
              />
              <SlideMockup />
              {/* Floating badge */}
              <div
                className="absolute -bottom-2 right-0 flex items-center gap-2.5 rounded-full pl-3 pr-4 py-2.5 shadow-xl"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(108,4,58,0.1)" }}
                >
                  <Sparkles size={14} style={{ color: "#6C043A" }} />
                </span>
                <div>
                  <p
                    className="text-[11px] font-semibold text-zinc-800 leading-tight"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    Design exclusivo
                  </p>
                  <p className="text-[10px] text-zinc-400 font-light">
                    Zero templates prontos
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right — Highlights */}
          <div className="space-y-4">
            {HIGHLIGHTS.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 80}>
                  <div
                    className="group flex items-start gap-5 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/[0.04] hover:-translate-y-0.5"
                    style={{
                      background: "#fff",
                      border: "1px solid rgba(0,0,0,0.06)",
                    }}
                  >
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300"
                      style={{ background: "rgba(108,4,58,0.08)" }}
                    >
                      <Icon
                        size={18}
                        className="transition-colors duration-300 group-hover:text-violet-600"
                        style={{ color: "#6C043A" }}
                      />
                    </span>
                    <div>
                      <h3
                        className="text-[15px] font-semibold text-zinc-800 mb-1 group-hover:text-violet-700 transition-colors duration-300"
                        style={{ letterSpacing: "-0.01em" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm text-zinc-500 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* ── Use-cases + CTA row ── */}
        <Reveal>
          <div
            className="rounded-3xl p-6 md:p-10"
            style={{
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
              {/* Tags */}
              <div className="flex-1">
                <p
                  className="text-[11px] font-semibold uppercase tracking-wider mb-4"
                  style={{ color: "#6C043A" }}
                >
                  Para qualquer tipo de apresentação
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {USE_CASES.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-medium text-zinc-600 border border-zinc-200 rounded-full px-4 py-2 bg-zinc-50/80 hover:border-violet-300 hover:text-violet-700 hover:bg-violet-50 transition-all duration-200 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats + CTA */}
              <div className="flex flex-col items-start lg:items-end gap-5 shrink-0">
                {/* Stats */}
                <div className="flex gap-6">
                  {[
                    { value: "5–10", unit: "dias", label: "prazo médio" },
                    { value: "3×", unit: null, label: "revisões inclusas" },
                  ].map((m) => (
                    <div key={m.label} className="text-center">
                      <p
                        className="font-bold text-zinc-900 leading-tight"
                        style={{
                          fontSize: "1.35rem",
                          letterSpacing: "-0.04em",
                        }}
                      >
                        {m.value}
                        {m.unit && (
                          <span className="text-sm font-medium text-zinc-400 ml-1">
                            {m.unit}
                          </span>
                        )}
                      </p>
                      <p className="text-[10px] text-zinc-400 mt-0.5 font-light">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contato"
                  onClick={(e) => scrollTo(e, "#contato")}
                  className="group inline-flex items-center gap-3 rounded-full pl-6 pr-2 py-2 hover:scale-105 transition-transform duration-300"
                  style={{ background: "#6C043A" }}
                >
                  <span className="font-medium text-sm text-white">
                    Solicitar apresentação
                  </span>
                  <span className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-zinc-700 transition-colors duration-300">
                    <ArrowRight size={16} className="text-white" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
