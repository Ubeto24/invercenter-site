import React from "react";
import { useTranslation } from "react-i18next";

export default function UseCases() {
  const { t } = useTranslation();
  const cases =
    t("solutions2.usecases.items", { returnObjects: true }) || [
      {
        title: "Pagos masivos cross-border",
        desc: "Orquestación de pagos internacionales con FX, monitoreo AML y conciliación automática.",
        tags: ["FX", "Compliance", "APIs"],
      },
      {
        title: "Trazabilidad de cadena de suministro",
        desc: "Registro inmutable de hitos logísticos y financieros para auditoría y reclamos.",
        tags: ["Blockchain", "Eventos", "Auditoría"],
      },
      {
        title: "Forecasting de demanda y liquidez",
        desc: "Modelos ML para planificar inventario, tesorería y necesidades de cash.",
        tags: ["ML", "Data Lake", "BI"],
      },
    ];
  return (
    <section className="bg-gray-50 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#243E90]">{t("solutions2.usecases.title", "Casos de uso")}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-gray-600">{c.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.tags.map((t, j) => (
                  <span key={j} className="rounded-full border border-[#243E90]/30 px-3 py-1 text-[#243E90] text-sm">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
