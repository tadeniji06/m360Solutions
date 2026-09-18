"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";

const Pricing = () => {
    const [activeTab, setActiveTab] = useState<"B2C" | "B2B">("B2C");

    const plans = {
        B2C: [
            {
                name: "Starter",
                price: "₦1.5M Total",
                features: [
                    "₦500k setup",
                    "100 leads @ ₦10,000.",
                    "30-day delivery.",
                    "Full setup suite",
                    "30-day CRM access",
                    "Weekly KPI reports."
                ]
            },
            {
                name: "Growth",
                price: "₦3M Total",
                features: [
                    "₦500k setup",
                    "250 leads @ ₦10,000.",
                    "60-day delivery.",
                    "Everything in Starter + priority support (24-hr response)",
                    "Bi-weekly strategy calls."
                ]
            },
            {
                name: "Scale",
                price: "₦5.5M Total",
                features: [
                    "₦500k setup",
                    "500 leads @ ₦10,000.",
                    "30-day delivery.",
                    "Full setup suite,",
                    "30-day CRM access",
                    "Weekly KPI reports."
                ]
            },
            {
                name: "Enterprise",
                price: "₦10M Total",
                features: [
                    "₦500k setup",
                    "950 leads @ ₦10,000",
                    "120-day delivery.",
                    "Everything in Scale + API integration, dedicated team.",
                    "Monthly in-person sessions."
                ]
            }
        ],
        B2B: [
            {
                name: "Starter",
                price: "₦1.5M Total",
                features: [
                    "₦500k setup",
                    "50 leads @ ₦20,000.",
                    "30-day delivery.",
                    "Full setup suite",
                    "30-day CRM access",
                    "Weekly KPI reports."
                ]
            },
            {
                name: "Growth",
                price: "₦3M Total",
                features: [
                    "₦500k setup",
                    "125 leads @ ₦20,000.",
                    "60-day delivery.",
                    "Everything in Starter + priority support (24-hr response)",
                    "Bi-weekly strategy calls."
                ]
            },
            {
                name: "Scale",
                price: "₦5.5M Total",
                features: [
                    "₦500k setup",
                    "250 leads @ ₦20,000.",
                    "30-day delivery.",
                    "Full setup suite",
                    "30-day CRM access",
                    "Weekly KPI reports."
                ]
            },
            {
                name: "Enterprise",
                price: "₦10M Total",
                features: [
                    "₦500k setup",
                    "475 leads @ ₦20,000",
                    "120-day delivery.",
                    "Everything in Scale + API integration, dedicated team.",
                    "Monthly in-person sessions."
                ]
            }
        ]
    };

	return (
		<section className="px-6 py-24 bg-[#061b4b]">
			<div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Pricing
                    </h2>
                    <p className="text-xl text-gray-300 mb-10">Simple, Transparent Pricing</p>
                    
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {plans[activeTab].map((plan, idx) => (
                        <div key={idx} className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-xl flex flex-col h-full hover:border-[#ff5100]/50 transition-colors duration-300">
                            <div className="bg-[#ff5100] p-6 md:p-8 flex items-center gap-4">
                                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                                <span className="text-white/70">—</span>
                                <span className="text-2xl font-bold text-white">{plan.price}</span>
                            </div>
                            <div className="p-6 md:p-8 flex-grow">
                                <ul className="space-y-4">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-300">
                                            <span className="text-white mt-1 shrink-0">•</span>
                                            <span className="leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
			</div>
		</section>
	);
};

export default Pricing;
