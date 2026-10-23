import React, { useEffect, useState } from 'react';
import { Download, ExternalLink, X, ZoomIn, ZoomOut } from 'lucide-react';
import { PROFILE } from '../data/profileData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-[#111820]/80 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label="Bhavesh Kurhade Resume Preview"
    >
      {/* Top Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#273340] bg-[#111820] px-4 py-3 text-white sm:px-6">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded bg-[#183B56] font-display text-xs font-semibold">
            BK
          </span>
          <div>
            <p className="font-display text-sm font-semibold">{PROFILE.resumeFileName}</p>
            <p className="text-[11px] text-[#9AA8B6]">2 Pages · Official Candidate Resume</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setZoomed((prev) => !prev)}
            className="hidden cursor-pointer items-center gap-1.5 rounded-lg border border-[#32404E] px-3 py-1.5 text-xs font-medium text-[#D5DCE4] transition-colors hover:border-[#9BBCD6] hover:text-white sm:inline-flex"
          >
            {zoomed ? <ZoomOut className="h-3.5 w-3.5" /> : <ZoomIn className="h-3.5 w-3.5" />}
            <span>{zoomed ? 'Fit Width' : 'Zoom 125%'}</span>
          </button>

          <a
            href={PROFILE.resumePdfUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 rounded-lg border border-[#32404E] px-3 py-1.5 text-xs font-medium text-[#D5DCE4] transition-colors hover:border-[#9BBCD6] hover:text-white md:inline-flex"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            <span>Open Raw PDF</span>
          </a>

          <a
            href={PROFILE.resumePdfUrl}
            download={PROFILE.resumeFileName}
            className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-1.5 text-xs font-semibold text-[#111820] transition-colors hover:bg-[#EDF3F8]"
          >
            <Download className="h-3.5 w-3.5 text-[#183B56]" />
            <span>Download PDF</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="ml-1 inline-flex cursor-pointer items-center justify-center rounded-lg border border-[#32404E] p-1.5 text-[#D5DCE4] transition-colors hover:bg-[#1E2936] hover:text-white"
            aria-label="Close resume preview"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Scrollable High-DPI 2-Page Document Canvas */}
      <div
        className="flex-1 overflow-y-auto px-4 py-6 sm:px-8"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div
          className={`mx-auto flex flex-col gap-6 transition-all duration-200 ${
            zoomed ? 'max-w-5xl' : 'max-w-3xl'
          }`}
        >
          <div className="overflow-hidden rounded-lg bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#E3E6E1] bg-[#F4F5F2] px-4 py-1.5 text-[11px] font-medium text-[#64707D]">
              <span>Page 1 of 2 — Summary, Technical Stack &amp; yourCFO Advisory Experience</span>
              <span className="tabular-nums">Bhavesh Kurhade</span>
            </div>
            <img
              src="./resume/page-1.png"
              alt="Bhavesh Kurhade Resume Page 1"
              className="w-full h-auto block select-none"
            />
          </div>

          <div className="overflow-hidden rounded-lg bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#E3E6E1] bg-[#F4F5F2] px-4 py-1.5 text-[11px] font-medium text-[#64707D]">
              <span>Page 2 of 2 — Audit, FDD, Automation, ICAI Progression &amp; Simulations</span>
              <span className="tabular-nums">Bhavesh Kurhade</span>
            </div>
            <img
              src="./resume/page-2.png"
              alt="Bhavesh Kurhade Resume Page 2"
              className="w-full h-auto block select-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
