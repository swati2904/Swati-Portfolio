import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Experiences from "./components/Experiences/Experiences";
import Recommendations from "./components/Recommendations/Recommendations";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div id="top" className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Skills />
        <Education />
        <Experiences />
        <Projects />
        <Recommendations />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
