import { Icon } from "@iconify/react";

const Hero = () => {
	return (
		<section className="relative px-6 py-24 md:py-32 overflow-hidden flex flex-col items-center justify-center text-center">
			<div className="absolute inset-0 bg-gradient-to-b from-[#061b4b] to-slate-900 -z-10"></div>
			
			<div className="max-w-5xl mx-auto space-y-8">
				<h2 className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide uppercase">
					Stop Wasting Money on Cold Leads
				</h2>
				
				<h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white">
					Get 200–1,000 <br className="hidden md:block" />
					<span className="text-[#ff5100]">Pre-Qualified Buyers</span> <br className="hidden md:block" />
					Every Month
				</h1>
				
				<p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed border-l-4 border-[#fcc935] pl-4 text-left md:text-center md:border-l-0 md:pl-0">
					<span className="font-semibold text-white">Budget Verified. Timeline Confirmed. Decision-Makers Only.</span> <br />
					A complete revenue system — not just leads.
				</p>
				
				<div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
					<button className="bg-[#ff5100] hover:bg-[#d94500] text-white font-bold px-8 py-5 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,81,0,0.4)] hover:-translate-y-1 inline-flex items-center gap-3 text-lg w-full sm:w-auto justify-center">
						BOOK YOUR FREE STRATEGY CALL TODAY
						<Icon icon="material-symbols:arrow-forward-rounded" className="w-6 h-6" />
					</button>
				</div>
                
                <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-400 font-medium">
                    <span className="flex items-center gap-2">
                        <Icon icon="mdi:phone" className="w-5 h-5 text-[#fcc935]" />
                        + 234-081-649-8725
                    </span>
                    <span className="hidden md:inline text-gray-600">|</span>
                    <span className="flex items-center gap-2">
                        <Icon icon="mdi:web" className="w-5 h-5 text-[#fcc935]" />
                        www.m360solutionsgroup.com
                    </span>
                </div>
			</div>
		</section>
	);
};

export default Hero;
