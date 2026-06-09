"use client";

import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  const inputClass =
    'w-full rounded-xl px-4 py-3 text-sm text-white bg-white/5 border border-white/10 placeholder-white/30 outline-none focus:border-violet-500/60 focus:bg-white/8 transition-colors duration-200';

  return (
    <form onSubmit={handleSubmit} className="w-full text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-white/40 font-medium tracking-wide uppercase">Nome</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Seu nome"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-white/40 font-medium tracking-wide uppercase">E-mail</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label className="text-xs text-white/40 font-medium tracking-wide uppercase">
            Telefone <span className="normal-case text-white/25">(opcional)</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="(00) 00000-0000"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label className="text-xs text-white/40 font-medium tracking-wide uppercase">Mensagem</label>
          <textarea
            name="message"
            required
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Conte um pouco sobre o seu projeto..."
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className="mt-4 w-full rounded-xl py-3.5 text-sm font-semibold text-white transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:opacity-90 active:scale-[0.98]"
        style={{ background: 'linear-gradient(135deg, #7C3AED, #6D28D9)' }}
      >
        {status === 'loading' ? 'Enviando…' : status === 'success' ? 'Mensagem enviada!' : 'Enviar mensagem'}
      </button>

      {status === 'success' && (
        <p className="mt-3 text-center text-sm text-emerald-400/80">
          Recebemos sua mensagem. Te respondemos em até 24h!
        </p>
      )}
      {status === 'error' && (
        <p className="mt-3 text-center text-sm text-red-400/80">
          Algo deu errado. Tente novamente ou fale pelo WhatsApp.
        </p>
      )}
    </form>
  );
}
