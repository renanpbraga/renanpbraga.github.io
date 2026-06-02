import { useLanguage } from "../../Context/LanguageContext";

export default function Professional() {
  const { language } = useLanguage();
  const enterpriseOne = language.professional.enterpriseOne;
  const enterpriseTwo = language.professional.enterpriseTwo;

  return (
    <>
      <span id="experience"></span>
      <section className="bg-slate-950 py-24 text-slate-100">
        <section className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-primary">
                {language.navbar.experience}
              </span>
              <h1 className="mt-6 text-5xl font-semibold text-white">{language.professional.title}</h1>
            </div>
            <div className="mt-12 space-y-10">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/75 p-8 shadow-[0_40px_120px_-45px_rgba(15,23,42,0.75)]">
                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="space-y-8">
                    <div className="rounded-[1.75rem] bg-slate-950/80 p-6">
                      <img src={enterpriseOne.image} alt={enterpriseOne.name.value} className="h-20 w-auto object-contain" />
                      <h2 className="mt-6 text-2xl font-semibold text-white">{enterpriseOne.name.value}</h2>
                      <p className="mt-2 text-sm text-slate-400">{enterpriseOne.period.value}</p>
                    </div>
                  </div>
                  <div className="space-y-6 text-slate-300">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{enterpriseOne.responsibilities.title}</h3>
                    </div>
                    <ul className="space-y-3 list-inside list-disc pl-5 text-slate-400">
                      {enterpriseOne.responsibilities.value.map((res: string, index: number) => (
                        <li key={index}>{res}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/75 p-8 shadow-[0_40px_120px_-45px_rgba(15,23,42,0.75)]">
                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="space-y-8">
                    <div className="rounded-[1.75rem] bg-slate-950/80 p-6">
                      <img src={enterpriseTwo.image} alt={enterpriseTwo.name.value} className="h-28 w-auto object-contain" />
                      <h2 className="mt-6 text-2xl font-semibold text-white">{enterpriseTwo.name.value}</h2>
                      <p className="mt-2 text-sm text-slate-400">{enterpriseTwo.period.value}</p>
                    </div>
                  </div>
                  <div className="space-y-6 text-slate-300">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{enterpriseTwo.responsibilities.title}</h3>
                    </div>
                    <ul className="space-y-3 list-inside list-disc pl-5 text-slate-400">
                      {enterpriseTwo.responsibilities.value.map((res: string, index: number) => (
                        <li key={index}>{res}</li>
                      ))}
                    </ul>
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
