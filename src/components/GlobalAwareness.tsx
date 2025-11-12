import { Shield, Sprout } from "lucide-react";

export const GlobalAwareness = () => {
  return (
    <section id="awareness" className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">
            Global Awareness & Ethics
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-8 rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/20 rounded-lg">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold">AI & Data Privacy</h3>
            </div>

            <div className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                As artificial intelligence becomes increasingly integrated into our daily lives, 
                the importance of ethical AI development and data privacy cannot be overstated. 
                My understanding of AI ethics has been shaped by both coursework and practical considerations.
              </p>

              <div className="glass-card p-6 rounded-lg bg-secondary/30">
                <h4 className="font-semibold text-primary mb-3">Key Ethical Considerations</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="text-accent">•</span>
                    <span><strong>Transparency:</strong> AI systems should be explainable and their decision-making processes understood</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="text-accent">•</span>
                    <span><strong>Bias Mitigation:</strong> Training data must be diverse and representative to prevent discriminatory outcomes</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="text-accent">•</span>
                    <span><strong>Privacy Protection:</strong> User data should be collected, stored, and processed with consent and security</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="text-accent">•</span>
                    <span><strong>Accountability:</strong> Developers must take responsibility for AI system behaviors and outcomes</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm italic text-foreground/70">
                  "In my projects, I prioritize implementing proper data validation, secure 
                  authentication mechanisms, and transparent user consent processes. Every line 
                  of code should respect user privacy and dignity."
                </p>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold text-foreground mb-2">Practical Applications</h4>
                <p className="text-sm text-foreground/80">
                  In the E-Form project, I implemented input validation and secure database 
                  practices to protect user-submitted data. For future AI projects, I'm committed 
                  to incorporating ethical considerations from the design phase itself.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-accent/20 rounded-lg">
                <Sprout className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-bold">Technology for Rural Development</h3>
            </div>

            <div className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                My participation in the NSS rural development camp (2024) opened my eyes to the 
                digital divide and the potential of technology to transform rural communities. 
                This experience directly connects to my academic pursuits and career aspirations.
              </p>

              <div className="glass-card p-6 rounded-lg bg-secondary/30">
                <h4 className="font-semibold text-accent mb-3">Observed Challenges</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="text-primary">•</span>
                    <span><strong>Limited Internet Access:</strong> Poor connectivity restricts access to online education and services</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="text-primary">•</span>
                    <span><strong>Digital Literacy:</strong> Many community members lack basic digital skills</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="text-primary">•</span>
                    <span><strong>Language Barriers:</strong> Most technical resources are not available in local languages</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="text-primary">•</span>
                    <span><strong>Agricultural Information:</strong> Farmers need accessible weather forecasts and market prices</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card p-6 rounded-lg bg-primary/5">
                <h4 className="font-semibold text-accent mb-3">Technology Solutions</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm text-foreground">Mobile-First Applications</p>
                    <p className="text-xs text-muted-foreground">
                      Developing lightweight apps optimized for low bandwidth and basic smartphones
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-foreground">Multilingual Interfaces</p>
                    <p className="text-xs text-muted-foreground">
                      Creating accessible interfaces in regional languages
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-foreground">Offline-First Design</p>
                    <p className="text-xs text-muted-foreground">
                      Building applications that work without constant internet connectivity
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-accent pl-4">
                <p className="text-sm italic text-foreground/70">
                  "Technology should not be a privilege of urban areas. My goal is to develop 
                  solutions that are inclusive, accessible, and genuinely helpful to all communities, 
                  regardless of their location or economic status."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 glass-card p-8 rounded-xl text-center">
          <h3 className="text-xl font-heading font-bold text-foreground mb-4">
            Commitment to Ethical Technology
          </h3>
          <p className="text-foreground/80 max-w-3xl mx-auto">
            These experiences have reinforced my belief that technology professionals have a 
            responsibility to consider the broader impact of their work. As I advance in my career, 
            I'm committed to developing solutions that are not only technically sound but also 
            ethically responsible and socially beneficial.
          </p>
        </div>
      </div>
    </section>
  );
};
