const PainPoints = () => {
    const painPoints = [
        {
            title: "Cold Leads",
            desc: "Never pick up the phone"
        },
        {
            title: "Wrong Budget",
            desc: "Can't afford your product"
        },
        {
            title: "Long Timelines",
            desc: "\"I'll buy in 6–12 months\""
        },
        {
            title: "No Authority",
            desc: "Just researching, no decision power"
        },
        {
            title: "No Follow-Up",
            desc: "Leads go cold in 48 hours"
        },
        {
            title: "Untrained Team",
            desc: "Weak closing, poor objection handling"
        }
    ];

	return (
		<section className="px-6 py-20 bg-slate-900/50">
			<div className="max-w-6xl mx-auto">
                <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        Are You Burning Millions on Leads That Never Convert?
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        You're spending heavily on marketing. But your results look like this — and you're not alone. This is the <span className="text-[#ff5100] font-bold">#1 frustration</span> we hear from business owners across Nigeria.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {painPoints.map((point, idx) => (
                        <div key={idx} className="bg-[#ff5100] rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-300 shadow-lg">
                            <h3 className="text-2xl font-bold text-white mb-2">{point.title}</h3>
                            <p className="text-orange-100 text-lg">{point.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 text-center max-w-4xl mx-auto flex items-center justify-center gap-4 shadow-xl">
                    <span className="text-[#fcc935] text-3xl">⚠️</span>
                    <p className="text-lg md:text-xl text-gray-200 font-medium">
                        <span className="font-bold text-white">The Result:</span> You spend ₦5M–₦20M/month on marketing but close only 2–5% of leads. Sound familiar?
                    </p>
                </div>
			</div>
		</section>
	);
};

export default PainPoints;
