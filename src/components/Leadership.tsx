const Leadership = () => {
  const leadership = [
    {
      title: "STUDENT REPRESENTER",
      company: "Rabat, Morocco",
      date: "October 2022 – June 2023",
      points: [
        "Represented over 500 + students of Abd Rahman Dakhil High School dealing issues related to education to afford Student better learning experience.",
        "Worked closely with school staff and students to resolve concerns, improving communication and fostering a sense of community.",
      ],
    },
    {
      title: "3D DNA Molecule Project",
      company: "Rabat, Morocco | Blender",
      date: "March 2023 – April 2023",
      subtitle: "Group Leader",
      points: [
        "Earned top honors in the State of Rabat for the project in Morocco, receiving high praise from judges for exceptional quality and innovation.",
        "Spearheaded a team of 15 students to successfully integrate technology with biology, creating a groundbreaking 3D model of a DNA molecule with 9 detailed modules, using Blender Software.",
      ],
    },
  ];

  return (
    <section id="leadership" className="py-20 bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-[#3b82f6]">Leadership</h2>
        <div className="space-y-12">
          {leadership.map((position, index) => (
            <div
              key={index}
              className="animate-slide-in border border-muted/20 rounded-lg p-6 hover:border-[#3b82f6] transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{position.title}</h3>
                <span className="text-muted-foreground">{position.date}</span>
              </div>
              {position.subtitle && (
                <p className="text-[#3b82f6] mb-2">{position.subtitle}</p>
              )}
              <p className="text-[#3b82f6] mb-2">{position.company}</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                {position.points.map((point, idx) => (
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

export default Leadership;
