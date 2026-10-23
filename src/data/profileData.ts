export type RoleLens = 'all' | 'fpa' | 'tax' | 'automation';

export interface WorkstreamItem {
  id: string;
  index: string;
  title: string;
  shortCategory: string;
  lenses: Exclude<RoleLens, 'all'>[];
  summary: string;
  highlights: string[];
  tags: string[];
  keyOutcome: string;
}

export interface EducationItem {
  qualification: string;
  institution: string;
  period: string;
  statusBadge: string;
  details: string;
  highlightMetric?: string;
}

export interface ProjectSimulationItem {
  id: string;
  type: 'Automation Project' | 'Global Simulation' | 'ICAI Credential';
  title: string;
  organization: string;
  period: string;
  description: string;
  stack: string[];
  linkUrl?: string;
  linkLabel?: string;
}

export const PROFILE = {
  name: 'Bhavesh Kurhade',
  monogram: 'BK',
  avatarUrl: 'https://avatars.githubusercontent.com/u/228146240?v=4',
  headline: 'Corporate Finance, Taxation & Financial Automation',
  roleLine: 'CA Finalist  ·  Semi-Qualified Chartered Accountant  ·  Corporate Finance & FP&A',
  location: 'Thane (W), Mumbai MMR, India',
  email: 'bhaveshkurhade2004@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/bhavesh-kurhade-07503b282/',
  linkedinHandle: 'linkedin.com/in/bhavesh-kurhade-07503b282',
  githubUrl: 'https://github.com/Pro-bhavesh-kurhade',
  githubHandle: 'github.com/Pro-bhavesh-kurhade',
  resumePdfUrl: './Bhavesh_Kurhade_CA_Finalist_Resume.pdf',
  resumeFileName: 'Bhavesh_Kurhade_CA_Finalist_Resume.pdf',
  heroSummary:
    'CA Finalist with 2 years of hands-on experience at yourCFO across Ind AS financial reporting, statutory taxation, litigation support, and CFO advisory — pairing accounting rigor with Excel Power Query, Power BI, and Python.',
  fullSummary:
    'CA Finalist with 2 years of hands-on experience at yourCFO across taxation, litigation support, financial reporting, and CFO advisory. Practical experience in GST and Income Tax compliance, departmental notices, scrutiny matters, and tax demand-related submissions, including support for an Article 226 writ petition requiring travel to Kolkata. Experienced in Ind AS financial reporting, financial due diligence, executive MIS, and cash-flow tracking. Cleared CA Intermediate in the first attempt with exemptions in 3 subjects.',
};

export const KEY_PROOF_METRICS = [
  {
    value: '2 Years',
    label: 'CFO Advisory & Tax Tenure',
    detail: 'yourCFO · Aug 2023 – Aug 2025',
  },
  {
    value: '100%',
    label: 'On-Time Statutory Filings',
    detail: 'Zero penalty assessments across GST, TDS & ITR',
  },
  {
    value: '1st Attempt',
    label: 'CA Inter & Foundation',
    detail: '3 exemptions in CA Intermediate (May 2023)',
  },
  {
    value: 'Nov 2026',
    label: 'CA Final Target',
    detail: 'Group 1 appeared May 2026 · B.Com 7.9 CGPA',
  },
];

export const EXPERIENCE_HEADER = {
  company: 'yourCFO',
  companySubtitle: 'Financial Consulting & CFO Advisory Services',
  role: 'Article Assistant — Accounts, Taxation & Financial Advisory',
  period: 'Aug 2023 – Aug 2025',
  location: 'Thane / Mumbai, India',
};

