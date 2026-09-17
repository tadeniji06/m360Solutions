const Industries = () => {
    const stats = [
        {
            value: "103,240+",
            label: "Leads Delivered"
        },
        {
            value: "34%",
            label: "Avg Conversion Rate",
            sublabel: "Lead to close"
        },
        {
            value: "50x",
            label: "Average ROAS",
            sublabel: "₦10–₦50 per ₦1 invested"
        },
        {
            value: "₦516M+",
            label: "Revenue Generated"
        }
    ];

    const industries = [
        "Real Estate & Property Development",
        "Financial Services & Investment Firms",
        "B2B Technology & SaaS",
        "Professional Services (Legal, Accounting, Consulting)",
        "Healthcare & Medical Services",
        "Education & Training Providers",
        "Retail & E-commerce",
        "Manufacturing & Industrial Equipment"
    ];

	return (
		<section className="px-6 py-24 bg-slate-900/50">
			<div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Proven Across <span className="text-[#ff5100]">8 Industries</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
                        Year 1 Performance (25+ Clients): 103,240+ leads delivered | Average 34% conversion rate (lead to close) | Average 50x ROAS (₦10–₦50 for every ₦1 invested) | ₦516M+ revenue generated for clients
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="text-center space-y-2">
                            <h3 className="text-4xl md:text-5xl font-extrabold text-white">{stat.value}</h3>
                            <p className="text-gray-300 font-medium text-lg">{stat.label}</p>
                            {stat.sublabel && (
                                <p className="text-gray-500 text-sm">{stat.sublabel}</p>
                            )}
                        </div>
                    ))}
                </div>

                <div>
                    <h3 className="text-3xl font-bold text-white mb-10 text-center">Industries We Serve</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {industries.map((industry, idx) => (
                            <div key={idx} className="bg-[#ff5100] rounded-xl p-5 hover:bg-[#d94500] transition-colors cursor-default shadow-md flex items-center">
                                <p className="text-white font-bold text-lg">{industry}</p>
                            </div>
                        ))}
                    </div>
                </div>
			</div>
		</section>
	);
};

export default Industries;
