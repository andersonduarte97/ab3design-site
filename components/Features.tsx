import {
  Globe,
  ShoppingCart,
  Zap,
  Workflow,
  BarChart2,
  Layers,
  ArrowRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Reveal from './ui/Reveal';
import SmoothLink from './ui/SmoothLink';

interface Service {
  icon: LucideIcon;
  label: string;
  tag: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Globe,
    label: 'Sites Modernos',
    tag: 'Web',
    description:
      'Sites com design exclusivo, rápidos, responsivos e otimizados para o Google. Do briefing à publicação sem complicações.',
  },
  {
    icon: ShoppingCart,
    label: 'E-commerce',
    tag: 'Loja Virtual',
    description:
      'Lojas completas com catálogo, carrinho, meios de pagamento e gestão de pedidos. Seu negócio vendendo 24h por dia.',
  },
  {
    icon: Zap,
    label: 'Landing Pages',
    tag: 'Conversão',
    description:
      'Páginas criadas para transformar visitantes em clientes. Copywriting estratégico, design orientado à ação e formulários de captura que convertem.',
  },
  {
    icon: Workflow,
    label: 'Automações',
    tag: 'Eficiência',
    description:
      'Elimine tarefas repetitivas conectando seus sistemas. Atendimento, cobranças e notificações funcionando sozinhos enquanto você foca no que importa.',
  },
  {
    icon: BarChart2,
    label: 'Dashboards & Apresentações',
    tag: 'Dados & Pitch',
    description:
      'Painéis de dados sob medida e apresentações institucionais que comunicam resultados, vendem ideias e representam sua marca com profissionalismo.',
  },
  {
    icon: Layers,
    label: 'Integrações',
    tag: 'Conectividade',
    description:
      'CRM, ERP, WhatsApp, e-mail e plataformas de pagamento: tudo conectado em um fluxo único, automatizado e sem falhas.',
  },
];

export default function Features() {
  return (
    <section id="servicos" className="py-24 px-4" style={{ background: '#F3F3F3' }}>
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left — sticky heading */}
          <div className="lg:sticky lg:top-28 lg:w-[400px] shrink-0">
            <Reveal direction="left">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#7C3AED] mb-4">
                O que fazemos
              </p>
              <h2
                className="text-4xl md:text-5xl font-medium text-zinc-900 leading-[1.1] mb-5"
                style={{ letterSpacing: '-0.03em' }}
              >
                Tudo que o seu
                <br />
                negócio digital
                <br />
                precisa.
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-[320px]">
                Da identidade visual ao sistema que automatiza sua operação. Cuidamos de cada detalhe para você crescer com segurança.
              </p>
              <SmoothLink
                href="#contato"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#7C3AED] hover:gap-3 transition-all duration-200"
              >
                Fale com a gente
                <ArrowRight size={14} />
              </SmoothLink>
            </Reveal>
          </div>

          {/* Right — expanded service cards */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {services.map(({ icon: Icon, label, tag, description }, i) => (
              <Reveal key={label} delay={i * 60}>
                <SmoothLink
                  href="#contato"
                  className="group flex flex-col gap-5 bg-white border border-zinc-200 rounded-2xl p-6 h-full
                             hover:border-violet-200 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-violet-500/[0.06]
                             transition-all duration-300"
                >
                  {/* Top row: icon + tag */}
                  <div className="flex items-start justify-between">
                    <span
                      className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300"
                      style={{ background: 'rgba(124,58,237,0.08)' }}
                    >
                      <Icon
                        size={20}
                        className="transition-colors duration-300 group-hover:text-violet-600"
                        style={{ color: '#7C3AED' }}
                      />
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-300 group-hover:text-violet-300 transition-colors duration-300 pt-1">
                      {tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className="font-semibold text-zinc-900 text-base mb-2.5 group-hover:text-violet-700 transition-colors duration-300"
                      style={{ letterSpacing: '-0.01em' }}
                    >
                      {label}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      {description}
                    </p>
                  </div>

                  {/* CTA link — slides in on hover */}
                  <div
                    className="flex items-center gap-1.5 text-xs font-semibold text-violet-500
                               opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0
                               transition-all duration-300"
                  >
                    Saiba mais
                    <ArrowRight size={11} />
                  </div>
                </SmoothLink>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