export const WORKSTREAMS: WorkstreamItem[] = [
  {
    id: 'revenue-recon',
    index: '01',
    title: 'Multi-Tier Revenue Reconciliations & Controls',
    shortCategory: 'Controls & High-Volume Ops',
    lenses: ['fpa', 'automation'],
    summary:
      'Designed and operated multi-tier reconciliation frameworks resolving discrepancies across payment gateway settlements, user digital wallets, and internal accounting ledgers.',
    highlights: [
      'Protected revenue integrity across high transaction volumes for fast-paced online gaming and technology clients.',
      'Isolated settlement timing gaps, gateway fee variances, and wallet ledger mismatches prior to period-end close.',
    ],
    tags: ['Payment Gateways', 'Digital Wallets', 'Revenue Assurance', 'Internal Controls'],
    keyOutcome: 'Protected revenue integrity across high-volume digital transactions',
  },
  {
    id: 'mis-indas',
    index: '02',
    title: 'Executive MIS & Ind AS Financial Reporting',
    shortCategory: 'CFO Advisory & Reporting',
    lenses: ['fpa'],
    summary:
      'Structured and delivered periodic executive MIS decks, daily cash-position trackers, and deposit reconciliations directly supporting client leadership and partner CFOs.',
    highlights: [
      'Assisted partner CFOs in preparing and finalizing Ind AS financial statements and consolidation schedules.',
      'Built recurring daily cash-flow visibility trackers and deposit reconciliation packs for management review.',
    ],
    tags: ['Ind AS Financials', 'Executive MIS', 'Consolidation', 'Cash-Position Tracking'],
    keyOutcome: 'Decision-ready MIS & Ind AS statements for leadership and partner CFOs',
  },
  {
    id: 'tax-compliance',
    index: '03',
    title: 'Direct & Indirect Statutory Tax Compliance',
    shortCategory: 'GST, TDS & Income Tax',
    lenses: ['tax'],
    summary:
      'Managed end-to-end monthly, quarterly, and annual statutory compliance across GST, TDS, and Corporate & Individual Income Tax returns.',
    highlights: [
      'Filed GSTR-1, GSTR-3B, annual GST returns (GSTR-9/9C), TDS returns (24Q, 26Q, 27Q), and Corporate/Individual ITRs.',
      'Maintained a 100% on-time filing track record with zero penalty assessments and rigorous Input Tax Credit (ITC) verification.',
    ],
    tags: ['GSTR-1 / 3B / 9 / 9C', 'TDS 24Q · 26Q · 27Q', 'Corporate ITR', 'ITC Verification'],
    keyOutcome: '100% on-time statutory filing record with zero penalty assessments',
  },
  {
    id: 'litigation-writ',
    index: '04',
    title: 'Tax Notice Scrutiny & High Court Writ Support (Art. 226)',
    shortCategory: 'Litigation & Representation',
    lenses: ['tax'],
    summary:
      'Handled Income Tax and GST departmental notices end-to-end and supported senior advocates on high-stakes constitutional writ litigation.',
    highlights: [
      'Reviewed departmental scrutiny notices, compiled evidentiary reconciliations, drafted online submissions, and coordinated with tax officers across Mumbai and Thane.',
      'Supported senior advocates with case briefs, documentation, and data reconciliations for an Article 226 writ petition — including travel to Kolkata for petition-related coordination.',
    ],
    tags: ['Article 226 Writ', 'Scrutiny Notices', 'Tax Officer Liaison', 'Kolkata Representation'],
    keyOutcome: 'On-ground legal & data brief support for Article 226 writ petition in Kolkata',
  },
  {
    id: 'automation-pipelines',
    index: '05',
    title: 'Reconciliation Automation & Tally Data Pipelines',
    shortCategory: 'Python & Power Query',
    lenses: ['automation', 'fpa'],
    summary:
      'Engineered automated data ingestion and reconciliation workflows combining Excel Power Query and Python scripts to accelerate month-end book closures.',
    highlights: [
      'Built Excel Power Query workflows consolidating multi-folder reports and interactive Excel tracking dashboards for reconciliation review.',
      'Developed Python scripts to automate web report downloads and transform Tally-exported ledgers directly into structured financial reporting inputs.',
    ],
    tags: ['Python', 'Excel Power Query', 'Tally Prime Automation', 'Month-End Close'],
    keyOutcome: 'Reduced manual data preparation effort during month-end book closures',
  },
  {
    id: 'fdd-advisory',
    index: '06',
    title: 'Transaction Advisory & Financial Due Diligence',
    shortCategory: 'Deal & Balance Sheet Advisory',
    lenses: ['fpa'],
    summary:
      'Supported corporate transaction advisory and financial due diligence engagements with granular balance sheet and foreign-exchange substantiation.',
    highlights: [
      'Prepared unrealised foreign exchange (FX) gain/loss schedules across reporting periods.',
      'Compiled balance sheet substantiation schedules and underlying ledger schedules for corporate due diligence.',
    ],
    tags: ['Financial Due Diligence', 'Unrealised FX Schedules', 'Balance Sheet Substantiation'],
    keyOutcome: 'Substantiated FX exposure & balance sheet schedules for corporate FDD',
  },
  {
    id: 'audit-finalisation',
    index: '07',
    title: 'External Audit Coordination & Book Finalisation',
    shortCategory: 'Statutory & Tax Audit',
    lenses: ['fpa', 'tax'],
    summary:
      'Led end-to-end coordination between client finance teams and external statutory auditors through complete query closure and financial statement sign-off.',
    highlights: [
      'Investigated ledger and expense variances, prepared audit schedules, and resolved auditor queries systematically.',
      'Managed audit timelines and documentation readiness from trial balance scrutiny to finalisation.',
    ],
    tags: ['Statutory Audit', 'Form 3CD', 'GL Variance Scrutiny', 'Query Closure'],
    keyOutcome: 'Smooth end-to-end external audit query resolution through finalisation',
  },
  {
    id: 'portfolio-ownership',
    index: '08',
    title: 'Client Portfolio Accounting & Advisory Ownership',
    shortCategory: 'Online Gaming & Tech Sectors',
    lenses: ['fpa', 'tax'],
    summary:
      'Managed day-to-day accounting, statutory compliance calendars, and management reporting across a portfolio of fast-scaling clients.',
    highlights: [
      'Served high-profile engagements in the online gaming and technology sectors with high transaction velocity.',
      'Bridged bookkeeping operations, statutory filings, and CFO-level analytical reporting seamlessly.',
    ],
    tags: ['Online Gaming', 'Technology Sector', 'End-to-End Books', 'Client Advisory'],
    keyOutcome: 'Full-cycle accounting, tax & MIS ownership across tech and gaming clients',
  },
];

