export default function About() {
  const age = new Date().getFullYear() - 1988;
  return (
    <>
      <span id="whoami"></span>
      <section className="min-h-[calc(100vh)] text-center shadow-lg">
        <section className="container">
          <h1 className="mt-32 text-center text-5xl font-bold text-primary">
            WhoAmI
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
                Hi!&nbsp;
                <span role="img" aria-label="waving hand emoji">
                  👋
                </span>
              </h2>
              <p className="mt-4 text-justify indent-8">
                I'm Renan Braga, {age} years old, full-stack developer, and I've
                been working as a front-end developer since 2021. I studied web
                development at Trybe, one of the best web development schools in
                Brazil. I'm experienced in development using Javascript and
                Typescript, React and Angular in adition to other libraries and
                frameworks.
              </p>
              <p className="text-justify indent-8">
                I have a MSc. degree in Agronomy from Universidade Federal Rural
                do Rio de Janeiro (UFRRJ). Currently, I'm in career transition,
                however all my background in contact with science made me more
                accurate, analytic and rational person. I still like all kind of
                science stuff, I'm a NERD
                <span role="img" aria-label="nerd emoji">
                  🤓
                </span>
                .
              </p>
              <p className="text-justify indent-8">
                Instead of all this technical aspect of my background, I also
                developed soft skills during all these years, like comunication,
                empathy, leadership and management skills, adaptability and
                continuous learning, teaching...
              </p>
            </article>
          </section>
        </section>
      </section>
    </>
  );
}
