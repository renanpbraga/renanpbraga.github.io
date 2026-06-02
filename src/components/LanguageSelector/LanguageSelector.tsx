import React, { useEffect, useState } from "react";
import { english } from "../../assets/translations/english.translation";
import { portuguese } from "../../assets/translations/portuguese.translation";
import { useLanguage } from "../../Context/LanguageContext";

export default function LanguageSelector() {
  const { defineLanguage } = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState("pt_br");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // load persisted language if present
    try {
      const stored = localStorage.getItem("site_language");
      if (stored) {
        setSelectedLanguage(stored);
        if (stored === "en") defineLanguage(english);
        else defineLanguage(portuguese);
        return;
      }
    } catch (e) {
      // ignore
    }

    // fallback to default
    if (selectedLanguage === "en") defineLanguage(english);
    else defineLanguage(portuguese);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectLanguage = (lng: string) => {
    try {
      localStorage.setItem("site_language", lng);
    } catch (e) {
      // ignore
    }

    if (lng === "en") defineLanguage(english);
    else defineLanguage(portuguese);
    setSelectedLanguage(lng);
    setOpen(false);
  };

  return (
    <div className="absolute right-4 top-4 z-50">
      <div className="relative" tabIndex={0} onBlur={() => setOpen(false)}>
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-slate-950/95 px-4 py-2 text-slate-100 outline-none shadow-lg shadow-black/20"
        >
          <img
            src={selectedLanguage === "en" ? "/icon-usa.svg" : "/icon-brazil.svg"}
            alt={selectedLanguage === "en" ? "US flag" : "Brazil flag"}
            className="h-5 w-5 flex-shrink-0"
          />
          <span className="text-sm font-medium">{selectedLanguage === "en" ? "En" : "Pt-Br"}</span>
        </button>

        {open && (
          <ul
            role="listbox"
            className="absolute right-0 mt-2 w-36 overflow-hidden rounded-2xl bg-slate-950/95 border border-white/10 shadow-lg"
          >
            <li
              role="option"
              onMouseDown={() => selectLanguage("en")}
              className="flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-slate-900"
            >
              <img src="/icon-usa.svg" alt="US flag" className="h-5 w-5" />
              <span>En</span>
            </li>
            <li
              role="option"
              onMouseDown={() => selectLanguage("pt_br")}
              className="flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-slate-900"
            >
              <img src="/icon-brazil.svg" alt="Brazil flag" className="h-5 w-5" />
              <span>Pt-Br</span>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
