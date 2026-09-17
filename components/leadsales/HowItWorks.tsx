"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";

const HowItWorks = () => {
    const [activeTab, setActiveTab] = useState<"B2C" | "B2B">("B2C");

    const steps = {
        B2C: [
            {
                step: 1,
                title: "Setup & Training",
                timeline: "Days 1–7",
                cost: "₦500k one-time",
                bullets: [
                    "CRM configured",
                    "Ad copy written",
                    "Sales scripts built",
                    "Auto-follow-up cadences set",
                    "2-day team training",
                    "Launch-ready by Day 8"
                ]
            },
            {
                step: 2,
                title: "Lead Delivery",
                timeline: "Days 8–30",
                cost: "₦10,000/lead (min 200)",
                bullets: [
                    "Meta/Google ads targeting verified buyers",
                    "Pre-qualification at capture",
                    "Leads delivered to CRM in real-time",
                    "Automated follow-up for 7–14 days (no lead goes cold)",
                    "Weekly KPI reports"
                ]
            },
            {
                step: 3,
                title: "Conversion & Revenue",
                timeline: "Days 15–30+",
                cost: "Continuous",
                bullets: [
                    "Your sales team contact leads within 5 minutes (9x higher conversion)",
                    "Track every lead in CRM (lead → qualified → proposal → closed)",
                    "Weekly KPI reports (conversion rates, ROAS, revenue generated)",
                    "Monthly business review (optimize for even better results)"
                ]
            }
        ],
        B2B: [
            {
                step: 1,
                title: "Setup & Training",
                timeline: "Days 1–7",
                cost: "₦500k one-time",
                bullets: [
                    "CRM configured",
                    "Ad copy written",
                    "Sales scripts built",
                    "Auto-follow-up cadences set",
                    "2-day team training",
                    "Launch-ready by Day 8"
                ]
            },
            {
                step: 2,
                title: "Lead Delivery",
                timeline: "Days 8–30",
                cost: "₦20,000/lead (min 200)",
                bullets: [
                    "Meta/Google ads targeting verified buyers",
                    "Pre-qualification at capture",
                    "Leads delivered to CRM in real-time",
                    "Automated follow-up for 7–14 days (no lead goes cold)",
                    "Weekly KPI reports"
                ]
            },
            {
                step: 3,
                title: "Conversion & Revenue",
                timeline: "Days 15–30+",
                cost: "Continuous",
                bullets: [
                    "Your sales team contact leads within 5 minutes (9x higher conversion)",
                    "Track every lead in CRM (lead → qualified → proposal → closed)",
                    "Weekly KPI reports (conversion rates, ROAS, revenue generated)",
                    "Monthly business review (optimize for even better results)"
                ]
            }
        ]
    };

	return (
		<section className="px-6 py-24 bg-slate-900/50">
			<div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">
                        How It Works
                    </h2>
                    
                    {/* Tabs */}
                    <div className="inline-flex bg-slate-800 rounded-full p-1 border border-slate-700">
                        <button 
                            onClick={() => setActiveTab("B2C")}
                            className={`px-8 py-3 rounded-full text-lg font-bold transition-all ${activeTab === "B2C" ? "bg-[#ff5100] text-white shadow-md" : "text-gray-400 hover:text-white"}`}
                        >
                            B2C
                        </button>
                        <button 
                            onClick={() => setActiveTab("B2B")}
                            className={`px-8 py-3 rounded-full text-lg font-bold transition-all ${activeTab === "B2B" ? "bg-[#ff5100] text-white shadow-md" : "text-gray-400 hover:text-white"}`}
                        >
                            B2B
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {steps[activeTab].map((step) => (
                        <div key={step.step} className="bg-[#061b4b] rounded-2xl border border-[#ff5100]/30 p-8 relative pt-12 hover:border-[#ff5100] transition-colors">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#ff5100] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                                {step.step}
                            </div>
                            
                            <div className="text-center border-b border-slate-700 pb-6 mb-6">
                                <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                                <div className="text-[#fcc935] font-medium">{step.timeline}</div>
                                {step.cost !== "Continuous" && (
                                    <div className="text-gray-300 text-sm mt-1">{step.cost}</div>
                                )}
                            </div>
                            
                            <ul className="space-y-4">
                                {step.bullets.map((bullet, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                                        <Icon icon="lucide:check-circle-2" className="w-5 h-5 text-[#ff5100] shrink-0 mt-0.5" />
                                        <span className="leading-relaxed">{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {activeTab === "B2B" && (
                    <div className="mt-20 pt-16 border-t border-slate-800">
                        <h3 className="text-3xl font-bold text-white mb-12 text-center">B2B Timeline</h3>
                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-700 -translate-y-1/2 hidden md:block"></div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                {[
                                    { day: "Days 7–10", desc: "First consultations/demos booked" },
                                    { day: "Days 14–21", desc: "First proposals sent" },
                                    { day: "Days 30–45", desc: "First deals closed" },
                                    { day: "Day 30+", desc: "Consistent revenue flow" },
                                ].map((milestone, idx) => (
                                    <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                                        <div className="w-10 h-10 bg-[#ff5100] rounded-lg text-white font-bold flex items-center justify-center mb-4 shadow-lg shadow-[#ff5100]/20">
                                            {idx + 1}
                                        </div>
                                        <h4 className="text-[#fcc935] font-bold mb-2">{milestone.day}</h4>
                                        <p className="text-gray-300 text-sm max-w-[200px]">{milestone.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
			</div>
		</section>
	);
};

export default HowItWorks;
