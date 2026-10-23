import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, Layers, List } from 'lucide-react';
import {
  EXPERIENCE_HEADER,
  RoleLens,
  WORKSTREAMS,
  WorkstreamItem,
} from '../data/profileData';

const LENS_OPTIONS: { id: RoleLens; label: string }[] = [
  { id: 'all', label: 'All Workstreams (8)' },
  { id: 'fpa', label: 'CFO Advisory & FP&A' },
  { id: 'tax', label: 'Taxation & Litigation' },
  { id: 'automation', label: 'Controls & Automation' },
];

export const ExperienceSection: React.FC = () => {
  const [activeLens, setActiveLens] = useState<RoleLens>('all');
  const [selectedId, setSelectedId] = useState<string>(WORKSTREAMS[0].id);
  const [viewMode, setViewMode] = useState<'split' | 'all'>('split');

  const filteredWorkstreams =
    activeLens === 'all'
      ? WORKSTREAMS
      : WORKSTREAMS.filter((item) => item.lenses.includes(activeLens));

  const activeWorkstream: WorkstreamItem =
    filteredWorkstreams.find((w) => w.id === selectedId) || filteredWorkstreams[0];

  const handleSelectLens = (lens: RoleLens) => {
    setActiveLens(lens);
    const nextList =
      lens === 'all' ? WORKSTREAMS : WORKSTREAMS.filter((item) => item.lenses.includes(lens));
    if (nextList.length > 0 && !nextList.some((w) => w.id === selectedId)) {
      setSelectedId(nextList[0].id);
    }
  };

  return (
    <section id="experience" className="border-b border-[#E3E6E1] bg-[#F4F5F2] py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section Heading + Tenure Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#DCE0DA] pb-8 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono-tech text-xs font-medium tracking-wider text-[#183B56] uppercase">
              Professional Experience
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.025em] text-[#111820] sm:text-4xl">
              {EXPERIENCE_HEADER.company}{' '}
              <span className="font-normal text-[#64707D]">
                — {EXPERIENCE_HEADER.companySubtitle}
              </span>
            </h2>
            <p className="mt-2 text-[15px] font-medium text-[#434E5B]">
              {EXPERIENCE_HEADER.role}
            </p>
          </div>

          <div className="flex flex-col lg:items-end">
            <span className="tabular-nums font-display text-sm font-semibold text-[#111820]">
              {EXPERIENCE_HEADER.period}
            </span>
            <span className="text-[13px] text-[#64707D]">{EXPERIENCE_HEADER.location}</span>
          </div>
        </div>

        {/* Interviewer Role Lens Filter Bar + Layout Toggle */}
        <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter experience by domain">
            {LENS_OPTIONS.map((option) => {
              const isSelected = activeLens === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleSelectLens(option.id)}
                  className={`cursor-pointer rounded-lg px-3.5 py-2 text-[13px] font-medium transition-colors ${
                    isSelected
                      ? 'bg-[#183B56] text-white'
                      : 'border border-[#CFD5CE] bg-white text-[#434E5B] hover:border-[#183B56] hover:text-[#111820]'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>

          <div className="hidden items-center gap-1 rounded-lg border border-[#CFD5CE] bg-white p-1 md:flex">
            <button
              type="button"
              onClick={() => setViewMode('split')}
              className={`inline-flex cursor-pointer items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                viewMode === 'split'
                  ? 'bg-[#EDF3F8] text-[#183B56]'
                  : 'text-[#64707D] hover:text-[#111820]'
              }`}
            >
              <Layers className="h-3.5 w-3.5" />
              <span>Focused View</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('all')}
              className={`inline-flex cursor-pointer items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                viewMode === 'all'
                  ? 'bg-[#EDF3F8] text-[#183B56]'
                  : 'text-[#64707D] hover:text-[#111820]'
              }`}
            >
              <List className="h-3.5 w-3.5" />
              <span>Full Dossier ({filteredWorkstreams.length})</span>
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Native Accordion View (< 1024px) */}
        <div className="mt-7 divide-y divide-[#E3E6E1] overflow-hidden rounded-xl border border-[#E3E6E1] bg-white lg:hidden">
          {filteredWorkstreams.map((item) => {
            const active = item.id === activeWorkstream.id;
            return (
              <div key={item.id} className="bg-white">
                <button
                  type="button"
                  onClick={() => setSelectedId(item.id)}
                  aria-expanded={active}
                  className={`flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-4 text-left transition-colors ${
                    active ? 'bg-[#EDF3F8]/75' : 'bg-white'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`font-mono-tech mt-0.5 text-xs font-medium ${
                        active ? 'text-[#183B56]' : 'text-[#64707D]'
                      }`}
                    >
                      {item.index}
                    </span>
                    <div>
                      <p
                        className={`text-[14.5px] font-medium leading-snug ${
                          active ? 'text-[#183B56]' : 'text-[#111820]'
                        }`}
                      >
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-xs text-[#64707D]">{item.shortCategory}</p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                      active ? 'rotate-90 text-[#183B56]' : 'text-[#9AA3AE]'
                    }`}
                  />
                </button>

                {active && (
                  <div className="border-t border-[#E3E6E1] bg-[#FDFDFB] px-5 py-5">
                    <p className="text-[14px] leading-relaxed text-[#434E5B]">{item.summary}</p>
                    <div className="mt-4 space-y-2.5">
                      {item.highlights.map((bullet, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-[#111820]"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#183B56]"
                            strokeWidth={1.85}
                          />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 rounded-lg bg-[#F4F5F2] px-3.5 py-2.5 text-xs">
                      <span className="font-semibold text-[#183B56]">Impact: </span>
                      <span className="text-[#111820]">{item.keyOutcome}</span>
                    </div>
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono-tech rounded border border-[#E3E6E1] bg-white px-2 py-0.5 text-[11px] text-[#434E5B]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop Interactive Split View (>= 1024px) */}
        {viewMode === 'split' ? (
          <div className="mt-8 hidden grid-cols-1 gap-6 lg:grid lg:grid-cols-12">
            {/* Left Selector Column */}
            <div className="flex flex-col divide-y divide-[#E3E6E1] overflow-hidden rounded-xl border border-[#E3E6E1] bg-white lg:col-span-5">
              {filteredWorkstreams.map((item) => {
                const active = item.id === activeWorkstream.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedId(item.id)}
                    className={`flex w-full cursor-pointer items-center justify-between gap-3 px-4.5 py-3.5 text-left transition-colors ${
                      active
                        ? 'bg-[#EDF3F8]/75'
                        : 'bg-white hover:bg-[#F9FAF8]'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`font-mono-tech mt-0.5 text-xs font-medium ${
                          active ? 'text-[#183B56]' : 'text-[#64707D]'
                        }`}
                      >
                        {item.index}
                      </span>
                      <div>
                        <p
                          className={`text-[14px] font-medium leading-snug ${
                            active ? 'text-[#183B56]' : 'text-[#111820]'
                          }`}
                        >
                          {item.title}
                        </p>
                        <p className="mt-0.5 text-[12px] text-[#64707D]">
                          {item.shortCategory}
                        </p>
                      </div>
                    </div>
                    <ChevronRight
                      className={`h-4 w-4 shrink-0 transition-transform ${
                        active ? 'translate-x-0.5 text-[#183B56]' : 'text-[#9AA3AE]'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Active Mandate Dossier Panel */}
            <div className="flex flex-col justify-between rounded-xl border border-[#E3E6E1] bg-white p-6 sm:p-8 lg:col-span-7">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E3E6E1] pb-4">
                  <span className="font-mono-tech text-xs font-medium text-[#183B56]">
                    MANDATE {activeWorkstream.index} · {activeWorkstream.shortCategory.toUpperCase()}
                  </span>
                  <span className="text-xs font-medium text-[#64707D]">
                    yourCFO · Aug 2023 – Aug 2025
                  </span>
                </div>

                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-[#111820]">
                  {activeWorkstream.title}
                </h3>

                <p className="mt-3 text-[15px] leading-relaxed text-[#434E5B]">
                  {activeWorkstream.summary}
                </p>

                <div className="mt-6 space-y-3">
                  <p className="text-xs font-semibold tracking-wide text-[#64707D] uppercase">
                    Execution &amp; Deliverables
                  </p>
                  {activeWorkstream.highlights.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-[#111820]">
                      <CheckCircle2
                        className="mt-1 h-4 w-4 shrink-0 text-[#183B56]"
                        strokeWidth={1.85}
                      />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-[#E3E6E1] pt-5">
                <div className="rounded-lg bg-[#F4F5F2] px-4 py-3 text-[13.5px]">
                  <span className="font-semibold text-[#183B56]">Impact Summary: </span>
                  <span className="text-[#111820]">{activeWorkstream.keyOutcome}</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {activeWorkstream.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono-tech rounded border border-[#E3E6E1] bg-[#FDFDFB] px-2.5 py-1 text-[11.5px] text-[#434E5B]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Full Reading View — All Workstreams Side by Side (>= 1024px) */
          <div className="mt-8 hidden gap-5 lg:grid lg:grid-cols-2">
            {filteredWorkstreams.map((item) => (
              <article
                key={item.id}
                className="flex flex-col justify-between rounded-xl border border-[#E3E6E1] bg-white p-6"
              >
                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono-tech font-medium text-[#183B56]">
                      {item.index} · {item.shortCategory}
                    </span>
                  </div>
                  <h3 className="mt-2.5 font-display text-lg font-semibold text-[#111820]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#434E5B]">
                    {item.summary}
                  </p>
                  <ul className="mt-4 space-y-2 text-[13.5px] text-[#111820]">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#183B56]" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-[#E3E6E1] pt-3.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono-tech rounded bg-[#F4F5F2] px-2 py-0.5 text-[11px] text-[#434E5B]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
