import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Insights() {
  const { t, i18n } = useTranslation();
  const isEN = (i18n.language || "en").startsWith("en");
  const enItems = [
    {
      icon: "🚚",
      category: "Smart Logistics",
      title: "Logistics Trends 2025: efficiency, traceability, and sustainability",
      text:
        "Supply chains are evolving toward more agile, digital, and transparent models. Discover how automation and data are reducing costs and lead times in international transport.",
      link: "#",
      linkText: "Read more",
    },
    {
      icon: "💳",
      category: "Cross-border Payments",
      title: "Compliance and optimization in global transactions",
      text:
        "Managing international payments requires strong compliance strategies and risk reduction. We explore how fintech integration and tokenization are reshaping cross-border banking.",
      link: "#",
      linkText: "Read more",
    },
    {
      icon: "🔗",
      category: "Blockchain & Technology",
      title: "Real blockchain cases in supply chain and corporate finance",
      text:
        "Beyond crypto, blockchain is consolidating as a tool for traceability, smart contracts, and document authentication in logistics and financial sectors.",
      link: "#",
      linkText: "Read more",
    },
  ];

  const items = isEN ? enItems : t("insights2.items", { returnObjects: true }) || [];

  return (
    <section className="bg-gray-50 py-16" id="insights">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-2">
          {isEN
            ? "Insights — InverCenter USA, Inc."
            : t("insights2.title", "Insights — InverCenter USA, Inc.")}
        </h2>
        <p className="text-gray-600 mb-10">
          {isEN
            ? "News, trends, and analysis on logistics, fintech, and digital transformation."
            : t(
                "insights2.subtitle",
                "Noticias, tendencias y análisis sobre logística, fintech y transformación digital."
              )}
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-500 transition-all duration-300"
            >
              <div className="text-4xl mb-4" aria-hidden>
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                {item.category}
              </h3>
              <p className="text-sm text-gray-700 font-medium mb-2">{item.title}</p>
              <p className="text-sm text-gray-500 mb-4">{item.text}</p>
              <a
                href={item.link || "#"}
                className="inline-flex items-center text-blue-700 font-semibold text-sm hover:text-blue-900"
              >
                {item.linkText || (isEN ? "Read more" : t("insights2.linkText", "Ver más"))} <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
