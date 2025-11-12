import {
  GraduationCap,
  Briefcase,
  Award,
  Code,
  Users,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import javaCert from "@/assets/Java_Certificate.pdf";
import aiCert from "@/assets/AI Essentials Workshop.jpeg";
import webCert from "@/assets/web development by ACM.pdf";
import hackCert from "@/assets/Ethical Hacking workshop.pdf";

export const Resume = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Pandit Deendayal Energy University (PDEU)",
      location: "Gandhinagar, India",
      duration: "2023 - Present (3rd Year)",
      cgpa: "7.49 / 10.0 CGPA",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Siddhartha English Boarding Seondary School",
      location: "Nepal",
      duration: "2019 - 2021",
      cgpa: "3.19 / 4.0 GPA",
    },
  ];

  const experience = [
    {
      title: "Web Developer Intern",
      company: "InternPe",
      duration: "Aug 2025 - Sep 2025",
      responsibilities: [
        "Developed responsive web applications using HTML, CSS, JavaScript",
        "Collaborated with design team to implement user-friendly interfaces",
        "Optimized website performance and cross-browser compatibility",
        "Participated in code reviews and agile development processes",
      ],
    },
  ];

  const skills = {
    technical: [
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "MySQL", level: 75 },
      { name: "Flask", level: 70 },
      { name: "Git", level: 80 },
      { name: "React", level: 75 },
    ],
    soft: [
      "Communication",
      "Teamwork",
      "Adaptability",
      "Time Management",
      "Positive Attitude",
      "Leadership",
    ],
  };

  const certifications = [
    {
      name: "Java Certification",
      issuer: "LearnTube",
      year: "2024",
      link: javaCert,
    },
    {
      name: "AI Essentials Workshop",
      issuer: "Dept. of Mathematics, PDEU",
      year: "2025",
      link: aiCert,
    },
    {
      name: "Mastering the Web Workshop",
      issuer: "ACM-PDEU",
      year: "2025",
      link: webCert,
    },
    {
      name: "Ethical Hacking Workshop",
      issuer: "IEEE PDEU",
      year: "2025",
      link: hackCert,
    },
  ];

  return (
    <section
      id="resume"
      className="section-padding bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">
            Resume & CV
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <Button
            onClick={() => window.print()}
            className="bg-primary hover:bg-primary/90"
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>

        {/* Education */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h3 className="text-3xl font-heading font-bold">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-xl hover:scale-105 transition-transform"
              >
                <h4 className="text-xl font-semibold text-primary mb-2">
                  {edu.degree}
                </h4>
                <p className="text-lg font-medium text-foreground">
                  {edu.institution}
                </p>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                  <span>{edu.location}</span>
                  <span>•</span>
                  <span>{edu.duration}</span>
                  <span>•</span>
                  <span className="text-accent font-semibold">{edu.cgpa}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-8 w-8 text-accent" />
            <h3 className="text-3xl font-heading font-bold">Experience</h3>
          </div>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="glass-card p-8 rounded-xl">
                <h4 className="text-xl font-semibold text-primary mb-1">
                  {exp.title}
                </h4>
                <p className="text-lg font-medium text-foreground mb-2">
                  {exp.company}
                </p>
                <p className="text-sm text-accent mb-4">{exp.duration}</p>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-foreground/80"
                    >
                      <span className="text-primary mt-1">▹</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Code className="h-8 w-8 text-primary" />
            <h3 className="text-3xl font-heading font-bold">
              Technical Skills
            </h3>
          </div>
          <div className="glass-card p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-6">
              {skills.technical.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-accent">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Users className="h-8 w-8 text-accent" />
            <h3 className="text-3xl font-heading font-bold">Soft Skills</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.soft.map((skill, index) => (
              <div
                key={index}
                className="glass-card p-4 rounded-xl text-center hover:bg-primary/10 transition-colors"
              >
                <p className="font-medium text-sm">{skill}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-8 w-8 text-primary" />
            <h3 className="text-3xl font-heading font-bold">
              Certifications & Awards
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:scale-105 transition-transform"
              >
                <div className="flex items-start gap-4">
                  <Award className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg text-foreground">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-accent mt-1 mb-2">{cert.year}</p>

                    {/* ✅ View Certificate button */}
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* ✅ Added View button to NSS Volunteer Camp */}
            <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform">
              <div className="flex items-start gap-4">
                <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-foreground">
                    NSS Volunteer Camp
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Rural Development Initiative
                  </p>
                  <p className="text-xs text-accent mt-1 mb-2">2024</p>

                  <a
                    href="/path/to/nss_certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
