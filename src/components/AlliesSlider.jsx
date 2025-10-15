import React, { useEffect, useRef } from "react";
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
  const listRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    // Respeta usuarios con "reduced motion"
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let raf = 0;
    let pos = 0;
    const step = () => {
      pos += 0.3; // velocidad
      const half = el.scrollWidth / 2;
      if (pos >= half) pos = 0; // loop infinito
      el.scrollLeft = pos;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

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

        <div
          ref={listRef}
          className="mt-8 flex gap-6 overflow-x-hidden relative"
          aria-label={t('allies.aria', 'Currencies and technology icons')}
        >
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

        <p className="text-center text-sm text-gray-500 mt-6">
          {t('allies.disclaimer')}
        </p>
      </div>
    </section>
  );
}

