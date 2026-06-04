"use client";

import { useMemo } from "react";
import { Player } from "@remotion/player";
import { PipelineJourney } from "@/components/ui/pipeline-journey";
import Reveal from "@/components/ui/Reveal";
import { scrollTo } from "@/lib/scrollTo";

const ITEMS = [
  {
    label: "Briefing e estratégia",
    desc: "Entendemos seu negócio, público e objetivo antes de criar qualquer coisa — site, apresentação ou automação.",
  },
  {
    label: "Design e narrativa sob medida",
    desc: "Cada projeto é único. Criamos a identidade visual, a estrutura e o conteúdo certos para o que você precisa comunicar.",
  },
  {
    label: "Entrega e suporte",
    desc: "Revisões inclusas, ajustes sem custo extra e suporte pós-entrega para garantir que tudo funcione como esperado.",
  },
];

const INCLUDED = [
  "Design exclusivo e personalizado",
  "Narrativa construída para seu público",
  "Apresentações institucionais e de produto",
  "Sites e landing pages que convertem",
  "Automações e integrações sob medida",
  "SEO técnico configurado",
  "3 rodadas de revisão inclusas",
  "30 dias de suporte pós-entrega",
];

const METRICS = [
  { value: "7–14",  unit: "dias",   label: "prazo médio" },
  { value: "3×",    unit: null,     label: "revisões inclusas" },
  { value: "30",    unit: "dias",   label: "suporte pós-entrega" },
];

export default function ProcessBoard() {
  const props = useMemo(
    () => ({ cardLabel: "Seu site no ar", accentColor: "#7C3AED", speed: 1 }),
    [],
  );

  return (
    <section
      id="processo"
      className="py-24 px-4"
      style={{ background: "#F3F3F3" }}
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <Reveal className="mb-14">
          <p
            className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
            style={{ color: "#7C3AED" }}
          >
            Feito sob medida para o seu negócio
          </p>
          <h2
            className="text-4xl md:text-5xl font-medium text-zinc-900 leading-[1.05] max-w-lg"
            style={{ letterSpacing: "-0.04em" }}
          >
            Apresentações que
            <br />
            vendem por você.
          </h2>
          <p className="text-zinc-500 text-sm leading-relaxed mt-5 max-w-md font-light">
            Criamos apresentações institucionais, de produtos e de serviços que comunicam o valor da sua empresa com clareza e impacto visual. Cada detalhe é pensado para o seu público, do design à narrativa.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — animation */}
          <Reveal direction="left">
          <div>
            <Player
              component={PipelineJourney as React.ComponentType<Record<string, unknown>>}
              inputProps={props}
              durationInFrames={240}
              fps={30}
              compositionWidth={1280}
              compositionHeight={720}
              autoPlay
              loop
              controls={false}
              clickToPlay={false}
              acknowledgeRemotionLicense
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: "16 / 9",
                borderRadius: 20,
                overflow: "hidden",
                background: "#09090b",
                boxShadow: "0 32px 80px rgba(0,0,0,0.18)",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            />
          </div>
          </Reveal>

          {/* Right — feature list */}
          <div className="space-y-4">
            {ITEMS.map((item, i) => (
              <Reveal key={item.label} delay={i * 80}>
              <div
                className="card-light flex items-start gap-5 bg-white border border-zinc-200 rounded-2xl p-6"
              >
                <span
                  className="text-3xl font-bold shrink-0 tabular-nums"
                  style={{ color: "rgba(124, 58, 237, 0.35)" }}
                >
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-zinc-800 mb-1">
                    {item.label}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
              </Reveal>
            ))}

            {/* Metrics row */}
            <Reveal delay={260}>
              <div className="grid grid-cols-3 gap-3">
                {METRICS.map((m) => (
                  <div
                    key={m.label}
                    className="bg-white border border-zinc-200 rounded-2xl p-4 text-center"
                    style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
                  >
                    <p
                      className="font-bold text-zinc-900 leading-tight"
                      style={{ fontSize: "1.4rem", letterSpacing: "-0.04em" }}
                    >
                      {m.value}
                      {m.unit && (
                        <span className="text-sm font-medium text-zinc-500 ml-1">{m.unit}</span>
                      )}
                    </p>
                    <p className="text-[10px] text-zinc-400 mt-1 font-light leading-tight">{m.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Included checklist */}
            <Reveal delay={320}>
              <div className="bg-white border border-zinc-200 rounded-2xl p-5">
                <p className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                  Incluso em todo projeto
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {INCLUDED.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: "rgba(124,58,237,0.1)" }}
                      >
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1 4l2 2 4-4" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span className="text-xs text-zinc-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="pt-2">
              <a
                href="#contato"
                onClick={(e) => scrollTo(e, '#contato')}
                className="group inline-flex items-center gap-3 rounded-full pl-6 pr-2 py-2 hover:scale-105 transition-transform duration-300"
                style={{ background: "#F59E0B" }}
              >
                <span className="font-medium text-sm text-zinc-900">
                  Iniciar projeto
                </span>
                <span className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-zinc-700 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
