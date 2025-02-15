import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Education from "@/components/Education.tsx";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Skills from "@/components/skills";
import Leadership from "@/components/Leadership";
import Awards from "@/components/Awards";
import Involvement from "@/components/Involvement";

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Navbar />
        <Hero />
        <Education />
        <Awards />
        <Projects />
        <Skills />
        <Leadership />
        <Involvement />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
