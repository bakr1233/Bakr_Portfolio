const Education = () => {
  const education = [
    {
      title: "Bachelor of Engineering in Computer Science",
      company: "University of Illinois Chicago",
      date: "Expected May 2028",
      points: [
        "Concentration: Software Engineering",
        "GPA: 4.0/4.0",
        "Relevant Courses: Program Design I, Program Design II, Data Structures, Programming Practicum",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-[#3b82f6]">Education</h2>
        <div className="space-y-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="animate-slide-in border border-muted/20 rounded-lg p-6 hover:border-[#3b82f6] transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{edu.title}</h3>
                <span className="text-muted-foreground">{edu.date}</span>
              </div>
              <div className="mb-4">
                <span className="text-[#3b82f6]">{edu.company}</span>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                {edu.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
