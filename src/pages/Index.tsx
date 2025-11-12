import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TableOfContents } from "@/components/TableOfContents"; // ✅ Add this
import { About } from "@/components/About";
import { Resume } from "@/components/Resume";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Leadership } from "@/components/Leadership";
import { GlobalAwareness } from "@/components/GlobalAwareness";
import { Future } from "@/components/Future";
import { Conclusion } from "@/components/Conclusion";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TableOfContents /> {/* ✅ Add it right after Hero */}
      <About />
      <Resume />
      <Projects />
      <Skills />
      <Leadership />
      <GlobalAwareness />
      <Future />
      <Conclusion />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
