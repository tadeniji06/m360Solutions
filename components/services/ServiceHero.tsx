import { Icon } from "@iconify/react/dist/iconify.js";

const ServiceHero = () => {
	return (
		<div className='bg-slate-800 text-white px-6 py-20 rounded-b-[3rem] relative overflow-hidden'>
			{/* Background Pattern/Overlay */}
			<div className='absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 opacity-90'></div>

			{/* Decorative Elements */}
			<div className='absolute top-10 right-10 w-32 h-32 border border-slate-600 rounded-full opacity-20'></div>
			<div className='absolute bottom-20 right-32 w-20 h-20 border border-slate-600 rounded-full opacity-20'></div>
			<div className='absolute top-1/2 right-20 w-2 h-16 bg-slate-600 opacity-30 transform rotate-45'></div>
			<div className='absolute bottom-10 left-20 w-16 h-2 bg-slate-600 opacity-30 transform rotate-12'></div>

			<div className='max-w-7xl mx-auto relative z-10'>
				<div className='max-w-3xl'>
					{/* Main Heading */}
					<h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8'>
						Our Services
					</h1>

					{/* Subtitle */}
					<p className='text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 max-w-2xl'>
						With every single one of our clients, we bring forth a
						deep passion for solving creative problem solving
					</p>

					{/* CTA Button */}
					<button className='bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-3'>
						Get In Touch
						<Icon
							icon='material-symbols:arrow-forward'
							className='w-5 h-5'
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ServiceHero;
