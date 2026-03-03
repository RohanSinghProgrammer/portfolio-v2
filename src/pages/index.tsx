import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import GridBackground from "@/components/GridBackground";
import TerminalLogs from "@/components/TerminalLogs";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import SkillsSection from "@/sections/SkillsSection";
import ProjectsSection from "@/sections/ProjectsSection";
import PipelineSection from "@/sections/PipelineSection";
import ExperienceSection from "@/sections/ExperienceSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <GridBackground />
      <ScrollProgress />
      <Navbar />
      <TerminalLogs />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <PipelineSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;