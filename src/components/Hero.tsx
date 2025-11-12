import { Download, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-dilip1.jpg";
import resumeFile from "@/assets/DilipKohar_Resume.pdf";


export const Hero = () => {
  const handleDownloadResume = () => {
    window.print();
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  return (
<section id="hero" className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block glass-card px-4 py-2 rounded-full">
              <p className="text-sm text-accent font-medium">Welcome to my portfolio</p>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
              Hi, I'm <span className="gradient-text">Dilip Kohar</span>
            </h1>
            
            <p className="text-xl text-muted-foreground">
              B.Tech in Computer Science & Engineering (3rd Year)
            </p>
            
            <p className="text-lg text-foreground/80">
              Building intelligent systems through creativity, logic, and learning.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">

<Button
  onClick={() => window.open(resumeFile, "_blank")}
  className="bg-primary hover:bg-primary/90 text-primary-foreground"
>
  Download Resume
</Button>

              <Button 
                onClick={scrollToContact}
                variant="outline" 
                className="border-primary/50 hover:bg-primary/10"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com/dilipprajapati432" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/dilip-kohar-014627293" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:dilipkohar4320@gmail.com"
                className="p-3 glass-card rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            <div className="glass-card p-4 rounded-lg mt-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-primary">PDEU</p>
                  <p className="text-sm text-muted-foreground">Gandhinagar, India</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent">3rd Year</p>
                  <p className="text-sm text-muted-foreground">CS & Engineering</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-30"></div>
              <img
                src={profileImage}
                alt="Dilip Kohar"
                className="relative w-80 h-80 object-cover rounded-full border-4 border-primary/50 shadow-2xl"
              />
            </div>
          </div>
        </div>

      
      
      </div>
    </section>
  );
};
