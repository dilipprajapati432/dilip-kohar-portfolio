import { Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Prof. Dishant Pandya",
      role: "Professor, Computer Science Department",
      institution: "PDEU",
      content: "Dilip is an analytical and innovative learner, dedicated to excellence and teamwork. His ability to grasp complex concepts quickly and apply them practically sets him apart from his peers.",
      image: "👨‍🏫",
    },
    {
      name: "Team Lead",
      role: "Project Supervisor",
      institution: "InternPe",
      content: "During his internship, Dilip demonstrated exceptional problem-solving skills and attention to detail. He was proactive in learning new technologies and consistently delivered quality work ahead of deadlines.",
      image: "👔",
    },
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">
            Testimonials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <Quote className="h-10 w-10 text-primary mb-4 opacity-50" />
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-accent">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.institution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-card p-8 rounded-xl max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5">
          <h3 className="text-2xl font-heading font-bold text-center mb-6 gradient-text">
            Originality Statement
          </h3>
          <p className="text-foreground/80 leading-relaxed text-center">
            I, <span className="font-semibold text-primary">Dilip Kohar</span>, hereby declare that all code, design, and 
            content presented in this portfolio are original works developed by me. All projects and 
            implementations reflect my own understanding, creativity, and effort. Where external resources, 
            libraries, or frameworks have been used, they have been properly utilized according to their 
            respective licenses and best practices.
          </p>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Date: 11 November 2025
          </p>
          <p className="text-center text-accent font-semibold mt-2">
            Dilip Kohar
          </p>
        </div>
      </div>
    </section>
  );
};
