import {
  BookOpen,
  User,
  FileText,
  Code,
  Star,
  Users,
  Globe,
  Target,
  CheckCircle,
  Quote,
} from "lucide-react";

export const TableOfContents = () => {
  const contents = [
    { number: "1", title: "Cover Page", link: "#hero", icon: <BookOpen className="w-5 h-5" /> },
    { number: "2", title: "Introduction & Learning Philosophy", link: "#about", icon: <User className="w-5 h-5" /> },
    { number: "3", title: "Resume / CV", link: "#resume", icon: <FileText className="w-5 h-5" /> },
    { number: "4", title: "Interdisciplinary Projects & Research", link: "#projects", icon: <Code className="w-5 h-5" /> },
    { number: "5", title: "Advanced Skill Development & Mastery", link: "#skills", icon: <Star className="w-5 h-5" /> },
    { number: "6", title: "Collaborative & Leadership Experiences", link: "#leadership", icon: <Users className="w-5 h-5" /> },
    { number: "7", title: "Global Awareness & Ethics", link: "#globalawareness", icon: <Globe className="w-5 h-5" /> },
    { number: "8", title: "Future Aspirations & Professional Development", link: "#future", icon: <Target className="w-5 h-5" /> },
    { number: "9", title: "Conclusion & Self-Assessment", link: "#conclusion", icon: <CheckCircle className="w-5 h-5" /> },
    { number: "10", title: "Testimonials", link: "#testimonials", icon: <Quote className="w-5 h-5" /> },
  ];

  return (
    <section
      id="table-of-contents"
      className="min-h-screen flex flex-col justify-center items-center py-24 section-padding"
    >
      <div className="container mx-auto max-w-5xl text-center animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 gradient-text">
          Table of Contents
        </h2>

        {/* --- Desktop View (unchanged) --- */}
        <div className="hidden md:block overflow-hidden glass-card rounded-2xl backdrop-blur-xl shadow-xl border border-white/10">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b border-foreground/20 bg-primary/10">
                <th className="py-4 px-10 text-left text-sm font-semibold text-primary uppercase w-24">
                  No.
                </th>
                <th className="py-4 px-10 text-left text-sm font-semibold text-primary uppercase">
                  Section
                </th>
              </tr>
            </thead>
            <tbody>
              {contents.map((item, index) => (
                <tr
                  key={item.number}
                  onClick={() => {
                    const el = document.querySelector(item.link);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="border-b border-foreground/10 cursor-pointer group transition-all duration-500 ease-in-out 
                             hover:bg-primary/10 hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(0,123,255,0.2)]"
                  style={{
                    animation: "fadeInUp 0.4s ease forwards",
                    animationDelay: `${index * 0.05}s`,
                    opacity: 0,
                  }}
                >
                  <td className="py-4 px-10 font-semibold text-foreground/80 group-hover:text-primary transition-all duration-500 text-lg">
                    {item.number}
                  </td>
                  <td className="py-4 px-10 flex items-center gap-6 text-foreground/90 font-medium group-hover:text-primary transition-all duration-500 text-base">
                    <span className="transform group-hover:scale-125 transition-transform duration-300 ease-in-out text-primary/80 group-hover:text-primary drop-shadow-lg">
                      {item.icon}
                    </span>
                    <span className="group-hover:tracking-wide transition-all duration-500">
                      {item.title}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* --- Mobile View (only added this) --- */}
        <div className="md:hidden space-y-4 mt-8">
          {contents.map((item, index) => (
            <div
              key={item.number}
              onClick={() => {
                const el = document.querySelector(item.link);
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="glass-card flex items-center justify-start gap-5 p-4 rounded-xl transition-all duration-300 cursor-pointer hover:scale-[1.03] hover:shadow-lg hover:bg-primary/10"
              style={{
                animation: "fadeInUp 0.4s ease forwards",
                animationDelay: `${index * 0.05}s`,
                opacity: 0,
              }}
            >
              <span className="text-primary font-semibold text-lg min-w-[2rem]">{item.number}</span>
              <span className="text-primary/80">{item.icon}</span>
              <span className="text-foreground text-base text-left">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
