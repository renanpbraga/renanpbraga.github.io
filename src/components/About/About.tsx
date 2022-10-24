import { useLanguage } from "../../Context/LanguageContext";

export default function About() {
  const { language } = useLanguage();
  return (
    <>
      <span id="whoami"></span>
      <section className="min-h-[calc(100vh)] text-center shadow-lg">
        <section className="container">
          <h1 className="mt-32 text-center text-5xl font-bold text-primary">
          {language.whoami.title}
          </h1>
          <section className="mt-8 grid grid-cols-12 justify-center gap-4">
            <article className="col-span-12 flex justify-center lg:col-span-4">
              <img
                src="/developer.png"
                className="w-auto"
                alt="developer image"
              />
            </article>
            <article className="col-span-12 flex flex-col justify-center text-left lg:col-span-8">
              <h2 className="ml-8 text-3xl font-bold">
                {language.whoami.greetings}!&nbsp;
                <span role="img" aria-label="waving hand emoji">
                  👋
                </span>
              </h2>
              <p className="mt-4 text-justify indent-8">
                {language.whoami.paragraph1}
              </p>
              <p className="text-justify indent-8">
                {language.whoami.paragraph2}
                <span role="img" aria-label="nerd emoji">
                  🤓
                </span>
                .
              </p>
              <p className="text-justify indent-8">
                {language.whoami.paragraph3}
              </p>
            </article>
          </section>
        </section>
      </section>
    </>
  );
}
