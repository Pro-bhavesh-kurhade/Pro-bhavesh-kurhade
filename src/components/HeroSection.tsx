import React, { useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  FileText,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { KEY_PROOF_METRICS, PROFILE } from '../data/profileData';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [avatarFailed, setAvatarFailed] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <section id="top" className="border-b border-[#E3E6E1] bg-[#FDFDFB] pt-10 pb-14 lg:pt-14 lg:pb-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left 7 Columns — Editorial Candidate Statement */}
          <div className="lg:col-span-7">
            <div className="inline-flex flex-wrap items-center gap-2 text-xs font-medium tracking-wide text-[#183B56]">
              <span className="font-mono-tech uppercase">CA FINALIST (ICAI)</span>
              <span className="text-[#CFD5CE]">·</span>
              <span className="inline-flex items-center gap-1 text-[#434E5B]">
                <MapPin className="h-3.5 w-3.5 text-[#183B56]" strokeWidth={1.8} />
                {PROFILE.location}
              </span>
            </div>

            <div className="mt-4 flex items-center gap-4">
              {!avatarFailed ? (
                <img
                  src={PROFILE.avatarUrl}
                  alt={PROFILE.name}
                  onError={() => setAvatarFailed(true)}
                  className="h-16 w-16 shrink-0 rounded-xl border border-[#CFD5CE] object-cover shadow-xs sm:h-[72px] sm:w-[72px]"
                />
              ) : (
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#183B56] font-display text-xl font-semibold text-white sm:h-[72px] sm:w-[72px]">
                  {PROFILE.monogram}
                </div>
              )}
              <div>
                <h1 className="font-display text-3xl font-semibold tracking-[-0.03em] text-[#111820] sm:text-5xl lg:text-[3.1rem] lg:leading-[1.08]">
                  Bhavesh Kurhade
                </h1>
              </div>
            </div>
            <p className="mt-3 font-display text-xl font-medium tracking-[-0.02em] text-[#183B56] sm:text-2xl">
              {PROFILE.headline}
            </p>

            <p className="mt-5 max-w-2xl text-[15.5px] leading-[1.68] text-[#434E5B] sm:text-base">
              {PROFILE.heroSummary}
            </p>

            {/* Primary & Secondary Interviewer CTAs */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#183B56] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#122D42]"
              >
                <Mail className="h-4 w-4" strokeWidth={1.8} />
                <span>Connect for Opportunities</span>
              </a>

              <button
                type="button"
                onClick={onOpenResumeModal}
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-[#CFD5CE] bg-white px-4.5 py-2.5 text-sm font-medium text-[#111820] transition-colors hover:border-[#183B56] hover:bg-[#F4F5F2]"
              >
                <FileText className="h-4 w-4 text-[#183B56]" strokeWidth={1.8} />
                <span>Inspect 2-Page Resume</span>
              </button>
            </div>

            {/* Direct Contact Strip — Instant Copy & Verified Links */}
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2.5 border-t border-[#E3E6E1] pt-5 text-[13px] text-[#434E5B]">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex cursor-pointer items-center gap-1.5 font-medium text-[#111820] transition-colors hover:text-[#183B56]"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-[#183B56]" strokeWidth={2.2} />
                    <span className="text-[#183B56]">Copied email</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-[#64707D]" strokeWidth={1.8} />
                    <span>{PROFILE.email}</span>
                  </>
                )}
              </button>

              <span className="hidden text-[#CFD5CE] sm:inline">|</span>

              <a
                href={PROFILE.phoneHref}
                className="tabular-nums inline-flex items-center gap-1.5 transition-colors hover:text-[#111820]"
              >
                <Phone className="h-3.5 w-3.5 text-[#64707D]" strokeWidth={1.8} />
                <span>{PROFILE.phoneDisplay}</span>
              </a>

              <span className="hidden text-[#CFD5CE] sm:inline">|</span>

              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-medium text-[#183B56] transition-opacity hover:opacity-80"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.9} />
              </a>

              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-medium text-[#183B56] transition-opacity hover:opacity-80"
              >
                <span>GitHub</span>
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.9} />
              </a>
            </div>
          </div>

          {/* Right 5 Columns — Structured Interviewer Dossier Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-[#E3E6E1] bg-white p-6 shadow-[0_1px_3px_rgba(17,24,32,0.03)]">
              <div className="flex items-center justify-between border-b border-[#E3E6E1] pb-3.5">
                <span className="font-mono-tech text-[11px] font-medium tracking-wider text-[#183B56] uppercase">
                  Candidate Brief
                </span>
                <span className="tabular-nums text-[11.5px] font-medium text-[#64707D]">
                  Semi-Qualified CA
                </span>
              </div>

              <dl className="divide-y divide-[#E3E6E1] text-[13.5px]">
                <div className="py-3">
                  <dt className="text-[11.5px] font-medium text-[#64707D]">Advisory Experience</dt>
                  <dd className="mt-0.5 font-medium text-[#111820]">
                    yourCFO · Consulting &amp; CFO Advisory
                  </dd>
                  <dd className="tabular-nums text-[12.5px] text-[#434E5B]">
                    Aug 2023 – Aug 2025 · Thane / Mumbai
                  </dd>
                </div>

                <div className="py-3">
                  <dt className="text-[11.5px] font-medium text-[#64707D]">Litigation &amp; Tax Exposure</dt>
                  <dd className="mt-0.5 font-medium text-[#111820]">
                    GST/IT Notices &amp; High Court Art. 226 Writ
                  </dd>
                  <dd className="text-[12.5px] text-[#434E5B]">
                    Mumbai/Thane officer liaison + Kolkata writ brief support
                  </dd>
                </div>

                <div className="py-3">
                  <dt className="text-[11.5px] font-medium text-[#64707D]">ICAI &amp; University Credentials</dt>
                  <dd className="mt-0.5 font-medium text-[#111820]">
                    CA Final (Target Nov 2026) · B.Com (7.9 CGPA)
                  </dd>
                  <dd className="text-[12.5px] text-[#434E5B]">
                    CA Inter 1st Attempt — Exemptions in Accounts, Costing, Adv. Accounts
                  </dd>
                </div>

                <div className="pt-3">
                  <dt className="text-[11.5px] font-medium text-[#64707D]">Target Focus Areas</dt>
                  <dd className="mt-2 flex flex-wrap gap-1.5">
                    {[
                      'Corporate Finance & FP&A',
                      'Ind AS Reporting',
                      'Direct & Indirect Tax',
                      'Finance Automation',
                    ].map((focus) => (
                      <span
                        key={focus}
                        className="rounded-md bg-[#EDF3F8] px-2.5 py-1 text-[11.5px] font-medium text-[#183B56]"
                      >
                        {focus}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Bottom Hairline Proof Bar — Fits cleanly inside initial 1440×900 viewport */}
        <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[#E3E6E1] pt-7 lg:grid-cols-4 lg:gap-8">
          {KEY_PROOF_METRICS.map((item) => (
            <div key={item.label} className="flex flex-col">
              <span className="tabular-nums font-display text-2xl font-semibold tracking-tight text-[#111820] sm:text-[1.65rem]">
                {item.value}
              </span>
              <span className="mt-1 text-[13px] font-medium text-[#111820]">{item.label}</span>
              <span className="mt-0.5 text-[12px] text-[#64707D]">{item.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
