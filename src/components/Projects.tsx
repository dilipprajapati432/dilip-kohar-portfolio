import { ExternalLink, Github, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "BhatBhateni E-Commerce Website",
      description: "A fully responsive e-commerce platform featuring product listings, shopping cart functionality, and dynamic user interface. Built with modern web technologies focusing on user experience and performance.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      features: [
        "Dynamic product catalog with search and filter",
        "Interactive shopping cart with real-time updates",
        "Responsive design for all devices",
        "Smooth animations and transitions",
      ],
      challenges: "Managing state across multiple components and ensuring cart persistence. Implemented localStorage for cart data retention.",
      github: "https://github.com/dilipprajapati432/BhatBhateni-Ecommerce-Site",
      demo: "https://bhatbhateni-ecommerce-site.netlify.app/",
    },
    {
      title: "Spotify UI Clone",
      description: "Pixel-perfect recreation of Spotify's user interface to practice frontend development skills. Focus on component architecture, responsive layouts, and interactive elements.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Component Design"],
      features: [
        "Accurate replication of Spotify's layout",
        "Responsive sidebar and navigation",
        "Interactive player controls UI",
        "Grid-based album/playlist display",
      ],
      challenges: "Achieving pixel-perfect design accuracy while maintaining code quality. Learned advanced CSS techniques and React component patterns.",
      github: "https://github.com/dilipprajapati432/Spotify-Clone",
      demo: "https://spotify-ui-clone-appfront.netlify.app/",
    },
    {
  title: "To-Do List Web Application",
  description:
    "A responsive task management app that allows users to create, update, and delete daily tasks. Built with Flask backend and MySQL database for user-specific task storage and authentication.",
  technologies: ["HTML5", "CSS3", "JavaScript"],
  features: [
    "Add, edit, and delete tasks dynamically",
    "User login and registration with Flask authentication",
    "Task completion tracking and filtering (completed/pending)",
    "Persistent data storage using MySQL database",
  ],
  challenges:
    "Implementing efficient CRUD operations and real-time UI updates while maintaining secure user authentication and clean database design.",
  github: "https://github.com/dilipprajapati432/My-To-Do-List",
  demo: "https://my-to-do-list-projec.netlify.app/",
}

  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">
            Interdisciplinary Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing practical applications of web development, database management, and problem-solving skills
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-xl hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                      {project.title}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-accent mb-3">KEY FEATURES</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                          <Code2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="glass-card p-4 rounded-lg bg-secondary/20">
                    <h4 className="text-sm font-semibold text-accent mb-2">
                      CHALLENGES & SOLUTIONS
                    </h4>
                    <p className="text-sm text-foreground/80">{project.challenges}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      variant="outline"
                      className="border-primary/50 hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                    {project.demo !== "#" && (
                      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
