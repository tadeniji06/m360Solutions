"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const SECTIONS = [
  { id: "preamble", number: "1", title: "Preamble & Regulatory Framework" },
  { id: "scope", number: "2", title: "Scope" },
  { id: "hierarchy", number: "3", title: "Policy Hierarchy" },
  { id: "definitions", number: "4", title: "Definitions & Interpretation" },
  { id: "roles", number: "5", title: "Controller & Processor Roles in White Label" },
  { id: "principles", number: "6", title: "Data Protection Principles" },
  { id: "data-collected", number: "7", title: "Categories of Personal Data Collected" },
  { id: "lawful-bases", number: "8", title: "Lawful Bases for Processing" },
  { id: "purposes", number: "9", title: "Purposes of Processing" },
  { id: "data-sharing", number: "10", title: "Data Sharing and Disclosure" },
  { id: "international-transfers", number: "11", title: "International Data Transfers" },
  { id: "cookies", number: "12", title: "Cookies & Tracking Technologies" },
  { id: "direct-marketing", number: "13", title: "Direct Marketing & Opt-Outs" },
  { id: "childrens-data", number: "14", title: "Children's Data" },
  { id: "automated-decisions", number: "15", title: "Automated Decision Making & Profiling" },
  { id: "retention", number: "16", title: "Data Retention" },
  { id: "security", number: "17", title: "Data Security" },
  { id: "breach-notification", number: "18", title: "Data Breach Notification" },
  { id: "complaints-snag", number: "19", title: "Complaints & SNAG Process" },
  { id: "governance", number: "20", title: "Data Protection Governance" },
  { id: "contact-details", number: "21", title: "Contact Details" },
  { id: "third-party", number: "22", title: "Third Party Websites & Services" },
  { id: "changes", number: "23", title: "Changes to this Privacy Policy" },
  { id: "governing-law", number: "24", title: "Governing Law & Dispute Resolution" },
  { id: "severability", number: "25", title: "Severability & Interpretation" },
  { id: "policy-review", number: "26", title: "Policy Review" },
];

