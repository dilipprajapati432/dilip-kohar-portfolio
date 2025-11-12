import { Target, TrendingUp, Rocket } from "lucide-react";

export const Future = () => {
  const goals = [
    {
      icon: Target,
      title: "Short-Term Goals (6-12 months)",
      color: "text-primary",
      items: [
        {
          goal: "Secure AI/ML or Web Development Internship",
          description: "Gain industry experience at a tech company or startup",
          status: 30,
        },
        {
          goal: "Master Advanced React & TypeScript",
          description: "Build production-ready applications with modern frameworks",
          status: 60,
        },
        {
          goal: "Complete Data Science Certification",
          description: "Formal training in ML algorithms and data analysis",
          status: 40,
        },
      ],
    },
    {
      icon: TrendingUp,
      title: "Mid-Term Goals (1-3 years)",
      color: "text-accent",
      items: [
        {
          goal: "Develop AI-Based SaaS Product",
          description: "Launch a commercial product solving real-world problems",
          status: 20,
        },
        {
          goal: "Contribute to Open Source",
          description: "Actively participate in major open-source AI/ML projects",
          status: 35,
        },
        {
          goal: "Build Professional Network",
          description: "Attend conferences, workshops, and industry meetups",
          status: 45,
        },
      ],
    },
    {
      icon: Rocket,
      title: "Long-Term Vision (3-5 years)",
      color: "text-primary",
      items: [
        {
          goal: "Become Data Scientist / AI Engineer",
          description: "Lead AI projects with focus on ethical and impactful solutions",
          status: 15,
        },
        {
          goal: "Pursue Master's Degree (Optional)",
          description: "Advanced studies in AI/ML from top institution",
          status: 10,
        },
        {
          goal: "Contribute to Ethical AI Research",
          description: "Publish research on responsible AI and social impact",
          status: 5,
        },
      ],
    },
  ];

  return (
    <section id="future" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">
            Future Aspirations
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategic roadmap for professional growth and continuous development
          </p>
        </div>

        <div className="space-y-12">
          {goals.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="glass-card p-8 rounded-xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                    <Icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold">{category.title}</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {category.items.map((item, i) => (
                    <div key={i} className="glass-card p-6 rounded-lg hover:scale-105 transition-transform">
                      <h4 className="font-semibold text-foreground mb-2">{item.goal}</h4>
                      <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-foreground/70">Progress</span>
                          <span className="font-semibold text-accent">{item.status}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                            style={{ width: `${item.status}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-xl font-heading font-bold text-primary mb-6">
              Professional Development Areas
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <p className="font-medium text-foreground">Technical Mastery</p>
                  <p className="text-sm text-muted-foreground">
                    Deep expertise in AI/ML, cloud computing, and full-stack development
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                <div>
                  <p className="font-medium text-foreground">Leadership Skills</p>
                  <p className="text-sm text-muted-foreground">
                    Team management, project planning, and stakeholder communication
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <p className="font-medium text-foreground">Industry Knowledge</p>
                  <p className="text-sm text-muted-foreground">
                    Understanding business needs, market trends, and emerging technologies
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-xl font-heading font-bold text-accent mb-6">
              Core Values & Principles
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <p className="font-medium text-foreground">Continuous Learning</p>
                  <p className="text-sm text-muted-foreground">
                    Staying updated with latest technologies and best practices
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                <div>
                  <p className="font-medium text-foreground">Ethical Technology</p>
                  <p className="text-sm text-muted-foreground">
                    Building responsible AI that benefits society
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <p className="font-medium text-foreground">Collaborative Growth</p>
                  <p className="text-sm text-muted-foreground">
                    Learning from others and sharing knowledge with the community
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
