import { Icon } from "@iconify/react";

const Solution = () => {
    const features = [
        {
            title: "Pre-Qualified Leads",
            desc: "Budget-confirmed, timeline <6 months, decision-makers only",
            icon: "lucide:target"
        },
        {
            title: "CRM System",
            desc: "WhatsApp-native, pipeline tracking, auto-cadences",
            icon: "lucide:folder-open"
        },
        {
            title: "High-Converting Ad Copy",
            desc: "5–10 variations tested weekly for maximum ROI",
            icon: "lucide:megaphone"
        },
        {
            title: "Sales Scripts",
            desc: "Opening, qualification, objection handling, closing",
            icon: "lucide:file-text"
        },
        {
            title: "Auto-Follow-Up",
            desc: "7–14 day nurture sequences via WhatsApp, email, SMS",
            icon: "lucide:bot"
        },
        {
            title: "Sales Training",
            desc: "2-day workshop for your entire team",
            icon: "lucide:presentation"
        }
    ];

	return (
		<section className="px-6 py-24 bg-[#061b4b]">
			<div className="max-w-6xl mx-auto">
                <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        Introducing: Pre-Qualified Leads + <span className="text-[#ff5100]">Full Sales Enablement</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        We don't just send you leads. We deliver a complete revenue system — and we're <span className="text-[#fcc935] font-bold">40–60% cheaper</span> than agencies charging ₦10,000–₦15,000/lead because we've systematized delivery.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 hover:border-[#ff5100]/50 transition-colors duration-300 group">
                            <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#ff5100]/10 transition-colors">
                                <Icon icon={feature.icon} className="w-7 h-7 text-[#ff5100]" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400 text-base leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
			</div>
		</section>
	);
};

export default Solution;
