import React, { useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  Download,
  FileText,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { PROFILE } from '../data/profileData';

interface ContactFooterProps {
  onOpenResumeModal: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onOpenResumeModal }) => {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);

  const copyValue = async (value: string, field: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2200);
    } catch {
      // Fallback ignored calmly
    }
  };

  const mailtoInterviewHref = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
    'Opportunity / Interview Conversation — Bhavesh Kurhade'
  )}`;

  return (
    <footer id="contact" className="bg-[#111820] text-[#F4F5F2]">
      <div className="mx-auto max-w-6xl px-5 py-18 sm:px-8 lg:py-22">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column — Direct Interviewer Pitch & Actions */}
          <div className="lg:col-span-7">
            <p className="font-mono-tech text-xs font-medium tracking-wider text-[#9BBCD6] uppercase">
              Direct Contact · Mumbai MMR &amp; Pan-India
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
              Let’s connect about Corporate Finance, FP&amp;A, Taxation, or Advisory roles.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#B6C0CC]">
              Whether you are hiring for Corporate Finance, FP&amp;A, Statutory Tax &amp; Advisory,
              or Finance Automation — or simply reaching out to exchange notes — feel free to
              write directly or grab a copy of my CV.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={mailtoInterviewHref}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#111820] transition-colors hover:bg-[#EDF3F8]"
              >
                <Mail className="h-4 w-4 text-[#183B56]" strokeWidth={1.9} />
                <span>Send an Email</span>
              </a>

              <a
                href={PROFILE.resumePdfUrl}
                download={PROFILE.resumeFileName}
                className="inline-flex items-center gap-2 rounded-lg border border-[#32404E] bg-[#1A2430] px-4.5 py-2.5 text-sm font-medium text-white transition-colors hover:border-[#62778D]"
              >
                <Download className="h-4 w-4 text-[#9BBCD6]" strokeWidth={1.85} />
                <span>Download Resume PDF</span>
              </a>

              <button
                type="button"
                onClick={onOpenResumeModal}
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-[#32404E] px-4 py-2.5 text-sm font-medium text-[#D5DCE4] transition-colors hover:border-[#62778D] hover:text-white"
              >
                <FileText className="h-4 w-4 text-[#9BBCD6]" strokeWidth={1.85} />
                <span>Preview CV</span>
              </button>
            </div>
          </div>

          {/* Right Column — One-Click Copy Details */}
          <div className="rounded-xl border border-[#273340] bg-[#17202B] p-6 lg:col-span-5">
            <p className="font-mono-tech text-[11px] font-medium tracking-wider text-[#9BBCD6] uppercase">
              Direct Coordinates
            </p>

            <div className="mt-4 divide-y divide-[#273340] text-sm">
              {/* Email Row */}
              <div className="flex items-center justify-between gap-3 py-3.5">
                <div className="min-w-0">
                  <p className="text-xs text-[#8D9AA8]">Email Address</p>
                  <a
                    href={mailtoInterviewHref}
                    className="mt-0.5 block truncate font-medium text-white hover:underline"
                  >
                    {PROFILE.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyValue(PROFILE.email, 'email')}
                  className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-md border border-[#32404E] px-2.5 py-1.5 text-xs font-medium text-[#D5DCE4] transition-colors hover:border-[#9BBCD6] hover:text-white"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#9BBCD6]" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone Row */}
              <div className="flex items-center justify-between gap-3 py-3.5">
                <div>
                  <p className="text-xs text-[#8D9AA8]">Phone / WhatsApp</p>
                  <a
                    href={PROFILE.phoneHref}
                    className="tabular-nums mt-0.5 inline-flex items-center gap-1.5 font-medium text-white hover:underline"
                  >
                    <Phone className="h-3.5 w-3.5 text-[#9BBCD6]" />
                    <span>{PROFILE.phoneDisplay}</span>
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyValue(PROFILE.phoneDisplay, 'phone')}
                  className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-md border border-[#32404E] px-2.5 py-1.5 text-xs font-medium text-[#D5DCE4] transition-colors hover:border-[#9BBCD6] hover:text-white"
                >
                  {copiedField === 'phone' ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#9BBCD6]" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location Row */}
              <div className="py-3.5">
                <p className="text-xs text-[#8D9AA8]">Base Location</p>
                <p className="mt-0.5 inline-flex items-center gap-1.5 font-medium text-white">
                  <MapPin className="h-3.5 w-3.5 text-[#9BBCD6]" />
                  <span>{PROFILE.location}</span>
                </p>
              </div>

              {/* Social Profiles */}
              <div className="flex flex-wrap items-center gap-5 pt-3.5">
                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#9BBCD6] hover:text-white"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#9BBCD6] hover:text-white"
                >
                  <span>GitHub (@Pro-bhavesh-kurhade)</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Colophon */}
        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-[#222D39] pt-6 text-xs text-[#8D9AA8] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Bhavesh Kurhade · CA Finalist (ICAI)</p>
          <p>Built from verified academic, advisory &amp; technical records · Thane, Mumbai MMR</p>
        </div>
      </div>
    </footer>
  );
};
