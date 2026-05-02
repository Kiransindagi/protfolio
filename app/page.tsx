import Hero from '@/components/hero/Hero';
import IdentityProfile from '@/components/sections/IdentityProfile';
import SkillsGrid from '@/components/sections/SkillsGrid';
import AIPipeline from '@/components/sections/AIPipeline';
import HackathonsSection from '@/components/sections/HackathonsSection';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import FutureVision from '@/components/sections/FutureVision';
import ContactSection from '@/components/sections/ContactSection';
import SystemStatusHUD from '@/components/ui/SystemStatusHUD';
import Navbar from '@/components/ui/Navbar';
import SystemTimeline from '@/components/sections/SystemTimeline';
import Recognition from '@/components/sections/Recognition';

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-[#222222] selection:text-white bg-white">

      <Hero />
      <IdentityProfile />
      <SkillsGrid />
      <SystemTimeline />
      <Recognition />
      <AIPipeline />
      <HackathonsSection />
      <ProjectsGrid />
      <FutureVision />
      <ContactSection />
      <SystemStatusHUD />
    </main>
  );
}
