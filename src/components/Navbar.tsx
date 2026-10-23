import React, { useState } from 'react';
import { FileText, Download, Menu, X } from 'lucide-react';
import { PROFILE } from '../data/profileData';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

const NAV_LINKS = [
  { label: 'Experience', href: '#experience' },
  { label: 'Automation & Projects', href: '#projects' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#E3E6E1] bg-[#FDFDFB]/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Brand Identity */}
        <a
          href="#top"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="Bhavesh Kurhade Home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#183B56] font-display text-sm font-semibold tracking-tight text-white transition-colors group-hover:bg-[#122D42]">
            {PROFILE.monogram}
          </span>
          <div className="flex flex-col">
            <span className="font-display text-sm font-semibold tracking-tight text-[#111820]">
              {PROFILE.name}
            </span>
            <span className="text-[11px] font-medium text-[#64707D]">
              CA Finalist · Mumbai MMR
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13.5px] font-medium text-[#434E5B] transition-colors hover:text-[#111820]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Interviewer Quick Actions */}
        <div className="hidden items-center gap-2.5 sm:flex">
          <button
            type="button"
            onClick={onOpenResumeModal}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-[#CFD5CE] bg-white px-3.5 py-2 text-[13px] font-medium text-[#111820] transition-colors hover:border-[#183B56] hover:bg-[#F4F5F2]"
          >
            <FileText className="h-3.5 w-3.5 text-[#183B56]" strokeWidth={1.85} />
            <span>Preview CV</span>
          </button>
          <a
            href={PROFILE.resumePdfUrl}
            download={PROFILE.resumeFileName}
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#183B56] px-3.5 py-2 text-[13px] font-medium text-white transition-colors hover:bg-[#122D42]"
          >
            <Download className="h-3.5 w-3.5" strokeWidth={1.85} />
            <span>Download PDF</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg border border-[#E3E6E1] p-2 text-[#111820] sm:hidden"
          aria-label="Toggle Menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="border-t border-[#E3E6E1] bg-[#FDFDFB] px-5 py-4 sm:hidden">
          <nav className="flex flex-col space-y-3">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-1 text-sm font-medium text-[#111820]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 grid grid-cols-2 gap-2.5 border-t border-[#E3E6E1] pt-4">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenResumeModal();
              }}
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-[#CFD5CE] bg-white px-3 py-2.5 text-xs font-medium text-[#111820]"
            >
              <FileText className="h-3.5 w-3.5 text-[#183B56]" />
              <span>Preview CV</span>
            </button>
            <a
              href={PROFILE.resumePdfUrl}
              download={PROFILE.resumeFileName}
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#183B56] px-3 py-2.5 text-xs font-medium text-white"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
