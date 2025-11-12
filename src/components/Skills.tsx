import { Code, Database, Brain, Users2 } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Web Development",
      icon: Code,
      color: "text-primary",
      description: "Building responsive, interactive, and performant user interfaces",
      skills: ["React.js", "HTML5 & CSS3", "JavaScript ES6+", "Tailwind CSS", "Responsive Design", "UI/UX Implementation"],
      proficiency: 85,
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "text-accent",
      description: "Server-side logic, database design, and API development",
      skills: ["Flask", "Python", "MySQL", "REST APIs", "Database Design", "Authentication"],
      proficiency: 75,
    },
    {
      title: "AI & Data Science",
      icon: Brain,
      color: "text-primary",
      description: "Exploring machine learning concepts and intelligent systems",
      skills: ["Python", "TensorFlow Basics", "Data Analysis", "ML Concepts", "AI Ethics", "Problem Solving"],
      proficiency: 70,
    },
    {
      title: "Leadership & Teamwork",
      icon: Users2,
      color: "text-accent",
      description: "Collaborative development and project management",
      skills: ["Team Collaboration", "Project Coordination", "Agile Methodology", "Code Reviews", "Mentoring", "Communication"],
      proficiency: 80,
    },
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">
            Advanced Skill Development
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuously developing technical expertise and professional competencies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-xl hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                    <Icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">Proficiency Level</span>
                    <span className="text-sm font-bold text-accent">{category.proficiency}%</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                      style={{ width: `${category.proficiency}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs font-medium bg-secondary/50 text-foreground rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 glass-card p-8 rounded-xl">
          <h3 className="text-2xl font-heading font-bold text-center mb-8">
            Additional Competencies
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="glass-card p-6 rounded-lg mb-3">
                <p className="text-3xl font-bold text-primary mb-1">5+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
            </div>
            <div className="text-center">
              <div className="glass-card p-6 rounded-lg mb-3">
                <p className="text-3xl font-bold text-accent mb-1">4+</p>
                <p className="text-sm text-muted-foreground">Certifications Earned</p>
              </div>
            </div>
            <div className="text-center">
              <div className="glass-card p-6 rounded-lg mb-3">
                <p className="text-3xl font-bold text-primary mb-1">7.49</p>
                <p className="text-sm text-muted-foreground">Academic CGPA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
