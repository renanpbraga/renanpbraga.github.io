import { createContext, ReactNode, useContext, useState } from "react";
import { english } from "../assets/translations/english.translation";
import { portuguese } from "../assets/translations/portuguese.translation";

type LanguageContextData = {
  language: any;
  languageKey: string;
  defineLanguage: (language: any) => void;
};

const languageContext = createContext({} as LanguageContextData);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  let initialKey = "pt_br";
  try {
    const stored = localStorage.getItem("site_language");
    if (stored) initialKey = stored;
  } catch (e) {
    initialKey = "pt_br";
  }

  const initialLanguage = initialKey === "en" ? english : portuguese;
  const [language, setLanguage] = useState<any>(initialLanguage);
  const [languageKey, setLanguageKey] = useState<string>(initialKey);

  const defineLanguage = (languageOrKey: any) => {
    let key = "pt_br";
    if (typeof languageOrKey === "string") key = languageOrKey;
    else key = languageOrKey === english ? "en" : "pt_br";

    const langObj = key === "en" ? english : portuguese;
    setLanguage(langObj);
    setLanguageKey(key);
    try {
      localStorage.setItem("site_language", key);
    } catch (e) {
      // ignore
    }
  };

  return (
    <languageContext.Provider value={{ language, languageKey, defineLanguage }}>
      {children}
    </languageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(languageContext);
  return context;
}
