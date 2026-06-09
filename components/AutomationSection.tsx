import { MessageSquare, MessagesSquare, Bot, Zap, ArrowRight, Sparkles } from 'lucide-react';
import ActionButton from './ui/ActionButton';
import Reveal from './ui/Reveal';

const capabilities = [
  {
    icon: MessageSquare,
    title: 'Chatbot para WhatsApp',
    desc: 'Atenda clientes 24h, envie orçamentos, tire dúvidas e capture leads automaticamente no WhatsApp.',
  },
  {
    icon: MessagesSquare,
    title: 'Chatbot para Instagram',
    desc: 'Responda DMs, comentários e stories de forma automática mantendo o tom da sua marca.',
  },
  {
    icon: Bot,
    title: 'Atendimento automático',
    desc: 'Scripts inteligentes que qualificam leads, agendam reuniões e encaminham para o time certo.',
  },
  {
    icon: Zap,
    title: 'Automações simples',
    desc: 'Conecte formulários, CRMs e planilhas sem escrever código. Funciona enquanto você dorme.',
  },
];

// Simulated chat messages
const chatMessages = [
  { from: 'user', text: 'Oi! Quero saber mais sobre os planos de vocês 👀', time: '09:14' },
  { from: 'bot',  text: 'Oi! Que bom te ver por aqui 😊 Me conta: você precisa de site, identidade visual ou automação?', time: '09:14' },
  { from: 'user', text: 'Site + automação', time: '09:15' },
  { from: 'bot',  text: '✅ Perfeito! Vou te passar um orçamento personalizado. Posso ligar amanhã às 10h?', time: '09:15' },
];

const stats = [
  { value: '98%',  label: 'taxa de resposta' },
  { value: '< 2s', label: 'tempo de resposta' },
  { value: '24/7', label: 'disponibilidade' },
];

export default function AutomationSection() {
  return (
    <section
      id="automacao"
      className="grain py-24 px-4"
      style={{ background: 'linear-gradient(to bottom, #0A0F1E, #09090B)' }}
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <Reveal className="mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: '#06B6D4' }}>
            Chatbots & Automações
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white leading-[1.05]"
            style={{ letterSpacing: '-0.04em' }}
          >
            Atenda mais,
            <br />
            <span style={{ color: '#06B6D4' }}>trabalhe menos.</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — capabilities */}
          <div className="space-y-4">
            {capabilities.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 70}>
                <div className="card-dark bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 flex items-start gap-5">
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      background: 'rgba(6,182,212,0.10)',
                      border: '1px solid rgba(6,182,212,0.18)',
                    }}
                  >
                    <Icon size={18} style={{ color: '#06B6D4' }} />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">{title}</h3>
                    <p className="text-[#94A3B8] text-sm leading-relaxed font-light">{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={300}>
              <div className="pt-2">
                <ActionButton label="Quero meu chatbot" href="#contato" variant="cyan" />
              </div>
            </Reveal>
          </div>

          {/* Right — live chat mockup */}
          <Reveal direction="right">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(10,15,30,0.9)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 32px 80px rgba(0,0,0,0.45)',
              }}
            >
              {/* Chat header */}
              <div
                className="flex items-center gap-3 px-5 py-4"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(6,182,212,0.15)', border: '1px solid rgba(6,182,212,0.2)' }}
                >
                  <Bot size={16} style={{ color: '#06B6D4' }} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white leading-tight">AB3 Bot</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#28C840' }} />
                    <span className="text-[10px] text-white/40">Online · Responde em segundos</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles size={12} style={{ color: '#06B6D4' }} />
                  <span className="text-[10px] font-semibold" style={{ color: '#06B6D4' }}>IA</span>
                </div>
              </div>

              {/* Messages */}
              <div className="p-5 space-y-3">
                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className="max-w-[78%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed"
                      style={
                        msg.from === 'user'
                          ? { background: '#06B6D4', color: 'white', borderBottomRightRadius: 4 }
                          : {
                              background: 'rgba(255,255,255,0.06)',
                              color: 'rgba(255,255,255,0.85)',
                              border: '1px solid rgba(255,255,255,0.08)',
                              borderBottomLeftRadius: 4,
                            }
                      }
                    >
                      {msg.text}
                      <span
                        className="block text-[9px] mt-1 text-right"
                        style={{ opacity: 0.5 }}
                      >
                        {msg.time}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                <div className="flex justify-start">
                  <div
                    className="rounded-2xl px-4 py-3 flex items-center gap-1"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderBottomLeftRadius: 4,
                    }}
                  >
                    {[0, 1, 2].map((dot) => (
                      <span
                        key={dot}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          background: '#94A3B8',
                          animation: `bounce-slow 1.2s ease-in-out infinite ${dot * 0.2}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Input bar */}
                <div
                  className="flex items-center gap-3 rounded-xl px-4 py-3 mt-2"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <span className="flex-1 text-xs text-white/25 font-light">
                    Digite uma mensagem...
                  </span>
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: '#06B6D4' }}
                  >
                    <ArrowRight size={12} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Stats bar */}
              <div
                className="grid grid-cols-3 px-5 py-4"
                style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
              >
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p
                      className="text-lg font-bold text-white leading-tight"
                      style={{ letterSpacing: '-0.03em' }}
                    >
                      {s.value}
                    </p>
                    <p className="text-[9px] text-white/40 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
