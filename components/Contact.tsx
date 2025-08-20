import { Icon } from "@iconify/react/dist/iconify.js";

const Contact = () => {
	return (
		<div className='bg-white text-gray-900'>
			{/* Hero Section */}
			<div className='bg-primary-blue text-white py-16 px-6 lg:px-20 text-center'>
				<h2 className='text-3xl md:text-4xl font-bold mb-4'>
					Talk to us now! <br /> Lets spark creativity together.
				</h2>
				<p className='text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed'>
					With every single one of our clients, we bring forth a deep
					passion for creative problem solving — which is what we
					deliver.
				</p>
			</div>

			{/* Contact Info + Form */}
			<div className='max-w-6xl mx-auto px-6 lg:px-20 py-16'>
				<h3 className='text-2xl font-bold mb-8 flex items-center gap-2'>
					GET IN TOUCH <span>👋</span>
				</h3>

				<div className='grid lg:grid-cols-3 gap-8'>
					{/* Contact Info */}
					<div className='space-y-6'>
						<div className='p-6 border border-gray-200 rounded-lg shadow-sm flex items-start gap-3'>
							<Icon
								icon='mdi:phone'
								className='text-orange-500 text-2xl'
							/>
							<div>
								<h4 className='font-semibold mb-1'>Call us at</h4>
								<p>(+234) 806 496 8725</p>
							</div>
						</div>

						<div className='p-6 border border-gray-200 rounded-lg shadow-sm flex items-start gap-3'>
							<Icon
								icon='mdi:email'
								className='text-orange-500 text-2xl'
							/>
							<div>
								<h4 className='font-semibold mb-1'>E-mail us at</h4>
								<p>info@m360solutionsgroup.com</p>
								<p>damilola@m360solutionsgroup.com</p>
							</div>
						</div>

						<div className='p-6 border border-gray-200 rounded-lg shadow-sm flex items-start gap-3'>
							<Icon
								icon='mdi:map-marker'
								className='text-orange-500 text-2xl'
							/>
							<div>
								<h4 className='font-semibold mb-1'>Nigeria</h4>
								<p>
									426a oluwadamilola fasade str omole phase 1,
									Lagos | +2348064879625
								</p>
							</div>
						</div>

						<div className='p-6 border border-gray-200 rounded-lg shadow-sm flex items-start gap-3'>
							<Icon
								icon='mdi:map-marker'
								className='text-orange-500 text-2xl'
							/>
							<div>
								<h4 className='font-semibold mb-1'>Kenya</h4>
								<p>
									132 Manyani East Road, Lavington Nairobi |
									+254726505002
								</p>
							</div>
						</div>

						<div className='p-6 border border-gray-200 rounded-lg shadow-sm flex items-start gap-3'>
							<Icon
								icon='mdi:map-marker'
								className='text-orange-500 text-2xl'
							/>
							<div>
								<h4 className='font-semibold mb-1'>South Africa</h4>
								<p>
									24A Loots Road, Blairgowrie Randburg,
									2194 | +27656946477
								</p>
							</div>
						</div>
					</div>

					{/* Form */}
					<div className='lg:col-span-2'>
						<form className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							<input
								type='text'
								placeholder='First Name'
								className='p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-orange-500 outline-none'
							/>
							<input
								type='text'
								placeholder='Last Name'
								className='p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-orange-500 outline-none'
							/>
							<input
								type='email'
								placeholder='Email *'
								required
								className='p-3 border border-gray-300 rounded-md w-full md:col-span-2 focus:ring-2 focus:ring-orange-500 outline-none'
							/>
							<input
								type='text'
								placeholder='Subject'
								className='p-3 border border-gray-300 rounded-md w-full md:col-span-2 focus:ring-2 focus:ring-orange-500 outline-none'
							/>
							<textarea
								placeholder='Your Message *'
								required
								rows={5}
								className='p-3 border border-gray-300 rounded-md w-full md:col-span-2 focus:ring-2 focus:ring-orange-500 outline-none resize-none'
							></textarea>

							<button
								type='submit'
								className='bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md shadow-md md:col-span-2 transition'
							>
								Submit Form
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
