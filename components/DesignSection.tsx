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
  { hex: '#7C3AED' },
  { hex: '#2563EB' },
  { hex: '#F59E0B' },
  { hex: '#0F172A' },
  { hex: '#94A3B8' },
  { hex: '#E2E8F0', border: true },
];

// 9 posts — mistura de fotos reais (picsum) e posts estilizados
type FeedPost =
  | { type: 'img'; src: string }
  | { type: 'styled'; bg: string; text?: string | null; sub?: string | null; shape?: boolean; dark?: boolean };

const feedPosts: FeedPost[] = [
  { type: 'img',    src: 'https://picsum.photos/seed/brand11/300/300' },
  { type: 'styled', bg: 'linear-gradient(135deg, #7C3AED, #2563EB)',   text: 'Lançamento', sub: 'Nov 24' },
  { type: 'img',    src: 'https://picsum.photos/seed/studio22/300/300' },
  { type: 'styled', bg: 'linear-gradient(135deg, #1E293B, #0F172A)',   text: 'ab3',        sub: 'Design' },
  { type: 'img',    src: 'https://picsum.photos/seed/creative33/300/300' },
  { type: 'styled', bg: 'linear-gradient(135deg, #F59E0B, #F97316)',   text: '98%',        sub: 'Performance' },
  { type: 'img',    src: 'https://picsum.photos/seed/workspace44/300/300' },
  { type: 'styled', bg: 'linear-gradient(135deg, #7C3AED, #4F46E5)',   text: 'Brand\nKit', sub: null },
  { type: 'styled', bg: 'linear-gradient(135deg, #0A0F1E, #1E293B)',   text: null, shape: true },
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
                {/* Avatar com ring */}
                <div
                  className="w-11 h-11 rounded-full p-[2px] shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #F59E0B, #7C3AED, #2563EB)',
                  }}
                >
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center"
                    style={{ background: '#0F172A' }}
                  >
                    <span className="text-[10px] font-bold text-white tracking-tight">ab3</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-zinc-900 leading-tight">@ab3design</p>
                  <p className="text-xs text-zinc-400 font-light">Design · Branding · Social</p>
                </div>
                <div className="flex gap-4 shrink-0">
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
                        background: 'linear-gradient(135deg, rgba(124,58,237,0.14), rgba(37,99,235,0.08))',
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
                  { label: 'TikTok', color: '#0F172A' },
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
            <div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm">
              {/* Dark brand showcase */}
              <div
                className="relative h-36 flex items-center justify-center overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%)' }}
              >
                <div
                  className="absolute top-4 right-6 w-20 h-20 rounded-full border opacity-20"
                  style={{ borderColor: '#7C3AED', background: 'rgba(124,58,237,0.08)' }}
                />
                <div
                  className="absolute -bottom-3 left-5 w-12 h-12 rounded-xl border opacity-20"
                  style={{ borderColor: '#2563EB' }}
                />
                <div className="text-center z-10">
                  <div className="flex items-center gap-1 justify-center mb-1">
                    <span className="text-2xl font-bold text-white tracking-tight">ab3</span>
                    <span className="text-2xl font-bold tracking-tight" style={{ color: '#7C3AED' }}>
                      Design
                    </span>
                  </div>
                  <span className="text-[10px] text-white/30 tracking-[0.18em] uppercase font-light">
                    Brand Identity
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent" />
              </div>

              <div className="px-5 py-4">
                {/* Swatches */}
                <p className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Paleta
                </p>
                <div className="flex gap-2 mb-4">
                  {swatches.map((c, i) => (
                    <div
                      key={i}
                      className="flex-1 h-8 rounded-lg"
                      style={{
                        background: c.hex,
                        border: c.border ? '1px solid #e2e8f0' : undefined,
                      }}
                    />
                  ))}
                </div>

                {/* Typography */}
                <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-3">
                  <p
                    className="text-xl font-bold text-zinc-900 leading-none mb-1"
                    style={{ letterSpacing: '-0.03em' }}
                  >
                    Inter Display
                  </p>
                  <div className="flex gap-3 mt-1.5">
                    {['Light', 'Regular', 'Medium', 'Semibold', 'Bold'].map((w, i) => (
                      <span
                        key={w}
                        className="text-[10px] text-zinc-500"
                        style={{ fontWeight: [300, 400, 500, 600, 700][i] }}
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
