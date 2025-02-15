import { Mail, Github, Linkedin, Phone, Copy } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-[#3b82f6]">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-slide-in">
            <p className="text-lg text-muted-foreground mb-8">
              I'm currently open to new opportunities. Feel free to reach out if
              you'd like to connect!
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-foreground group">
                <a
                  href="mailto:bouhayabakr@gmail.com"
                  className="flex items-center space-x-4 hover:text-[#3b82f6] transition-colors"
                >
                  <Mail className="w-6 h-6" />
                  <span>bouhayabakr@gmail.com</span>
                </a>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("bouhayabakr@gmail.com");
                  }}
                  className="p-2 rounded-md hover:bg-muted/20 opacity-100 transition-opacity"
                  title="Copy email"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
              <a
                href="https://github.com/bakr1233"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-foreground hover:text-[#3b82f6] transition-colors"
              >
                <Github className="w-6 h-6" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/bakrbouhaya/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-foreground hover:text-[#3b82f6] transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>
              <div className="flex items-center space-x-4 text-foreground">
                <Phone className="w-6 h-6" />
                <span>(773)-597-5842</span>
              </div>
            </div>
          </div>
          <div className="animate-slide-in">
            <div className="bg-muted/5 p-8 rounded-lg border border-muted/20">
              <h3 className="text-xl font-semibold mb-4">Current Location</h3>
              <p className="text-muted-foreground">
                United States, Illinois - Chicago
              </p>
              <p className="text-muted-foreground mt-4">
                Open to remote opportunities worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
