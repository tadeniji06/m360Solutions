"use client";
import { motion } from "framer-motion";
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
	b18,
	b19,
	b20,
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
		// b11,
		b12,
		b13,
		b14,
		b15,
		b16,
		b17,
		b18,
		b19,
		b20,
	];

	// Duplicate images for seamless scrolling
	const duplicatedImages = [...images, ...images];

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

				{/* Trusted by Brands - Scrolling Section */}
				<div className='w-full bg-gray-50'>
					<motion.p
						className='text-gray-200 font-bold text-xl md:text-2xl mb-12 tracking-wide'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<span className='bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent font-extrabold'>
							TRUSTED BY INDUSTRY LEADERS
						</span>
					</motion.p>

					{/* Scrolling Container */}
					<div className='relative overflow-hidden w-full'>
						{/* Gradient overlays for fade effect */}
						<div className='absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-primary-blue to-transparent z-10' />
						<div className='absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-primary-blue to-transparent z-10' />

						{/* Scrolling animation container */}
						<motion.div
							className='flex items-center gap-12 md:gap-16'
							animate={{
								x: [0, -100 * images.length],
							}}
							transition={{
								x: {
									repeat: Infinity,
									repeatType: "loop",
									duration: 40,
									ease: "linear",
								},
							}}
							style={{ width: `${200 * images.length}%` }}
						>
							{duplicatedImages.map((image, index) => (
								<motion.div
									key={index}
									className='flex-shrink-0 group cursor-pointer'
									whileHover={{
										scale: 1.1,
										filter: "brightness(1.2) contrast(1.1)",
									}}
									transition={{ duration: 0.3 }}
								>
									<div className='relative p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-orange-400/50 transition-all duration-500 shadow-lg hover:shadow-orange-400/25'>
										<div className='absolute inset-0 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
										<Image
											src={image}
											alt={`Brand partner ${
												(index % images.length) + 1
											}`}
											className='relative z-10 h-12 md:h-16 w-auto object-contain transition-all duration-500'
											width={120}
											height={60}
										/>
									</div>
								</motion.div>
							))}
						</motion.div>
					</div>

					{/* Optional: Pulsing accent elements */}
					<div className='flex justify-center mt-8 gap-2'>
						{[...Array(3)].map((_, i) => (
							<motion.div
								key={i}
								className='w-2 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full'
								animate={{
									scale: [1, 1.5, 1],
									opacity: [0.5, 1, 0.5],
								}}
								transition={{
									duration: 2,
									repeat: Infinity,
									delay: i * 0.2,
								}}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
