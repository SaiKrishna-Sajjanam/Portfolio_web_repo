// src/pages/Index.tsx
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <>
      {/* Sticky Navbar */}
      <Navigation />

      {/* Main Website Sections */}
      <main className="min-h-screen">
        <Hero />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-card py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Sai Krishna Sajjanam. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Index;
