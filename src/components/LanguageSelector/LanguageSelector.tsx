import React, { useState } from "react";
import { english } from "../../assets/translations/english.translation";
import { portuguese } from "../../assets/translations/portuguese.translation";
import { useLanguage } from "../../Context/LanguageContext";

export default function LanguageSelector() {
  const { defineLanguage } = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const selectLanguage = (lng: string) => {
    if (lng === "en") {
      defineLanguage(english);
    } else {
      defineLanguage(portuguese);
    }
    setSelectedLanguage(lng);
  };

  return (
    <div className="absolute right-4 top-4 z-50">
      <select
        name="language-select"
        id="language-select"
        className="rounded-2xl border border-white/20 bg-slate-950/95 px-4 py-2 text-slate-100 outline-none shadow-lg shadow-black/20"
        value={selectedLanguage}
        onChange={(e) => selectLanguage(e.target.value)}
      >
        <option value="en">En</option>
        <option value="pt_br">Pt-Br</option>
      </select>
    </div>
  );
}
