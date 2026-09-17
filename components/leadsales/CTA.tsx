import { Icon } from "@iconify/react";

const CTA = () => {
    const availability = [
        { industry: "Financial Services", spots: "1 spot left" },
        { industry: "B2B Technology", spots: "2 spots left" },
        { industry: "Professional Services", spots: "2 spots left" },
        { industry: "Healthcare", spots: "3 spots left" },
        { industry: "Real Estate", spots: "2 spots left" },
        { industry: "Education", spots: "3 spots left" },
        { industry: "Retail", spots: "4 spots left" },
        { industry: "Manufacturing", spots: "5 spots left" }
    ];

    const benefits = [
        "Review of your current lead generation & conversion process",
        "Custom recommendation (which package fits your goals)",
        "Case studies from similar businesses in your industry",
        "ROI projection (how much revenue you can expect)",
        "Q&A: Ask anything about our service"
    ];

	return (
		<section className="px-6 py-24 bg-[#061b4b]">
			<div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        Ready to Stop Wasting Money on <span className="text-[#ff5100]">Cold Leads?</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 font-medium">
                        <span className="text-white font-bold">Limited Availability:</span> We only work with 3–5 clients per industry to maintain quality and exclusivity.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Availability Column */}
                    <div className="bg-[#ff5100] rounded-3xl p-8 md:p-12 shadow-xl">
                        <h3 className="text-2xl font-bold text-white mb-8">Current Availability</h3>
                        <ul className="space-y-4">
                            {availability.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-white font-medium text-lg">
                                    <span className="text-[#061b4b] mt-1 shrink-0">•</span>
                                    <span>
                                        <strong>{item.industry}:</strong> {item.spots}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Booking Column */}
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-700">
                        <h3 className="text-2xl font-bold text-[#ff5100] mb-8">Book Your Free 30-Minute Strategy Call</h3>
                        
                        <div className="mb-8">
                            <p className="text-white font-bold text-lg mb-6">What you'll get:</p>
                            <ul className="space-y-4">
                                {benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                                        <span className="text-[#fcc935] mt-1 shrink-0">•</span>
                                        <span className="leading-relaxed">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="text-[#fcc935] font-bold text-lg mb-10 italic">
                            No obligation. No pressure. Just actionable insights.
                        </p>

                        <div className="space-y-4 text-gray-300 font-medium bg-slate-800 p-6 rounded-2xl border border-slate-700">
                            <div className="flex items-center gap-3">
                                <Icon icon="mdi:phone" className="w-5 h-5 text-[#ff5100]" />
                                <span>+234-081-649-8725</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Icon icon="mdi:email" className="w-5 h-5 text-[#ff5100]" />
                                <a href="mailto:damilola@m360solutionsgroup.com" className="hover:text-white transition-colors">
                                    damilola@m360solutionsgroup.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Icon icon="mdi:whatsapp" className="w-5 h-5 text-[#ff5100]" />
                                <span>WhatsApp: + 234-081-649-8725</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Icon icon="mdi:web" className="w-5 h-5 text-[#ff5100]" />
                                <a href="https://www.m360solutionsgroup.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                                    www.m360solutionsgroup.com
                                </a>
                            </div>
                        </div>

                        <button className="w-full mt-10 bg-[#ff5100] hover:bg-[#d94500] text-white font-bold px-8 py-5 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,81,0,0.4)] hover:-translate-y-1 flex items-center justify-center gap-3 text-lg">
                            BOOK STRATEGY CALL
                            <Icon icon="material-symbols:arrow-forward-rounded" className="w-6 h-6" />
                        </button>
                    </div>
                </div>
			</div>
		</section>
	);
};

export default CTA;
