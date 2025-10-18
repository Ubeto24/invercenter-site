import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const LANGS = [
  { code: "es", short: "ES", label: "Español" },
  { code: "en", short: "EN", label: "English" },
];

function Flag({ code, className = "w-5 h-5 rounded-sm" }) {
  if (code === "es") {
    // Spain flag (simplified)
    return (
      <svg viewBox="0 0 3 2" className={className} aria-hidden="true">
        <rect width="3" height="2" fill="#AA151B" />
        <rect y="0.5" width="3" height="1" fill="#F1BF00" />
      </svg>
    );
  }
  // United States flag (simplified)
  return (
    <svg viewBox="0 0 19 10" className={className} aria-hidden="true">
      <rect width="19" height="10" fill="#B22234" />
      <g fill="#FFFFFF">
        <rect y="1" width="19" height="1" />
        <rect y="3" width="19" height="1" />
        <rect y="5" width="19" height="1" />
        <rect y="7" width="19" height="1" />
        <rect y="9" width="19" height="1" />
      </g>
      <rect width="7.6" height="5.6" fill="#3C3B6E" />
    </svg>
  );
}

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
      className={`inline-flex items-center rounded-full bg-white border border-gray-200 p-1 shadow-sm ${className}`}
    >
      {LANGS.map(({ code, short }) => {
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
              "relative px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-[0.95rem] font-medium transition",
              active ? "bg-blue-600 text-white shadow" : "text-gray-700 hover:bg-gray-100 focus:bg-gray-100",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
            ].join(" ")}
          >
            <Flag code={code} className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm mr-1 sm:mr-1.5" />
            <span className="select-none text-sm sm:text-base">{short}</span>
          </button>
        );
      })}
    </div>
  );
}
