const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mt-20">
          <h2 className="text-2xl font-semibold mb-8 text-[#3b82f6]">
            SKILLS & CERTIFICATES
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  "HTML",
                  "CSS",
                  "Python",
                  "C++",
                ].map((skill, index, array) => (
                  <span key={skill} className="text-muted-foreground">
                    {skill}
                    {index !== array.length - 1 && (
                      <span className="ml-4 text-[#3b82f6]">•</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl mb-4">Languages</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  "English",
                  "French",
                  "Arabic",
                ].map((skill, index, array) => (
                  <span key={skill} className="text-muted-foreground">
                    {skill}
                    {index !== array.length - 1 && (
                      <span className="ml-4 text-[#3b82f6]">•</span>
                    )}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mt-2">(verbal, reading, and writing)</p>
            </div>
            <div>
              <h3 className="text-xl mb-4">Computer Skills</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  "Microsoft Office (Excel, Word, PowerPoint, Outlook)",
                  "Google Suite (Docs, Sheets, Slides, Forms, Drive)",
                  "Version Control (Git, Github)",
                  "Certified Google Project Management",
                ].map((skill, index, array) => (
                  <span key={skill} className="text-muted-foreground">
                    {skill}
                    {index !== array.length - 1 && (
                      <span className="ml-4 text-[#3b82f6]">•</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
