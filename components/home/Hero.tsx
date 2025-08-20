import { Icon } from "@iconify/react/dist/iconify.js";
import {
	hero,
	b1,
	b2,
	b3,
	b4,
	b5,
	b6,
	b7,
	b8,
	b9,
	b10,
	b11,
	b12,
	b13,
	b14,
	b15,
	b16,
	b17,
} from "@/assets";
import Image from "next/image";

const Hero = () => {
	const images = [
		b1,
		b2,
		b3,
		b4,
		b5,
		b6,
		b7,
		b8,
		b9,
		b10,
		b11,
		b12,
		b13,
		b14,
		b15,
		b16,
		b17,
	];

	return (
		<section className='bg-primary-blue relative overflow-hidden'>
			<div className='max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 flex flex-col items-center text-center'>
				{/* Heading */}
				<h1 className='text-4xl md:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent'>
					Unlock Exponential <br /> Potentials
				</h1>

				{/* Subtitle */}
				<p className='text-gray-200 font-medium text-lg md:text-xl mb-10 max-w-2xl leading-relaxed'>
					We combine creativity and strategy to help businesses scale
					with clarity, innovation, and results that truly matter.
				</p>

				{/* CTA */}
				<button className='bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-orange-400/40 flex items-center gap-2'>
					Book Consultation
					<Icon
						icon='material-symbols:arrow-forward-rounded'
						className='w-6 h-6'
					/>
				</button>

				{/* Hero Image */}
				<div className='w-full max-w-5xl mt-16 mb-20 relative group'>
					<div className='absolute inset-0 bg-gradient-to-r from-orange-400/30 to-yellow-400/30 blur-3xl opacity-40 group-hover:opacity-60 transition duration-500 rounded-3xl' />
					<Image
						src={hero}
						alt='Professional working with digital technology'
						className='relative z-10 w-full h-auto object-cover rounded-3xl shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]'
						priority
					/>
				</div>

				{/* Trusted by Brands */}
				<div className='w-full'>
					<p className='text-gray-300 font-medium mb-10 text-lg'>
						Trusted by leading brands across industries
					</p>

					<div className='flex flex-wrap justify-center items-center gap-8 md:gap-14'>
						{images.map((image, index) => (
							<div
								key={index}
								className='flex items-center justify-center hover:grayscale-0 transition-all duration-500'
							>
								<Image
									src={image}
									alt={`Brand partner ${index + 1}`}
									className='h-12 md:h-16 w-auto object-contain'
									width={120}
									height={60}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
