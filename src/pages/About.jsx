import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  const KPIS = [
    { value: "20+", label: t("about2.kpis.experience") },
    { value: "15–30%", label: t("about2.kpis.cost_reduction") },
    { value: "25%", label: t("about2.kpis.lead_time") },
    { value: "70+", label: t("about2.kpis.nps") },
  ];

  const VALUES = [
    { title: t("about2.values.items.excellence.title"), text: t("about2.values.items.excellence.text") },
    { title: t("about2.values.items.compliance.title"), text: t("about2.values.items.compliance.text") },
    { title: t("about2.values.items.innovation.title"), text: t("about2.values.items.innovation.text") },
    { title: t("about2.values.items.confidentiality.title"), text: t("about2.values.items.confidentiality.text") },
    { title: t("about2.values.items.customer_service.title"), text: t("about2.values.items.customer_service.text") },
  ];

  return (
    <main className="bg-white">
      <section className="bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
          <h1 className="text-3xl md:text-5xl font-bold">{t("about2.title")}</h1>
          <p className="mt-3 text-blue-100 max-w-3xl">{t("about2.subtitle")}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          <div className="md:col-span-3">
            <h2 className="text-2xl font-semibold text-gray-900">{t("about2.history.title")}</h2>
            <p className="mt-2 text-gray-600 leading-relaxed">{t("about2.history.text")}</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-900">{t("about2.mission.title")}</h3>
            <p className="mt-2 text-gray-700">{t("about2.mission.text")}</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-900">{t("about2.vision.title")}</h3>
            <p className="mt-2 text-gray-700">{t("about2.vision.text")}</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-900">{t("about2.values.title")}</h3>
            <ul className="mt-3 space-y-3">
              {VALUES.map((v, i) => (
                <li key={i}>
                  <p className="font-medium text-gray-900">{v.title}</p>
                  <p className="text-gray-600">{v.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <h3 className="text-2xl font-semibold text-gray-900">{t("about2.kpis.title")}</h3>
          <p className="text-gray-600 mt-2">{t("about2.kpis.subtitle")}</p>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {KPIS.map((kpi, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-gray-200 p-6 text-center shadow-sm"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-blue-800">{kpi.value}</div>
                <div className="mt-2 text-sm md:text-base text-gray-600">{kpi.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="rounded-2xl border border-gray-200 p-6 md:p-8">
          <h3 className="text-2xl font-semibold text-gray-900">{t("about2.contact.title")}</h3>
          <p className="mt-2 text-gray-600">{t("about2.contact.subtitle")}</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="space-y-2 text-gray-700">
              <p className="font-medium">InverCenter USA, Inc.</p>
              <p>Espírito Santo Plaza</p>
              <p>1395 Brickell Ave., Suite 1080</p>
              <p>Miami, FL 33131 — USA</p>
            </div>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-medium">{t("about2.contact.phone")}:</span> +1 305 442.8648</p>
              <p><span className="font-medium">{t("about2.contact.fax")}:</span> +1 305 442.8215</p>
              <p><span className="font-medium">Email:</span> info@invercenterusa.com</p>
              <p><span className="font-medium">Web:</span> www.invercenterusa.com</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

