import { Users, Trophy, Heart } from "lucide-react";

export const Leadership = () => {
  return (
    <section id="leadership" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">
            Collaborative & Leadership Experiences
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-8 rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/20 rounded-lg">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold">Team Projects</h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-2">
                  E-Form DBMS Project - Backend Lead
                </h4>
                <p className="text-foreground/80 mb-3">
                  Led the backend integration for a dynamic form builder application, 
                  coordinating with 3 team members to deliver a full-stack solution.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-foreground/70">
                    <span className="text-accent">▹</span>
                    <span>Designed and implemented Flask REST API architecture</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-foreground/70">
                    <span className="text-accent">▹</span>
                    <span>Coordinated database schema design with team members</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-foreground/70">
                    <span className="text-accent">▹</span>
                    <span>Facilitated code reviews and knowledge sharing sessions</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-border/30 pt-6">
                <h4 className="text-lg font-semibold text-accent mb-2">
                  Agri-Tech Project - Design & Functionality
                </h4>
                <p className="text-foreground/80 mb-3">
                  Contributed to an agricultural technology solution, handling UI/UX design 
                  and implementing core functionality features.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-foreground/70">
                    <span className="text-primary">▹</span>
                    <span>Created intuitive user interfaces for farmers</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-foreground/70">
                    <span className="text-primary">▹</span>
                    <span>Implemented data visualization components</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-foreground/70">
                    <span className="text-primary">▹</span>
                    <span>Ensured responsive design across devices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/20 rounded-lg">
                  <Trophy className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-bold">Leadership Qualities</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <p className="font-medium text-foreground">Initiative & Ownership</p>
                    <p className="text-sm text-muted-foreground">
                      Proactively identifying challenges and proposing solutions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                  <div>
                    <p className="font-medium text-foreground">Clear Communication</p>
                    <p className="text-sm text-muted-foreground">
                      Effectively coordinating with diverse team members
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <p className="font-medium text-foreground">Problem Resolution</p>
                    <p className="text-sm text-muted-foreground">
                      Mediating conflicts and finding consensus
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold">NSS Volunteer Work</h3>
              </div>

              <p className="text-foreground/80 mb-4">
                Participated in National Service Scheme rural development camp (2024) at JEEVANTIRTH, 
                contributing to community welfare initiatives.
              </p>
              <div className="glass-card p-4 rounded-lg bg-secondary/30">
                <p className="text-sm italic text-foreground/80">
                  "Through NSS, I learned the importance of giving back to society and 
                  developed empathy for diverse communities. This experience strengthened 
                  my commitment to using technology for social good."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 glass-card p-8 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="flex items-start gap-4">
            <div className="text-4xl">💬</div>
            <div>
              <p className="text-lg font-medium text-foreground mb-2 italic">
                "Dilip consistently brought fresh ideas and ensured smooth coordination among 
                teammates. His technical skills combined with strong communication made him 
                an invaluable team member."
              </p>
              <p className="text-sm text-muted-foreground">— Team Member, E-Form Project</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
