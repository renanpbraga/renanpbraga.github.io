import { useLanguage } from "../../Context/LanguageContext";

export default function Header() {
  const { language } = useLanguage();

  return (
    <header id="header" className="relative min-h-[calc(100vh-3.75rem)] overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.14),_transparent_20%)]"></div>
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-10 px-6 py-24">
        <div className="w-full rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-[0_40px_120px_-55px_rgba(15,23,42,0.8)] backdrop-blur-xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
            {/* Image */}
            <div className="flex-shrink-0">
              <div className="flex h-56 w-56 items-center justify-center overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-800 shadow-2xl">
                <img src="/avatar.jpeg" alt="photo-of-renan" className="h-full w-full object-cover" />
              </div>
            </div>
            
            {/* Content */}
            <div className="flex flex-1 flex-col justify-start">
              <span className="inline-flex w-fit rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                full stack developer
              </span>
              <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
                {language.header.title}
              </h1>
              <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg">
                {language.header.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#whoami"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-primary/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-primary/35"
                >
                  About me
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:border-primary hover:text-primary"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
