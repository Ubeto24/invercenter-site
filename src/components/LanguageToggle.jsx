import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const LANGS = [
  { code: "es", short: "ES", label: "Español" },
  { code: "en", short: "EN", label: "English" },
];

export default function LanguageToggle({ className = "" }) {
  const { i18n } = useTranslation();

  const initial = useMemo(() => (i18n.language?.startsWith("es") ? "es" : "en"), [i18n.language]);
  const [lang, setLang] = useState(initial);

  useEffect(() => {
    i18n.changeLanguage(lang);
    try {
      localStorage.setItem("i18nextLng", lang);
    } catch {}
  }, [lang, i18n]);

  return (
    <div
      role="tablist"
      aria-label="Language switch"
      className={`inline-flex items-center rounded-full bg-white border border-gray-200 p-0.5 sm:p-1 shadow-sm ${className}`}
    >
      {LANGS.map(({ code, short, label }) => {
        const active = lang === code;
        return (
          <button
            key={code}
            role="tab"
            aria-selected={active}
            tabIndex={active ? 0 : -1}
            onClick={() => setLang(code)}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                setLang((prev) => (prev === "es" ? "en" : "es"));
              }
            }}
            className={[
              "relative px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-[0.95rem] font-medium transition",
              active ? "bg-blue-600 text-white shadow" : "text-gray-700 hover:bg-gray-100 focus:bg-gray-100",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
            ].join(" ")}
          >
            <span className="mr-1 sm:mr-1.5 select-none">{short}</span>
            <span className="hidden sm:inline">{label}</span>
          </button>
        );
      })}
    </div>
  );
}

