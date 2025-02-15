const Projects = () => {
  const projects = [
    {
      title: "Dev Overflow",
      description: "Next.js | MongoDB | TailwindCSS | OpenAI",
      duration: "",
      githubLink: "https://github.com/khldalrs/DevFlow",
      points: [
        "Developed a full-stack platform using Next.js, MongoDB, NextAuth, and TailwindCSS, featuring AI-powered answers, voting, and personalized content recommendations",
      ],
    },
    {
      title: "US-Bank Churn Prediction",
      description: "Langchain | Scikit-Learn | Streamlit | Groq",
      githubLink: "https://github.com/khldalrs/Customer_Churn_Predictor",
      points: [
        "Used a 30k+ dataset with multiple LLMs (Llama 3.1b, Deepseek, Groq) to evaluate and improve churn prediction accuracy",
      ],
    },
    {
      title: "Financial Analysis & Automation with LLMs",
      description: "FastAPI | Pinecone | LangChain",
      githubLink: "https://github.com/khldalrs/Financial-Analysis-Backend",
      points: [
        "Ran similarity searches across 10k+ stocks using Pinecone, LangChain, and FastAPI for the backend; optimized the data processing by parallelizing tasks with 10+ concurrent workers to speed up the I/O bound",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-[#3b82f6]">Projects</h2>
        <div className="space-y-12">
          <div
            className="animate-slide-in border border-muted/20 rounded-lg p-6 hover:border-[#3b82f6] transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-semibold">Magic Land</h3>
              <a
                href="https://github.com/bakr1233/Game.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white px-3 py-1 rounded-full bg-[#3b82f6] hover:bg-[#2563eb] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span className="text-white">GitHub</span>
              </a>
            </div>
            <p className="text-[#3b82f6] mb-2">Chicago, Illinois | Python</p>
            <p className="text-sm text-muted-foreground mb-4">Game Developer | July 2024 - August 2024</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Developed a pixel-based battle game for Program Design I, applying course concepts to create an engaging experience.</li>
              <li>Implemented the game in Python, showcasing advanced programming skills.</li>
            </ul>
          </div>

          <div
            className="animate-slide-in border border-muted/20 rounded-lg p-6 hover:border-[#3b82f6] transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-semibold">Portfolio Website</h3>
              <a
                href="https://bakr1233.github.io/Bakr_bouhaya/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white px-3 py-1 rounded-full bg-[#3b82f6] hover:bg-[#2563eb] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-link"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
                <span className="text-white">Live Demo</span>
              </a>
            </div>
            <p className="text-[#3b82f6] mb-2">Rabat, Morocco | HTML, CSS</p>
            <p className="text-sm text-muted-foreground mb-4">Front-end Developer | January 2023 - June 2023</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Developed and Designed Portfolio from scratch for self-development in web development, utilizing HTML and CSS.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
