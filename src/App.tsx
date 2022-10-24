import About from "./components/About/About";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./styles/global.css";
import BackToTop from "./components/BackToTop/BackToTop";
import Professional from "./components/Professional/Professional";
import { useLanguage } from "./Context/LanguageContext";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";

export function App() {
  const { language } = useLanguage();
  const {whoami, skills, experience, contact} = language.navbar;
  const links = [
    { link: whoami, url: "#whoami" },
    { link: skills, url: "#skills" },
    { link: experience, url: "#experience" },
    { link: contact, url: "#contact" },
  ];
  return (
    <>
      <span id="top"></span>
      <Navbar brand={"Renan Braga"} links={links}></Navbar>
      <main className="relative" style={{ zIndex: 1 }}>
        <LanguageSelector></LanguageSelector>
        <Header></Header>
        <About></About>
        <Skills></Skills>
        <Professional></Professional>
        <Contact></Contact>
        <Footer></Footer>
        <BackToTop></BackToTop>
      </main>
    </>
  );
}

export default App;
