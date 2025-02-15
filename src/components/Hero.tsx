import { Github, Linkedin, Mail } from "lucide-react";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center bg-background text-foreground pt-16"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="animate-fade-in space-y-8">
          <div className="text-4xl md:text-6xl font-bold space-y-2">
            <p>
              I'm <span className="text-[#3b82f6]">Bakr</span>,
            </p>
            <p>
              A <span className="text-[#3b82f6]">Software Engineer </span>
            </p>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            <span className="font-bold">Software Engineering student</span> at{" "}
            <span className="font-bold">University of illinois at chicago</span>,
            graduating in <span className="font-bold">December 2027</span>. I
            specialize in{" "}
            <span className="font-bold">full-stack development</span> and
            <span className="font-bold"> AI</span>, building scalable
            applications
          </p>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex justify-center space-x-8">
              <a
                href="https://www.linkedin.com/in/bakrbouhaya/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2 text-foreground hover:text-[#3b82f6] transition-colors group"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/bakr1233"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2 text-foreground hover:text-[#3b82f6] transition-colors group"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:bouhayabakr@gmail.com"
                className="flex flex-col items-center space-y-2 text-foreground hover:text-[#3b82f6] transition-colors group"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>

            <a
              href="/Bakr Bouhaya - Resume New.pdf"
              download
              className="flex items-center space-x-2 bg-white text-primary-foreground px-6 py-2 rounded-full hover:bg-[#3b82f6] transition-colors"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
