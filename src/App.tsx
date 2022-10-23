import About from "./components/About/About";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./styles/global.css";
import BackToTop from "./components/BackToTop/BackToTop";
import Professional from "./components/Professional/Professional";

export function App() {
  const links = ["WhoAmI", "Skills", "Experience", "Contact"];
  return (
    <>
    <span id="top"></span>
    <Navbar brand={"Renan Braga"} links={links}></Navbar>
    <main className="relative" style={{'zIndex': 1}}>
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
