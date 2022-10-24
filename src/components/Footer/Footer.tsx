import React from "react";
import { useLanguage } from "../../Context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer
      className="relative bg-primary py-4 text-center text-white shadow-lg"
      style={{ zIndex: -2 }}
    >
      {language. footer.description}
    </footer>
  );
}
