import React from "react";
import { useTranslation } from "react-i18next";

const ITEMS = [
  { src: "/icons/currency-btc.svg", alt: "Bitcoin" },
  { src: "/icons/currency-eth.svg", alt: "Ethereum" },
  { src: "/icons/currency-usdt.svg", alt: "Tether USDT" },
  { src: "/icons/currency-usd.svg", alt: "US Dollar" },
  { src: "/icons/currency-eur.svg", alt: "Euro" },
  { src: "/icons/currency-cny.svg", alt: "Chinese Yuan" },
  { src: "/icons/tech-cloud.svg", alt: "Cloud" },
  { src: "/icons/tech-lock.svg", alt: "Security" },
  { src: "/icons/tech-data.svg", alt: "Data Analytics" },
];

export default function AlliesSlider() {
  const { t } = useTranslation();
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
          {t('allies.title')}
        </h2>
        <p className="text-center text-gray-600 mt-2">
          {t('allies.subtitle')}
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

        <p className="text-center text-sm text-gray-500 mt-6">
          {t('allies.disclaimer')}
        </p>
      </div>
    </section>
  );
}
