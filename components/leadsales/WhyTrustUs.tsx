const WhyTrustUs = () => {
    const reasons = [
        {
            title: "Pre-Qualified Leads Only",
            desc: "We verify budget, timeline, and decision-maker status at capture. No cold leads, no wrong budget, no \"just researching.\""
        },
        {
            title: "Full Sales Enablement",
            desc: "We train your team, provide scripts, set up auto-follow-up, and give you a CRM to track everything."
        },
        {
            title: "Proven Across Industries",
            desc: "Real estate, financial services, B2B tech, professional services, healthcare, education, retail, manufacturing — results in 8+ industries."
        },
        {
            title: "Transparent Pricing",
            desc: "No hidden fees. No surprises. You know exactly what you're paying for upfront."
        },
        {
            title: "Money-Back Guarantee",
            desc: "If we don't deliver 200+ pre-qualified leads in 30 days, you get a full refund. No questions asked."
        },
        {
            title: "Exclusive Partnerships",
            desc: "We only work with 3–5 clients per industry to maintain quality and avoid conflicts. Your competitive advantage is protected."
        },
        {
            title: "Real-Time Visibility",
            desc: "Full CRM access with real-time dashboard. See every lead, every interaction, every deal, and every naira of revenue generated."
        },
        {
            title: "Continuous Optimization",
            desc: "Weekly ad optimization, bi-weekly strategy calls, monthly business reviews. We're constantly improving your results."
        }
    ];

	return (
		<section className="px-6 py-24 bg-slate-900/50">
			<div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center bg-slate-800 py-6 rounded-2xl border border-slate-700 shadow-xl">
                    Why 25+ Nigerian Businesses Trust Us
                </h2>

                <div className="space-y-8">
                    {reasons.map((reason, idx) => (
                        <div key={idx} className="flex gap-6 group">
                            <div className="w-12 h-12 bg-[#ff5100] rounded-xl flex items-center justify-center text-white font-bold text-xl shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-[#ff5100]/20">
                                {idx + 1}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#ff5100] mb-2">{reason.title}</h3>
                                <p className="text-gray-300 leading-relaxed text-lg">{reason.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
			</div>
		</section>
	);
};

export default WhyTrustUs;
