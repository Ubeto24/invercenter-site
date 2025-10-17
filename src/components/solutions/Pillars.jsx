import React from "react";
import { useTranslation } from "react-i18next";
import ImageCard from "../../components/ImageCard";
// Use images from the public/ folder so they resolve at runtime
const imgSol1 = "/solucion1.png";
const imgSol2 = "/solucion2.png";
const imgSol3 = "/solucion3.png";

export default function Pillars() {
  const { t, i18n } = useTranslation();
  const isEN = (i18n.language || "en").startsWith("en");

  const pillars = [
    {
      key: "payments",
      title: t("solutions2.pillars.payments.title", "Pagos globales & Cumplimiento"),
      subtitle: t("solutions2.pillars.payments.subtitle", "Mover capital con seguridad y transparencia"),
      bullets: t("solutions2.pillars.payments.bullets", { returnObjects: true }) || [
        "KYC/KYB, AML & Screening",
        "Partners y rieles bancarios internacionales",
        "FX & Liquidez | Settlement cross-border",
        "Onboarding ágil con APIs",
      ],
      img: imgSol1,
      alt: isEN ? "Global Payments & Compliance" : "Pagos internacionales y cumplimiento",
    },
    {
      key: "blockchain",
      title: t("solutions2.pillars.blockchain.title", "Blockchain aplicada a trazabilidad y pagos"),
      subtitle: t("solutions2.pillars.blockchain.subtitle", "Flujos auditables y reducción de fraude"),
      bullets: t("solutions2.pillars.blockchain.bullets", { returnObjects: true }) || [
        "Wallets & custodia",
        "Smart contracts y settlement programable",
        "Ledger distribuido | Auditoría y evidencia",
        "Integración vía APIs seguras",
      ],
      img: imgSol2,
      alt: isEN ? "Blockchain for traceability and payments" : "Arquitectura blockchain empresarial",
    },
    {
      key: "data",
      title: t("solutions2.pillars.data.title", "Big Data & Analytics"),
      subtitle: t("solutions2.pillars.data.subtitle", "Forecasting y optimización con ML"),
      bullets: t("solutions2.pillars.data.bullets", { returnObjects: true }) || [
        "Ingesta, ETL y Data Lake/Warehouse",
        "Modelos ML para demanda y riesgo",
        "BI y dashboards ejecutivos",
        "Visibilidad 360° y simulación de escenarios",
      ],
      img: imgSol3,
      alt: isEN ? "Advanced analytics and BI" : "Analítica avanzada y BI",
    },
  ];

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((p) => (
            <ImageCard
              key={p.key}
              src={p.img}
              alt={p.alt}
              title={p.title}
              subtitle={p.subtitle}
              bullets={p.bullets}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
