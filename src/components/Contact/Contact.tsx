import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Contact() {
  return (
    <>
      <span id="contact"></span>
      <section className="relative pt-16 pb-16 bg-white shadow-md shadow-gray-600" style={{zIndex: -1}}>
        <section className="container">
          <h1
            id="contact"
            className="text-center text-5xl font-bold text-primary"
          >
            Contact
          </h1>
          <div className="mx-auto mt-8 flex w-96 flex-wrap justify-between">
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
          </div>
        </section>
      </section>
    </>
  );
}
