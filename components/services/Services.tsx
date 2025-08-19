import Image from "next/image";
import Link from "next/link";
import { services } from "@/utils/data";
import { Icon } from "@iconify/react/dist/iconify.js";

const Services = () => {
	return (
		<div className='py-16 px-6 bg-gray-50'>
			<div className='max-w-7xl mx-auto'>
				{/* Header Section */}
				<div className='text-center mb-16'>
					<span className='text-orange-500 text-sm font-semibold tracking-wider uppercase mb-4 block'>
						OUR SERVICES
					</span>
					<h2 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6'>
						Unlock Revenue Growth for Your Business
					</h2>
					<p className='text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed'>
						We provide comprehensive solutions designed to elevate
						your brand and drive measurable results across all digital
						channels.
					</p>
				</div>

				{/* Services Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{services.map((service, index) => (
						<div
							key={index}
							className='group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden'
						>
							{/* Background Gradient Overlay */}
							<div className='absolute inset-0 bg-gradient-to-br from-transparent to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

							{/* Service Image */}
							<div className='mb-6 overflow-hidden rounded-xl bg-gray-100 aspect-square flex items-center justify-center relative z-10'>
								<Image
									src={service.image}
									alt={`${service.title} service`}
									className='object-cover w-full h-full group-hover:scale-105 transition-transform duration-300'
									width={300}
									height={300}
								/>
							</div>

							{/* Service Content */}
							<div className='space-y-4 relative z-10'>
								<h3 className='text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-300'>
									{service.title}
								</h3>
							</div>

							{/* Hover Border Effect */}
							<div className='absolute inset-0 border-2 border-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
						</div>
					))}
				</div>

				{/* Bottom CTA Section */}
				<div className='text-center mt-16 bg-white rounded-3xl p-12 shadow-lg'>
					<h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>
						Need a Custom Solution?
					</h3>
					<p className='text-gray-600 mb-8 text-lg max-w-2xl mx-auto leading-relaxed'>
						Every business is unique. Let's discuss how we can create
						a tailored strategy that fits your specific goals and
						challenges.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
					<Link href={'/contact'}>
					 	<button className='bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-3'>
 							Schedule Consultation
 							<Icon
 								icon='material-symbols:calendar-month'
 								className='w-5 h-5'
 							/>
 						</button>
					</Link>
					
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
