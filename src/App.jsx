import { useEffect } from "react";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Nav />
      <Hero />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
