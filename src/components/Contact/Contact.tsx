import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { useLanguage } from "../../Context/LanguageContext";

export default function Contact() {
  const { language } = useLanguage();
  return (
    <>
      <span id="contact"></span>
      <section className="bg-slate-950 py-24 text-slate-100">
        <section className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/85 p-10 shadow-[0_40px_120px_-45px_rgba(15,23,42,0.7)]">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-5">
                <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
                  {language.contact.title}
                </span>
                <h1 className="text-4xl font-semibold text-white">Let’s connect</h1>
                <p className="max-w-2xl text-base leading-8 text-slate-400">
                  I’m available for challenging projects, remote roles, or collaboration. Send a message and let’s talk.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    href: "https://wa.me/5521968951498?text=Olá,%20Renan!%20Encontrei%20seu%20portifólio%20e...",
                    icon: <IoLogoWhatsapp size={28} />,
                    label: "WhatsApp",
                  },
                  {
                    href: "https://facebook.com/renanpbraga",
                    icon: <BsFacebook size={28} />,
                    label: "Facebook",
                  },
                  {
                    href: "https://www.linkedin.com/in/renanpbraga/",
                    icon: <BsLinkedin size={28} />,
                    label: "LinkedIn",
                  },
                  {
                    href: "https://github.com/renanpbraga",
                    icon: <BsGithub size={28} />,
                    label: "GitHub",
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-center gap-3 rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-6 text-slate-100 transition duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
                    aria-label={item.label}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-white/10 text-primary transition duration-300 group-hover:bg-primary/20">
                      {item.icon}
                    </div>
                    <span className="text-sm font-semibold">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
