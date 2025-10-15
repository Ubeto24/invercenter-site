import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const API =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&price_change_percentage=24h";

export default function CryptoBanner() {
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      try {
        const res = await fetch(API, { cache: "no-store" });
        if (!res.ok) throw new Error("CoinGecko error " + res.status);
        const data = await res.json();
        if (mounted) {
          setCoins(Array.isArray(data) ? data : []);
          setError(null);
        }
      } catch (e) {
        if (mounted) setError(t('crypto.error'));
        console.error(e);
      }
    };
    fetchData();
    const id = setInterval(fetchData, 60000);
    return () => { mounted = false; clearInterval(id); };
  }, [t]);

  const looped = useMemo(() => [...coins, ...coins], [coins]);

  return (
    <section className="bg-gradient-to-r from-blue-50 to-gray-50 border-y border-blue-200/60 py-3 mt-4">
      <div className="max-w-7xl mx-auto px-3 md:px-6">
        <div className="flex items-center gap-3 text-[13px] text-gray-600 mb-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-blue-700"></span>
          <span className="font-semibold text-gray-800">{t('crypto.title', 'Mercado cripto (Top 10)')}</span>
          <span className="hidden sm:inline">• {t('crypto.source', 'Fuente: CoinGecko')}</span>
        </div>

        <div className="relative overflow-hidden" role="region" aria-label={t('crypto.aria', 'Top 10 criptomonedas')}>
          <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-blue-50/90 to-transparent"></div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-gray-50/90 to-transparent"></div>

          <div className="flex gap-6 pr-6 animate-strip-right">
            {looped.map((c, i) => {
              const change = c?.price_change_percentage_24h ?? 0;
              const up = change >= 0;
              const changeAbs = Math.abs(change).toFixed(2);

              return (
                <div
                  key={`${c?.id || 'coin'}-${i}`}
                  className="min-w-max flex items-center gap-2 bg-white/75 backdrop-blur px-3 py-2 rounded-xl border border-gray-200 shadow-[0_1px_0_rgba(0,0,0,0.03)]"
                  title={`${c?.name || ''} • 24h: ${change.toFixed ? change.toFixed(2) : change}%`}
                >
                  <img src={c?.image} alt={c?.name || 'coin'} className="h-5 w-5 rounded-full ring-1 ring-gray-200" loading="lazy" />
                  <span className="text-gray-700 font-semibold">{(c?.symbol || '').toUpperCase()}</span>
                  <span className="text-blue-800 font-bold">
                    {c?.current_price != null ? `$${c.current_price.toLocaleString()}` : '—'}
                  </span>
                  <span
                    className={`flex items-center gap-1 text-xs font-semibold ${
                      up ? 'text-emerald-600' : 'text-rose-600'
                    }`}
                    aria-label={`${t('crypto.change24', 'Cambio 24h')}: ${up ? t('crypto.up', 'al alza') : t('crypto.down', 'a la baja')} ${changeAbs}%`}
                  >
                    {up ? (
                      <svg viewBox="0 0 20 20" className="h-3 w-3" aria-hidden="true">
                        <path d="M10 3l6 6h-4v8H8V9H4l6-6z" fill="currentColor"/>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 20 20" className="h-3 w-3" aria-hidden="true">
                        <path d="M10 17l-6-6h4V3h4v8h4l-6 6z" fill="currentColor"/>
                      </svg>
                    )}
                    {changeAbs}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {error && <p className="text-[11px] text-rose-600 mt-2">⚠️ {error}</p>}
        <p className="text-[11px] text-gray-400 mt-1">{t('crypto.disclaimer', 'Datos informativos por CoinGecko. No constituyen asesoría financiera.')}</p>
      </div>
    </section>
  );
}
