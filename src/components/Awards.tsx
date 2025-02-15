const Awards = () => {
  const awards = [
    {
      title: "FEDERAL & STEM SCHOLARSHIP",
      company: "Chicago, Illinois",
      date: "August 2024",
      points: [
        "Selected as one of 18 out of 1,000 students in Chicago to represent STEM Scholars program initiatives, receiving $60,000 in support for my educational journey.",
      ],
    },
  ];

  return (
    <section id="awards" className="py-20 bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-[#3b82f6]">Awards</h2>
        <div className="space-y-12">
          {awards.map((award, index) => (
            <div
              key={index}
              className="animate-slide-in border border-muted/20 rounded-lg p-6 hover:border-[#3b82f6] transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{award.title}</h3>
                <span className="text-muted-foreground">{award.date}</span>
              </div>
              <div className="mb-4">
                <span className="text-[#3b82f6]">{award.company}</span>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                {award.points.map((point, idx) => (
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

export default Awards; 