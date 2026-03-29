import Hero from "../../components/Hero";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Certifications from "../../components/Certifications";
import Projects from "../../components/Projects";
import Journey from "../../components/Journey";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Journey />
      <Contact />
      <Footer />
    </main>
  );
}
