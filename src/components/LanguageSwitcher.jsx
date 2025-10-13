import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  const currentLang = (i18n.language || 'en').startsWith("es") ? "ES" : "EN";

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between gap-1 px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-100 transition text-sm font-medium text-gray-700"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Language selector"
      >
        <span>{currentLang === "ES" ? "🇪🇸" : "🇺🇸"}</span>
        <span>{currentLang}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg overflow-hidden z-20">
          <button
            onClick={() => changeLanguage("es")}
            className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100"
          >
            🇪🇸 <span>Español</span>
          </button>
          <button
            onClick={() => changeLanguage("en")}
            className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100"
          >
            🇺🇸 <span>English</span>
          </button>
        </div>
      )}
    </div>
  );
}
