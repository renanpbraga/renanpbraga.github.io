import { useLanguage } from "../../Context/LanguageContext";

export default function About() {
  const { language } = useLanguage();
  return (
    <>
      <span id="whoami"></span>
      <section className="bg-slate-950 py-24 text-slate-100">
        <section className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-[0_40px_120px_-45px_rgba(15,23,42,0.75)] lg:p-12">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-primary">
              {language.whoami.title}
            </span>
            <h1 className="mt-8 text-4xl font-semibold leading-tight text-white md:text-5xl">
              {language.whoami.greetings}!{' '}
              <span role="img" aria-label="waving hand emoji">
                👋
              </span>
            </h1>
            <div className="mt-8 space-y-6 text-slate-300">
              <p className="text-lg leading-8">{language.whoami.paragraph1}</p>
              <p className="text-lg leading-8">
                {language.whoami.paragraph2}{' '}
                <span role="img" aria-label="nerd emoji">
                  🤓
                </span>
              </p>
              <p className="text-lg leading-8">{language.whoami.paragraph3}</p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
