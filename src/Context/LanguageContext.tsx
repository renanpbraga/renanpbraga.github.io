import { createContext, ReactNode, useContext, useState } from "react";
import { english } from "../assets/translations/english.translation";

type LanguageContextData = {
  language: any;
  defineLanguage: (language: any) => void;
};

const languageContext = createContext({} as LanguageContextData);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<any>(english);

  const defineLanguage = (language: any) => {
    setLanguage(language);
  };

  return (
    <languageContext.Provider value={{ language, defineLanguage }}>
      {children}
    </languageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(languageContext);
  return context;
}