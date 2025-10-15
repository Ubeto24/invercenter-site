import React from "react";
import { useTranslation } from "react-i18next";

const ITEMS = [
  { src: "/icons/bitcoin.svg", alt: "Bitcoin" },
  { src: "/icons/ethereum.svg", alt: "Ethereum" },
  { src: "/icons/tether.svg", alt: "Tether USDT" },
  { src: "/icons/circle-dollar-sign.svg", alt: "US Dollar" },
  { src: "/icons/bnbchain.svg", alt: "BNB Chain" },
  { src: "/icons/optimism.svg", alt: "Optimism" },
  { src: "/icons/ton.svg", alt: "TON" },
  { src: "/icons/pwa.svg", alt: "PWA" },
  { src: "/icons/paywall.svg", alt: "Paywall" },
];

export default function AlliesSlider() {
  const { t } = useTranslation();
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
          {t('allies.title', 'Tecnologías que impulsan nuestros procesos')}
        </h2>
        <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
          {t('allies.subtitle', 'Implementamos tecnología de vanguardia en constante evolución y actualización. Nuestros sistemas y procesos se apoyan en infraestructuras globales y soluciones fintech de alto rendimiento.')}
        </p>

        <div className="relative overflow-hidden" role="region" aria-label={t('allies.aria', 'Currencies and technology icons')}>
          <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-gray-50 to-transparent"></div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-gray-50 to-transparent"></div>
          <div className="flex gap-6 pr-6 animate-strip-left">
            {doubled.map((it, i) => (
              <div
                key={i}
                className="shrink-0 w-44 h-20 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur text-center grid place-items-center grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-md"
                role="img"
                aria-label={it.alt}
                title={it.alt}
              >
                <img src={it.src} alt={it.alt} className="h-12 w-auto" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          {t('allies.disclaimer', 'Los íconos representan tecnologías y ecosistemas financieros utilizados con fines ilustrativos. No implican respaldo, afiliación ni patrocinio por parte de las marcas mostradas.')}
        </p>
      </div>
    </section>
  );
}
