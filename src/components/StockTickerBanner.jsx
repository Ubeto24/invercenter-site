import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const API_URL = `${
  import.meta.env.VITE_API_BASE_URL
}/stocks?symbols=AAPL,MSFT,TSLA,AMZN,SPY,QQQ,NVDA,NKE,BABA`;

export default function StockTickerBanner() {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t } = useTranslation();

  const fetchStocks = async () => {
    try {
      setError(null);
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Error al obtener datos de acciones");
      const data = await res.json();
      setStocks(data);
    } catch (err) {
      console.error("Error fetching stocks:", err);
      setError("No se pudieron cargar las acciones");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStocks();
    const intervalId = setInterval(fetchStocks, 60000); // cada 60 s
    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return (
      <div className="w-full bg-slate-50 border-y border-slate-200 text-slate-700 text-sm py-2 px-4">
        <span className="font-semibold mr-2 uppercase text-xs tracking-wide">
          Mercado de Acciones
        </span>
        <span className="opacity-70">Cargando precios...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full bg-slate-50 border-y border-slate-200 text-red-500 text-sm py-2 px-4">
        <span className="font-semibold mr-2 uppercase text-xs tracking-wide">
          Mercado de Acciones
        </span>
        <span>{error}</span>
      </div>
    );
  }

  // Duplicamos el array para una cinta continua
  const tickerData = [...stocks, ...stocks];

  return (
    <div className="w-full bg-slate-50 border-y border-slate-200 text-xs">
      <div className="max-w-6xl mx-auto px-4 py-2">
        {/* Encabezado estilo CoinGecko */}
        <div className="flex items-center gap-3 mb-1">
          <span className="font-semibold uppercase tracking-wide text-slate-800 text-[11px]">
            Mercado de Acciones
          </span>
          <span className="text-[10px] uppercase text-slate-400">
            Datos vía InverCenter API
          </span>
        </div>

        {/* Cinta animada */}
        <div className="overflow-hidden">
          <div className="flex animate-ticker gap-3 whitespace-nowrap">
            {tickerData.map((s, idx) => {
              const isPositive = s.change >= 0;
              const sign = isPositive ? "+" : "";
              const hasBidAsk = typeof s.bid === "number" && typeof s.ask === "number";

              return (
                <div
                  key={`${s.symbol}-${idx}`}
                  className="
                    flex items-center gap-2
                    bg-white/95
                    border border-slate-200
                    rounded-full
                    px-4 py-1.5
                    shadow-sm
                    min-w-[190px]
                  "
                >
                  {/* Icono circular sencillo, similar al círculo con logo de CoinGecko */}
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-[11px] font-semibold text-slate-500">
                    {s.symbol?.[0] || "-"}
                  </div>

                  <div className="flex flex-col leading-tight">
                    {/* Símbolo + moneda */}
                    <div className="flex items-baseline gap-1">
                      <span className="font-semibold text-[11px] text-slate-700 tracking-wide">
                        {s.symbol}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {s.currency || "USD"}
                      </span>
                    </div>

                    {/* Precio + variación */}
                    <div className="flex items-baseline gap-2">
                      <span className="text-[12px] font-semibold text-sky-700">
                        {Number(s.price || 0).toLocaleString("es-ES", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </span>
                      <span
                        className={`text-[11px] font-medium ${
                          isPositive ? "text-emerald-500" : "text-red-500"
                        }`}
                      >
                        {sign}
                        {Number(s.change || 0).toFixed(2)} (
                        {sign}
                        {Number(s.change_pct || 0).toFixed(2)}%)
                      </span>
                    </div>

                    {/* Bid / Ask indicativos */}
                    {hasBidAsk && (
                      <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
                        <span>
                          Bid:{" "}
                          <span className="text-slate-600">
                            {Number(s.bid || 0).toFixed(2)}
                          </span>
                        </span>
                        <span>
                          Ask:{" "}
                          <span className="text-slate-600">
                            {Number(s.ask || 0).toFixed(2)}
                          </span>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Texto legal similar al de CoinGecko */}
        <p className="mt-1 text-[10px] text-slate-400">
          {t(
            "stocks.ticker_disclaimer",
            "Informational data based on public sources. Not financial advice or official market prices."
          )}
        </p>
      </div>
    </div>
  );
}
