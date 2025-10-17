import React from "react";
import { useTranslation } from "react-i18next";

export default function ProcessFlow() {
  const { t } = useTranslation();
  const steps =
    t("solutions2.process.steps", { returnObjects: true }) || [
      { t: "Descubrimiento", d: "Objetivos, regulaciones y restricciones del negocio." },
      { t: "Arquitectura", d: "Blueprint de pagos, data y blockchain; modelos de seguridad." },
      { t: "Integración", d: "APIs bancarias, orígenes de datos, rieles de pago y contratos." },
      { t: "Piloto & Compliance", d: "Pruebas, KYC/KYB, AML, monitoreo y evidencias." },
      { t: "Despliegue", d: "Runbook, SLOs, observabilidad y mejora continua." },
    ];
  return (
    <section className="bg-gray-50 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#243E90]">{t("solutions2.process.title", "Cómo trabajamos")}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-5">
          {steps.map((s, i) => (
            <div key={i} className="relative rounded-xl border border-gray-200 bg-white p-5">
              <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#243E90] text-white font-bold">{i + 1}</div>
              <h3 className="font-semibold">{s.t}</h3>
              <p className="mt-1 text-gray-600 text-sm">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
