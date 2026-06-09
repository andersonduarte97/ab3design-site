
import {
  Palette,
  Layout,
  Monitor,
  Share2,
  Image,
  Film,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
} from 'lucide-react';
import Reveal from './ui/Reveal';

const services = [
  {
    icon: Palette,
    title: 'Identidade Visual',
    desc: 'Logo, paleta, tipografia e guia de marca que comunica quem você é com consistência.',
  },
  {
    icon: Share2,
    title: 'Redes Sociais',
    desc: 'Posts, stories, reels, carrosseis e highlights com identidade visual coesa e profissional.',
  },
  {
    icon: Image,
    title: 'Social Media Design',
    desc: 'Artes para feed, stories e campanhas que param o scroll e geram engajamento real.',
  },
  {
    icon: Film,
    title: 'Capas & Thumbnails',
    desc: 'Thumbnails para YouTube, capas de podcast, highlights do Instagram e banners de perfil.',
  },
  {
    icon: Layout,
    title: 'UI / UX Design',
    desc: 'Interfaces intuitivas que guiam o usuário e aumentam conversão.',
  },
  {
    icon: Monitor,
    title: 'Design de Sites',
    desc: 'Layouts modernos com hierarquia visual clara, alto impacto e retenção.',
  },
];

const swatches = [
  { name: 'Crimson',   hex: '#6C043A' },
  { name: 'Purple',    hex: '#7C3AED' },
  { name: 'Turquoise', hex: '#06B6D4' },
  { name: 'Navy',      hex: '#09090B' },
  { name: 'Muted',     hex: '#94A3B8' },
  { name: 'Light',     hex: '#F3F3F3' },
];

// 9 posts — mistura de fotos reais (picsum) e posts estilizados
type FeedPost =
  | { type: 'img'; src: string }
  | { type: 'styled'; bg: string; text?: string | null; sub?: string | null; shape?: boolean; dark?: boolean };

const feedPosts: FeedPost[] = [
  { type: 'img',    src: '/images/feed/workspace.png' },
  { type: 'styled', bg: 'linear-gradient(135deg, #7C3AED, #06B6D4)',   text: 'Lançamento', sub: 'Nov 24' },
  { type: 'img',    src: '/images/feed/mobile.png' },
  { type: 'styled', bg: 'linear-gradient(135deg, #18181B, #09090B)',   text: 'ab3',        sub: 'Design' },
  { type: 'img',    src: '/images/feed/branding.png' },
  { type: 'styled', bg: 'linear-gradient(135deg, #6C043A, #06B6D4)',   text: '98%',        sub: 'Performance' },
  { type: 'img',    src: '/images/feed/social.png' },
  { type: 'styled', bg: 'linear-gradient(135deg, #6C043A, #7C3AED)',   text: 'Brand\nKit', sub: null },
  { type: 'img',    src: '/images/feed/ui-design.png' },
];

const formats = [
  { label: 'Post',      ratio: '1:1',  w: 56, h: 56 },
  { label: 'Story',     ratio: '9:16', w: 35, h: 62 },
  { label: 'Reels',     ratio: '9:16', w: 35, h: 62 },
  { label: 'Carrossel', ratio: '1:1',  w: 56, h: 56 },
  { label: 'Banner',    ratio: '16:9', w: 80, h: 45 },
  { label: 'Thumb',     ratio: '16:9', w: 80, h: 45 },
];

const deliverables = [
  'Manual de marca',
  'Arquivos editáveis',
  'Variações de logo',
  'Templates para Instagram',
  'Pack de stories',
  'Pack de carrosseis',
  'Highlights & covers',
  'Thumbnails YouTube',
  'Banners LinkedIn',
  'Ícones customizados',
  'Guia de aplicação',
  'Assets para redes sociais',
  'Kit de apresentação',
  'Paleta completa',
];

