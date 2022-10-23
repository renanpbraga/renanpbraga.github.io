export default function Professional() {
  return (
    <>
      <span id="experience"></span>
      <section className="container min-h-[calc(100vh)] pt-32 pb-16 shadow-lg">
        <section className="container">
          <h1 className="text-center text-5xl font-bold text-primary">
            Professional experience
          </h1>
          <section className="grid grid-cols-12 gap-8 mt-16">
            <figure className="col-span-2 col-start-2 flex align-middle">
              <img src="/clina.svg" alt="" width="100%" />
            </figure>
            <article className="col-span-6">
              <ul className="professional-list">
                <li>
                  <span>Name:</span> Clina.care
                </li>
                <li>
                  <span>Duration:</span> 10/2021 - today
                </li>
                <li>
                  <span>Responsibilities:</span>
                  <ul>
                    <li>
                      Collaborate with the Product Manager, Business Analysts,
                      QA specialists and other developers;
                    </li>
                    <li>
                      Identify opportunities to improve the front-end code and
                      user experience;
                    </li>
                    <li>Develop new features;</li>
                    <li>
                      Improve and optimize performance of existing features;
                    </li>
                    <li>
                    Set up and maintain a Storybook instance to document the applications set of components;
                    </li>
                  </ul>
                </li>
              </ul>
            </article>
          </section>
        </section>
      </section>
    </>
  );
}
