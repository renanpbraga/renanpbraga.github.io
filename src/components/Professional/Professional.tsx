import { useLanguage } from "../../Context/LanguageContext";

export default function Professional() {
  const { language } = useLanguage();
  const enterpriseOne = language.professional.enterpriseOne;
  return (
    <>
      <span id="experience"></span>
      <section className="min-h-[calc(100vh)] pt-32 pb-16 shadow-lg">
        <section className="container">
          <h1 className="text-center text-5xl font-bold text-primary">
            {language.professional.title}
          </h1>
          <section className="mt-16 grid grid-cols-8 gap-8">
            <figure className="col-span-8 col-start-2 flex align-middle md:col-span-2">
              <img src={enterpriseOne.image} alt="" className="w-full" />
            </figure>
            <article className="col-span-9 md:col-span-6">
              <ul className="professional-list">
                <li>
                  <span>{enterpriseOne.name.title}: </span>
                  {enterpriseOne.name.value}
                </li>
                <li>
                  <span>{enterpriseOne.period.title}: </span>
                  {enterpriseOne.period.value}
                </li>
                <li>
                  <span>{enterpriseOne.responsibilities.title}:</span>
                  <ul>
                    {enterpriseOne.responsibilities.value.map(
                      (res: string, index: number) => (
                        <li key={index}>{res}</li>
                      )
                    )}
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
