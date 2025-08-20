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
import Image, { StaticImageData } from "next/image";

const Hero = () => {
	const images: StaticImageData[] = [
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
	];

	// Split into 3 rows
	const brandsPerRow = Math.ceil(images.length / 3);
	const brandRows = [
		images.slice(0, brandsPerRow),
		images.slice(brandsPerRow, brandsPerRow * 2),
		images.slice(brandsPerRow * 2),
	];

	// Duplicate rows for seamless loop
	const duplicatedRows = brandRows.map((row) => [...row, ...row]);

	// Types
	interface ScrollingRowProps {
		brands: StaticImageData[];
		direction?: "left" | "right";
		delay?: number;
		speed?: number;
	}

	const ScrollingRow = ({
		brands,
		direction = "left",
		delay = 0,
		speed = 40,
	}: ScrollingRowProps) => (
		<div className='relative overflow-hidden w-full mb-4 last:mb-0'>
			{/* Gradient overlays */}
			<div className='absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-primary-blue via-primary-blue/80 to-transparent z-10' />
			<div className='absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-primary-blue via-primary-blue/80 to-transparent z-10' />

			<motion.div
				className='flex items-center gap-8 md:gap-12'
				initial={{
					x: direction === "left" ? 0 : "-50%",
				}}
				animate={{
					x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
				}}
				transition={{
					x: {
						repeat: Infinity,
						repeatType: "loop",
						duration: speed,
						ease: "linear",
						delay,
					},
				}}
				style={{ width: "200%" }} // since we duplicated row
			>
				{brands.map((image, index) => (
					<motion.div
						key={index}
						className='flex-shrink-0 group cursor-pointer'
						whileHover={{
							scale: 1.08,
							y: -2,
						}}
						transition={{
							type: "spring",
							stiffness: 400,
							damping: 25,
						}}
					>
						<div className='relative p-3 md:p-4 rounded-xl bg-white/8 backdrop-blur-md border border-white/15 hover:bg-white/15 hover:border-orange-400/40 transition-all duration-500 shadow-lg hover:shadow-orange-400/20 hover:shadow-xl'>
							{/* Hover glow */}
							<div className='absolute inset-0 bg-gradient-to-r from-orange-400/15 to-yellow-400/15 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm' />
							<div className='absolute inset-0 bg-gradient-to-r from-orange-400/10 to-yellow-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500' />

							<Image
								src={image}
								alt={`Trusted brand partner ${index + 1}`}
								className='relative z-10 h-10 md:h-14 w-auto object-contain transition-all duration-500 opacity-80 group-hover:opacity-100'
								width={100}
								height={56}
							/>
						</div>
					</motion.div>
				))}
			</motion.div>
		</div>
	);

	return (
		<section className='bg-primary-blue relative overflow-hidden'>
			{/* Background decorative elements */}
			<div className='absolute inset-0'>
				<div className='absolute top-20 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl' />
				<div className='absolute bottom-20 right-10 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl' />
			</div>

			<div className='max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 flex flex-col items-center text-center relative z-10'>
				{/* Animated heading */}
				<motion.h1
					className='text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight'
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<motion.span
						className='bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent inline-block'
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.3, duration: 0.8 }}
					>
						Unlock Exponential
					</motion.span>
					<br />
					<motion.span
						className='bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 bg-clip-text text-transparent inline-block'
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.5, duration: 0.8 }}
					>
						Potentials
					</motion.span>
				</motion.h1>

				{/* Subtitle */}
				<motion.p
					className='text-gray-200 font-medium text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl leading-relaxed'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.7, duration: 0.8 }}
				>
					We combine{" "}
					<span className='text-orange-400 font-semibold'>
						creativity
					</span>{" "}
					and{" "}
					<span className='text-yellow-400 font-semibold'>
						strategy
					</span>{" "}
					to help businesses scale with clarity, innovation, and
					results that truly matter.
				</motion.p>

				{/* CTA Button */}
				<motion.button
					className='bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-12 py-5 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-orange-400/50 flex items-center gap-3 group relative overflow-hidden'
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.9, duration: 0.5 }}
					whileHover={{ y: -2 }}
					whileTap={{ scale: 0.98 }}
				>
					<span className='absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
					<span className='relative z-10'>Book Consultation</span>
					<motion.div
						className='relative z-10'
						animate={{ x: [0, 5, 0] }}
						transition={{ duration: 1.5, repeat: Infinity }}
					>
						<Icon
							icon='material-symbols:arrow-forward-rounded'
							className='w-6 h-6'
						/>
					</motion.div>
				</motion.button>

				{/* Hero Image */}
				<motion.div
					className='w-full max-w-6xl mt-20 mb-24 relative group'
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.1, duration: 1 }}
				>
					<div className='absolute inset-0 bg-gradient-to-r from-orange-400/40 to-yellow-400/40 blur-3xl opacity-30 group-hover:opacity-50 transition duration-700 rounded-3xl' />
					<div className='absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/10 to-yellow-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500' />

					<Image
						src={hero}
						alt='Professional working with digital technology'
						className='relative z-10 w-full h-auto object-cover rounded-3xl shadow-2xl transform transition-all duration-700 group-hover:scale-[1.02] hover:shadow-orange-400/30'
						priority
					/>
				</motion.div>

				{/* Trusted by Brands Section */}
				<motion.div
					className='w-full'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.3, duration: 0.8 }}
				>
					<motion.div
						className='mb-12 text-center'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.4, duration: 0.8 }}
					>
						<p className='text-gray-300 font-medium text-lg md:text-xl mb-3'>
							Trusted by Industry Leaders
						</p>
						<div className='w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full' />
					</motion.div>

					{/* Three rows of scrolling brands */}
					<div className='space-y-6'>
						<ScrollingRow
							brands={duplicatedRows[0]}
							direction='left'
							delay={0}
							speed={40}
						/>
						<ScrollingRow
							brands={duplicatedRows[1]}
							direction='right'
							delay={0.5}
							speed={45}
						/>
						<ScrollingRow
							brands={duplicatedRows[2]}
							direction='left'
							delay={1}
							speed={42}
						/>
					</div>

					{/* Stats */}
					<motion.div
						className='mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto'
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.8, duration: 0.8 }}
					>
						{[
							{ number: "500+", label: "Projects Delivered" },
							{ number: "98%", label: "Client Satisfaction" },
							{ number: "50+", label: "Industry Partners" },
						].map((stat, index) => (
							<motion.div
								key={index}
								className='text-center group'
								whileHover={{ scale: 1.05 }}
								transition={{ type: "spring", stiffness: 300 }}
							>
								<div className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-1'>
									{stat.number}
								</div>
								<div className='text-gray-300 text-sm md:text-base font-medium'>
									{stat.label}
								</div>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
