"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { sendConsultationEmail } from "@/app/actions/contact";

/* ---------------------------------------------------------------------
   Page-only styles mirroring /growth. 
--------------------------------------------------------------------- */
const PageStyles = () => (
  <style>{`
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

    .price-card-shadow {
      box-shadow: 8px 8px 0 var(--yellow);
    }

    summary::-webkit-details-marker { display: none; }
    summary { list-style: none; }
    details[open] .plus { transform: rotate(45deg); }

    @media (prefers-reduced-motion: reduce) {
      * { transition: none !important; scroll-behavior: auto !important; }
    }
  `}</style>
);

/* shared class fragments */
const btn =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-base transition-transform duration-150 border-[1.5px] border-transparent focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-[var(--orange)]";
const btnPrimary = `${btn} bg-[var(--orange)] text-white hover:bg-[var(--orange-deep)] hover:-translate-y-px shadow-lg shadow-orange-500/20`;
const btnGhost = `${btn} border-[var(--line)] text-[var(--ink)] bg-transparent hover:border-[var(--orange)] hover:text-[var(--orange)]`;
const eyebrow =
  "block font-[var(--font-mono),_monospace] text-xs tracking-[0.14em] uppercase text-[var(--orange)] mb-[18px]";
const sectionTitle =
  "text-[clamp(28px,4vw,40px)] font-bold max-w-[640px] font-[var(--font-display),_sans-serif]";
const lede = "text-[var(--muted)] max-w-[600px] mt-4 text-lg";

/* Data */
const PAIN_POINTS = [
  { title: "Cold Leads", desc: "Never pick up the phone" },
  { title: "Wrong Budget", desc: "Can't afford your product" },
  { title: "Long Timelines", desc: "\"I'll buy in 6–12 months\"" },
  { title: "No Authority", desc: "Just researching, no decision power" },
  { title: "No Follow-Up", desc: "Leads go cold in 48 hours" },
  { title: "Untrained Team", desc: "Weak closing, poor objection handling" }
];

const SOLUTIONS = [
  { tag: "Quality", label: "Budget-confirmed, timeline <6 months, decision-makers only", title: "Pre-Qualified Leads" },
  { tag: "Systems", label: "WhatsApp-native, pipeline tracking, auto-cadences", title: "CRM System" },
  { tag: "Acquire", label: "5–10 variations tested weekly for maximum ROI", title: "High-Converting Ad Copy" },
  { tag: "Enable", label: "Opening, qualification, objection handling, closing", title: "Sales Scripts" },
  { tag: "Nurture", label: "7–14 day nurture sequences via WhatsApp, email, SMS", title: "Auto-Follow-Up" },
  { tag: "Train", label: "2-day workshop for your entire team", title: "Sales Training" }
];

const REASONS = [
  { title: "Pre-Qualified Leads Only", body: "We verify budget, timeline, and decision-maker status at capture. No cold leads, no wrong budget, no \"just researching.\"" },
  { title: "Full Sales Enablement", body: "We train your team, provide scripts, set up auto-follow-up, and give you a CRM to track everything." },
  { title: "Proven Across Industries", body: "Real estate, financial services, B2B tech, professional services, healthcare, education, retail, manufacturing — results in 8+ industries." },
  { title: "Transparent Pricing", body: "No hidden fees. No surprises. You know exactly what you're paying for upfront." },
  { title: "Money-Back Guarantee", body: "If we don't deliver 200+ pre-qualified leads in 30 days, you get a full refund. No questions asked." },
  { title: "Exclusive Partnerships", body: "We only work with 3–5 clients per industry to maintain quality and avoid conflicts. Your competitive advantage is protected." },
  { title: "Real-Time Visibility", body: "Full CRM access with real-time dashboard. See every lead, every interaction, every deal, and every naira of revenue generated." },
  { title: "Continuous Optimization", body: "Weekly ad optimization, bi-weekly strategy calls, monthly business reviews. We're constantly improving your results." }
];

