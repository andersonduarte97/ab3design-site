import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import DesignSection from '@/components/DesignSection';
import HowItWorks from '@/components/HowItWorks';
import AutomationSection from '@/components/AutomationSection';
import ProcessBoard from '@/components/ProcessBoard';
import Portfolio from '@/components/Portfolio';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <DesignSection />
        <AutomationSection />
        <ProcessBoard />
        <Portfolio />

        {/* Contact anchor */}
        <section
          id="contato"
          className="grain py-24 px-4"
          style={{ background: 'linear-gradient(to bottom, #0F172A, #0A0F1E)' }}
        >
          <div className="max-w-[1600px] mx-auto text-center">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-violet-400 mb-4">
              Contato
            </p>
            <h2
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              style={{ letterSpacing: '-0.04em' }}
            >
              Vamos conversar?
            </h2>
            <p className="text-[#94A3B8] font-light text-lg mb-3 max-w-md mx-auto">
              Conte seu projeto. Respondemos em até 24h.
            </p>
            <p className="text-[#64748B] text-sm mb-10 max-w-sm mx-auto">
              Sem enrolação. Sem compromisso. Só uma conversa honesta sobre o que você precisa.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* WhatsApp — primary */}
              <a
                href="https://api.whatsapp.com/send?phone=5513981809035&text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20AB3Design."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full pl-6 pr-2 py-2 hover:scale-105 transition-transform duration-300"
                style={{ background: '#25D366' }}
              >
                <span className="font-medium text-sm text-white">
                  Chamar no WhatsApp
                </span>
                <span
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(0,0,0,0.18)' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
              </a>

              {/* Email — secondary */}
              <a
                href="mailto:oi@ab3design.com.br"
                className="group inline-flex items-center gap-3 rounded-full pl-6 pr-2 py-2 border border-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                <span className="font-medium text-sm text-white/70 group-hover:text-white transition-colors duration-200">
                  oi@ab3design.com.br
                </span>
                <span
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: '#0F172A' }}
                >
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
        </section>

        <footer className="border-t border-white/5 py-8 px-4">
          <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <Image
              src="/images/logo.svg?v=2"
              alt="AB3Design"
              width={80}
              height={26}
              className="h-6 w-auto"
            />
            <p className="text-xs text-[#94A3B8]/70">
              © {new Date().getFullYear()} ab3Design. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
