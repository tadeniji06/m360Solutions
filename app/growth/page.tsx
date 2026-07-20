import Link from "next/link";

/* ---------------------------------------------------------------------
   Page-only styles. Color tokens (--ink, --orange, --yellow, --tint,
   --line, --muted, --paper) and font tokens (--font-display,
   --font-body, --font-mono) already come from globals.css / layout.jsx
   next/font variables — nothing to redeclare here. This block covers
   only the handful of things Tailwind utilities can't express.
--------------------------------------------------------------------- */
const PageStyles = () => (
  <style>{`
    /* hero background grid, faded via a radial mask */
    .hero-grid::before {
      content: "";
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(to right, var(--line) 1px, transparent 1px),
        linear-gradient(to bottom, var(--line) 1px, transparent 1px);
      background-size: 32px 32px;
      mask-image: radial-gradient(ellipse 100% 100% at 50% 0%, black 0%, transparent 72%);
      -webkit-mask-image: radial-gradient(ellipse 100% 100% at 50% 0%, black 0%, transparent 72%);
      pointer-events: none;
      z-index: 0;
    }

    /* the little corner squares on the "in-a-Box" badge */
    .boxed::before,
    .boxed::after {
      content: "";
      position: absolute;
      width: 9px;
      height: 9px;
      background: var(--paper);
      border: 2.5px solid var(--orange);
      border-radius: 2px;
    }
    .boxed::before { top: -7px; left: -7px; }
    .boxed::after { bottom: -7px; right: -7px; }

    /* price card's offset "sticker" shadow */
    .price-card-shadow {
      box-shadow: 8px 8px 0 var(--yellow);
    }

    /* remove default <details> marker (no Tailwind equivalent) */
    summary::-webkit-details-marker { display: none; }
    summary { list-style: none; }
    details[open] .plus { transform: rotate(45deg); }

    @media (prefers-reduced-motion: reduce) {
      * { transition: none !important; scroll-behavior: auto !important; }
    }
  `}</style>
);

const TRUST_ITEMS = [
  "All-in-one growth system: content, channels, CRM, and data",
  "Paid ads across Google, Meta, TikTok, LinkedIn, Snapchat",
  "Custom CRM with leads, pipeline, KPIs, and analytics",
  "Optional Amplify layer for brand & traditional marketing",
];

const PROBLEMS = [
  "Inconsistent content and social presence",
  "Paid ads that don't convert — or can't be measured properly",
  "SEO and a website that don't support lead generation",
  "No unified view of marketing and sales performance",
  "Teams overwhelmed trying to manage everything manually",
];

const SOLUTIONS = [
  { tag: "Create", label: "Daily creative & content" },
  { tag: "Engage", label: "Social media management" },
  { tag: "Optimize", label: "SEO, email & website optimization" },
  { tag: "Acquire", label: "Paid ads management across 5 channels" },
  { tag: "Convert", label: "A custom CRM for leads, pipeline & KPIs" },
  { tag: "Expand", label: "Optional Amplify services for bigger campaigns" },
];

const STEPS = [
  {
    title: "Discovery & Profiling",
    body: "We map your ICP, personas, goals, and current funnel.",
  },
  {
    title: "Setup & Integration",
    body: "We configure your CRM, connect ads, website, and email, and launch your first campaigns.",
  },
  {
    title: "Run & Optimize",
    body: "We produce content daily, manage campaigns, and optimize based on real data.",
  },
  {
    title: "Scale & Expand",
    body: "As results grow, we scale channels and add Amplify services when needed.",
  },
];

const BENEFITS = [
  {
    title: "More predictable lead flow",
    body: "Consistent content and campaigns across all key channels.",
  },
  {
    title: "Higher conversion efficiency",
    body: "Optimized funnels, landing pages, and automation.",
  },
  {
    title: "Clearer decision making",
    body: "Unified dashboards showing what's working and where to invest.",
  },
  {
    title: "Scalable operations",
    body: "Processes and a CRM that support growth without constant rework.",
  },
  {
    title: "Future revenue option",
    body: "Potential to productize the CRM as a SaaS offering.",
  },
];