export default function PrivacyPolicyClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("preamble");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return SECTIONS;
    const q = searchQuery.toLowerCase();
    return SECTIONS.filter(
      (s) => s.title.toLowerCase().includes(q) || s.number.includes(q)
    );
  }, [searchQuery]);

  const handleOpenCookiePreferences = () => {
    window.dispatchEvent(new Event("open-cookie-preferences"));
  };

  const handlePrint = () => {
    window.print();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSectionSelect = (id: string) => {
    setActiveSection(id);
    setIsMobileNavOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#fafafc] text-slate-800">
      {/* Hero Header */}
      <div className="bg-[#061b4b] text-white pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-300 mb-6">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <Icon icon="mdi:chevron-right" className="text-sm text-slate-500" />
            <span className="text-orange-500 font-medium">Privacy Policy</span>
          </nav>

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-orange-400 text-xs font-semibold uppercase tracking-wider">
              <Icon icon="mdi:shield-check" className="text-sm" />
              <span>NDPA &amp; GAID Framework</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Privacy Policy
            </h1>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl font-normal">
              <span className="text-white font-medium">M360 Solutions Group Limited</span> — Governing personal data processing for our White Label Advertising Technology Platform in arrangement with Eskimi.
            </p>

            {/* Document Metadata Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-slate-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <Icon icon="mdi:calendar-outline" className="text-orange-500" />
                <span>Effective: 1st Nov 2026</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <Icon icon="mdi:tag-outline" className="text-orange-500" />
                <span>Version: 001</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <Icon icon="mdi:scale-balance" className="text-orange-500" />
                <span>NDPA 2023 &amp; GAID 2025</span>
              </span>
            </div>

            {/* Quick Action CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href="/privacy-policy.pdf"
                download="Privacy-Policy-M360-Solutions-Group.pdf"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-medium text-xs sm:text-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl transition duration-150"
              >
                <Icon icon="mdi:file-download-outline" className="text-base sm:text-lg" />
                <span>Download PDF</span>
              </a>

              <button
                type="button"
                onClick={handleOpenCookiePreferences}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 active:scale-95 text-white font-medium text-xs sm:text-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-white/15 transition duration-150"
              >
                <Icon icon="mdi:cookie-outline" className="text-base sm:text-lg text-orange-400" />
                <span>Cookie Preferences</span>
              </button>

              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-white/10 active:scale-95 text-slate-300 hover:text-white font-medium text-xs sm:text-sm px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-white/10 transition duration-150"
                title="Print Policy"
              >
                <Icon icon="mdi:printer-outline" className="text-base sm:text-lg" />
                <span className="hidden sm:inline">Print</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Quick Navigation Bar */}
      <div className="lg:hidden sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-3 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-6 h-6 rounded-md bg-orange-50 text-orange-600 font-bold font-mono text-xs flex items-center justify-center shrink-0">
              {SECTIONS.find((s) => s.id === activeSection)?.number || "§"}
            </span>
            <span className="text-xs font-semibold text-slate-900 truncate">
              {SECTIONS.find((s) => s.id === activeSection)?.title || "Jump to section"}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 transition"
          >
            <span>Sections</span>
            <Icon
              icon={isMobileNavOpen ? "mdi:chevron-up" : "mdi:chevron-down"}
              className="text-sm text-slate-500"
            />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileNavOpen && (
          <div className="mt-3 pt-3 border-t border-slate-100 max-h-72 overflow-y-auto space-y-1">
            <div className="relative mb-2">
              <Icon
                icon="mdi:magnify"
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm"
              />
              <input
                type="text"
                placeholder="Filter sections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:border-orange-500"
              />
            </div>
            {filteredSections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => handleSectionSelect(s.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition ${
                  activeSection === s.id
                    ? "bg-orange-50 text-orange-600 font-semibold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span className="font-mono text-[11px] text-slate-400 w-5 text-right">{s.number}.</span>
                <span className="truncate">{s.title}</span>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Desktop Sticky Sidebar */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-24 space-y-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xs font-bold text-slate-900 tracking-wider uppercase flex items-center gap-2">
                  <Icon icon="mdi:format-list-bulleted" className="text-orange-500 text-base" />
                  Table of Contents
                </h2>
                <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                  26 Sections
                </span>
              </div>

              {/* Quick Search */}
              <div className="relative mb-3">
                <Icon
                  icon="mdi:magnify"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm"
                />
                <input
                  type="text"
                  placeholder="Search policy sections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-orange-500 transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                    aria-label="Clear filter"
                  >
                    <Icon icon="mdi:close-circle" />
                  </button>
                )}
              </div>

              {/* Navigation List */}
              <div className="max-h-[58vh] overflow-y-auto space-y-1 pr-1 custom-scroll">
                {filteredSections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={() => setActiveSection(s.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                      activeSection === s.id
                        ? "bg-orange-50 text-orange-600 font-semibold border-l-2 border-orange-500"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span className="shrink-0 w-5 text-right font-mono text-[11px] text-slate-400">
                      {s.number}.
                    </span>
                    <span className="truncate">{s.title}</span>
                  </a>
                ))}
                {filteredSections.length === 0 && (
                  <p className="text-xs text-slate-400 text-center py-4">No matching section found.</p>
                )}
              </div>
            </div>

            {/* DPO Contact Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <Icon icon="mdi:shield-account" className="text-orange-500 text-lg" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Data Protection Officer
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Contact our DPO for enquiries, data requests, or SNAG notices under the NDPA:
              </p>
              <a
                href="mailto:m360solutionslimited@gmail.com"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-orange-600 hover:text-orange-700 transition pt-1"
              >
                <Icon icon="mdi:email-outline" />
                <span>m360solutionslimited@gmail.com</span>
              </a>
            </div>
          </aside>

          {/* Main Document Body */}
          <article className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-sm space-y-10 sm:space-y-12">
            
            {/* 1. PREAMBLE AND REGULATORY FRAMEWORK */}
            <section id="preamble" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-100 text-[#061b4b] font-bold font-mono text-xs sm:text-sm flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-lg sm:text-2xl font-bold text-slate-900">
                  Preamble and Regulatory Framework
                </h2>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                <strong className="text-slate-900 font-semibold">M360 Solutions Group Limited</strong> (&ldquo;M360&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to processing personal data lawfully, fairly, transparently, and securely.
              </p>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                This Privacy Policy governs the processing of personal data in connection with M360&rsquo;s white label advertising technology platform hereinafter refers as (the &ldquo;Platform&rdquo;). The Platform is powered by technology proprietary to <strong className="text-slate-900 font-semibold">Eskimi</strong> (&ldquo;Eskimi&rdquo;) and made available to clients and partner agencies under the M360 brand.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <p className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                  Issued in accordance with Applicable Nigerian Legal Instruments:
                </p>
                <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-5">
                  <li>
                    <strong>The Constitution of the Federal Republic of Nigeria, 1999 (as amended)</strong>, particularly Section 37;
                  </li>
                  <li>
                    <strong>The Nigeria Data Protection Act, 2023</strong> (&ldquo;NDPA&rdquo;);
                  </li>
                  <li>
                    <strong>The Nigeria Data Protection Act General Application and Implementation Directive, 2025</strong> (&ldquo;GAID&rdquo;);
                  </li>
                  <li>
                    All regulations, guidance notices, directives, and orders issued by the <strong>Nigeria Data Protection Commission</strong> (&ldquo;NDPC&rdquo;); and
                  </li>
                  <li>Other applicable Nigerian laws and regulations.</li>
                </ul>
                <p className="text-xs text-slate-600 pt-1 italic">
                  Together, these are referred to as the &ldquo;Applicable Data Protection Laws.&rdquo;
                </p>
              </div>
            </section>

            {/* 2. SCOPE */}
            <section id="scope" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-100 text-[#061b4b] font-bold font-mono text-xs sm:text-sm flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-lg sm:text-2xl font-bold text-slate-900">Scope</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-700">This Policy applies to:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {[
                  {
                    title: "Clients",
                    desc: "Advertisers and other entities for whom M360 executes advertising campaigns through the Platform.",
                  },
                  {
                    title: "Partner Agencies",
                    desc: "Third party agencies granted access to the Platform through M360 to provide advertising services to their own clients.",
                  },
                  {
                    title: "End Users",
                    desc: "Natural persons whose personal data is processed in connection with advertising campaigns delivered through the Platform.",
                  },
                  {
                    title: "Representatives",
                    desc: "Directors, officers, employees, agents, and contact persons of Clients and Partner Agencies.",
                  },
                  {
                    title: "Website & Platform Users",
                    desc: "Individuals who access M360's website, dashboards, reporting tools, or support channels.",
                  },
                  {
                    title: "Prospective Clients & Partners",
                    desc: "Individuals whose personal data is collected during commercial engagement with M360.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50"
                  >
                    <div className="text-slate-900 font-semibold text-xs mb-1">
                      {item.title}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. POLICY HIERARCHY */}
            <section id="hierarchy" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-100 text-[#061b4b] font-bold font-mono text-xs sm:text-sm flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-lg sm:text-2xl font-bold text-slate-900">Policy Hierarchy</h2>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm leading-relaxed space-y-2 text-slate-700">
                <p>
                  This Policy forms part of M360&rsquo;s data protection governance framework. Where a written <strong>Data Processing Agreement (&ldquo;DPA&rdquo;)</strong>, Joint Controller Arrangement, campaign terms, client agreement, or agency agreement contains more specific data protection obligations, those terms shall prevail over this Policy to the extent of any inconsistency.
                </p>
                <p className="font-semibold text-slate-900">
                  Nothing in this Policy limits or excludes any right available to a Data Subject under the NDPA or GAID.
                </p>
              </div>
            </section>

            {/* 4. DEFINITIONS AND INTERPRETATION */}
            <section id="definitions" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-100 text-[#061b4b] font-bold font-mono text-xs sm:text-sm flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-lg sm:text-2xl font-bold text-slate-900">
                  Definitions and Interpretation
                </h2>
              </div>
              <p className="text-xs text-slate-600">
                In this Policy, unless the context otherwise requires:
              </p>
              <dl className="grid grid-cols-1 gap-2.5 text-xs">
                {[
                  {
                    term: "a. Data Controller",
                    def: "A person or entity that, alone or jointly with others, determines the purposes and means of the processing of personal data.",
                  },
                  {
                    term: "b. Data Processor",
                    def: "A person or entity that processes personal data on behalf of, and on the documented instructions of, a Data Controller.",
                  },
                  {
                    term: "c. Data Subject",
                    def: "An identified or identifiable natural person to whom personal data relates.",
                  },
                  {
                    term: "d. Joint Controllers",
                    def: "Two or more entities that jointly determine the purposes and means of a processing activity.",
                  },
                  {
                    term: "e. Personal Data",
                    def: "Any information relating to an identified or identifiable natural person, including pseudonymized data capable of reidentification.",
                  },
                  {
                    term: "f. Sensitive Personal Data",
                    def: "Personal data revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, trade union membership, genetic data, biometric data, health data, sex life, sexual orientation, or other categories prescribed under applicable law.",
                  },
                  {
                    term: "g. Processing",
                    def: "Any operation performed on personal data, including collection, recording, organization, structuring, storage, adaptation, retrieval, consultation, use, disclosure, transmission, dissemination, restriction, erasure, or destruction.",
                  },
                  {
                    term: "h. Sub-Processor",
                    def: "A third party engaged by M360 or a Data Processor to process personal data on behalf of a Data Controller.",
                  },
                  {
                    term: "i. Consent",
                    def: "A freely given, specific, informed, and unambiguous indication of a Data Subject’s agreement to the processing of personal data.",
                  },
                  {
                    term: "j. Data Privacy Impact Assessment (DPIA)",
                    def: "An assessment conducted to identify and minimize data protection risks arising from processing activities likely to result in a high risk to the rights and freedoms of Data Subjects.",
                  },
                  {
                    term: "k. SNAG",
                    def: "A Data Subject’s Standard Notice to Address Grievance issued under the GAID.",
                  },
                  {
                    term: "l. General Rule of Interpretation",
                    def: "Words importing the singular include the plural and vice versa. Headings are for convenience only and do not affect interpretation.",
                  },
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <dt className="font-semibold text-slate-900">{item.term}</dt>
                    <dd className="text-slate-600 mt-0.5 leading-relaxed">{item.def}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* 5. DATA CONTROLLER AND PROCESSOR ROLES IN THE WHITE LABEL ARRANGEMENT */}
            <section id="roles" className="scroll-mt-24 space-y-5">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-100 text-[#061b4b] font-bold font-mono text-xs sm:text-sm flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-lg sm:text-2xl font-bold text-slate-900">
                  Data Controller &amp; Processor Roles in the White Label Arrangement
                </h2>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wide">5.1 White Label Structure</h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  M360 operates the Platform as a white label solution. Eskimi’s advertising technology is presented and made commercially available under the M360 brand.
                </p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  M360 maintains a parent account through which it provides and administers sub accounts for Clients and Partner Agencies. Clients and Partner Agencies access Eskimi’s advertising services through M360, while M360 retains administrative oversight of their accounts and campaigns.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wide">5.2 Allocation of Roles</h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  The classification of M360, Clients, Partner Agencies, and Eskimi as Data Controllers, Data Processors, or Joint Controllers depends on the actual processing activity and the degree of control exercised over the purposes and means of processing, rather than contractual labels alone.
                </p>

                <div className="space-y-3 pt-1">
                  {/* (a) M360 as Controller */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <h4 className="text-xs font-bold text-[#061b4b] uppercase tracking-wide">
                      (a) M360 as Data Controller
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      M360 acts as a Data Controller in respect of:
                    </p>
                    <ul className="text-xs text-slate-700 space-y-1 list-disc pl-5">
                      <li>The establishment, administration, security, and oversight of the parent account and sub accounts;</li>
                      <li>The management of its commercial relationships with Clients, Partner Agencies, Eskimi, vendors, and prospective business partners;</li>
                      <li>The processing of registration, account, billing, communication, and support data relating to Client and Partner Agency representatives;</li>
                      <li>Campaign execution where M360 determines or materially influences the campaign objective, audience selection, targeting parameters, creative deployment, optimization strategy, or measurement methodology;</li>
                      <li>Compliance with M360’s own legal, tax, regulatory, and corporate obligations; and the operation, improvement, and protection of the Platform.</li>
                    </ul>
                  </div>

                  {/* (b) M360 as Processor */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <h4 className="text-xs font-bold text-[#061b4b] uppercase tracking-wide">
                      (b) M360 as Data Processor
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      M360 acts as a Data Processor where it processes End User personal data solely on the documented instructions of a Client or Partner Agency for the purpose of executing an advertising campaign, and where M360 does not determine the purposes or essential means of that processing.
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed italic">
                      In such circumstances, the Client or Partner Agency remains responsible for ensuring that it has a lawful basis for the processing, that appropriate notices and consents have been obtained where required, and that the personal data supplied to M360 is accurate, lawful, and permitted for the intended use.
                    </p>
                  </div>

                  {/* (c) Joint Controllership */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <h4 className="text-xs font-bold text-[#061b4b] uppercase tracking-wide">
                      (c) Joint Controllership
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      M360 and a Client or Partner Agency may act as Joint Controllers where they jointly determine the purposes and means of a particular processing activity, including collaborative decisions relating to campaign targeting, audience segmentation, measurement, or data enrichment.
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Where Joint Controllership applies, the parties shall document their respective responsibilities in a Joint Controller Arrangement or applicable campaign terms, including responsibility for providing privacy information to Data Subjects; responding to Data subject requests; handling complaints and SNAG notices; securing personal data; notifying the NDPC and affected Data subjects of personal data breaches; and allocating liability between the parties.
                    </p>
                  </div>

                  {/* (d) Eskimi's Role */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <h4 className="text-xs font-bold text-[#061b4b] uppercase tracking-wide">
                      (d) Eskimi&rsquo;s Role
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Eskimi acts as a Sub Processor to M360 in respect of personal data processed through the Platform technology on M360’s documented instructions. Eskimi shall process such personal data only in accordance with a written sub processing agreement imposing data protection obligations no less protective than those applicable to M360 under the NDPA, GAID, and this Policy.
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Where Eskimi independently determines the purposes or means of processing, including for platform-level analytics, fraud prevention, security, product improvement, or compliance with its own legal obligations, Eskimi may act as an independent Data Controller or Joint Controller. In such cases, Eskimi’s own privacy notice and applicable agreements shall govern that processing to the extent disclosed to M360 and permitted under the commercial arrangement.
                    </p>
                  </div>

                  {/* (e) Partner Agencies */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <h4 className="text-xs font-bold text-[#061b4b] uppercase tracking-wide">
                      (e) Partner Agencies
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      A Partner Agency acts as a Data Controller where it determines the purposes and means of processing personal data for its own business or its own clients; and a Data Processor where it processes personal data solely on behalf of its own clients.
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed font-semibold">
                      As a condition of access to the Platform, each Partner Agency shall:
                    </p>
                    <ol className="text-xs text-slate-700 space-y-1 list-[lower-alpha] pl-5">
                      <li>Maintain a lawful basis for processing personal data;</li>
                      <li>Provide compliant privacy notices to its clients and End Users where required;</li>
                      <li>Obtain all necessary consents and permissions;</li>
                      <li>Ensure that audience lists and campaign data are lawfully sourced;</li>
                      <li>Comply with the NDPA, GAID, and applicable advertising regulations;</li>
                      <li>Not upload, target, or process Sensitive Personal Data without M360’s prior written approval; and</li>
                      <li>Indemnify M360 against losses, claims, penalties, and liabilities arising from the Partner Agency’s unlawful or unauthorised processing.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. DATA PROTECTION PRINCIPLES */}
            <section id="principles" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-100 text-[#061b4b] font-bold font-mono text-xs sm:text-sm flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-lg sm:text-2xl font-bold text-slate-900">
                  Data Protection Principles
                </h2>
              </div>
              <p className="text-xs text-slate-600">
                M360 processes personal data in accordance with the core principles of the NDPA and GAID:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {[
                  {
                    title: "a. Lawfulness, Fairness & Transparency",
                    desc: "Personal data is processed only on a valid legal basis and in a manner transparent to Data Subjects.",
                  },
                  {
                    title: "b. Purpose Limitation",
                    desc: "Personal data is collected for specified, explicit, and legitimate purposes and is not further processed incompatibly with those purposes.",
                  },
                  {
                    title: "c. Data Minimization",
                    desc: "M360 collects only personal data that is adequate, relevant, and limited to what is strictly necessary.",
                  },
                  {
                    title: "d. Accuracy",
                    desc: "Reasonable steps are taken to ensure personal data is accurate, complete, and kept up to date.",
                  },
                  {
                    title: "e. Storage Limitation",
                    desc: "Personal data is retained only for as long as necessary for its intended legitimate purposes.",
                  },
                  {
                    title: "f. Integrity & Confidentiality",
                    desc: "Appropriate technical and organizational safeguards protect personal data against unauthorized or unlawful access.",
                  },
                  {
                    title: "g. Accountability",
                    desc: "M360 maintains records, policies, assessments, and controls to demonstrate compliance with Applicable Data Protection Laws.",
                  },
                ].map((p, i) => (
                  <div
                    key={i}
                    className={`p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 ${
                      i === 6 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="font-semibold text-xs text-slate-900 mb-1">
                      {p.title}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 7. CATEGORIES OF PERSONAL DATA COLLECTED */}
            <section id="data-collected" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-100 text-[#061b4b] font-bold font-mono text-xs sm:text-sm flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-lg sm:text-2xl font-bold text-slate-900">
                  Categories of Personal Data Collected
                </h2>
              </div>

              {/* 7.1 */}
              <div className="space-y-3">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wide">7.1 Account, Commercial &amp; Campaign Data</h3>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <p className="text-xs font-semibold text-slate-900">a. Account and Commercial Data:</p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Identity and contact data, including name, company name, job title, email address, telephone number, and business address; account credentials, authentication data, user roles, and access permissions; billing, invoicing, payment, and transaction data; commercial communications, proposals, contracts, instructions, campaign briefs, and support records; KYC, onboarding, tax, and regulatory information where required.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <p className="text-xs font-semibold text-slate-900">b. Campaign and Platform Data:</p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    In connection with advertising campaigns, M360 or Eskimi may process: device and technical data, including IP address, device identifiers, browser type and version, operating system, language settings, and network information; advertising interaction data, including impressions, clicks, views, conversions, engagement events, and campaign performance metrics; audience and targeting data, including inferred or supplied demographic segments, interest categories, behavioral signals, and location data where enabled and lawful; Cookie, pixel, SDK, mobile advertising identifier, and other tracking data; fraud prevention, security, and abuse detection data.
                  </p>
                </div>
              </div>

              {/* 7.2 */}
              <div className="space-y-2">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wide">7.2 Website and Support Data</h3>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-xs text-slate-700 leading-relaxed">
                    M360 may collect website usage data, including pages visited, links clicked, session duration, and referral sources; login and audit logs; support enquiries, complaints, and correspondence.
                  </p>
                </div>
              </div>

              {/* 7.3 */}
              <div className="space-y-2">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wide">7.3 Sensitive Personal Data</h3>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 space-y-2">
                  <p className="text-xs leading-relaxed">
                    M360 does not intentionally collect or process Sensitive Personal Data through the Platform. Clients and Partner Agencies are prohibited from configuring campaigns or uploading audience data involving Sensitive Personal Data without M360’s prior written consent and the implementation of enhanced safeguards required under the NDPA and GAID.
                  </p>
                  <p className="text-xs leading-relaxed font-semibold text-slate-900">
                    Where Sensitive Personal Data is knowingly or inadvertently received, M360 may restrict access, suspend the relevant campaign or account, delete the data where appropriate, and require the Client or Partner Agency to provide written confirmation of the lawful basis for processing.
                  </p>
                </div>
              </div>
            </section>

            {/* 8. LAWFUL BASES FOR PROCESSING */}
            <section id="lawful-bases" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-100 text-[#061b4b] font-bold font-mono text-xs sm:text-sm flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-lg sm:text-2xl font-bold text-slate-900">
                  Lawful Bases for Processing
                </h2>
              </div>
              <p className="text-xs text-slate-600">
                M360 processes personal data only where one or more lawful bases apply under the NDPA and GAID:
              </p>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="text-xs font-bold text-slate-900">8.1 Contractual Necessity</h3>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    Processing is necessary for the performance of a contract with a Client, Partner Agency, vendor, or other business partner, including Platform access, campaign execution, reporting, invoicing, and customer support.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <h3 className="text-xs font-bold text-slate-900">8.2 Legitimate Interests</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Processing is necessary for M360’s legitimate interests, provided such interests are not overridden by the rights and freedoms of Data Subjects. These interests include:
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1 list-disc pl-5">
                    <li>Administration and security of the Platform;</li>
                    <li>Fraud detection, prevention, and investigation;</li>
                    <li>Service improvement and product development;</li>
                    <li>Business continuity and risk management;</li>
                    <li>Enforcement of contractual rights and defence of legal claims;</li>
                    <li>Business to business communications concerning services relevant to the recipient’s professional role;</li>
                    <li>Where M360 relies on legitimate interests, it conducts and documents a Legitimate Interest Assessment (&ldquo;LIA&rdquo;).</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="text-xs font-bold text-slate-900">8.3 Consent</h3>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    Where consent is required, including for non-essential cookies, tracking technologies, direct marketing, or certain audience targeting activities, M360 ensures that consent is freely given, informed, and unambiguous. Withdrawal of consent does not affect the lawfulness of processing carried out before withdrawal.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="text-xs font-bold text-slate-900">8.4 Legal Obligation</h3>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    Processing may be necessary to comply with legal or regulatory obligations, including tax, accounting, anti-money laundering, consumer protection, advertising, and data protection requirements.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="text-xs font-bold text-slate-900">8.5 Vital Interests and Public Interest</h3>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    M360 may process personal data where necessary to protect the vital interests of a Data subject or another person, or where processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority, where applicable.
                  </p>
                </div>
              </div>
            </section>

            {/* 9. PURPOSES OF PROCESSING */}
            <section id="purposes" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-100 text-[#061b4b] font-bold font-mono text-xs sm:text-sm flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-lg sm:text-2xl font-bold text-slate-900">
                  Purposes of Processing
                </h2>
              </div>
              <p className="text-xs text-slate-600">
                M360 processes personal data for the following specific purposes:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                {[
                  {
                    code: "a",
                    name: "Platform Administration",
                    desc: "Creating and managing the parent account, provisioning and administering sub accounts, managing user access, and maintaining Platform security.",
                  },
                  {
                    code: "b",
                    name: "Campaign Execution",
                    desc: "Configuring, launching, delivering, targeting, optimizing, and measuring advertising campaigns.",
                  },
                  {
                    code: "c",
                    name: "Reporting and Analytics",
                    desc: "Generating performance reports, providing campaign insights, and conducting Platform-level analytics.",
                  },
                  {
                    code: "d",
                    name: "Billing & Financial Management",
                    desc: "Processing payments, issuing invoices, reconciling accounts, and maintaining financial records.",
                  },
                  {
                    code: "e",
                    name: "Customer Support",
                    desc: "Responding to enquiries, resolving technical issues, and managing complaints.",
                  },
                  {
                    code: "f",
                    name: "Compliance & Risk Management",
                    desc: "Complying with legal obligations, responding to lawful requests, preventing fraud, and protecting M360’s rights and safety.",
                  },
                  {
                    code: "g",
                    name: "Service Communications",
                    desc: "Sending administrative, operational, security, and service-related communications.",
                  },
                  {
                    code: "h",
                    name: "Business Development",
                    desc: "Communicating with existing and prospective Clients and Partner Agencies about relevant services, subject to applicable consent and opt-out rights.",
                  },
                  {
                    code: "i",
                    name: "Security and Fraud Prevention",
                    desc: "Detecting unauthorised access, suspicious activity, invalid traffic, and abuse of the Platform.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-xl bg-slate-50 border border-slate-200 ${
                      i === 8 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="font-semibold text-slate-900 flex items-center gap-1.5 mb-1">
                      <span className="text-orange-500 font-mono">[{item.code}]</span>
                      <span>{item.name}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-600 italic">
                M360 will not use personal data for purposes that are incompatible with the original purposes without a valid lawful basis and, where required, appropriate notice or consent.
              </p>
            </section>

            {/* 10. DATA SHARING AND DISCLOSURE */}
            <section id="data-sharing" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-100 text-[#061b4b] font-bold font-mono text-xs sm:text-sm flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-lg sm:text-2xl font-bold text-slate-900">
                  Data Sharing and Disclosure
                </h2>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                {/* 10.1 Eskimi */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wide">10.1 Sharing with Eskimi</h3>
                  <p className="text-xs leading-relaxed">
                    M360 shares personal data with Eskimi only to the extent necessary for the operation of the Platform and the delivery of advertising services. Eskimi processes such data as a Sub Processor in accordance with the applicable sub-processing agreement. Eskimi shall not use personal data received from M360 for its own independent purposes except as expressly permitted under the agreement, permitted by law, or disclosed in Eskimi’s own privacy documentation where Eskimi acts as an independent Controller.
                  </p>
                </div>

                {/* 10.2 Clients & Partner Agencies */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wide">10.2 Sharing with Clients and Partner Agencies</h3>
                  <p className="text-xs leading-relaxed">
                    M360 makes available to Clients and Partner Agencies the campaign data and reporting necessary for them to assess the performance of their advertising activities. Where a client or partner agency is a Data Controller or Joint Controller, its subsequent processing of that data is governed by its own privacy notice and legal obligations. M360 does not authorize any Client or Partner Agency to use data received through the Platform for incompatible purposes.
                  </p>
                </div>

                {/* 10.3 Service Providers */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wide">10.3 Sharing with Service Providers</h3>
                  <p className="text-xs leading-relaxed">
                    M360 may engage third party service providers, including cloud hosting providers, payment processors, analytics providers, cybersecurity providers, communication tools, and customer support platforms. Such providers are engaged under written agreements imposing confidentiality, security, data protection, and sub processing obligations consistent with the NDPA and GAID. A current list of material Sub Processors is available upon written request to the Data Protection Officer.
                  </p>
                </div>

                {/* 10.4 Ad Tech Partners */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wide">10.4 Advertising and Technology Partners</h3>
                  <p className="text-xs leading-relaxed">
                    Where necessary for campaign delivery, measurement, frequency capping, fraud prevention, or performance reporting, personal data may be shared with advertising exchanges, publishers, demand-side or supply-side platforms, measurement providers, and data providers. Such sharing occurs only where permitted by law, supported by appropriate contractual safeguards, and subject to applicable consent, opt-out, or transparency requirements.
                  </p>
                </div>

                {/* 10.5 & 10.6 & 10.7 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <h3 className="font-bold text-slate-900 text-xs">10.5 Legal &amp; Regulatory Disclosures</h3>
                    <p className="text-xs leading-relaxed text-slate-600">
                      Disclosures may be made where required by law, regulation, court order, or lawful request from a competent authority, including the NDPC. Where legally permissible, M360 will notify affected Data Subjects.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <h3 className="font-bold text-slate-900 text-xs">10.6 Corporate Transactions</h3>
                    <p className="text-xs leading-relaxed text-slate-600">
                      In mergers, acquisitions, or restructuring, personal data may be transferred subject to confidentiality obligations and protections no less protective than those in this Policy.
                    </p>
                  </div>

                  <div className="sm:col-span-2 p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                      <Icon icon="mdi:shield-check" className="text-orange-500 text-base" />
                      10.7 No Sale of Personal Data
                    </h3>
                    <p className="text-xs leading-relaxed text-slate-700 font-medium">
                      M360 does not sell personal data. M360 does not disclose personal data to third parties for their independent direct marketing purposes without a valid lawful basis and, where required, the Data Subject’s consent.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 11. INTERNATIONAL DATA TRANSFERS */}
            <section id="international-transfers" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-100 text-[#061b4b] font-bold font-mono text-xs sm:text-sm flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-lg sm:text-2xl font-bold text-slate-900">
                  International Data Transfers
                </h2>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  Personal data processed through the Platform may be transferred to, stored in, or accessed from jurisdictions outside Nigeria, including where Eskimi, its affiliates, cloud providers, or other Sub Processors are located.
                </p>
                <p>
                  M360 ensures that cross-border data transfers comply with the provisions of the NDPA and GAID, implementing appropriate contractual safeguards, standard data protection clauses, and security protocols to protect data subjects&rsquo; rights across all processing territories.
                </p>
              </div>
            </section>

            {/* 12. COOKIES AND TRACKING TECHNOLOGIES */}
            <section id="cookies" className="scroll-mt-24 space-y-5">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#061b4b] text-white font-bold font-mono text-xs sm:text-sm flex items-center justify-center shrink-0">
                    12
                  </span>
                  <h2 className="text-lg sm:text-2xl font-bold text-slate-900">
                    Cookies &amp; Tracking Technologies
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={handleOpenCookiePreferences}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-orange-500/30 text-orange-600 bg-orange-50 hover:bg-orange-100 font-semibold text-xs transition"
                >
                  <Icon icon="mdi:cog-outline" />
                  <span>Cookie Preferences</span>
                </button>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                The Platform and M360 websites use cookies, pixels, tags, SDKs, and similar technologies to:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {[
                  "a. Enable core functionality",
                  "b. Maintain secure sessions",
                  "c. Remember user preferences",
                  "d. Measure website and campaign performance",
                  "e. Support advertising delivery, frequency capping, and audience measurement",
                  "f. Detect fraud and improve security",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                    <Icon icon="mdi:check" className="text-orange-500 shrink-0 text-sm" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-700 leading-relaxed">
                <p className="font-semibold text-slate-900">
                  Consent Management &amp; Standards (Section 12.g – 12.m):
                </p>
                <ul className="space-y-1 list-disc pl-5 text-slate-600">
                  <li>Non-essential cookies and tracking technologies are deployed only after valid consent has been obtained where required.</li>
                  <li>M360&rsquo;s consent management mechanism presents clear information about cookie categories and purposes.</li>
                  <li>Affirmative consent is obtained before non-essential cookies are set.</li>
                  <li>Consent preferences are recorded, with the ability to withdraw consent with equal ease.</li>
                  <li>Recognized opt-out signals and browser-based privacy controls are respected where technically feasible.</li>
                </ul>
              </div>

              {/* Cookie Types Breakdown Table */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Cookie Categories on M360 Solutions
                </h3>
                <div className="overflow-x-auto border border-slate-200 rounded-xl">
                  <table className="w-full text-left text-xs min-w-[500px]">
                    <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                      <tr>
                        <th className="p-3">Category</th>
                        <th className="p-3">Purpose</th>
                        <th className="p-3">Requirement</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr>
                        <td className="p-3 font-semibold text-slate-900">Essential / Necessary</td>
                        <td className="p-3">Security tokens, authentication sessions, core operations.</td>
                        <td className="p-3 text-slate-500">Always Active</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-900">Analytics &amp; Performance</td>
                        <td className="p-3">Traffic analysis, campaign metrics, site usability.</td>
                        <td className="p-3 text-orange-600 font-medium">Consent Required</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-900">Advertising &amp; Targeting</td>
                        <td className="p-3">Impressions, frequency capping, and ad fraud prevention.</td>
                        <td className="p-3 text-orange-600 font-medium">Consent Required</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed italic">
                Data Subjects may manage cookies through their browser or device settings. Disabling certain cookies may limit Platform functionality or affect campaign performance.
              </p>
            </section>

            {/* 13. DIRECT MARKETING AND OPT OUTS */}
            <section id="direct-marketing" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-100 text-[#061b4b] font-bold font-mono text-xs sm:text-sm flex items-center justify-center shrink-0">
                  13
                </span>
                <h2 className="text-lg sm:text-2xl font-bold text-slate-900">
                  Direct Marketing and Opt-Outs
                </h2>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  M360 may send marketing communications to business contacts and prospective Clients or Partner Agencies where permitted by law. Every marketing communication shall include a clear and accessible opt-out mechanism.
                </p>
                <p className="font-semibold text-slate-900 pt-1">
                  Data Subjects may object to direct marketing at any time by:
                </p>
                <ul className="space-y-1 list-disc pl-5 text-xs text-slate-600">
                  <li>Clicking the unsubscribe link in the communication;</li>
                  <li>Contacting the Data Protection Officer; or</li>
                  <li>Updating communication preferences through the Platform, where available.</li>
                </ul>
                <p className="text-xs text-slate-500 pt-1">
                  Upon receipt of a valid opt-out request, M360 shall cease marketing communications without undue delay. This does not apply to essential service, security, billing, legal, or administrative communications.
                </p>
              </div>
            </section>

            {/* 14. CHILDREN’S DATA */}
            <section id="childrens-data" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-100 text-[#061b4b] font-bold font-mono text-xs sm:text-sm flex items-center justify-center shrink-0">
                  14
                </span>
                <h2 className="text-lg sm:text-2xl font-bold text-slate-900">Children&rsquo;s Data</h2>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p className="font-semibold text-slate-900">
                  The Platform and M360&rsquo;s advertising services are not directed to children.
                </p>
                <ul className="space-y-1.5 list-disc pl-5 text-xs text-slate-600">
                  <li>M360 does not knowingly collect personal data from children without the consent of a parent or legal guardian where such consent is required under applicable law.</li>
                  <li>Clients and Partner Agencies must not target children or upload children’s personal data through the Platform without M360’s prior written approval and compliance with all applicable legal requirements.</li>
                  <li>If M360 becomes aware that it has collected a child’s personal data without appropriate consent, it will take reasonable steps to delete the data and suspend any related processing.</li>
                </ul>
              </div>
            </section>

            {/* 15. AUTOMATED DECISION MAKING AND PROFILING */}
            <section id="automated-decisions" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-100 text-[#061b4b] font-bold font-mono text-xs sm:text-sm flex items-center justify-center shrink-0">
                  15
                </span>
                <h2 className="text-lg sm:text-2xl font-bold text-slate-900">
                  Automated Decision Making and Profiling
                </h2>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  The Platform may use automated processes, algorithms, machine learning tools, and profiling techniques to support advertising delivery, audience segmentation, bid optimization, conversion measurement, fraud detection, and campaign performance analysis.
                </p>
                <p>
                  Such processing may involve automated decisions regarding the advertisements shown to End Users, the frequency of exposure, or the audience categories to which an advertisement is delivered.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <p className="font-semibold text-slate-900 text-xs">
                    Safeguards for significant automated decisions:
                  </p>
                  <ul className="text-xs text-slate-600 space-y-1 list-disc pl-5">
                    <li>Meaningful information about the logic involved;</li>
                    <li>Information on the significance and envisaged consequences of the processing;</li>
                    <li>The right to obtain human intervention where applicable;</li>
                    <li>The right to express a point of view;</li>
                    <li>The right to contest the decision; and</li>
                    <li>The right to object to profiling for direct marketing.</li>
                  </ul>
                  <p className="text-xs text-slate-500 pt-1 italic">
                    Where required by the NDPA or GAID, M360 shall conduct a DPIA before commencing high risk profiling or automated decision making activities.
                  </p>
                </div>
              </div>
            </section>

            {/* 16. DATA RETENTION */}
            <section id="retention" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-100 text-[#061b4b] font-bold font-mono text-xs sm:text-sm flex items-center justify-center shrink-0">
                  16
                </span>
                <h2 className="text-lg sm:text-2xl font-bold text-slate-900">Data Retention</h2>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  M360 retains personal data only for as long as necessary to fulfil the purposes for which it was collected or as required by law. Retention periods are determined by reference to:
                </p>
                <ul className="text-xs text-slate-600 space-y-1 list-disc pl-5">
                  <li>The duration of the contractual relationship with the relevant Client or Partner Agency;</li>
                  <li>The duration of the advertising campaign and any post-campaign reporting or reconciliation period;</li>
                  <li>Statutory retention obligations relating to financial, tax, accounting, employment, and corporate records;</li>
                  <li>Limitation periods for potential legal claims;</li>
                  <li>Security, fraud prevention, and dispute-resolution requirements; and</li>
                  <li>Operational requirements of the Platform.</li>
                </ul>
                <p className="text-xs text-slate-600 pt-1">
                  Upon expiry of the applicable retention period, personal data shall be securely deleted or irreversibly anonymized. Where immediate deletion is technically impracticable, including data in backup archives, M360 isolates and protects the data, prevents further processing, and deletes it once practicable.
                </p>
              </div>
            </section>

            {/* 17. DATA SECURITY */}
            <section id="security" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-100 text-[#061b4b] font-bold font-mono text-xs sm:text-sm flex items-center justify-center shrink-0">
                  17
                </span>
                <h2 className="text-lg sm:text-2xl font-bold text-slate-900">Data Security</h2>
              </div>
              <p className="text-xs text-slate-600">
                M360 implements comprehensive technical and organizational measures appropriate to the risk level:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {[
                  "a. Encryption of personal data in transit and at rest",
                  "b. Role-based access controls and principle of least privilege",
                  "c. Multi-factor authentication for administrative access",
                  "d. Secure configuration of parent and sub-accounts",
                  "e. Audit logging, monitoring, and access review procedures",
                  "f. Vulnerability management and penetration testing",
                  "g. Network, endpoint, and application security controls",
                  "h. Strict employee & contractor confidentiality agreements",
                  "i. Continuous data protection and security training",
                  "j. Incident response & business continuity plans",
                  "k. Vendor due diligence and sub-processor oversight",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                    <Icon icon="mdi:check-circle-outline" className="text-orange-500 shrink-0 text-sm" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 italic">
                M360 reviews and updates security measures regularly in light of technological developments, emerging threats, and NDPC guidance.
              </p>
            </section>

            {/* 18. DATA BREACH NOTIFICATION */}
            <section id="breach-notification" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-100 text-[#061b4b] font-bold font-mono text-xs sm:text-sm flex items-center justify-center shrink-0">
                  18
                </span>
                <h2 className="text-lg sm:text-2xl font-bold text-slate-900">
                  Data Breach Notification
                </h2>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p className="font-semibold text-slate-900">
                  In the event of a personal data breach, M360 shall:
                </p>
                <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-5">
                  <li>Promptly investigate, contain, and assess the breach;</li>
                  <li>
                    <strong>Notify the NDPC within 72 hours</strong> of becoming aware of a breach likely to result in a risk to the rights and freedoms of Data Subjects;
                  </li>
                  <li>
                    <strong>Notify affected Data Subjects without undue delay</strong> where the breach is likely to result in a high risk to their rights and freedoms;
                  </li>
                  <li>Where M360 acts as a Data Processor, notify the relevant Data Controller without undue delay;</li>
                  <li>Maintain a breach register documenting the facts, effects, remedial actions, and notifications made;</li>
                  <li>Cooperate with the NDPC, Data Controllers, and other relevant authorities as required.</li>
                </ul>
              </div>
            </section>

            {/* 19. COMPLAINTS AND SNAG PROCESS */}
            <section id="complaints-snag" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-100 text-[#061b4b] font-bold font-mono text-xs sm:text-sm flex items-center justify-center shrink-0">
                  19
                </span>
                <h2 className="text-lg sm:text-2xl font-bold text-slate-900">
                  Complaints &amp; SNAG Process
                </h2>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                  Standard Notice to Address Grievance (SNAG)
                </h3>
                <p>
                  Data Subjects are encouraged to contact M360’s Data Protection Officer in the first instance. Where a Data Subject believes that M360 has violated Applicable Data Protection Laws, the Data Subject may submit a Data Subject’s Standard Notice to Address Grievance (&ldquo;SNAG&rdquo;) in accordance with the GAID.
                </p>
                <p className="text-slate-600">
                  M360 shall acknowledge and address valid SNAG notices in accordance with the applicable regulatory procedure. A Data Subject retains the right to escalate a complaint directly to the NDPC after officially writing to M360 severally and M360 ignored to attend to them.
                </p>
              </div>
            </section>

            {/* 20. DATA PROTECTION GOVERNANCE */}
            <section id="governance" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-100 text-[#061b4b] font-bold font-mono text-xs sm:text-sm flex items-center justify-center shrink-0">
                  20
                </span>
                <h2 className="text-lg sm:text-2xl font-bold text-slate-900">
                  Data Protection Governance
                </h2>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wide">20.1 Data Protection Officer</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    M360 has designated a Data Protection Officer (&ldquo;DPO&rdquo;) to oversee compliance with this Policy and Applicable Data Protection Laws. The DPO advises on NDPA/GAID obligations, monitors compliance, serves as contact point for the NDPC and Data Subjects, coordinates DPIAs and breach responses, and maintains records of processing activities.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <h3 className="font-bold text-slate-900 text-xs">20.2 Privacy by Design</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Applied across development and configuration, embedding privacy controls into workflows.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <h3 className="font-bold text-slate-900 text-xs">20.3 DPIAs</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Conducted where processing poses a high risk to rights and freedoms, including large scale profiling.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <h3 className="font-bold text-slate-900 text-xs">20.4 Records</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Maintained with categories, purposes, recipients, cross-border transfers, and retention schedules.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 21. CONTACT DETAILS */}
            <section id="contact-details" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-100 text-[#061b4b] font-bold font-mono text-xs sm:text-sm flex items-center justify-center shrink-0">
                  21
                </span>
                <h2 className="text-lg sm:text-2xl font-bold text-slate-900">Contact Details</h2>
              </div>
              <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">Data Protection Officer</h3>
                  <p className="text-xs text-slate-600">M360 Solutions Group Limited</p>
                </div>
                <div className="space-y-1.5 text-xs text-slate-700">
                  <p className="flex items-center gap-2">
                    <Icon icon="mdi:map-marker-outline" className="text-orange-500 text-base shrink-0" />
                    <span>Omole Phase 1, Lagos, Nigeria.</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Icon icon="mdi:email-outline" className="text-orange-500 text-base shrink-0" />
                    <a
                      href="mailto:m360solutionslimited@gmail.com"
                      className="text-orange-600 hover:text-orange-700 font-semibold underline underline-offset-2"
                    >
                      m360solutionslimited@gmail.com
                    </a>
                  </p>
                </div>
                <p className="text-xs text-slate-500 italic pt-1">
                  Data Subjects are encouraged to contact M360&rsquo;s DPO in the first instance. Data Subjects also have the right to lodge a complaint directly with the DPO.
                </p>
              </div>
            </section>

            {/* 22. THIRD PARTY WEBSITES AND SERVICES */}
            <section id="third-party" className="scroll-mt-24 space-y-3">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-100 text-[#061b4b] font-bold font-mono text-xs sm:text-sm flex items-center justify-center shrink-0">
                  22
                </span>
                <h2 className="text-lg sm:text-2xl font-bold text-slate-900">
                  Third Party Websites and Services
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                The Platform, M360’s website, and campaign materials may contain links to third-party websites, applications, or services. This Policy does not apply to third party websites or services that are not owned or controlled by M360. M360 is not responsible for the privacy practices of third parties. Data Subjects are encouraged to review the privacy policies of any third-party website or service before providing personal data.
              </p>
            </section>

            {/* 23. CHANGES TO THIS PRIVACY POLICY */}
            <section id="changes" className="scroll-mt-24 space-y-3">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-100 text-[#061b4b] font-bold font-mono text-xs sm:text-sm flex items-center justify-center shrink-0">
                  23
                </span>
                <h2 className="text-lg sm:text-2xl font-bold text-slate-900">
                  Changes to this Privacy Policy
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                M360 may update this Policy from time to time to reflect changes in Applicable Data Protection Laws, regulatory guidance, technology, business arrangements, or processing activities. The updated Policy will be published with a revised copy effective date and version number. Material changes affecting Clients, Partner Agencies, or Data Subjects will be communicated through the Platform, email, or another appropriate channel. Where changes affect processing based on consent, M360 will obtain fresh consent where required.
              </p>
            </section>

            {/* 24. GOVERNING LAW AND DISPUTE RESOLUTION */}
            <section id="governing-law" className="scroll-mt-24 space-y-3">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-100 text-[#061b4b] font-bold font-mono text-xs sm:text-sm flex items-center justify-center shrink-0">
                  24
                </span>
                <h2 className="text-lg sm:text-2xl font-bold text-slate-900">
                  Governing Law and Dispute Resolution
                </h2>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                <p>
                  This Policy shall be governed by and construed in accordance with the laws of the <strong>Federal Republic of Nigeria</strong>.
                </p>
                <p>
                  Any dispute arising out of or in connection with this Policy shall be subject to the exclusive jurisdiction of the courts of Nigeria, without prejudice to:
                </p>
                <ul className="text-xs text-slate-600 space-y-1 list-disc pl-5">
                  <li>A Data Subject&rsquo;s right to lodge a complaint with the NDPC;</li>
                  <li>Any applicable alternative dispute resolution mechanism; and</li>
                  <li>Any mandatory regulatory process under the NDPA or GAID.</li>
                </ul>
              </div>
            </section>

            {/* 25. SEVERABILITY AND INTERPRETATION */}
            <section id="severability" className="scroll-mt-24 space-y-3">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-100 text-[#061b4b] font-bold font-mono text-xs sm:text-sm flex items-center justify-center shrink-0">
                  25
                </span>
                <h2 className="text-lg sm:text-2xl font-bold text-slate-900">
                  Severability and Interpretation
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                If any provision of this Policy is held invalid, illegal, or unenforceable, the remaining provisions shall remain in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable, while preserving the commercial and legal intent of the Policy.
              </p>
            </section>

            {/* 26. POLICY REVIEW */}
            <section id="policy-review" className="scroll-mt-24 space-y-3">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-100 text-[#061b4b] font-bold font-mono text-xs sm:text-sm flex items-center justify-center shrink-0">
                  26
                </span>
                <h2 className="text-lg sm:text-2xl font-bold text-slate-900">Policy Review</h2>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-1.5">
                <p className="font-semibold text-slate-900">
                  M360 shall review this Policy where required by:
                </p>
                <ul className="text-xs text-slate-600 space-y-1 list-disc pl-5">
                  <li>A change in law or regulatory guidance;</li>
                  <li>A material change in the Platform or data flows;</li>
                  <li>A new Sub Processor arrangement;</li>
                  <li>A personal data breach or security incident;</li>
                  <li>A material change in the M360/Eskimi white label arrangement; or</li>
                  <li>A direction from the NDPC.</li>
                </ul>
              </div>
              <div className="pt-6 text-center text-xs text-slate-400 font-mono">
                — END OF PRIVACY POLICY —
              </div>
            </section>

          </article>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#061b4b] text-white hover:bg-orange-500 shadow-lg transition-all duration-200"
          aria-label="Back to top"
        >
          <Icon icon="mdi:arrow-up" className="text-xl" />
        </button>
      )}
    </main>
  );
}
