import React from "react";
import { english } from "../../assets/translations/english.translation";
import { portuguese } from "../../assets/translations/portuguese.translation";
import { useLanguage } from "../../Context/LanguageContext";

export default function LanguageSelector() {
  const en: any = english;
  const pt_br: any = portuguese;

  const selectLanguage = (lng: string) => {
    if (lng == "en") {
      defineLanguage(en);
    } else {
      defineLanguage(pt_br);
    }
  };

  const { defineLanguage } = useLanguage();
  return (
    <div className="absolute top-4 right-16">
      <select
        name="language-select"
        id="language-select"
        className="bg-white border border-gray-300 rounded-xl outline-none"
        onChange={(e) => selectLanguage(e.target.value)}
      >
        <option
          value="en"
          style={{ backgroundImage: "url(/icon-usa.svg)" }}
          selected
        >En</option>
        <option
          value="pt_br"
          style={{ backgroundImage: "url(/icon-brazil.svg)" }}
        >Pt-Br</option>
      </select>
    </div>
  );
}