const WHO = [
  "Financial Services",
  "Tech startups & SaaS companies",
  "Retail",
  "E-commerce & digital brands",
  "SMEs with sales teams but fragmented marketing",
  "Real Estate",
  "Companies expanding across Nigeria, Kenya, Ghana & neighboring markets",
];

const FAQS = [
  {
    q: "Is my ad spend included in the total cost?",
    a: "Yes. 25% of the total cost will be spent on ads.",
  },
  {
    q: "How many channels will we use?",
    a: "We start with 2–3 core channels based on your ICP and goals, then scale to more as we see results.",
  },
  {
    q: "Do I need to provide content or designers?",
    a: "No. We handle daily creative, copy, and campaign execution. You just review and approve.",
  },
  {
    q: "Can I see the CRM in action?",
    a: "Yes. We can share a demo or walkthrough of the CRM and dashboards before you commit.",
  },
  {
    q: "What if I want traditional marketing or big campaigns?",
    a: "That's where Amplify comes in. We'll scope traditional and advanced digital services as separate projects or tiered packages.",
  },
];

/* shared class fragments */
const btn =
  "inline-block rounded-full px-7 py-3.5 font-semibold text-base transition-transform duration-150 border-[1.5px] border-transparent focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-[var(--orange)]";
const btnPrimary = `${btn} bg-[var(--orange)] text-white hover:bg-[var(--orange-deep)] hover:-translate-y-px`;
const btnGhost = `${btn} border-[var(--line)] text-[var(--ink)] bg-transparent hover:border-[var(--orange)] hover:text-[var(--orange)]`;
const eyebrow =
  "block font-[var(--font-mono),_monospace] text-xs tracking-[0.14em] uppercase text-[var(--orange)] mb-[18px]";
const sectionTitle =
  "text-[clamp(28px,4vw,40px)] font-bold max-w-[640px] font-[var(--font-display),_sans-serif]";
const lede = "text-[var(--muted)] max-w-[600px] mt-4 text-lg";