export default function DesignSection() {
  return (
    <section
      id="design"
      className="py-24 px-4"
      style={{ background: '#FFFFFF' }}
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — sticky header + service list */}
          <div className="md:sticky md:top-28">
            <Reveal direction="left">
              <p
                className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
                style={{ color: '#7C3AED' }}
              >
                Design personalizado
              </p>
              <h2
                className="text-4xl md:text-5xl font-medium text-zinc-900 leading-[1.1] mb-6"
                style={{ letterSpacing: '-0.03em' }}
              >
                Marca que
                <br />
                impressiona.
              </h2>
              <p className="text-zinc-500 text-base font-light mb-10 leading-relaxed max-w-sm">
                Do conceito ao pixel final: identidade visual, redes sociais e interfaces que
                representam sua empresa com autoridade em todos os canais.
              </p>
            </Reveal>

            <div className="space-y-3">
              {services.map(({ icon: Icon, title, desc }, i) => (
                <Reveal key={title} delay={i * 60}>
                <div
                  className="card-light flex items-start gap-4 bg-white border border-zinc-200 rounded-2xl p-5"
                >
                  <span
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(124,58,237,0.07)' }}
                  >
                    <Icon size={17} style={{ color: '#7C3AED' }} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-800 mb-0.5">{title}</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right — cards column */}
          <Reveal direction="right">
          <div className="space-y-4">

            {/* Instagram feed mock */}
            <div className="bg-white border border-zinc-200 rounded-[2rem] overflow-hidden shadow-sm">
              {/* Profile header */}
              <div className="px-5 pt-5 pb-4 flex items-center gap-3 border-b border-zinc-100">
                {/* Avatar com ring + logo */}
                <div
                  className="w-11 h-11 rounded-full p-[2px] shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #6C043A, #7C3AED, #06B6D4)',
                  }}
                >
                  <div
                    className="w-full h-full rounded-full bg-white flex items-center justify-center"
                  >
                    <span className="text-[14px] font-black tracking-tighter select-none font-sans">
                      <span className="text-zinc-900">ab</span>
                      <span style={{ color: '#7C3AED' }}>3</span>
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-zinc-900 leading-tight">@ab3design</p>
                  <p className="text-xs text-zinc-400 font-light">Design · Branding · Social</p>
                </div>
                <div className="hidden sm:flex gap-4 shrink-0">
                  {[
                    { n: '142', l: 'posts' },
                    { n: '4.8k', l: 'seguidores' },
                    { n: '312', l: 'seguindo' },
                  ].map((s) => (
                    <div key={s.l} className="text-center">
                      <p className="text-sm font-bold text-zinc-900 leading-tight">{s.n}</p>
                      <p className="text-[9px] text-zinc-400">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feed grid 3×3 */}
              <div className="grid grid-cols-3 gap-0.5 bg-zinc-100">
                {feedPosts.map((post, i) => (
                  <div
                    key={i}
                    className="relative aspect-square flex items-center justify-center overflow-hidden group cursor-pointer"
                  >
                    {post.type === 'img' ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={post.src}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ background: post.bg }}
                      >
                        {post.shape && (
                          <>
                            <div className="absolute w-16 h-16 rounded-full opacity-20"
                              style={{ background: 'rgba(255,255,255,0.3)', top: '8%', right: '-8%' }} />
                            <div className="absolute w-10 h-10 rounded-xl opacity-15 rotate-12"
                              style={{ background: 'rgba(255,255,255,0.25)', bottom: '8%', left: '5%' }} />
                          </>
                        )}
                        {post.text && (
                          <div className="text-center z-10 px-2">
                            <p className="font-bold leading-tight text-white"
                              style={{
                                fontSize: post.text.length <= 3 ? '1.4rem' : '0.72rem',
                                whiteSpace: 'pre-line',
                                letterSpacing: '-0.02em',
                              }}>
                              {post.text}
                            </p>
                            {post.sub && (
                              <p className="text-[9px] mt-0.5 font-light opacity-70 text-white">{post.sub}</p>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3 z-10">
                      <span className="flex items-center gap-1 text-white text-xs font-semibold">
                        <Heart size={12} fill="white" /> {Math.floor(100 + i * 37)}
                      </span>
                      <span className="flex items-center gap-1 text-white text-xs font-semibold">
                        <MessageCircle size={12} /> {Math.floor(8 + i * 5)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action bar */}
              <div className="px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Heart size={20} className="text-zinc-400 hover:text-red-500 transition-colors cursor-pointer" />
                  <MessageCircle size={20} className="text-zinc-400 cursor-pointer" />
                  <Send size={20} className="text-zinc-400 cursor-pointer" />
                </div>
                <Bookmark size={20} className="text-zinc-400 cursor-pointer" />
              </div>
            </div>

            {/* Story preview + formats */}
            <div className="bg-white border border-zinc-200 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                  Formatos entregues
                </p>
                <span
                  className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: 'rgba(124,58,237,0.08)', color: '#7C3AED' }}
                >
                  Multi-canal
                </span>
              </div>

              <div className="flex items-end justify-center gap-5 flex-wrap py-2">
                {formats.map((f) => (
                  <div key={f.label} className="flex flex-col items-center gap-2">
                    <div
                      className="rounded-lg"
                      style={{
                        width: f.w,
                        height: f.h,
                        background: 'linear-gradient(135deg, rgba(124,58,237,0.14), rgba(6,182,212,0.08))',
                        border: '1px solid rgba(124,58,237,0.22)',
                      }}
                    />
                    <div className="text-center">
                      <p className="text-[10px] font-semibold text-zinc-700 leading-tight">{f.label}</p>
                      <p className="text-[9px] text-zinc-400 font-mono">{f.ratio}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Channels */}
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  { label: 'Instagram', color: '#E1306C' },
                  { label: 'LinkedIn', color: '#0A66C2' },
                  { label: 'YouTube', color: '#FF0000' },
                  { label: 'TikTok', color: '#09090B' },
                  { label: 'Pinterest', color: '#E60023' },
                  { label: 'WhatsApp', color: '#25D366' },
                  { label: 'Facebook', color: '#1877F2' },
                ].map((ch) => (
                  <span
                    key={ch.label}
                    className="flex items-center gap-1.5 text-[11px] font-medium rounded-full px-3 py-1 border"
                    style={{
                      color: ch.color,
                      borderColor: `${ch.color}30`,
                      background: `${ch.color}0A`,
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: ch.color }}
                    />
                    {ch.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Brand kit card */}
            <div className="bg-white border border-zinc-200 rounded-[2rem] overflow-hidden shadow-sm">
              {/* Dark brand showcase */}
              <div
                className="relative h-40 flex items-center justify-center overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #09090B 0%, #1E1B4B 100%)' }}
              >
                {/* SVG design grid/blueprint lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" fill="none">
                  {/* Construction circles */}
                  <circle cx="50%" cy="50%" r="55" stroke="#7C3AED" strokeWidth="0.75" strokeDasharray="3 3" />
                  <circle cx="50%" cy="50%" r="38" stroke="#06B6D4" strokeWidth="0.75" />
                  {/* Axis lines */}
                  <line x1="0" y1="50%" x2="100%" y2="50%" />
                  <line x1="50%" y1="0" x2="50%" y2="100%" />
                  {/* Diagonal lines */}
                  <line x1="0" y1="0" x2="100%" y2="100%" strokeDasharray="2 4" stroke="rgba(255,255,255,0.08)" />
                  <line x1="0" y1="100%" x2="100%" y2="0" strokeDasharray="2 4" stroke="rgba(255,255,255,0.08)" />
                </svg>

                {/* Floating Glass Logo Plate */}
                <div className="bg-slate-950/45 backdrop-blur-md border border-white/5 rounded-2xl px-6 py-3.5 text-center z-10 shadow-lg shadow-black/30">
                  <div className="flex items-center gap-1 justify-center mb-1">
                    <span className="text-2xl font-black text-white tracking-tighter font-sans">ab3</span>
                    <span className="text-2xl font-black tracking-tighter font-sans" style={{ color: '#7C3AED' }}>
                      Design
                    </span>
                  </div>
                  <span className="text-[9px] text-white/40 tracking-[0.2em] uppercase font-bold font-sans">
                    Brand Identity
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/5 to-transparent" />
              </div>

              <div className="px-5 py-5">
                {/* Pantone Swatches */}
                <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-3 select-none">
                  Paleta de Cores
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-5">
                  {swatches.map((c, i) => (
                    <div
                      key={i}
                      className="group relative bg-white border border-zinc-200/80 rounded-xl overflow-hidden shadow-xs hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer"
                    >
                      {/* Color block */}
                      <div
                        className="h-10 w-full group-hover:brightness-95 transition-all duration-300"
                        style={{
                          background: c.hex,
                        }}
                      />
                      {/* Pantone label info */}
                      <div className="p-1.5 text-center bg-white border-t border-zinc-100 select-all">
                        <p className="text-[8px] font-bold text-zinc-800 tracking-tight leading-none mb-0.5 truncate">
                          {c.name}
                        </p>
                        <p className="text-[7px] text-zinc-400 font-mono leading-none">
                          {c.hex}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Typography Specimen */}
                <div className="bg-zinc-50 border border-zinc-200/60 rounded-2xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Glyphs display */}
                    <div className="w-14 h-14 bg-white border border-zinc-200/80 rounded-xl flex items-center justify-center shadow-xs shrink-0 select-none">
                      <span className="text-3xl font-black text-zinc-900 tracking-tighter font-sans">
                        Aa
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest leading-none block mb-1">
                        Fonte Primária
                      </span>
                      <p className="text-lg font-extrabold text-zinc-900 leading-none mb-1.5 tracking-tight font-sans">
                        Inter Display
                      </p>
                      <p className="text-[10px] text-zinc-400 font-mono">
                        A-Z, a-z, 0-9
                      </p>
                    </div>
                  </div>
                  {/* Weights list */}
                  <div className="flex flex-col gap-0.5 items-end text-[10px] text-zinc-500 select-none">
                    {['Light', 'Regular', 'Medium', 'Bold'].map((w, i) => (
                      <span
                        key={w}
                        style={{ fontWeight: [300, 400, 500, 800][i] }}
                        className="transition-colors hover:text-zinc-900"
                      >
                        {w}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Deliverables */}
            <div className="bg-white border border-zinc-200 rounded-2xl p-5">
              <p className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                O que você recebe
              </p>
              <div className="flex flex-wrap gap-2">
                {deliverables.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-zinc-600 border border-zinc-200 rounded-full px-3 py-1 bg-zinc-50 hover:border-zinc-300 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
