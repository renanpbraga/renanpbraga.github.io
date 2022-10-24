import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { useLanguage } from "../../Context/LanguageContext";

export default function Contact() {
  const { language } = useLanguage();
  return (
    <>
      <span id="contact"></span>
      <section
        className="relative bg-white pt-16 pb-16 shadow-md shadow-gray-600"
        style={{ zIndex: -1 }}
      >
        <section className="container">
          <h1
            id="contact"
            className="text-center text-5xl font-bold text-primary"
          >
            {language.contact.title}
          </h1>
          <section className="mt-8 flex mx-auto w-auto lg:w-96 flex-wrap justify-between">
            <article>
              <a
                href="https://wa.me/5521968951498?text=Olá, Renan! Encontrei seu portifólio e..."
                target="_blank"
              >
                <IoLogoWhatsapp
                  size={50}
                  onMouseOver={({ target }: any) =>
                    (target.style.color = "rgb(126 34 206)")
                  }
                  onMouseOut={({ target }: any) =>
                    (target.style.color = "rgb(0 0 0)")
                  }
                />
              </a>
            </article>
            <article>
              <a href="https://facebook.com/renanpbraga" target="_blank">
                <BsFacebook
                  size={50}
                  onMouseOver={({ target }: any) =>
                    (target.style.color = "rgb(126 34 206)")
                  }
                  onMouseOut={({ target }: any) =>
                    (target.style.color = "rgb(0 0 0)")
                  }
                />
              </a>
            </article>
            <article>
              <a href="https://www.linkedin.com/in/renanpbraga/">
                <BsLinkedin
                  size={50}
                  onMouseOver={({ target }: any) =>
                    (target.style.color = "rgb(126 34 206)")
                  }
                  onMouseOut={({ target }: any) =>
                    (target.style.color = "rgb(0 0 0)")
                  }
                />
              </a>
            </article>
            <article>
              <a href="https://github.com/renanpbraga" target="_blank">
                <BsGithub
                  size={50}
                  onMouseOver={({ target }: any) =>
                    (target.style.color = "rgb(126 34 206)")
                  }
                  onMouseOut={({ target }: any) =>
                    (target.style.color = "rgb(0 0 0)")
                  }
                />
              </a>
            </article>
          </section>
        </section>
      </section>
    </>
  );
}
