import { ISkills } from "../Shared/interfaces/skills.interface";
import { skillsList } from "../Shared/stubs/skills-list.stub";

export default function Skills() {
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
            Skills
          </h1>
          <section className="mt-8 flex flex-wrap justify-center">
            {skillsList.map((skill: ISkills) => {
              const { name, image } = skill;
              return (
                <article className="group m-4 flex w-20 h-20 md:w-80 md:h-40 flex-col rounded-2xl bg-gray-50 p-4 hover:bg-white hover:text-primary hover:shadow-md">
                  <img
                    src={image}
                    className="m-auto w-20 transition-all group-hover:w-24 "
                    alt="html-icon"
                  />
                  <span className="mt-2 text-center font-bold text-[10px]">{name}</span>
                </article>
              );
            })}
          </section>
        </div>
      </section>
    </>
  );
}
