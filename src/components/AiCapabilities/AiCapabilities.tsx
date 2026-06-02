import { useLanguage } from "../../Context/LanguageContext";

export default function AiCapabilities() {
  const { language } = useLanguage();

  return (
    <>
      <span id="aicapabilities"></span>
      <section className="bg-slate-950 py-24 text-slate-100">
        <section className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-primary shadow-sm shadow-primary/10">
                {language.ai.badge}
              </span>
              <h1 className="mt-6 text-5xl font-semibold text-white">
                {language.ai.title}
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-400">
                {language.ai.subtitle}
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-8 shadow-[0_40px_120px_-45px_rgba(15,23,42,0.75)]">
                <p className="text-slate-300">{language.ai.description}</p>
                <ul className="mt-8 space-y-4 text-slate-300">
                  {language.ai.bullets.map((item: string, index: number) => (
                    <li key={index} className="flex gap-3 text-base leading-7">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-8 shadow-[0_40px_120px_-45px_rgba(15,23,42,0.75)]">
                  <div className="flex items-start gap-6">
                    <img src="/artificial-intelligence.png" alt="AI illustration" className="h-16 w-16 flex-shrink-0 object-contain" />
                    <div>
                      <h2 className="text-2xl font-semibold text-white">{language.ai.cardOne.title}</h2>
                      <p className="mt-4 text-slate-400">{language.ai.cardOne.description}</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-8 shadow-[0_40px_120px_-45px_rgba(15,23,42,0.75)]">
                  <div className="flex items-start gap-6">
                    <img src="/software-development.png" alt="Software development" className="h-16 w-16 flex-shrink-0 object-contain" />
                    <div>
                      <h2 className="text-2xl font-semibold text-white">{language.ai.cardTwo.title}</h2>
                      <p className="mt-4 text-slate-400">{language.ai.cardTwo.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
