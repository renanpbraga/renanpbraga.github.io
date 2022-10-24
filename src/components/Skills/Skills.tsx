import { useLanguage } from "../../Context/LanguageContext";
import { ISkills } from "../Shared/interfaces/skills.interface";
import { skillsList } from "../Shared/stubs/skills-list.stub";

export default function Skills() {
  const { language } = useLanguage();
  return (
    <>
      <span id="skills"></span>
      <section
        className="relative min-h-[calc(100vh)] bg-white text-center shadow-lg"
        style={{ zIndex: -1 }}
      >
        <div>
          <h1
            id="skills"
            className="pt-32 text-center text-5xl font-bold text-primary"
          >
            {language.skills.title}
          </h1>
          <section className="mt-8 flex flex-wrap justify-center">
            {skillsList.map((skill: ISkills, index: number) => {
              const { name, image } = skill;
              return (
                <article key={index} className="group m-4 flex w-20 h-auto md:w-80 md:h-40 flex-col rounded-2xl bg-gray-50 p-4 hover:bg-white hover:text-primary hover:shadow-md">
                  <img
                    src={image}
                    className="m-auto w-20 transition-all group-hover:w-24 "
                    alt="html-icon"
                  />
                  <span className="mt-2 text-center font-bold text-[10px] md:text-base">{name}</span>
                </article>
              );
            })}
          </section>
        </div>
      </section>
    </>
  );
}
