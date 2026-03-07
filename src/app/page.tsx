import Hero from "../../components/Hero";
import About from "../../components/About";
import Skills from "../../components/Skills";
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
      <Projects />
      <Journey />
      <Contact />
      <Footer />
    </main>
  );
}
