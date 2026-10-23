import React from 'react';
import { Award } from 'lucide-react';
import { COMPETENCY_MATRIX, EDUCATION_TIMELINE } from '../data/profileData';

export const CredentialsAndSkills: React.FC = () => {
  return (
    <>
      {/* Band 4 — ICAI & Academic Progression Ledger */}
      <section id="credentials" className="border-b border-[#E3E6E1] bg-[#F4F5F2] py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="font-mono-tech text-xs font-medium tracking-wider text-[#183B56] uppercase">
              Academic &amp; Professional Progression
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.025em] text-[#111820] sm:text-4xl">
              ICAI Qualification Path &amp; University Credentials
            </h2>
            <p className="mt-3 text-[15.5px] leading-relaxed text-[#434E5B]">
              Consistent first-attempt progression across CA Foundation and CA Intermediate (with 3
              subject exemptions), alongside a University of Mumbai Commerce degree and ICAI IT/MCS
              certifications.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-xl border border-[#E3E6E1] bg-white">
            <div className="divide-y divide-[#E3E6E1]">
              {EDUCATION_TIMELINE.map((item) => (
                <div
                  key={item.qualification}
                  className="grid grid-cols-1 gap-3 p-6 sm:px-7 lg:grid-cols-12 lg:items-center lg:gap-6"
                >
                  <div className="lg:col-span-3">
                    <span className="tabular-nums font-mono-tech text-xs font-medium text-[#183B56]">
                      {item.period}
                    </span>
                    <h3 className="mt-1 font-display text-base font-semibold text-[#111820]">
                      {item.qualification}
                    </h3>
                  </div>

                  <div className="lg:col-span-6">
                    <p className="text-[13.5px] font-medium text-[#111820]">{item.institution}</p>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-[#434E5B]">
                      {item.details}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 lg:col-span-3 lg:justify-end">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-[#EDF3F8] px-3 py-1 text-xs font-semibold text-[#183B56]">
                      <Award className="h-3.5 w-3.5 shrink-0" strokeWidth={1.9} />
                      <span>{item.statusBadge}</span>
                    </span>
                    {item.highlightMetric && (
                      <span className="tabular-nums text-xs font-medium text-[#434E5B]">
                        {item.highlightMetric}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Band 5 — Core Competency Specification Matrix */}
      <section id="capabilities" className="bg-[#FDFDFB] py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="font-mono-tech text-xs font-medium tracking-wider text-[#183B56] uppercase">
              Technical &amp; Domain Depth
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.025em] text-[#111820] sm:text-4xl">
              Core Competencies &amp; Technical Stack
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 divide-y divide-[#E3E6E1] rounded-xl border border-[#E3E6E1] bg-white lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {COMPETENCY_MATRIX.map((column) => (
              <div key={column.domain} className="p-6 sm:p-8">
                <span className="font-mono-tech text-[11px] font-medium tracking-wider text-[#183B56] uppercase">
                  {column.code}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-[#111820]">
                  {column.domain}
                </h3>

                <ul className="mt-5 space-y-3 border-t border-[#E3E6E1] pt-5">
                  {column.items.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-start gap-2.5 text-[14px] leading-snug text-[#434E5B]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#183B56]" />
                      <span className="text-[#111820]">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
