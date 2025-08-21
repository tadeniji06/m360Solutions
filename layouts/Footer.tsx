import { Icon } from "@iconify/react/dist/iconify.js";
import { logo } from "@/assets";
import { headerLinks } from "@/utils/data";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className='bg-primary-blue text-white py-12 px-6'>
			<div className='max-w-7xl mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8'>
					{/* Company Info Column */}
					<div className='lg:col-span-2'>
						<div className='mb-6'>
							<Image width={150} alt='logo' src={logo} />
							<p className='text-lg font-medium text-white mb-4'>
								... Africa's No.1 Marketing ROI Agency
							</p>
						</div>
						<div className='text-sm leading-relaxed text-gray-300'>
							<p className='mb-2'>
								<span className='font-semibold'>
									M360 Solutions Limited
								</span>{" "}
								is an integrated marketing communication company with
								a Digital First approach, with offices in Lagos,
								Nairobi and Johannesburg covering the whole
								Sub-Saharan Africa.
							</p>
							<p>
								We are a pioneer agency with the goal of simplifying
								marketing processes whilst ensuring customers'
								satisfaction.
							</p>
						</div>
					</div>

					{/* Navigation Links Column */}
					<div className='flex gap-16'>
						<div className='mb-6'>
							<h3 className='text-lg font-medium mb-4'>Navigation</h3>
							<ul className='space-y-3'>
								{headerLinks.map((link, index) => (
									<li key={index}>
										<Link
											href={link.link}
											className='text-gray-300 hover:text-orange-500 transition-colors duration-200 text-sm'
										>
											{link.title}
										</Link>
									</li>
								))}
							</ul>
						</div>

						<div>
							<h3 className='text-lg font-medium mb-4'>More</h3>
							<ul className='space-y-3'>
								<li>
									<a
										href='#'
										className='text-gray-300 hover:text-orange-500 transition-colors duration-200 text-sm'
									>
										Technology
									</a>
								</li>
								<li>
									<a
										href='#'
										className='text-gray-300 hover:text-orange-500 transition-colors duration-200 text-sm'
									>
										Blog
									</a>
								</li>
								<li>
									<a
										href='#'
										className='text-gray-300 hover:text-orange-500 transition-colors duration-200 text-sm'
									>
										Contact Us
									</a>
								</li>
							</ul>
						</div>
					</div>

					{/* Contact Information Column */}
					<div className='space-y-6'>
						{/* Lagos Office */}
						<div>
							<div className='flex items-start gap-3 mb-3'>
								<Icon
									icon='mdi:home'
									className='text-orange-500 text-xl mt-1'
								/>
								<div>
									<p className='text-sm text-gray-300 leading-relaxed'>
										426a oluwadamilola fasade str omole phase 1, Lagos
									</p>
								</div>
							</div>

							<div className='flex items-center gap-3 mb-2'>
								<Icon
									icon='mdi:phone'
									className='text-orange-500 text-lg'
								/>
								<a
									href='tel:+2348064968725'
									className='text-sm text-gray-300 hover:text-orange-500 transition-colors'
								>
									+234 806 496 8725
								</a>
							</div>

							<div className='flex items-center gap-3 mb-4'>
								<Icon
									icon='mdi:email'
									className='text-orange-500 text-lg'
								/>
								<a
									href='mailto:info@m360solutionsgroup.com'
									className='text-sm text-gray-300 hover:text-orange-500 transition-colors'
								>
									info@m360solutionsgroup.com
								</a>
							</div>
						</div>

						{/* Nairobi Office */}
						<div>
							<div className='flex items-start gap-3 mb-2'>
								<Icon
									icon='mdi:home'
									className='text-orange-500 text-xl mt-1'
								/>
								<div>
									<p className='text-sm font-medium text-white'>
										132 Manyani East Road, Lavington Nairobi
									</p>
								</div>
							</div>

							<div className='flex items-center gap-3 mb-4'>
								<Icon
									icon='mdi:phone'
									className='text-orange-500 text-lg'
								/>
								<a
									href='tel:+254726505002'
									className='text-sm text-gray-300 hover:text-orange-500 transition-colors'
								>
									+254 72 650 5002
								</a>
							</div>
						</div>

						{/* Johannesburg Office */}
						<div>
							<div className='flex items-start gap-3 mb-2'>
								<Icon
									icon='mdi:home'
									className='text-orange-500 text-xl mt-1'
								/>
								<div>
									<p className='text-sm font-medium text-white'>
										24A Loots Road, Blairgowrie Randburg, 2194
									</p>
								</div>
							</div>

							<div className='flex items-center gap-3'>
								<Icon
									icon='mdi:whatsapp'
									className='text-orange-500 text-lg'
								/>
								<a
									href='https://wa.me/2348064968725'
									className='text-sm text-gray-300 hover:text-orange-500 transition-colors'
								>
									+27656946477
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className='border-t border-gray-700 pt-6'>
					<p className='text-center text-sm text-gray-400'>
						Copyright © 2024 M360 Solutions Limited
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
