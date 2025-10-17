import React from "react";
import { useTranslation } from "react-i18next";

export default function KPIs() {
  const { t } = useTranslation();
  const kpis =
    t("solutions2.kpis.items", { returnObjects: true }) || [
      { v: "15–30%", l: "↓ Costos de operación" },
      { v: "25%", l: "↓ Tiempos de ciclo" },
      { v: "99.95%", l: "Disponibilidad objetivo" },
      { v: "100%", l: "Trazabilidad de eventos" },
    ];
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 grid gap-6 md:grid-cols-4">
        {kpis.map((k, i) => (
          <div key={i} className="rounded-2xl border border-gray-200 p-6 text-center">
            <div className="text-3xl font-extrabold text-[#243E90]">{k.v}</div>
            <div className="mt-1 text-gray-600">{k.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
