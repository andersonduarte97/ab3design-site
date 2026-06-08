"use client";

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
  return (
    <div
      className="relative w-full rounded-[1.5rem] overflow-hidden select-none"
      style={{
        aspectRatio: "16 / 10",
        background: "linear-gradient(160deg, #0F172A 0%, #1E1B4B 100%)",
        boxShadow:
          "0 40px 100px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.06) inset",
      }}
    >
      {/* Decorative bg orbs */}
      <div
        className="absolute rounded-full"
        style={{
          width: 280,
          height: 280,
          top: "-15%",
          right: "-8%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 180,
          height: 180,
          bottom: "5%",
          left: "-5%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      {/* Slide content */}
      <div className="relative z-10 h-full flex flex-col p-[8%]">
        {/* Top bar — brand + page */}
        <div className="flex items-center justify-between mb-auto">
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center"
              style={{ background: "rgba(124,58,237,0.3)" }}
            >
              <span
                className="text-[7px] font-bold"
                style={{ color: "#C4B5FD" }}
              >
                ab3
              </span>
            </div>
            <span className="text-[9px] text-white/30 font-light tracking-wide">
              Apresentação Institucional
            </span>
          </div>
          <span className="text-[9px] text-white/20 font-mono">03 / 12</span>
        </div>

        {/* Main content area */}
        <div className="flex-1 flex items-center gap-[6%]">
          {/* Left — text block */}
          <div className="flex-1 min-w-0">
            <div
              className="h-1.5 w-16 rounded-full mb-4"
              style={{ background: "#7C3AED" }}
            />
            <div
              className="h-4 w-[85%] rounded mb-2"
              style={{ background: "rgba(255,255,255,0.18)" }}
            />
            <div
              className="h-4 w-[60%] rounded mb-5"
              style={{ background: "rgba(6,182,212,0.5)" }}
            />

            {/* Paragraph lines */}
            <div
              className="h-1.5 w-full rounded mb-1.5"
              style={{ background: "rgba(255,255,255,0.06)" }}
            />
            <div
              className="h-1.5 w-[92%] rounded mb-1.5"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />
            <div
              className="h-1.5 w-[78%] rounded mb-5"
              style={{ background: "rgba(255,255,255,0.04)" }}
            />

            {/* Mini CTA */}
            <div
              className="h-7 w-24 rounded-full"
              style={{ background: "#06B6D4" }}
            />
          </div>

          {/* Right — chart mockup */}
          <div
            className="w-[40%] shrink-0 rounded-xl p-4"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Chart title */}
            <div
              className="h-1.5 w-16 rounded mb-3"
              style={{ background: "rgba(255,255,255,0.12)" }}
            />
            {/* Bar chart */}
            <div className="flex items-end gap-2 h-20">
              {[45, 65, 40, 80, 55, 70, 90].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t"
                  style={{
                    height: `${h}%`,
                    background:
                      i === 6
                        ? "#7C3AED"
                        : i === 3
                          ? "rgba(124,58,237,0.5)"
                          : "rgba(124,58,237,0.2)",
                    transition: "height 0.3s ease",
                  }}
                />
              ))}
            </div>
            {/* Legend */}
            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1.5">
                <div
                  className="w-2 h-2 rounded-sm"
                  style={{ background: "#7C3AED" }}
                />
                <span className="text-[7px] text-white/30">Crescimento</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div
                  className="w-2 h-2 rounded-sm"
                  style={{ background: "rgba(124,58,237,0.3)" }}
                />
                <span className="text-[7px] text-white/30">Anterior</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between mt-auto pt-4">
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="rounded-full"
                style={{
                  width: i === 2 ? 16 : 5,
                  height: 5,
                  background:
                    i === 2 ? "#7C3AED" : "rgba(255,255,255,0.15)",
                  transition: "width 0.3s ease",
                }}
              />
            ))}
          </div>
          <span className="text-[8px] text-white/15 font-light">
            ab3design.com.br
          </span>
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
              style={{ background: "rgba(124,58,237,0.1)" }}
            >
              <Presentation size={16} style={{ color: "#7C3AED" }} />
            </span>
            <span
              className="text-xs font-bold tracking-[0.18em] uppercase"
              style={{ color: "#7C3AED" }}
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
            <span style={{ color: "#7C3AED" }}>Narrativas que convencem.</span>
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
                    "radial-gradient(ellipse at center, rgba(124,58,237,0.12) 0%, transparent 70%)",
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
                  style={{ background: "rgba(124,58,237,0.1)" }}
                >
                  <Sparkles size={14} style={{ color: "#7C3AED" }} />
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
                      style={{ background: "rgba(124,58,237,0.08)" }}
                    >
                      <Icon
                        size={18}
                        className="transition-colors duration-300 group-hover:text-violet-600"
                        style={{ color: "#7C3AED" }}
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
                  style={{ color: "#7C3AED" }}
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
                  style={{ background: "#06B6D4" }}
                >
                  <span className="font-medium text-sm text-zinc-900">
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
