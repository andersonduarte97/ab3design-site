import ActionButton from './ui/ActionButton';
import Reveal from './ui/Reveal';

const steps = [
  {
    number: '01',
    title: 'Briefing',
    description:
      'Entendemos seu negócio, objetivos e público. Definimos o escopo completo antes de escrever uma linha de código.',
  },
  {
    number: '02',
    title: 'Desenvolvimento',
    description:
      'Criamos a solução sob medida com design de alto nível e código limpo, revisando com você em cada etapa.',
  },
  {
    number: '03',
    title: 'Entrega',
    description:
      'Deploy, testes de qualidade e suporte pós-lançamento. Você recebe o projeto pronto para gerar resultados.',
  },
];

const codeLines = [
  { indent: 0, content: 'const projeto = {',        color: 'text-white/80' },
  { indent: 1, content: 'cliente: "Você",',          color: 'text-violet-400' },
  { indent: 1, content: 'prazo: "conforme acordo",', color: 'text-blue-400' },
  { indent: 1, content: 'qualidade: "máxima",',      color: 'text-violet-400' },
  { indent: 1, content: 'suporte: true,',            color: 'text-cyan-400' },
  { indent: 0, content: '}',                         color: 'text-white/80' },
  { indent: 0, content: '',                          color: '' },
  { indent: 0, content: 'await entregar(projeto)',   color: 'text-blue-300' },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="grain py-24 px-4"
      style={{ background: 'linear-gradient(to bottom, #09090B, #0D1526)' }}
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <Reveal className="mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: '#7C3AED' }}>
            Processo
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white leading-[1.05]"
            style={{ letterSpacing: '-0.04em' }}
          >
            Como
            <br />
            trabalhamos.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — numbered steps */}
          <div className="space-y-4">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 80}>
                <div className="card-dark bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="flex items-start gap-5">
                    <span
                      className="text-3xl font-bold shrink-0"
                      style={{ color: 'rgba(124, 58, 237, 0.35)' }}
                    >
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                      <p className="text-[#94A3B8] text-sm leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={280}>
              <div className="pt-4">
                <ActionButton label="Começar agora" href="#contato" />
              </div>
            </Reveal>
          </div>

          {/* Right — code window */}
          <Reveal direction="right">
            <div
              className="hidden md:block"
              style={{ transform: 'rotate(3deg)' }}
            >
              <div className="bg-[#18181B]/70 backdrop-blur-[12px] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#09090B]/60">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 text-xs text-white/40 font-mono">ab3design.config.ts</span>
                </div>

                {/* Code area */}
                <div className="p-6 font-mono text-sm space-y-1">
                  {codeLines.map((line, i) => (
                    <div key={i} className="flex">
                      <span className="text-white/20 mr-6 select-none w-4 text-right shrink-0">
                        {i + 1}
                      </span>
                      <span
                        className={line.color}
                        style={{ paddingLeft: `${line.indent * 1.5}rem` }}
                      >
                        {line.content}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Status tag */}
                <div className="relative px-6 pb-6">
                  <div className="flex justify-end">
                    <span
                      className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full"
                      style={{
                        background: 'rgba(124,58,237,0.12)',
                        border: '1px solid rgba(124,58,237,0.25)',
                        color: '#A78BFA',
                        animation: 'bounce-slow 2s ease-in-out infinite',
                      }}
                    >
                      <span className="w-2 h-2 rounded-full" style={{ background: '#7C3AED' }} />
                      Pronto para entrega
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
