import { Icon } from "@iconify/react/dist/iconify.js";

const AboutHero = () => {
	return (
		<div className='relative'>
			{/* Hero Section */}
			<div className='bg-slate-800 text-white px-6 py-20 rounded-b-[3rem] relative overflow-hidden'>
				{/* Background Pattern/Overlay */}
				<div className='absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 opacity-90'></div>

				{/* Decorative Elements */}
				<div className='absolute top-10 right-10 w-32 h-32 border border-slate-600 rounded-full opacity-20'></div>
				<div className='absolute bottom-20 right-32 w-20 h-20 border border-slate-600 rounded-full opacity-20'></div>
				<div className='absolute top-1/2 right-20 w-2 h-16 bg-slate-600 opacity-30 transform rotate-45'></div>

				<div className='max-w-7xl mx-auto relative z-10'>
					<div className='max-w-4xl'>
						{/* Main Heading */}
						<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8'>
							Elevate Your Online Presence with Innovative Solutions
						</h1>

						{/* Content Paragraphs */}
						<div className='space-y-6 text-gray-300 text-lg leading-relaxed mb-12'>
							<p>
								<span className='font-semibold text-white'>
									At M360,
								</span>{" "}
								our commitment to engagement is evident in our
								approach. We initiate the process by meticulously
								defining a winning strategy for our clients. Our
								method involves a holistic, end-to-end approach to
								deploying interventions.
							</p>

							<p>
								This entails a thorough examination and analysis of
								marketing challenges and problems, enabling us to
								choose the most effective solutions that directly
								influence the bottom line. Our core competencies and
								extensive experience uniquely position us to implement
								a variety of impactful interventions for our clients.
							</p>
						</div>

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

			{/* Vision & Mission Cards */}
			<div className='px-6 -mt-16 relative z-20'>
				<div className='max-w-7xl mx-auto'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
						{/* Our Vision Card */}
						<div className='bg-yellow-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'>
							<div className='flex items-start gap-4 mb-6'>
								<div className='w-12 h-12 bg-yellow-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md'>
									<Icon
										icon='material-symbols:visibility-outline'
										className='w-6 h-6 text-white'
									/>
								</div>
								<h3 className='text-xl font-bold text-gray-900 mt-2'>
									OUR VISION
								</h3>
							</div>

							<p className='text-gray-700 text-lg leading-relaxed'>
								To be the number one brand success partner in Africa
							</p>

							{/* Decorative Element */}
							<div className='mt-6'>
								<div className='w-16 h-1 bg-yellow-500 rounded-full'></div>
							</div>
						</div>

						{/* Our Mission Card */}
						<div className='bg-red-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'>
							<div className='flex items-start gap-4 mb-6'>
								<div className='w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md'>
									<Icon
										icon='material-symbols:flag-outline'
										className='w-6 h-6 text-white'
									/>
								</div>
								<h3 className='text-xl font-bold text-gray-900 mt-2'>
									OUR MISSION
								</h3>
							</div>

							<p className='text-gray-700 text-lg leading-relaxed'>
								To constantly reach and apply innovative methodologies
								to solve client most critically objectives and
								challenges, thus impacting directly on their bottom
								line
							</p>

							{/* Decorative Element */}
							<div className='mt-6'>
								<div className='w-16 h-1 bg-red-500 rounded-full'></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Additional spacing after cards */}
			<div className='h-20'></div>
		</div>
	);
};

export default AboutHero;