export const PROJECTS_AND_SIMULATIONS: ProjectSimulationItem[] = [
  {
    id: 'python-fin-auto',
    type: 'Automation Project',
    title: 'Python-Based Financial Data & Ledger Automation',
    organization: 'Applied Finance Engineering',
    period: '2024 – Present',
    description:
      'Developed Python utilities using pandas and openpyxl to automate general ledger scrutiny, batch-process multi-entity Tally and gateway exports, and standardize month-end reconciliation schedules.',
    stack: ['Python', 'pandas', 'openpyxl', 'Tally Exports', 'Batch Ledger Scrutiny'],
  },
  {
    id: 'invoice-desk',
    type: 'Automation Project',
    title: 'InvoiceDesk — Local Invoice Review & Tally Pre-Posting App',
    organization: 'Open-Source Prototype',
    period: 'GitHub Repository',
    description:
      'Built a local browser-based invoice review application with Flask and SQLite allowing finance teams to inspect PDF/image invoices alongside structured fields (GSTIN, invoice values, proposed Tally ledger) with a local audit log.',
    stack: ['Python', 'Flask', 'SQLite', 'HTML/CSS', 'Tally Workflow'],
    linkUrl: 'https://github.com/Pro-bhavesh-kurhade/invoice-automation',
    linkLabel: 'View Repository on GitHub',
  },
  {
    id: 'pwc-powerbi',
    type: 'Global Simulation',
    title: 'Power BI Job Simulation',
    organization: 'PwC Switzerland',
    period: 'June 2024',
    description:
      'Designed interactive business intelligence dashboards, structured DAX KPI models, and executive operational drill-downs translating raw operational datasets into clear management visuals.',
    stack: ['Power BI', 'DAX', 'KPI Modeling', 'Operational Drill-Downs'],
  },
  {
    id: 'gs-excel',
    type: 'Global Simulation',
    title: 'Advanced Excel Job Simulation',
    organization: 'Goldman Sachs',
    period: 'June 2024',
    description:
      'Constructed dynamic financial models, multi-case scenario sensitivity analyses, and structured automated financial datasets built for institutional clarity and auditability.',
    stack: ['Advanced Excel', 'Dynamic Financial Modeling', 'Scenario Analysis'],
  },
];

