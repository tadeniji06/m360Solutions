const CaseStudies = () => {
    const caseStudies = [
        {
            title: "Case Study 1: Financial Services",
            investment: "₦3M total (₦500k setup + 250 leads)",
            metrics: [
                "250 leads → 180 SQL → 86 consultations → 8 deals closed",
                "₦120M revenue generated",
                "40x ROAS | ₦375k cost per closed deal"
            ],
            quote: "\"We closed 8 deals in 30 days on a ₦3M investment — 10x better ROI than spending ₦8M/month on ads.\" — CEO"
        },
        {
            title: "Case Study 2: B2B Technology",
            investment: "₦5.5M total (₦500k setup + 250 leads)",
            metrics: [
                "250 leads → 127 SQL → 90 demos → 18 deals closed",
                "₦540M revenue generated",
                "98x ROAS | ₦305k cost per closed deal"
            ],
            quote: "\"Close rate jumped from 8% to 18% after training. Auto-follow-up recovered ₦100M in 'dead' leads.\" — Sales Director"
        },
        {
            title: "Case Study 3: Professional Services",
            investment: "₦3.5M total (3-month contract)",
            metrics: [
                "300 leads → 152 SQL → 98 consultations → 12 deals closed",
                "₦180M revenue generated",
                "51x ROAS | ₦292k cost per closed deal"
            ],
            quote: "\"Every lead had verified budget and timeline. We're now scaling to 1,000 leads/month.\" — Partner"
        }
    ];

    const criteria = [
        { title: "Budget confirmed", desc: "matches your minimum deal size" },
        { title: "Timeline", desc: "<6 months to purchase" },
        { title: "Decision-maker", desc: "direct buyer or authorized rep" },
        { title: "Contact verified", desc: "valid phone + email" },
        { title: "Interest level", desc: "engaged with specific product/service" }
    ];

	return (
		<section className="px-6 py-24 bg-[#061b4b]">
			<div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">
                    Real Results from <span className="text-[#ff5100]">Nigerian Businesses</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {caseStudies.map((study, idx) => (
                        <div key={idx} className="bg-[#ff5100] rounded-2xl p-8 shadow-xl hover:-translate-y-1 transition-transform duration-300">
                            <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                            <p className="text-orange-100 font-medium mb-6 pb-6 border-b border-orange-400/30">
                                Investment: {study.investment}
                            </p>
                            <ul className="space-y-4 mb-8">
                                {study.metrics.map((metric, i) => (
                                    <li key={i} className="flex items-start gap-3 text-white">
                                        <span className="text-[#fcc935] mt-1">•</span>
                                        <span className="leading-tight font-medium">{metric}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="bg-orange-600/30 p-4 rounded-xl border-l-4 border-[#fcc935]">
                                <p className="text-white italic text-sm">{study.quote}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 max-w-4xl mx-auto">
                    <div className="bg-[#ff5100] p-6 md:p-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                            What Makes Leads "Pre-Qualified"?
                        </h3>
                    </div>
                    <div className="p-6 md:p-8 space-y-6">
                        <p className="text-[#fcc935] font-bold text-lg underline underline-offset-4">Every lead meets all criteria:</p>
                        <ul className="space-y-4">
                            {criteria.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-300">
                                    <span className="text-[#ff5100] font-bold">•</span>
                                    <span>
                                        <strong className="text-white">{item.title}:</strong> {item.desc}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="bg-slate-900 p-5 rounded-xl border border-slate-700 mt-6 text-center">
                            <p className="text-white font-medium">
                                We verify this at the ad form stage — no cold leads, no wrong budget, no "just researching."
                            </p>
                        </div>
                    </div>
                </div>
			</div>
		</section>
	);
};

export default CaseStudies;
