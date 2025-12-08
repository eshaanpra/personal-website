import { Helmet } from "react-helmet-async";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Eshaan Prashanth | AI Engineer & Tennis Athlete</title>
        <meta
          name="description"
          content="Eshaan Prashanth - Full-Stack AI Engineer and competitive tennis player. Sophomore at Crossroads Flex, building AI systems at Blue Orchid Inc."
        />
        <meta
          name="keywords"
          content="Eshaan Prashanth, AI Engineer, Tennis, Full-Stack Developer, Python, PyTorch, Machine Learning"
        />
        <meta property="og:title" content="Eshaan Prashanth | AI Engineer & Tennis Athlete" />
        <meta
          property="og:description"
          content="Precision in Code. Power on the Court. Full-Stack AI Engineer building intelligent systems."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://eshaanprashanth.com" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <CustomCursor />
        <GrainOverlay />
        <Navigation />
        
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