export const EDUCATION_TIMELINE: EducationItem[] = [
  {
    qualification: 'CA Final',
    institution: 'Institute of Chartered Accountants of India (ICAI)',
    period: 'Target Nov 2026',
    statusBadge: 'CA Finalist',
    details: 'Group 1 appeared May 2026 covering Financial Reporting, Advanced Financial Management (AFM), and Audit & Ethics.',
    highlightMetric: 'Group 1 Appeared May 2026',
  },
  {
    qualification: 'ICAI Advanced IT & MCS Training',
    institution: 'Institute of Chartered Accountants of India (ICAI)',
    period: 'Completed',
    statusBadge: '180 Hours Certified',
    details: '90 hours Advanced IT training (audit tools, practical data handling & IT systems) + 90 hours Management & Communication Skills (presentations, leadership & ethics).',
    highlightMetric: '90h IT + 90h MCS',
  },
  {
    qualification: 'Bachelor of Commerce (B.Com)',
    institution: 'Ramanand Arya D.A.V. College, University of Mumbai',
    period: '2021 – 2024',
    statusBadge: 'Graduated',
    details: 'Completed undergraduate commerce degree alongside CA Intermediate and articleship training.',
    highlightMetric: 'CGPA: 7.9 / 10 (Grade B+)',
  },
  {
    qualification: 'CA Intermediate',
    institution: 'Institute of Chartered Accountants of India (ICAI)',
    period: 'May 2023',
    statusBadge: 'Cleared 1st Attempt',
    details: 'Secured 3 subject exemptions across core quantitative accounting & costing papers: Accounts, Costing, and Advanced Accounts.',
    highlightMetric: '3 Subject Exemptions',
  },
  {
    qualification: 'CA Foundation',
    institution: 'Institute of Chartered Accountants of India (ICAI)',
    period: 'June 2022',
    statusBadge: 'Cleared 1st Attempt',
    details: 'Scored 60+ marks in 2 core subjects on the first attempt.',
    highlightMetric: 'Score: 231 / 400',
  },
];

export const COMPETENCY_MATRIX = [
  {
    domain: 'Financial Reporting & Corporate Advisory',
    code: 'PILLAR 01',
    items: [
      'Ind AS Financial Statements & Consolidation Schedules',
      'Financial Due Diligence & Balance Sheet Substantiation',
      'Balance Sheet Finalization & Trial Balance Review',
      'General Ledger (GL) Scrutiny & Variance Analysis',
      'Executive MIS Decks & Daily Cash-Position Trackers',
      'Unrealised Foreign Exchange (FX) Gain / Loss Schedules',
    ],
  },
  {
    domain: 'Direct & Indirect Taxation',
    code: 'PILLAR 02',
    items: [
      'Corporate & Individual Income Tax Returns (ITR)',
      'Tax Audits & Form 3CD Preparation',
      'GST Compliance: GSTR-1, GSTR-3B, ITC Reconciliations & GSTR-9/9C',
      'Section 197 Lower Deduction Certificates & TDS/TCS (24Q, 26Q, 27Q)',
      'Departmental Notice Scrutiny, Replies & Tax Officer Liaison',
      'High Court Writ Petition (Article 226) Brief & Data Support',
    ],
  },
  {
    domain: 'Technology & Financial Controls',
    code: 'PILLAR 03',
    items: [
      'Advanced Excel (Power Query Multi-Folder Pipelines, Macros)',
      'Power BI (DAX Measures, Executive KPI Dashboards)',
      'Python Financial Scripting (pandas, openpyxl, Flask)',
      'Multi-Tier Payment Gateway & Digital Wallet Reconciliations',
      'Tally Prime / ERP 9 & Automated Export Transformation',
      'Month-End Close Controls & Process Automation',
    ],
  },
];
