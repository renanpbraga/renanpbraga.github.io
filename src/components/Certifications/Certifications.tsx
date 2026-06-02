import { useLanguage } from "../../Context/LanguageContext";

export default function Certifications() {
  const { language } = useLanguage();

  return (
    <>
      <span id="certifications"></span>
      <section className="bg-slate-950 py-24 text-slate-100">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl text-center">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-primary shadow-sm shadow-primary/10">
              Certifications
            </span>
            <h1 className="mt-6 text-5xl font-semibold text-white">
              Professional Credentials
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400">
              Continuous learning and professional development through industry-recognized certifications.
            </p>
          </div>

          <div className="mt-12 flex items-center justify-center">
            <a
              href="https://www.linkedin.com/in/renanpbraga/details/certifications/"
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-8 shadow-[0_40px_120px_-45px_rgba(15,23,42,0.75)] transition duration-300 hover:-translate-y-1 hover:border-primary/40 w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 transition duration-300 group-hover:opacity-100"></div>
              
              <div className="relative flex flex-col items-center gap-6 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                  <svg
                    className="h-10 w-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-9 1h18M5.598 9H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2v-12a2 2 0 00-2-2h-1.598M7 16h10M7 20h10"
                    />
                  </svg>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    View My Certifications
                  </h2>
                  <p className="text-slate-400">
                    Explore my professional certifications and achievements on LinkedIn
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-4 text-primary transition group-hover:translate-x-1">
                  <span className="font-semibold">Open LinkedIn</span>
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
