import { useLanguage } from "../../Context/LanguageContext";
import { ISkills } from "../Shared/interfaces/skills.interface";
import { skillsList } from "../Shared/stubs/skills-list.stub";

export default function Skills() {
  const { language } = useLanguage();
  return (
    <>
      <span id="skills"></span>
      <section className="bg-slate-950 py-24 text-slate-100">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl text-center">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-primary shadow-sm shadow-primary/10">
              {language.skills.title}
            </span>
            <h1 className="mt-6 text-5xl font-semibold text-white">
              {language.skills.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400">
              {language.skills.description}
            </p>
          </div>
          <section className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skillsList.map((skill: ISkills, index: number) => {
              const { name, image } = skill;
              return (
                <article
                  key={index}
                  className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 text-center shadow-[0_24px_80px_-45px_rgba(15,23,42,0.8)] transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-slate-900"
                >
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-800 transition duration-300 group-hover:bg-primary/10">
                    <img src={image} className="h-14 w-auto object-contain" alt={name} />
                  </div>
                  <span className="mt-5 block text-base font-semibold text-slate-100">
                    {name}
                  </span>
                </article>
              );
            })}
          </section>
        </div>
      </section>
    </>
  );
}
