import { BookOpen, Lightbulb, Target } from "lucide-react";

export const About = () => {
  const timeline = [
    { year: "2019-2021", title: "Intermediate Education '+2'", desc: "Siddhartha English Boarding Secondary School" },
    { year: "2023", title: "Joined PDEU", desc: "B.Tech Computer Science & Engineering" },
    { year: "2025", title: "Web Developer Intern", desc: "InternPe - Aug-Sep 2025" },
    { year: "Present", title: "Building Projects", desc: "AI, Web Dev, and Data Science" },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">
            Introduction & Learning Philosophy
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-xl">
              <p className="text-lg leading-relaxed text-foreground/90">
                My journey into technology began with a simple curiosity about how computers work. 
                This curiosity evolved into a passion for artificial intelligence and software development 
                during my time at PDEU. I believe in <span className="text-primary font-semibold">learning by doing</span> – 
                every project I undertake teaches me something new about problem-solving, creativity, and innovation.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90 mt-4">
                Computer Science, to me, is not just about writing code; it's about creating solutions 
                that can make a real difference. Whether it's developing web applications, exploring machine 
                learning algorithms, or contributing to open-source projects, I approach each challenge with 
                enthusiasm and a growth mindset. My core values are centered around <span className="text-accent font-semibold">continuous 
                learning</span>, <span className="text-primary font-semibold">collaborative teamwork</span>, and 
                <span className="text-accent font-semibold"> ethical innovation</span>.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="glass-card p-6 rounded-xl text-center">
                <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Learning-by-Doing</p>
              </div>
              <div className="glass-card p-6 rounded-xl text-center">
                <Lightbulb className="h-8 w-8 text-accent mx-auto mb-2" />
                <p className="text-sm font-medium">Problem-Solving</p>
              </div>
              <div className="glass-card p-6 rounded-xl text-center">
                <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Innovation</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-semibold text-primary mb-6">
              My Journey Timeline
            </h3>
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 rounded-xl hover:bg-primary/5 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <span className="text-xs font-bold">{item.year.split('-')[0].slice(-2)}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-accent font-medium">{item.year}</p>
                      <h4 className="text-lg font-semibold text-foreground mt-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
