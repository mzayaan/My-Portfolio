import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import DissertationSection from './sections/DissertationSection';
import CurriculumSection from './sections/CurriculumSection';
import ServicesSection from './sections/ServicesSection';
import LanguagesSection from './sections/LanguagesSection';
import ModulesSection from './sections/ModulesSection';
import ReposSection from './sections/ReposSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  return (
    <main
      className="relative w-full"
      style={{ background: '#0C0C0C', overflowX: 'clip' }}
    >
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ExperienceSection />
      <DissertationSection />
      <CurriculumSection />
      <ServicesSection />
      <LanguagesSection />
      <ModulesSection />
      <ReposSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
