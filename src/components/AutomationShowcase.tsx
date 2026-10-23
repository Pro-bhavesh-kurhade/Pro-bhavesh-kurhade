import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Database, FileSpreadsheet, GitCompare } from 'lucide-react';
import { PROJECTS_AND_SIMULATIONS } from '../data/profileData';

const ILLUSTRATIVE_RECON_BATCHES = [
  {
    batchId: 'PG-BATCH-09A',
    source: 'Payment Gateway Settlement CSV',
    walletCredits: '₹ 48,25,400',
    bankSettled: '₹ 47,96,930',
    varianceNote: 'MDR & GST on gateway fee auto-mapped (₹ 28,470)',
    status: 'Matched',
  },
  {
    batchId: 'PG-BATCH-09B',
    source: 'Digital Wallet Credits vs. Escrow',
    walletCredits: '₹ 19,12,000',
    bankSettled: '₹ 18,84,500',
    varianceNote: 'T+1 cut-off settlement carried to clearing schedule (₹ 27,500)',
    status: 'Timing Flagged',
  },
  {
    batchId: 'TALLY-GL-09C',
    source: 'Tally Export Batch → Ind AS Schedule',
    walletCredits: '₹ 67,37,400',
    bankSettled: '₹ 67,37,400',
    varianceNote: '0 unmapped entries after Python openpyxl clean-up',
    status: 'Reconciled',
  },
];

