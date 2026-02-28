import HeroSection from "@/components/sections/home/HeroSection";
import AboutSection from "@/components/sections/home/AboutSection";
import ProjectsSection from "@/components/sections/home/ProjectsSection";
import StudioSection from "@/components/sections/home/StudioSection";
import ContactSection from "@/components/sections/home/ContactSection";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <StudioSection />
      <ContactSection />
    </main>
  );
}
