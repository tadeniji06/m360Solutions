import { stack } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const WhyUs = () => {
	return (
		<div className='bg-white text-gray-900'>
			{/* Top Section */}
			<div className='max-w-6xl mx-auto px-6 lg:px-20 py-16 grid md:grid-cols-2 gap-12 items-center'>
				{/* Text Content */}
				<div>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>
						Why Choose Us?
					</h2>
					<p className='text-lg text-gray-600 leading-relaxed'>
						Our integrated approach combines technology, advisory
						services, and a commitment to innovation, making us the
						preferred partner for businesses aiming for quantum
						growth. Whether it’s optimizing HR functions, automating
						workflows, or managing assets, our solutions deliver
						measurable results.
					</p>
				</div>

				{/* Image */}
				<div className='flex justify-center'>
					<Image
						src={stack}
						alt='Business Technology Dashboard'
						className='w-full max-w-lg object-contain'
					/>
				</div>
			</div>

			{/* CTA Section */}
			<div className='bg-gray-50 py-16 px-6 lg:px-20 text-center'>
				<h3 className='text-2xl font-semibold mb-4 text-gray-900'>
					Experience the future of Business Technology
				</h3>
				<p className='text-gray-600 max-w-2xl mx-auto mb-8'>
					Ready to transform your business processes and achieve
					unparalleled efficiency? Contact us today to learn more
					about our cutting-edge technology solutions and how we can
					help your business thrive.
				</p>
				<Link href={"/contact"}>
					<button className='bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-md transition'>
						Request A Demo Now →
					</button>
				</Link>
			</div>
		</div>
	);
};

export default WhyUs;
