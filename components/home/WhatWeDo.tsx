import { services } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const WhatWeDo = () => {
	const displayedServices = services.slice(0, 9);

	return (
		<div className='py-16 px-6 bg-gray-50'>
			<div className='max-w-7xl mx-auto'>
				{/* Header Section */}
				<div className='text-center mb-12'>
					<span className='text-orange-500 text-sm font-semibold tracking-wider uppercase mb-4 block'>
						WHAT WE DO
					</span>

					<div className='flex flex-col lg:flex-row justify-between items-center gap-6 mb-8'>
						<h2 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight'>
							Unlock Revenue Growth for Your Business
						</h2>

						<Link
							href='/services'
							className='text-blue-600 hover:text-blue-700 font-semibold text-sm tracking-wider uppercase transition-colors duration-300 flex items-center gap-2 group'
						>
							VIEW ALL OUR SERVICES
							<Icon
								icon='material-symbols:arrow-forward'
								className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300'
							/>
						</Link>
					</div>
				</div>

				{/* Services Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{displayedServices.map((service, index) => (
						<div
							key={index}
							className='group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100'
						>
							{/* Service Image */}
							<div className='mb-6 overflow-hidden rounded-xl bg-gray-100 aspect-square flex items-center justify-center'>
								<Image
									src={service.image}
									alt={`${service.title} service`}
									className='object-cover w-full h-full group-hover:scale-105 transition-transform duration-300'
									width={300}
									height={300}
								/>
							</div>

							{/* Service Content */}
							<div className='space-y-4'>
								<h3 className='text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-300'>
									{service.title}
								</h3>
							</div>
						</div>
					))}
				</div>

				{/* Bottom CTA Section */}
				<div className='text-center mt-16'>
					<p className='text-gray-600 mb-6 text-lg'>
						Ready to transform your business? Let's discuss your
						specific needs.
					</p>
					<Link
						href='/contact'
						className='inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
					>
						Get Started Today
						<Icon
							icon='material-symbols:arrow-forward'
							className='w-5 h-5'
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default WhatWeDo;
