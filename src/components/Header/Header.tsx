import { useEffect } from "react";
import { english } from "../../assets/translations/english.translation";
import { portuguese } from "../../assets/translations/portuguese.translation";
import { useLanguage } from "../../Context/LanguageContext";

export default function Header() {

  const { language } = useLanguage();

  return (
    <>
      <header
        id="header"
        className="bg-center-bottom relative flex min-h-[calc(100vh-3.75rem)] flex-col justify-center bg-header-bg bg-cover bg-no-repeat text-center shadow-lg"
        style={{ zIndex: -1 }}
      >
        <div>
          <div className="mx-auto h-40 w-40 overflow-hidden rounded-full ring-4 ring-primary">
            <img src="/avatar.jpeg" alt="photo-of-renan" width="160" />
          </div>
          <h1 className="mt-4 text-3xl md:text-3xl">{language.header.title}</h1>
          <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">
            {language.header.subtitle}
          </h2>
        </div>
      </header>
    </>
  );
}
