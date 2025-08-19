import { bizz } from "@/assets";
import Image from "next/image";

const TechHero = () => {
	return (
		<div className='relative'>
			{/* Hero Section */}
			<div className='bg-slate-800 text-white px-6 py-20 relative overflow-hidden'>
				{/* Background Pattern/Overlay */}
				<div className='absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 opacity-90'></div>

				{/* Decorative Elements */}
				<div className='absolute top-10 right-10 w-32 h-32 border border-slate-600 rounded-full opacity-20'></div>
				<div className='absolute bottom-20 right-32 w-20 h-20 border border-slate-600 rounded-full opacity-20'></div>
				<div className='absolute top-1/2 right-20 w-2 h-16 bg-slate-600 opacity-30 transform rotate-45'></div>

				<div className='max-w-7xl mx-auto relative z-10 text-center'>
					{/* Logo Section */}
					<div className='mb-8'>
						{/* Logo with colored squares */}
						<div className='flex items-center justify-center gap-2 mb-4'>
							<div className='flex gap-1'>
								<div className='w-6 h-6 bg-green-500 rounded-sm'></div>
								<div className='w-6 h-6 bg-red-500 rounded-sm'></div>
							</div>
							<div className='text-4xl md:text-5xl font-bold'>
								BUSINESS{" "}
								<span className='bg-gray-700 px-3 py-1 rounded-lg'>
									360
								</span>
							</div>
						</div>

						{/* Tagline */}
						<div className='text-lg md:text-xl text-gray-300 max-w-2xl mx-auto'>
							<p className='font-semibold'>
								Revolutionizing Business Efficiency
							</p>
							<p>with Cutting-Edge Technology</p>
						</div>
					</div>
				</div>
			</div>

			{/* Content Section */}
			<div className='bg-white py-16 px-6'>
				<div className='max-w-7xl mx-auto'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						{/* Left Content */}
						<div className='space-y-6'>
							<p className='text-gray-700 text-lg leading-relaxed'>
								We empower businesses with a comprehensive suite of
								technological solutions designed to streamline
								operations, enhance productivity, and foster growth.
								Our expertise lies in transforming complex business
								challenges into seamless, efficient workflows using
								innovative tools and technologies.
							</p>

							{/* Additional content sections can be added here */}
							<div className='space-y-4'>
								<div className='flex items-start gap-4'>
									<div className='w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0'></div>
									<div>
										<h4 className='font-semibold text-gray-900 mb-2'>
											Digital Transformation
										</h4>
										<p className='text-gray-600 text-sm'>
											Modernize your business processes with
											cutting-edge technology solutions.
										</p>
									</div>
								</div>

								<div className='flex items-start gap-4'>
									<div className='w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0'></div>
									<div>
										<h4 className='font-semibold text-gray-900 mb-2'>
											Workflow Optimization
										</h4>
										<p className='text-gray-600 text-sm'>
											Streamline operations to maximize efficiency and
											reduce operational costs.
										</p>
									</div>
								</div>

								<div className='flex items-start gap-4'>
									<div className='w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0'></div>
									<div>
										<h4 className='font-semibold text-gray-900 mb-2'>
											Growth Solutions
										</h4>
										<p className='text-gray-600 text-sm'>
											Scalable technology solutions that grow with
											your business needs.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Right Image */}
						<div className='relative'>
							<div className='bg-cyan-400 rounded-3xl p-8 relative overflow-hidden'>
								{/* Background pattern */}
								<div className='absolute inset-0 bg-gradient-to-br from-cyan-400 to-cyan-500'></div>

								{/* Image container */}
								<div className='relative z-10 flex justify-center'>
									<Image
										src={bizz}
										alt='Business professionals analyzing data and technology solutions'
										className='max-w-full h-auto rounded-2xl shadow-2xl'
										width={400}
										height={300}
										priority
									/>
								</div>

								{/* Decorative elements */}
								<div className='absolute top-4 right-4 w-12 h-12 border-2 border-white/20 rounded-full'></div>
								<div className='absolute bottom-4 left-4 w-8 h-8 border-2 border-white/20 rounded-full'></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom decorative line */}
			<div className='h-1 bg-gradient-to-r from-green-500 via-orange-500 to-red-500'></div>
		</div>
	);
};

export default TechHero;
