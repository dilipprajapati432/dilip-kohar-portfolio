export const Conclusion = () => {
  const swotData = [
    {
      category: "Strengths",
      color: "text-primary",
      bg: "bg-primary/10",
      items: [
        "Technical versatility across multiple languages",
        "Strong problem-solving abilities",
        "Quick learner and adaptable",
        "Team collaboration skills",
      ],
    },
    {
      category: "Weaknesses",
      color: "text-accent",
      bg: "bg-accent/10",
      items: [
        "Time management under tight deadlines",
        "Limited industry experience",
        "Public speaking confidence",
        "Advanced algorithm optimization",
      ],
    },
    {
      category: "Opportunities",
      color: "text-primary",
      bg: "bg-primary/10",
      items: [
        "Growing AI/ML job market",
        "Remote work possibilities",
        "Open-source contributions",
        "Emerging tech startup scene in India",
      ],
    },
    {
      category: "Threats",
      color: "text-accent",
      bg: "bg-accent/10",
      items: [
        "Rapid technology evolution",
        "Intense competition in tech field",
        "Economic uncertainties",
        "Need to constantly upskill",
      ],
    },
  ];

  return (
    <section id="conclusion" className="section-padding bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">
            Conclusion & Self-Assessment
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-xl mb-12">
          <h3 className="text-2xl font-heading font-bold text-primary mb-6 text-center">
            Reflections on My Learning Journey
          </h3>
          <div className="space-y-4 text-foreground/80 leading-relaxed max-w-4xl mx-auto">
            <p>
              Looking back at my journey from a curious student to a budding computer science 
              professional, I realize how much I've grown both technically and personally. Each 
              project, whether successful or challenging, has taught me valuable lessons about 
              perseverance, creativity, and the importance of continuous learning.
            </p>
            <p>
              My time at PDEU has been transformative. Beyond classroom learning, internships, 
              workshops, and team projects have shaped my practical skills and professional mindset. 
              The Web Developer Internship at InternPe gave me my first taste of real-world 
              software development, while the NSS rural development camp broadened my perspective 
              on technology's social impact.
            </p>
            <p>
              Adaptability has become one of my greatest strengths. The tech industry evolves 
              rapidly, and staying relevant requires constant upskilling. I've learned to embrace 
              new technologies, frameworks, and methodologies with enthusiasm rather than 
              apprehension. This mindset has helped me transition smoothly from basic web 
              development to more complex full-stack projects involving databases and backend logic.
            </p>
            <p>
              Collaboration and communication skills have proven as important as technical 
              expertise. Working on team projects like the E-Form application taught me that 
              great software is built by people who can articulate ideas clearly, listen actively, 
              and work towards common goals. Leadership, I've learned, isn't just about directing 
              others—it's about inspiring collaboration and taking ownership of outcomes.
            </p>
            <p className="text-lg font-medium text-primary pt-4">
              As I look ahead, I'm excited about the possibilities that lie before me. My goal 
              isn't just to build a successful career, but to create technology that makes a 
              meaningful difference in people's lives—ethically, responsibly, and inclusively.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-heading font-bold text-center mb-8">
            SWOT Analysis
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {swotData.map((section, index) => (
              <div key={index} className="glass-card p-6 rounded-xl">
                <h4 className={`text-xl font-heading font-bold ${section.color} mb-4`}>
                  {section.category}
                </h4>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-2 p-3 ${section.bg} rounded-lg`}
                    >
                      <span className={`${section.color} mt-0.5`}>▹</span>
                      <span className="text-sm text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 glass-card p-8 rounded-xl text-center bg-gradient-to-br from-primary/10 to-accent/10">
          <p className="text-lg font-medium text-foreground italic">
            "The journey of a thousand miles begins with a single step. I'm taking that step every 
            day, learning, building, and growing into the technology professional I aspire to be."
          </p>
          <p className="text-sm text-muted-foreground mt-4">— Dilip Kohar</p>
        </div>
      </div>
    </section>
  );
};
