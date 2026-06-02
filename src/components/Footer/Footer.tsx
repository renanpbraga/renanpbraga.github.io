import React from "react";
import { useLanguage } from "../../Context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-slate-950 py-6 text-center text-slate-400">
      <div className="container mx-auto px-4">
        {language.footer.description}
      </div>
    </footer>
  );
}
