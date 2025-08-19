import { vision } from "@/assets";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

const Vision = () => {
	const coreValues = [
		{ letter: "R", value: "Rigor" },
		{ letter: "I", value: "Innovation" },
		{ letter: "S", value: "Solution-oriented" },
		{ letter: "E", value: "Excellence" },
	];

	return (
		<div className='bg-primary-blue text-white px-6 py-16'>
			<div className='max-w-7xl mx-auto'>
				{/* Header Section */}
				<div className='mb-16'>
					{/* Main Heading */}
					<div className='mb-12'>
						<h2 className='text-4xl md:text-5xl font-bold leading-tight mb-8'>
							Unlocking Brand Brilliance...
							<br />
							<span className='text-orange-400'>
								Your Vision, Our Expertise.
							</span>
						</h2>
					</div>

					{/* Two Column Description */}
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16'>
						{/* Left Column */}
						<div className='space-y-4 text-gray-300'>
							<p className='text-base leading-relaxed'>
								In today's competitive business environment, quality
								of your marketing plan and its execution can succeed
								or bring a halt in prosperity of your business.
							</p>
							<p className='text-base leading-relaxed'>
								In order to sustain and grow, sales needs to be
								increased through converting the potential customers
								to actual customers.
							</p>
						</div>

						{/* Right Column */}
						<div className='text-gray-300'>
							<p className='text-base leading-relaxed'>
								Our company has the proficiency in business
								communication, marketing tactics, advertisement to
								increase your brand awareness in different
								geographies.
							</p>
						</div>
					</div>
				</div>

				{/* Main Content Card */}
				<div className='bg-white rounded-3xl p-8 md:p-12 text-black shadow-2xl'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
						{/* Left Side - Image */}
						<div className='flex justify-center lg:justify-start'>
							<div className='relative'>
								<Image
									src={vision}
									alt='Creative mind with lightbulb and colorful elements representing innovation'
									className='max-w-full h-auto rounded-lg'
									width={400}
									height={400}
									priority
								/>
							</div>
						</div>

						{/* Right Side - Content */}
						<div className='space-y-8'>
							<div className='space-y-6'>
								<p className='text-gray-700 leading-relaxed text-base'>
									<span className='font-bold text-black'>
										At M360,
									</span>{" "}
									our commitment to engagement is evident in our
									approach. We initiate the process by meticulously
									defining a winning strategy for our clients. Our
									method involves a holistic end-to-end approach to
									deploying interventions.
								</p>

								<p className='text-gray-700 leading-relaxed text-base'>
									This entails a thorough examination and analysis of
									marketing challenges and problems, enabling us to
									choose the most effective solutions that directly
									influence the bottom line. Our core competencies and
									extensive experience uniquely position us to
									implement a variety of impactful interventions for
									our clients.
								</p>
							</div>

							{/* Core Values Section */}
							<div className='space-y-6 pt-4'>
								<div className='text-left'>
									<span className='text-orange-400 text-sm font-semibold tracking-wider uppercase'>
										OUR CORE VALUES • RISE
									</span>
								</div>

								<div className='space-y-3'>
									{coreValues.map((item, index) => (
										<div
											key={index}
											className='flex items-center gap-4 group'
										>
											<div className='w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600 transition-colors duration-200'>
												<Icon
													icon='material-symbols:check'
													className='w-5 h-5 text-white'
												/>
											</div>
											<span className='text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-200'>
												{item.letter} - {item.value}
											</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Vision;
