interface GlassCardProps {
  metric: string;
  label: string;
  delay?: 'd1' | 'd2' | 'd3';
}

export default function GlassCard({ metric, label, delay }: GlassCardProps) {
  const animClass = delay
    ? `animate-[var(--animate-fade-in-up-${delay})]`
    : 'animate-[var(--animate-fade-in-up)]';

  return (
    <div
      className={`bg-white/5 backdrop-blur-[12px] border border-white/10 rounded-2xl p-5 min-w-[140px] ${animClass}`}
    >
      <p className="text-3xl font-bold text-white tracking-tight">{metric}</p>
      <p className="text-sm text-white/60 mt-1 leading-snug">{label}</p>
    </div>
  );
}
