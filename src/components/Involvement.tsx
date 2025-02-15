const Involvement = () => {
  const community = [
    {
      title: "Association for Computing Machinery (ACM)",
      role: "Member",
      date: "August 2024 - Present",
    },
    {
      title: "Muslim Student Association at the UIC (MSA)",
      role: "Secretary Committee",
      date: "August 2024 - Present",
    },
    {
      title: "Robotics FRC Team 8122",
      role: "Member",
      date: "September 2023 - December 2023",
    },
  ];

  return (
    <section id="involvement" className="py-20 bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-[#3b82f6]">Involvement</h2>
        <div className="space-y-6">
          {community.map((involvement, index) => (
            <div
              key={index}
              className="animate-slide-in border border-muted/20 rounded-lg p-6 hover:border-[#3b82f6] transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{involvement.title}</h3>
                  <p className="text-[#3b82f6]">{involvement.role}</p>
                </div>
                <span className="text-muted-foreground">{involvement.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Involvement; 