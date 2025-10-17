import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function FAQs() {
  const { t } = useTranslation();
  const faqs =
    t("solutions2.faqs.items", { returnObjects: true }) || [
      { q: "¿Necesito bancos partner para pagos globales?", a: "Podemos integrar tus bancos actuales o proponer rieles y partners según tu geografía, riesgo y costos." },
      { q: "¿Cómo manejan cumplimiento (KYC/KYB, AML)?", a: "Definimos políticas, flujos y evidencias; integramos proveedores de screening y generamos reportes auditables." },
      { q: "¿Qué nube o stack utilizan?", a: "Trabajamos multi-nube (AWS, Azure, GCP) y on-prem, según tus restricciones y equipo." },
    ];
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#243E90]">{t("solutions2.faqs.title", "Preguntas frecuentes")}</h2>
        <div className="mt-6 divide-y divide-gray-200 border border-gray-200 rounded-2xl">
          {faqs.map((f, i) => (
            <button key={i} className="w-full text-left p-5 focus:outline-none" onClick={() => setOpen(open === i ? -1 : i)}>
              <div className="flex items-center justify-between">
                <span className="font-semibold">{f.q}</span>
                <span aria-hidden className="text-[#243E90]">{open === i ? "−" : "+"}</span>
              </div>
              {open === i && <p className="mt-2 text-gray-600">{f.a}</p>}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