export const AutomationShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'sample-run'>('architecture');

  return (
    <section id="projects" className="border-b border-[#E3E6E1] bg-[#FDFDFB] py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl">
          <p className="font-mono-tech text-xs font-medium tracking-wider text-[#183B56] uppercase">
            Finance + Automation Intersection
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.025em] text-[#111820] sm:text-4xl">
            Applied Financial Automation &amp; Global Simulations
          </h2>
          <p className="mt-3 text-[15.5px] leading-relaxed text-[#434E5B]">
            Beyond statutory accounting and taxation, I build repeatable workflows in Python, Excel
            Power Query, and Power BI that reduce manual month-end close effort and protect revenue
            integrity across high-volume datasets.
          </p>
        </div>

        {/* Featured Workflow Blueprint — Multi-Tier Gateway & Tally Reconciliation Engine */}
        <div className="mt-10 overflow-hidden rounded-xl border border-[#E3E6E1] bg-white">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E3E6E1] bg-[#F4F5F2]/70 px-6 py-4">
            <div>
              <span className="font-mono-tech text-[11px] font-medium text-[#183B56] uppercase">
                Featured Workflow Blueprint
              </span>
              <h3 className="font-display text-base font-semibold text-[#111820] sm:text-lg">
                Multi-Tier Payment Gateway, Wallet &amp; Tally Reconciliation Pipeline
              </h3>
            </div>

            <div className="flex items-center gap-1 rounded-lg border border-[#CFD5CE] bg-white p-1">
              <button
                type="button"
                onClick={() => setActiveTab('architecture')}
                className={`cursor-pointer rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                  activeTab === 'architecture'
                    ? 'bg-[#183B56] text-white'
                    : 'text-[#434E5B] hover:text-[#111820]'
                }`}
              >
                Pipeline Architecture
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('sample-run')}
                className={`cursor-pointer rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                  activeTab === 'sample-run'
                    ? 'bg-[#183B56] text-white'
                    : 'text-[#434E5B] hover:text-[#111820]'
                }`}
              >
                Illustrative Control Output
              </button>
            </div>
          </div>

          {activeTab === 'architecture' ? (
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-11">
                {/* Step 1 */}
                <div className="rounded-lg border border-[#E3E6E1] bg-[#FDFDFB] p-5 lg:col-span-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#183B56]">
                    <Database className="h-4 w-4" strokeWidth={1.85} />
                    <span>01 · Multi-Source Ingestion</span>
                  </div>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-[#434E5B]">
                    Automated Python downloaders &amp; Power Query folder connectors ingest raw
                    payment gateway settlements, user digital wallet logs, and Tally ERP exports.
                  </p>
                  <p className="font-mono-tech mt-3 text-[11px] text-[#64707D]">
                    Python · Power Query
                  </p>
                </div>

                <div className="hidden items-center justify-center lg:flex lg:col-span-1">
                  <ArrowRight className="h-5 w-5 text-[#9AA3AE]" />
                </div>

                {/* Step 2 */}
                <div className="rounded-lg border border-[#E3E6E1] bg-[#FDFDFB] p-5 lg:col-span-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#183B56]">
                    <GitCompare className="h-4 w-4" strokeWidth={1.85} />
                    <span>02 · 3-Way Matching &amp; Rules</span>
                  </div>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-[#434E5B]">
                    Standardizes transaction IDs, separates gateway MDR/GST deductions from genuine
                    shortfalls, and flags T+1 cut-off timing items across high volumes.
                  </p>
                  <p className="font-mono-tech mt-3 text-[11px] text-[#64707D]">
                    pandas · openpyxl
                  </p>
                </div>

                <div className="hidden items-center justify-center lg:flex lg:col-span-1">
                  <ArrowRight className="h-5 w-5 text-[#9AA3AE]" />
                </div>

                {/* Step 3 */}
                <div className="rounded-lg border border-[#E3E6E1] bg-[#FDFDFB] p-5 lg:col-span-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#183B56]">
                    <FileSpreadsheet className="h-4 w-4" strokeWidth={1.85} />
                    <span>03 · Audit-Ready Close Pack</span>
                  </div>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-[#434E5B]">
                    Outputs clean exception schedules, daily cash/deposit trackers, and Ind AS
                    revenue substantiation schedules ready for partner CFO &amp; auditor review.
                  </p>
                  <p className="font-mono-tech mt-3 text-[11px] text-[#64707D]">
                    Excel Dashboards · Ind AS
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto p-6 sm:p-8">
              <div className="mb-3 flex items-center justify-between text-xs text-[#64707D]">
                <span>
                  Illustrative structure of a 3-way reconciliation schedule (sanitized sample values)
                </span>
                <span className="font-mono-tech">pandas + openpyxl output schema</span>
              </div>
              <table className="w-full min-w-[640px] border-collapse text-left text-[13px]">
                <thead>
                  <tr className="border-b border-[#E3E6E1] text-[11.5px] font-semibold text-[#64707D] uppercase">
                    <th className="py-2.5 pr-4">Batch Ref</th>
                    <th className="py-2.5 pr-4">Control Stream</th>
                    <th className="py-2.5 pr-4 text-right">Ledger / Wallet</th>
                    <th className="py-2.5 pr-4 text-right">Bank / Settlement</th>
                    <th className="py-2.5 pr-4">Automated Variance Attribution</th>
                    <th className="py-2.5 text-right">Control Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E3E6E1]">
                  {ILLUSTRATIVE_RECON_BATCHES.map((row) => (
                    <tr key={row.batchId} className="text-[#111820]">
                      <td className="font-mono-tech py-3 pr-4 text-xs text-[#183B56]">
                        {row.batchId}
                      </td>
                      <td className="py-3 pr-4 font-medium">{row.source}</td>
                      <td className="tabular-nums py-3 pr-4 text-right">{row.walletCredits}</td>
                      <td className="tabular-nums py-3 pr-4 text-right">{row.bankSettled}</td>
                      <td className="py-3 pr-4 text-[#434E5B]">{row.varianceNote}</td>
                      <td className="py-3 text-right">
                        <span className="inline-block rounded-md bg-[#EDF3F8] px-2.5 py-0.5 text-xs font-medium text-[#183B56]">
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Structured Editorial Project & Simulation Rows */}
        <div className="mt-10 divide-y divide-[#E3E6E1] border-t border-b border-[#E3E6E1]">
          {PROJECTS_AND_SIMULATIONS.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 gap-4 py-7 transition-colors lg:grid-cols-12 lg:gap-8"
            >
              <div className="lg:col-span-4">
                <span className="font-mono-tech text-[11px] font-medium text-[#183B56] uppercase">
                  {item.type}
                </span>
                <p className="mt-1 font-display text-base font-semibold text-[#111820]">
                  {item.organization}
                </p>
                <p className="tabular-nums text-[13px] text-[#64707D]">{item.period}</p>
              </div>

              <div className="lg:col-span-8">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-[#111820]">
                    {item.title}
                  </h3>
                  {item.linkUrl && (
                    <a
                      href={item.linkUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[13px] font-medium text-[#183B56] hover:underline"
                    >
                      <span>{item.linkLabel || 'View Source'}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>

                <p className="mt-2 text-[14.5px] leading-relaxed text-[#434E5B]">
                  {item.description}
                </p>

                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono-tech rounded border border-[#E3E6E1] bg-[#F4F5F2] px-2.5 py-0.5 text-[11.5px] text-[#434E5B]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