export default function Home() {
  return (
    <div className="bg-[var(--paper)] text-[var(--ink)] leading-[1.6] text-[17px] antialiased font-[var(--font-body),_system-ui,_sans-serif]">
      <PageStyles />

      {/* HERO */}
      <header
        className="hero-grid relative overflow-hidden pt-[120px] pb-[88px] text-center"
        id="top"
      >
        <div className="relative z-10 max-w-[1080px] mx-auto px-6">
          <h1 className="text-[clamp(40px,6.4vw,72px)] font-bold max-w-[880px] mx-auto font-[var(--font-display),_sans-serif] leading-[1.12] tracking-[-0.01em]">
            Growth Marketing
            <br />
            <span className="boxed relative inline-block text-[var(--orange)] border-[2.5px] border-[var(--orange)] rounded-[10px] px-[0.22em] leading-[1.05]">
              in-a-Box
            </span>
            <sup className="text-[0.35em] text-[var(--orange)]">™</sup>
          </h1>
          <p className="font-semibold text-[clamp(19px,2.4vw,25px)] text-[var(--muted)] mt-[22px] font-[var(--font-display),_sans-serif]">
            <strong className="text-[var(--ink)]">One retainer.</strong> Full
            growth engine.
          </p>
          <p className="max-w-[640px] mx-auto mt-[22px] text-[var(--muted)] text-lg">
            Daily creative, social, SEO, email, website, and paid ads — plus a
            custom CRM and optional Amplify services. All in one package built
            for scaling tech and SME businesses in Africa and beyond.
          </p>
          <div className="mt-9 flex gap-3.5 justify-center flex-wrap">
            <Link className={btnPrimary} href="/#pricing">
              Get Your Growth Plan
            </Link>
            <Link className={btnGhost} href="/growth/#package">
              See Package Details
            </Link>
          </div>
          <p className="mt-14 text-[15px] text-[var(--muted)] max-w-[560px] mx-auto">
            Designed for startups, SaaS, and SMEs that need predictable lead
            flow and clear ROI — without hiring a full in-house team.
          </p>
        </div>
      </header>

      {/* TRUST STRIP */}
      <div className="border-y border-[var(--line)] bg-white py-9">
        <div className="max-w-[1080px] mx-auto px-6 grid grid-cols-4 max-[860px]:grid-cols-2 max-[520px]:grid-cols-1 gap-7">
          {TRUST_ITEMS.map((item) => (
            <div
              className="flex gap-3 items-start text-[15px] text-[var(--ink)]"
              key={item}
            >
              <span className="flex-none w-[22px] h-[22px] rounded-full bg-[var(--yellow)] text-[var(--ink)] grid place-items-center text-xs font-bold mt-0.5">
                ✓
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* PROBLEM */}
      <section className="py-24">
        <div className="max-w-[1080px] mx-auto px-6">
          <span className={eyebrow}>The problem</span>
          <h2 className={sectionTitle}>Is your growth stuck in chaos?</h2>
          <p className={lede}>
            Most businesses we talk to face the same problems:
          </p>
          <div className="mt-10 grid max-w-[720px]">
            {PROBLEMS.map((item, i) => (
              <div
                className={`flex gap-[18px] items-baseline py-[18px] border-b border-[var(--line)] text-[17px] ${i === 0 ? "border-t" : ""}`}
                key={item}
              >
                <span className="text-[var(--orange)] font-[var(--font-mono),_monospace] text-sm flex-none">
                  ✕
                </span>
                {item}
              </div>
            ))}
          </div>
          <p className="mt-11 font-semibold text-[clamp(20px,2.6vw,26px)] max-w-[640px] font-[var(--font-display),_sans-serif]">
            You don&apos;t need more tools. You need a{" "}
            <em className="not-italic text-[var(--orange)]">system</em> that
            ties content, channels, data, and sales together.
          </p>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-24 bg-[var(--tint)]">
        <div className="max-w-[1080px] mx-auto px-6">
          <span className={eyebrow}>The solution</span>
          <h2 className={sectionTitle}>
            A complete growth engine in one retainer
          </h2>
          <p className={lede}>
            Growth Marketing-in-a-Box™ gives you a full-stack growth team and
            technology stack under one monthly fee. We combine:
          </p>
          <div className="mt-11 grid grid-cols-3 max-[860px]:grid-cols-2 max-[560px]:grid-cols-1 gap-4">
            {SOLUTIONS.map(({ tag, label }) => (
              <div
                className="bg-white border border-[var(--line)] rounded-[14px] px-6 py-[26px] font-medium text-[16px]"
                key={tag}
              >
                <span className="block font-[var(--font-mono),_monospace] text-[11px] tracking-[0.12em] uppercase text-[var(--orange)] mb-2.5">
                  {tag}
                </span>
                {label}
              </div>
            ))}
          </div>
          <p className="mt-7 text-[var(--muted)] text-base">
            Everything is aligned to your goals, your ICP, and your funnel
            stages.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24">
        <div className="max-w-[1080px] mx-auto px-6">
          <span className={eyebrow}>How it works</span>
          <h2 className={sectionTitle}>
            From discovery to scale, in four steps
          </h2>
          <div className="mt-[52px] grid grid-cols-4 max-[860px]:grid-cols-2 max-[560px]:grid-cols-1 gap-8">
            {STEPS.map(({ title, body }, i) => (
              <div
                className="relative pt-[22px] before:content-[''] before:absolute before:top-0 before:left-0 before:w-11 before:h-[3px] before:bg-[var(--orange)] before:rounded-sm"
                key={title}
              >
                <span className="block font-[var(--font-mono),_monospace] text-[13px] text-[var(--orange)] mb-2.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[19px] mb-2 font-[var(--font-display),_sans-serif]">
                  {title}
                </h3>
                <p className="text-[var(--muted)] text-[15px]">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link className={btnPrimary} href="/#pricing">
              Start With a Free Strategy Call
            </Link>
          </div>
        </div>
      </section>

      {/* PACKAGE */}
      <section className="py-24 bg-[var(--tint)]" id="package">
        <div className="max-w-[1080px] mx-auto px-6">
          <span className={eyebrow}>What&apos;s in the box</span>
          <h2 className={sectionTitle}>What&apos;s included in the retainer</h2>
          <p className={lede}>
            One price. Three powerful segments. No hidden complexity.
          </p>

          <div className="mt-[52px] grid grid-cols-2 max-[760px]:grid-cols-1 border-2 border-[var(--ink)] rounded-[18px] overflow-hidden bg-white">
            {/* Segment 01 */}
            <div className="p-9 max-[760px]:px-6 border-r border-b border-[var(--line)] max-[760px]:border-r-0">
              <span className="block font-[var(--font-mono),_monospace] text-[11px] tracking-[0.14em] uppercase text-[var(--orange)] mb-3">
                Segment 01
              </span>
              <h3 className="text-[21px] mb-4 font-[var(--font-display),_sans-serif]">
                Core Growth Marketing Operations
              </h3>
              <ul className="grid gap-[9px]">
                {[
                  "Daily creative design & content",
                  "Daily social media management",
                  "SEO strategy & execution",
                  "Email marketing — campaigns + automation",
                  "Website management: optimization, landing pages, updates",
                  "Paid ads coordination & reporting",
                ].map((li) => (
                  <li
                    className="relative pl-5 text-[15px] text-[var(--muted)] before:content-['—'] before:absolute before:left-0 before:text-[var(--orange)]"
                    key={li}
                  >
                    {li}
                  </li>
                ))}
              </ul>
            </div>

            {/* Segment 02 */}
            <div className="p-9 max-[760px]:px-6 border-b border-[var(--line)]">
              <span className="block font-[var(--font-mono),_monospace] text-[11px] tracking-[0.14em] uppercase text-[var(--orange)] mb-3">
                Segment 02
              </span>
              <h3 className="text-[21px] mb-4 font-[var(--font-display),_sans-serif]">
                Performance Marketing
              </h3>
              <ul className="grid gap-[9px]">
                {[
                  "Channels: Google, Meta, TikTok, LinkedIn, Snapchat",
                  "Strategy based on customer profiling & funnel stage",
                  "Continuous optimization & transparent reporting",
                  "25% of cost is dedicated to paid ads and managed transparently. You might be advised to top-up your ad spend based on the scope and objectives of your brand/campaign",
                ].map((li) => (
                  <li
                    className="relative pl-5 text-[15px] text-[var(--muted)] before:content-['—'] before:absolute before:left-0 before:text-[var(--orange)]"
                    key={li}
                  >
                    {li}
                  </li>
                ))}
              </ul>
            </div>

            {/* Segment 03 */}
            <div className="p-9 max-[760px]:px-6 border-r border-[var(--line)] max-[760px]:border-r-0 max-[760px]:border-b">
              <span className="block font-[var(--font-mono),_monospace] text-[11px] tracking-[0.14em] uppercase text-[var(--orange)] mb-3">
                Segment 03
              </span>
              <h3 className="text-[21px] mb-4 font-[var(--font-display),_sans-serif]">
                Custom CRM Software
              </h3>
              <ul className="grid gap-[9px]">
                {[
                  "Lead capture from all digital sources",
                  "Pipeline management with stages & tasks",
                  "Marketing & sales KPI dashboards",
                  "Multi-source analytics",
                  "Sales enablement: templates, scripts, proposals",
                  "Lead generation via scraping, refining, and scoring",
                ].map((li) => (
                  <li
                    className="relative pl-5 text-[15px] text-[var(--muted)] before:content-['—'] before:absolute before:left-0 before:text-[var(--orange)]"
                    key={li}
                  >
                    {li}
                  </li>
                ))}
              </ul>
            </div>

            {/* Segment 04 */}
            <div className="p-9 max-[760px]:px-6">
              <span className="inline-block font-[var(--font-mono),_monospace] text-[11px] bg-[var(--yellow)] text-[var(--ink)] px-2.5 py-1 rounded-md tracking-[0.1em] uppercase align-middle">
                Add-on
              </span>
              <h3 className="text-[21px] mb-4 font-[var(--font-display),_sans-serif]">
                Amplify
              </h3>
              <ul className="grid gap-[9px]">
                {[
                  "Website (re)design",
                  "Programmatic advertising",
                  "Digital media buying — banners, sponsored content",
                  "Digital PR",
                  "Experiential marketing",
                  "Traditional marketing: TV, OOH, radio, print",
                ].map((li) => (
                  <li
                    className="relative pl-5 text-[15px] text-[var(--muted)] before:content-['—'] before:absolute before:left-0 before:text-[var(--orange)]"
                    key={li}
                  >
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14 text-center">
            <Link className={btnGhost} href="#">
              See Full Proposal
            </Link>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24">
        <div className="max-w-[1080px] mx-auto px-6">
          <span className={eyebrow}>Outcomes</span>
          <h2 className={sectionTitle}>The business impact you can expect</h2>
          <div className="mt-12 grid grid-cols-2 max-[700px]:grid-cols-1 gap-x-16 max-w-[900px]">
            {BENEFITS.map(({ title, body }) => (
              <div
                className="py-[26px] border-b border-[var(--line)]"
                key={title}
              >
                <h3 className="text-[18px] mb-1.5 font-[var(--font-display),_sans-serif]">
                  {title}
                </h3>
                <p className="text-[var(--muted)] text-[15px]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR WHO */}
      <section className="py-24 bg-[var(--tint)]">
        <div className="max-w-[1080px] mx-auto px-6">
          <span className={eyebrow}>Who it&apos;s for</span>
          <h2 className={sectionTitle}>
            Built for scaling businesses in Africa &amp; beyond
          </h2>
          <div className="mt-10 flex flex-wrap gap-3 max-w-[760px]">
            {WHO.map((item) => (
              <span
                className="border-[1.5px] border-[var(--line)] bg-white rounded-full px-[22px] py-3 text-[15px] font-medium"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mt-8 font-semibold text-xl max-w-[560px] font-[var(--font-display),_sans-serif]">
            If you&apos;re serious about growth and need a{" "}
            <em className="not-italic text-[var(--orange)]">system</em> — not
            just a vendor — this is for you.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24" id="pricing">
        <div className="max-w-[1080px] mx-auto px-6">
          <span className={`${eyebrow} text-center block`}>Pricing</span>
          <h2 className={`${sectionTitle} text-center mx-auto`}>
            Simple, transparent pricing
          </h2>

          <div className="price-card-shadow mt-[52px] mx-auto max-w-[520px] bg-white border-2 border-[var(--ink)] rounded-[20px] px-10 py-11 text-center">
            <span className="font-[var(--font-mono),_monospace] text-xs tracking-[0.14em] uppercase text-[var(--orange)]">
              Pricing starts from...
            </span>
            <div className="text-[56px] relative font-bold mt-3.5 mb-0.5 font-[var(--font-display),_sans-serif]">
              $2,000{" "}
              <span className="text-white text-[10px] absolute right-4 bg-[var(--orange)] font-[var(--font-display) px-2 py-1 rounded-full">
                local currency equivalent.
              </span>
            </div>
            <div className="text-[var(--muted)] text-[15px] mb-[26px]">
              per month, based on scope of service.
            </div>
            <ul className="text-left grid gap-3 mb-[30px]">
              {[
                "All Segments 1–3 included",
                "Custom CRM access",
                "Paid ads management across 5 channels",
                "Weekly reviews + monthly reports",
                "Option to add Amplify services",
              ].map((li) => (
                <li className="flex gap-3 items-start text-[15.5px]" key={li}>
                  <span className="flex-none w-[22px] h-[22px] rounded-full bg-[var(--yellow)] text-[var(--ink)] grid place-items-center text-xs font-bold">
                    ✓
                  </span>
                  {li}
                </li>
              ))}
            </ul>
            <Link className={`${btnPrimary} w-full`} href="#">
              Book Your Strategy Call
            </Link>
          </div>

          <p className="max-w-[520px] mx-auto mt-[26px] text-[var(--muted)] text-[13.5px] text-center leading-[1.7]">
            25% of total cost will be dedicated to paid ads and managed
            transparently. Amplify services are priced per project or as tiered
            packages. Minimum 6-month engagement to ensure setup, testing, and
            results.
          </p>
        </div>
      </section>

      {/* 90 DAYS */}
      <section className="py-24 bg-[var(--tint)]">
        <div className="max-w-[1080px] mx-auto px-6">
          <span className={eyebrow}>Timeline</span>
          <h2 className={sectionTitle}>What happens in your first 90 days</h2>
          <div className="mt-[52px] grid grid-cols-3 max-[820px]:grid-cols-1 gap-4">
            {[
              {
                m: "Month 1",
                title: "Foundation & Setup",
                items: [
                  "Discovery, profiling, and audit",
                  "CRM setup & integrations",
                  "Content calendar & initial campaigns",
                  "First paid ads launches",
                ],
              },
              {
                m: "Month 2",
                title: "Optimization & Scale",
                items: [
                  "Refine messaging & creative",
                  "Optimize SEO, landing pages, and automations",
                  "Expand audiences and channels",
                ],
              },
              {
                m: "Month 3",
                title: "Performance & Strategy Review",
                items: [
                  "Deep performance analysis",
                  "Identify high-ROI opportunities",
                  "Plan the next 3–6 months",
                  "Consider adding Amplify services",
                ],
              },
            ].map(({ m, title, items }) => (
              <div
                className="bg-white border border-[var(--line)] rounded-[14px] px-7 py-[30px]"
                key={m}
              >
                <span className="block font-[var(--font-mono),_monospace] text-xs text-[var(--orange)] tracking-[0.12em] uppercase mb-2.5">
                  {m}
                </span>
                <h3 className="text-[19px] mb-3.5 font-[var(--font-display),_sans-serif]">
                  {title}
                </h3>
                <ul className="grid gap-2">
                  {items.map((li) => (
                    <li
                      className="relative pl-[18px] text-[14.5px] text-[var(--muted)] before:content-['·'] before:absolute before:left-[2px] before:text-[var(--orange)] before:font-bold"
                      key={li}
                    >
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link className={btnPrimary} href="/#pricing">
              Start Your 90-Day Growth Sprint
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24" id="faq">
        <div className="max-w-[1080px] mx-auto px-6">
          <span className={eyebrow}>FAQ</span>
          <h2 className={sectionTitle}>Frequently asked questions</h2>
          <div className="max-w-[720px] mt-11">
            {FAQS.map(({ q, a }, i) => (
              <details
                className={`border-b border-[var(--line)] ${i === 0 ? "border-t" : ""}`}
                key={q}
              >
                <summary className="cursor-pointer py-[22px] font-semibold text-[17px] flex justify-between gap-5 items-center">
                  {q}{" "}
                  <span className="plus text-[var(--orange)] font-[var(--font-mono),_monospace] text-lg flex-none transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="pb-[22px] text-[var(--muted)] text-[15.5px] max-w-[640px]">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-[110px] bg-[var(--ink)] text-[var(--paper)] text-center">
        <div className="max-w-[1080px] mx-auto px-6">
          <h2 className="text-[clamp(30px,4.6vw,46px)] max-w-[720px] mx-auto font-bold font-[var(--font-display),_sans-serif]">
            Ready to turn marketing into a predictable growth engine?
          </h2>
          <p className="text-[#afbbd9] max-w-[560px] mx-auto mt-5 text-[17px]">
            Stop guessing. Start scaling with a complete system that ties
            content, channels, data, and sales into one streamlined operation.
          </p>
          <div className="mt-[38px] flex gap-3.5 justify-center flex-wrap">
            <Link
              className={`${btnPrimary} bg-[var(--orange)] hover:bg-[#ff6e2e]`}
              href="/#pricing"
            >
              Get Your Growth Plan
            </Link>
            <Link
              className={`${btn} border-[#3a4e85] text-[var(--paper)] hover:border-[var(--orange)] hover:text-[var(--orange)]`}
              href="#"
            >
              Download Full Proposal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