const AVAILABILITY = [
    { industry: "Financial Services", spots: "1 spot left" },
    { industry: "B2B Technology", spots: "2 spots left" },
    { industry: "Professional Services", spots: "2 spots left" },
    { industry: "Healthcare", spots: "3 spots left" },
    { industry: "Real Estate", spots: "2 spots left" },
    { industry: "Education", spots: "3 spots left" },
    { industry: "Retail", spots: "4 spots left" },
    { industry: "Manufacturing", spots: "5 spots left" }
];

export default function LeadSalesPage() {
  const [activeTab, setActiveTab] = useState<"B2C" | "B2B">("B2C");
  const [pricingTab, setPricingTab] = useState<"B2C" | "B2B">("B2C");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      setIsSubmitting(true);
      setError("");
      const formData = new FormData(e.currentTarget);
      const result = await sendConsultationEmail(formData);
      
      if (result.success) {
          setIsSuccess(true);
      } else {
          setError(result.error || "An error occurred");
      }
      setIsSubmitting(false);
  }

  const ContactForm = () => (
      <>
          {isSuccess ? (
              <div className="bg-[#eaf8f1] border border-[#a8e6cf] text-[#2d6a4f] p-6 rounded-xl text-center">
                  <Icon icon="mdi:check-circle" className="w-12 h-12 mx-auto mb-2 text-[#40916c]" />
                  <h4 className="text-lg font-bold mb-2">Request Sent Successfully!</h4>
                  <p className="text-sm">We will get back to you shortly to schedule your consultation.</p>
              </div>
          ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                      <input type="text" name="firstName" placeholder="First Name" required minLength={2} maxLength={50} className="w-full px-4 py-3 rounded-xl border border-[var(--line)] bg-[var(--paper)] focus:outline-none focus:border-[var(--orange)] transition-colors text-[var(--ink)]" />
                      <input type="text" name="lastName" placeholder="Last Name" required minLength={2} maxLength={50} className="w-full px-4 py-3 rounded-xl border border-[var(--line)] bg-[var(--paper)] focus:outline-none focus:border-[var(--orange)] transition-colors text-[var(--ink)]" />
                  </div>
                  <input type="tel" name="phone" placeholder="Phone Number" required minLength={10} maxLength={15} onInput={(e) => (e.currentTarget.value = e.currentTarget.value.replace(/[^0-9+]/g, ''))} className="w-full px-4 py-3 rounded-xl border border-[var(--line)] bg-[var(--paper)] focus:outline-none focus:border-[var(--orange)] transition-colors text-[var(--ink)]" />
                  <textarea name="message" placeholder="Message" rows={3} required minLength={10} maxLength={1000} className="w-full px-4 py-3 rounded-xl border border-[var(--line)] bg-[var(--paper)] focus:outline-none focus:border-[var(--orange)] transition-colors resize-none text-[var(--ink)]"></textarea>
                  
                  {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                  
                  <button type="submit" disabled={isSubmitting} className={`${btnPrimary} w-full py-4 text-lg disabled:opacity-70`}>
                      {isSubmitting ? "Sending..." : "Book Strategy Call Now"}
                  </button>
              </form>
          )}
      </>
  );

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="bg-[var(--paper)] text-[var(--ink)] leading-[1.6] text-[17px] antialiased font-[var(--font-body),_system-ui,_sans-serif]">
      <PageStyles />

      {/* HERO */}
      <header className="hero-grid relative overflow-hidden pt-[120px] pb-[88px] text-center bg-[var(--tint)]" id="top">
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 max-w-[1080px] mx-auto px-6"
        >
          <motion.span variants={fadeIn} className={eyebrow}>
            Stop Wasting Money on Cold Leads
          </motion.span>
          <motion.h1 variants={fadeIn} className="text-[clamp(40px,6.4vw,72px)] font-bold max-w-[980px] mx-auto leading-[1.12] tracking-[-0.01em]">
            Get 200–1,000 <br />
            <span className="boxed relative inline-block text-[var(--orange)] border-[2.5px] border-[var(--orange)] rounded-[10px] px-[0.22em] leading-[1.05] mt-2">
              Pre-Qualified Buyers
            </span>
            <br />
            Every Month
          </motion.h1>
          
          <motion.p variants={fadeIn} className="font-semibold text-[clamp(19px,2.4vw,25px)] text-[var(--muted)] mt-[26px] font-[var(--font-display),_sans-serif] max-w-[720px] mx-auto">
            <strong className="text-[var(--ink)]">Budget Verified. Timeline Confirmed. Decision-Makers Only.</strong><br/>
            A complete revenue system — not just leads.
          </motion.p>
          
          <motion.div variants={fadeIn} className="mt-10 flex gap-3.5 justify-center flex-wrap">
            <button className={btnPrimary} onClick={() => setIsModalOpen(true)}>
              Book Your Free Strategy Call
              <Icon icon="material-symbols:arrow-forward-rounded" className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      </header>

      {/* PROBLEM */}
      <section className="py-24 border-y border-[var(--line)]">
        <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-[1080px] mx-auto px-6"
        >
          <motion.span variants={fadeIn} className={eyebrow}>The Problem</motion.span>
          <motion.h2 variants={fadeIn} className={sectionTitle}>Are You Burning Millions on Leads That Never Convert?</motion.h2>
          <motion.p variants={fadeIn} className={lede}>
            You're spending heavily on marketing. But your results look like this — and you're not alone. This is the <strong className="text-[var(--ink)]">#1 frustration</strong> we hear from business owners across Nigeria.
          </motion.p>
          
          <motion.div variants={fadeIn} className="mt-12 grid grid-cols-2 max-[760px]:grid-cols-1 gap-4 max-w-[900px]">
            {PAIN_POINTS.map((item, i) => (
              <div className="flex gap-[18px] items-start p-5 bg-white border border-[var(--line)] rounded-[14px]" key={item.title}>
                <span className="text-[var(--orange)] font-[var(--font-mono),_monospace] text-sm flex-none mt-1">✕</span>
                <div>
                  <h3 className="font-bold text-[18px] text-[var(--ink)]">{item.title}</h3>
                  <p className="text-[15px] text-[var(--muted)] mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
          
          <motion.div variants={fadeIn} className="mt-12 bg-[#fff3ce] border border-[#fcc935] rounded-2xl p-6 md:p-8 max-w-[900px] flex items-center gap-5">
            <span className="text-3xl flex-none">⚠️</span>
            <p className="text-[clamp(17px,2vw,19px)] text-[var(--ink)] font-medium leading-relaxed">
              <strong className="font-bold">The Result:</strong> You spend ₦5M–₦20M/month on marketing but close only 2–5% of leads. Sound familiar?
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* SOLUTION */}
      <section className="py-24 bg-[var(--tint)]">
        <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-[1080px] mx-auto px-6"
        >
          <motion.span variants={fadeIn} className={eyebrow}>The solution</motion.span>
          <motion.h2 variants={fadeIn} className={sectionTitle}>
            Introducing: Pre-Qualified Leads + Full Sales Enablement
          </motion.h2>
          <motion.p variants={fadeIn} className={lede}>
            We don't just send you leads. We deliver a complete revenue system — and we're <strong className="text-[var(--ink)]">40–60% cheaper</strong> than agencies charging ₦10,000–₦15,000/lead because we've systematized delivery.
          </motion.p>
          
          <motion.div variants={fadeIn} className="mt-12 grid grid-cols-3 max-[860px]:grid-cols-2 max-[560px]:grid-cols-1 gap-4">
            {SOLUTIONS.map(({ tag, title, label }) => (
              <div className="bg-white border border-[var(--line)] rounded-[14px] px-6 py-[26px] hover:border-[var(--orange)] transition-colors duration-300" key={tag}>
                <span className="block font-[var(--font-mono),_monospace] text-[11px] tracking-[0.12em] uppercase text-[var(--orange)] mb-2.5">
                  {tag}
                </span>
                <h3 className="font-bold text-[18px] mb-2">{title}</h3>
                <p className="text-[var(--muted)] text-[15px]">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className={`${eyebrow} text-center block`}>Process</span>
            <h2 className={`${sectionTitle} text-center mx-auto mb-10`}>How It Works</h2>
            
            <div className="inline-flex bg-[var(--tint)] rounded-full p-1 border border-[var(--line)]">
                <button 
                    onClick={() => setActiveTab("B2C")}
                    className={`px-8 py-2.5 rounded-full font-semibold text-[15px] transition-all ${activeTab === "B2C" ? "bg-white text-[var(--ink)] shadow-sm border border-[var(--line)]" : "text-[var(--muted)] hover:text-[var(--ink)]"}`}
                >
                    B2C Operations
                </button>
                <button 
                    onClick={() => setActiveTab("B2B")}
                    className={`px-8 py-2.5 rounded-full font-semibold text-[15px] transition-all ${activeTab === "B2B" ? "bg-white text-[var(--ink)] shadow-sm border border-[var(--line)]" : "text-[var(--muted)] hover:text-[var(--ink)]"}`}
                >
                    B2B Operations
                </button>
            </div>
          </div>

          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-3 max-[860px]:grid-cols-1 gap-6"
          >
            {/* Steps data matches B2B and B2C exactly in content, except cost per lead */}
            {[
                { 
                    num: "01", title: "Setup & Training", timeline: "Days 1–7", cost: "₦1M one-time",
                    bullets: ["CRM configured", "Ad copy written", "Sales scripts built", "Auto-follow-up cadences set", "2-day team training", "Launch-ready by Day 8"]
                },
                { 
                    num: "02", title: "Lead Delivery", timeline: "Days 8–30", 
                    cost: activeTab === "B2C" ? "₦10,000/lead (min 200)" : "₦20,000/lead (min 200)",
                    bullets: ["Meta/Google ads targeting verified buyers", "Pre-qualification at capture", "Leads delivered to CRM in real-time", "Automated follow-up for 7–14 days (no lead goes cold)", "Weekly KPI reports"]
                },
                { 
                    num: "03", title: "Conversion & Revenue", timeline: "Days 15–30+", cost: "Continuous Focus",
                    bullets: ["Your sales team contact leads within 5 minutes (9x higher conversion)", "Track every lead in CRM (lead → qualified → proposal → closed)", "Weekly KPI reports (conversion rates, ROAS, revenue generated)", "Monthly business review"]
                }
            ].map((step, i) => (
                <div className="bg-white border-2 border-[var(--line)] rounded-[18px] p-8 hover:border-[var(--ink)] transition-colors relative" key={step.num}>
                    <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-[var(--yellow)] text-[var(--ink)] font-bold px-3 py-1 rounded-full text-xs uppercase tracking-widest border border-white">
                        {step.timeline}
                    </div>
                    <span className="block font-[var(--font-mono),_monospace] text-[13px] text-[var(--orange)] mb-3">
                        Step {step.num}
                    </span>
                    <h3 className="text-[21px] mb-6 pb-6 border-b border-[var(--line)] font-[var(--font-display),_sans-serif]">{step.title}</h3>
                    
                    <ul className="grid gap-[12px]">
                        {step.bullets.map((li) => (
                            <li className="flex items-start gap-2.5 text-[15px] text-[var(--ink)]" key={li}>
                                <span className="flex-none w-[20px] h-[20px] rounded-full bg-[var(--tint)] text-[var(--orange)] grid place-items-center text-[10px] font-bold mt-0.5">✓</span>
                                <span className="leading-snug">{li}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
          </motion.div>

          {activeTab === "B2B" && (
              <motion.div initial={{opacity: 0, height: 0, y: 10}} animate={{opacity: 1, height: "auto", y: 0}} transition={{ duration: 0.3 }} className="mt-20 pt-16 border-t border-[var(--line)] overflow-hidden">
                  <h3 className="text-[24px] font-bold text-center mb-12 font-[var(--font-display),_sans-serif]">B2B Sales Timeline</h3>
                  <div className="grid grid-cols-4 max-[760px]:grid-cols-2 max-[480px]:grid-cols-1 gap-6 relative">
                      {/* Line connector */}
                      <div className="absolute top-6 left-0 right-0 h-[2px] bg-[var(--line)] hidden md:block z-0"></div>
                      
                      {[
                          { d: "Days 7–10", desc: "First consultations/demos booked" },
                          { d: "Days 14–21", desc: "First proposals sent" },
                          { d: "Days 30–45", desc: "First deals closed" },
                          { d: "Day 30+", desc: "Consistent revenue flow" }
                      ].map((m, i) => (
                          <div className="relative z-10 flex flex-col items-center text-center" key={i}>
                              <div className="w-12 h-12 bg-white border-2 border-[var(--orange)] rounded-xl flex items-center justify-center font-bold text-[var(--orange)] mb-4 text-lg">
                                {i+1}
                              </div>
                              <h4 className="font-bold text-[var(--ink)] mb-1.5">{m.d}</h4>
                              <p className="text-[14.5px] text-[var(--muted)] max-w-[180px]">{m.desc}</p>
                          </div>
                      ))}
                  </div>
              </motion.div>
          )}
        </div>
      </section>

      {/* CASE STUDIES & INDUSTRIES */}
      <section className="py-24 bg-[var(--ink)] text-white">
        <div className="max-w-[1080px] mx-auto px-6">
            <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-16">
                <div>
                    <span className="block font-[var(--font-mono),_monospace] text-xs tracking-[0.14em] uppercase text-[var(--yellow)] mb-[18px]">
                        Proven Results
                    </span>
                    <h2 className="text-[clamp(28px,4vw,40px)] font-bold max-w-[640px] font-[var(--font-display),_sans-serif] mb-6">
                        Real Results from Nigerian Businesses
                    </h2>
                    
                    <div className="grid grid-cols-2 gap-8 mb-12">
                        <div>
                            <div className="text-4xl font-extrabold text-white mb-1">103,240+</div>
                            <div className="text-[var(--yellow)] font-medium text-sm">Leads Delivered</div>
                        </div>
                        <div>
                            <div className="text-4xl font-extrabold text-white mb-1">34%</div>
                            <div className="text-[var(--yellow)] font-medium text-sm">Avg Conversion Rate (Lead to close)</div>
                        </div>
                        <div>
                            <div className="text-4xl font-extrabold text-white mb-1">50x</div>
                            <div className="text-[var(--yellow)] font-medium text-sm">Average ROAS (₦10–₦50 per ₦1 invested)</div>
                        </div>
                        <div>
                            <div className="text-4xl font-extrabold text-white mb-1">₦516M+</div>
                            <div className="text-[var(--yellow)] font-medium text-sm">Revenue Generated for clients</div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xl font-bold">Proven Across 8 Industries:</h3>
                        <div className="flex flex-wrap gap-2.5">
                            {["Real Estate", "Financial Services", "B2B Technology", "Professional Services", "Healthcare", "Education", "Retail", "Manufacturing"].map(ind => (
                                <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium" key={ind}>
                                    {ind}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    {[
                        { t: "Financial Services", rev: "₦120M generated", roas: "40x ROAS", stat: "8 deals closed in 30 days on a ₦3M investment" },
                        { t: "B2B Technology", rev: "₦540M generated", roas: "98x ROAS", stat: "Close rate jumped from 8% to 18%. Recovered ₦100M in dead leads." },
                        { t: "Professional Services", rev: "₦180M generated", roas: "51x ROAS", stat: "12 deals closed from 300 leads. Verified budget and timeline." }
                    ].map((cs, i) => (
                        <div className="bg-[#0b245c] rounded-2xl p-7 border border-[#143275]" key={i}>
                            <h4 className="text-lg font-bold text-[var(--orange)] mb-3">{cs.t}</h4>
                            <div className="flex gap-4 mb-3 border-b border-white/10 pb-3">
                                <span className="text-white font-semibold">{cs.rev}</span>
                                <span className="text-white/40">|</span>
                                <span className="text-[var(--yellow)]">{cs.roas}</span>
                            </div>
                            <p className="text-[#afbbd9] text-sm italic">"{cs.stat}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* QUALIFIED DEFINITION */}
      <section className="py-24 bg-[var(--tint)]">
        <div className="max-w-[1080px] mx-auto px-6">
            <div className="bg-white border-2 border-[var(--ink)] rounded-[20px] p-10 md:p-14 max-w-[800px] mx-auto">
                <span className={eyebrow}>The Standard</span>
                <h2 className="text-[clamp(24px,3vw,32px)] font-bold mb-8 font-[var(--font-display),_sans-serif]">
                    What Makes Leads "Pre-Qualified"?
                </h2>
                <p className="text-[17px] font-semibold mb-6 pb-6 border-b border-[var(--line)]">Every lead meets all criteria before it hits your CRM:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 mb-8">
                    <li className="flex gap-3">
                        <span className="text-[var(--orange)] font-bold mt-0.5">•</span>
                        <div><strong className="text-[var(--ink)]">Budget confirmed:</strong> <br/><span className="text-[var(--muted)] text-[15px]">matches your minimum deal size</span></div>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-[var(--orange)] font-bold mt-0.5">•</span>
                        <div><strong className="text-[var(--ink)]">Timeline:</strong> <br/><span className="text-[var(--muted)] text-[15px]">&lt;6 months to purchase</span></div>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-[var(--orange)] font-bold mt-0.5">•</span>
                        <div><strong className="text-[var(--ink)]">Decision-maker:</strong> <br/><span className="text-[var(--muted)] text-[15px]">direct buyer or authorized rep</span></div>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-[var(--orange)] font-bold mt-0.5">•</span>
                        <div><strong className="text-[var(--ink)]">Contact verified:</strong> <br/><span className="text-[var(--muted)] text-[15px]">valid phone + email</span></div>
                    </li>
                    <li className="flex gap-3 md:col-span-2">
                        <span className="text-[var(--orange)] font-bold mt-0.5">•</span>
                        <div><strong className="text-[var(--ink)]">Interest level:</strong> <br/><span className="text-[var(--muted)] text-[15px]">engaged with specific product/service</span></div>
                    </li>
                </ul>
                <div className="bg-[var(--tint)] rounded-xl p-5 text-center text-[15.5px] font-medium text-[var(--ink)]">
                    We verify this at the ad form stage — no cold leads, no wrong budget, no "just researching."
                </div>
            </div>
        </div>
      </section>

      {/* WHY TRUST US */}
      <section className="py-24">
        <div className="max-w-[1080px] mx-auto px-6">
          <span className={eyebrow}>Why M360</span>
          <h2 className={sectionTitle}>Why 25+ Nigerian Businesses Trust Us</h2>
          <div className="mt-14 grid grid-cols-2 max-[760px]:grid-cols-1 gap-10 max-w-[900px]">
             {REASONS.map((r, i) => (
                 <div className="flex gap-5" key={r.title}>
                     <div className="flex-none font-[var(--font-mono),_monospace] text-sm text-[var(--orange)] mt-1 font-bold">
                        {String(i + 1).padStart(2, "0")}
                     </div>
                     <div>
                         <h3 className="font-bold text-[18px] text-[var(--ink)] mb-1.5">{r.title}</h3>
                         <p className="text-[15px] text-[var(--muted)] leading-relaxed">{r.body}</p>
                     </div>
                 </div>
             ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 bg-[var(--tint)]" id="pricing">
        <div className="max-w-[1080px] mx-auto px-6">
          <span className={`${eyebrow} text-center block`}>Pricing</span>
          <h2 className={`${sectionTitle} text-center mx-auto mb-10`}>
            Simple, transparent pricing
          </h2>

          <div className="text-center mb-12">
            <div className="inline-flex bg-white rounded-full p-1 border border-[var(--line)] shadow-sm">
                <button 
                    onClick={() => setPricingTab("B2C")}
                    className={`px-8 py-2.5 rounded-full font-semibold text-[15px] transition-all ${pricingTab === "B2C" ? "bg-[var(--ink)] text-white shadow-sm" : "text-[var(--muted)] hover:text-[var(--ink)]"}`}
                >
                    B2C Pricing
                </button>
                <button 
                    onClick={() => setPricingTab("B2B")}
                    className={`px-8 py-2.5 rounded-full font-semibold text-[15px] transition-all ${pricingTab === "B2B" ? "bg-[var(--ink)] text-white shadow-sm" : "text-[var(--muted)] hover:text-[var(--ink)]"}`}
                >
                    B2B Pricing
                </button>
            </div>
          </div>

          <motion.div 
            key={pricingTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 max-[860px]:grid-cols-1 gap-8 max-w-[900px] mx-auto"
          >
             {[
                 { 
                     name: "Starter", price: "₦2M", type: "Total",
                     b2cLeads: "100 leads @ ₦10,000", b2bLeads: "50 leads @ ₦20,000",
                     features: ["₦1M setup", "30-day delivery", "Full setup suite", "30-day CRM access", "Weekly KPI reports"]
                 },
                 { 
                     name: "Growth", price: "₦3M", type: "Total", highlighted: true,
                     b2cLeads: "200 leads @ ₦10,000", b2bLeads: "100 leads @ ₦20,000",
                     features: ["₦1M setup", "60-day delivery", "Everything in Starter + priority support (24-hr)", "Bi-weekly strategy calls"]
                 },
                 { 
                     name: "Scale", price: "₦5.5M", type: "Total",
                     b2cLeads: "450 leads @ ₦10,000", b2bLeads: "225 leads @ ₦20,000",
                     features: ["₦1M setup", "30-day delivery", "Full setup suite", "30-day CRM access", "Weekly KPI reports"]
                 },
                 { 
                     name: "Enterprise", price: "₦10M", type: "Total",
                     b2cLeads: "900 leads @ ₦10,000", b2bLeads: "450 leads @ ₦20,000",
                     features: ["₦1M setup", "120-day delivery", "Everything in Scale + API integration", "Dedicated team", "Monthly in-person sessions"]
                 }
             ].map((plan, i) => (
                 <div className={`bg-white border-2 rounded-[20px] px-8 py-10 flex flex-col ${plan.highlighted ? "border-[var(--orange)] price-card-shadow" : "border-[var(--line)]"}`} key={plan.name}>
                    <span className="font-[var(--font-mono),_monospace] text-xs tracking-[0.14em] uppercase text-[var(--orange)]">
                        {plan.name} Package
                    </span>
                    <div className="text-[42px] font-bold mt-2 mb-1 font-[var(--font-display),_sans-serif]">
                        {plan.price}
                    </div>
                    <div className="text-[var(--muted)] text-[15px] mb-8 pb-8 border-b border-[var(--line)]">
                        {plan.type} Investment
                    </div>
                    
                    <ul className="text-left grid gap-3 mb-[30px] flex-grow">
                        <li className="flex gap-3 items-start text-[15.5px] font-bold text-[var(--ink)]">
                            <span className="flex-none w-[22px] h-[22px] rounded-full bg-[var(--yellow)] text-[var(--ink)] grid place-items-center text-xs font-bold mt-0.5">✓</span>
                            {pricingTab === "B2C" ? plan.b2cLeads : plan.b2bLeads}
                        </li>
                        {plan.features.map(f => (
                            <li className="flex gap-3 items-start text-[14.5px] text-[var(--muted)]" key={f}>
                                <span className="flex-none w-[22px] h-[22px] rounded-full bg-[var(--tint)] text-[var(--orange)] grid place-items-center text-[10px] font-bold mt-0.5">✓</span>
                                {f}
                            </li>
                        ))}
                    </ul>
                    
                    <button className={plan.highlighted ? btnPrimary : btnGhost} onClick={() => setIsModalOpen(true)}>
                        Select {plan.name}
                    </button>
                 </div>
             ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-[110px] bg-[var(--ink)] text-[var(--paper)]" id="cta">
        <div className="max-w-[1080px] mx-auto px-6">
            <div className="grid grid-cols-2 max-[860px]:grid-cols-1 gap-16">
                <div>
                    <h2 className="text-[clamp(30px,4.6vw,46px)] max-w-[720px] font-bold font-[var(--font-display),_sans-serif] mb-6">
                        Ready to Stop Wasting Money on Cold Leads?
                    </h2>
                    <p className="text-[var(--yellow)] font-medium mb-10 text-lg">
                        Limited Availability: We only work with 3–5 clients per industry to maintain quality and exclusivity.
                    </p>

                    <h3 className="text-xl font-bold mb-6">Current Availability:</h3>
                    <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-[15px] mb-10">
                        {AVAILABILITY.map(a => (
                            <div className="flex flex-col border-l-2 border-[var(--orange)] pl-3" key={a.industry}>
                                <span className="font-semibold">{a.industry}</span>
                                <span className="text-[#afbbd9]">{a.spots}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white text-[var(--ink)] rounded-[20px] p-8 md:p-10 shadow-2xl">
                    <h3 className="text-2xl font-bold mb-6 font-[var(--font-display),_sans-serif]">Book Your Free 30-Minute Strategy Call</h3>
                    <p className="font-bold mb-4">What you'll get:</p>
                    <ul className="grid gap-3 text-[14.5px] text-[var(--muted)] mb-8 pb-8 border-b border-[var(--line)]">
                        {["Review of your current lead generation & conversion process", "Custom recommendation (which package fits your goals)", "Case studies from similar businesses in your industry", "ROI projection (how much revenue you can expect)", "Q&A: Ask anything about our service"].map(b => (
                            <li className="flex gap-2.5 items-start" key={b}>
                                <span className="text-[var(--orange)] mt-0.5">•</span>
                                <span>{b}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-[var(--orange)] font-bold text-sm text-center mb-6 uppercase tracking-wider">No obligation. No pressure. Just actionable insights.</p>
                    
                    <ContactForm />
                    
                    <div className="mt-8 flex flex-col items-center gap-2 text-sm text-[var(--muted)] font-medium">
                        <span className="flex items-center gap-2"><Icon icon="mdi:phone" className="text-[var(--orange)] text-lg"/> + 234-081-649-8725</span>
                        <span className="flex items-center gap-2"><Icon icon="mdi:email" className="text-[var(--orange)] text-lg"/> damilola@m360solutionsgroup.com</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-[20px] p-8 md:p-10 w-full max-w-lg relative shadow-2xl text-[var(--ink)]">
                <button onClick={() => setIsModalOpen(false)} className="absolute top-5 right-5 text-gray-400 hover:text-gray-800 transition-colors">
                    <Icon icon="mdi:close" className="w-7 h-7" />
                </button>
                <h3 className="text-2xl font-bold mb-2 font-[var(--font-display),_sans-serif]">Book Your Free Strategy Call</h3>
                <p className="text-[var(--muted)] text-sm mb-6 pb-6 border-b border-[var(--line)]">Fill out the form below and we'll get back to you shortly to schedule your consultation.</p>
                
                <ContactForm />
            </motion.div>
        </div>
      )}
    </div>
  );
}
