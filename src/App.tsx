import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExperienceSection } from './components/ExperienceSection';
import { AutomationShowcase } from './components/AutomationShowcase';
import { CredentialsAndSkills } from './components/CredentialsAndSkills';
import { ContactFooter } from './components/ContactFooter';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFDFB] text-[#111820] selection:bg-[#183B56] selection:text-white">
      <Navbar onOpenResumeModal={() => setResumeOpen(true)} />

      <main>
        <HeroSection onOpenResumeModal={() => setResumeOpen(true)} />
        <ExperienceSection />
        <AutomationShowcase />
        <CredentialsAndSkills />
      </main>

      <ContactFooter onOpenResumeModal={() => setResumeOpen(true)} />

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
};

export default App;
