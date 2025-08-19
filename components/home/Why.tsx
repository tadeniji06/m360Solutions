import { Icon } from "@iconify/react/dist/iconify.js";

const Why = () => {
	const Reasons = [
		{
			icon: "material-symbols:settings-outline",
			title: "Customized Solutions",
			body: `All our solutions are tailored to your current needs and brand/project requirements.`,
		},
		{
			icon: "material-symbols:groups-outline",
			title: "Team Enabled",
			body: `We have created solutions that help you integrate your team into the process and optimize results.`,
		},
		{
			icon: "material-symbols:analytics-outline",
			title: "Trackable Progress",
			body: `We provide you with reports and dashboards that make it easy to track the flow of work and KPIs.`,
		},
		{
			icon: "material-symbols:psychology-outline",
			title: "Tech Powered",
			body: `Our solutions are tech-powered which means they are faster, seamless, and more reliable.`,
		},
		{
			icon: "material-symbols:savings-outline",
			title: "Cost Effective",
			body: `Our solutions are created to help you maximize your cost and guarantee your ROI. We make every penny count.`,
		},
		{
			icon: "streamline-plump:customer-support-7-solid",
			title: "Quality Support",
			body: `From start to finish, we provide quality customer support to ensure the success of your project.`,
		},
	];

	return (
		<div className='bg-gray-100 py-16 px-6'>
			<div className='max-w-7xl mx-auto'>
				{/* Header Section */}
				<div className='mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold text-orange-500 leading-tight max-w-2xl'>
						Why Brands Choose M360 Solutions
					</h2>
				</div>

				{/* Reasons Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{Reasons.map((reason, index) => (
						<div
							key={index}
							className='group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200'
						>
							{/* Icon Container */}
							<div className='mb-6'>
								<div className='w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-300 shadow-lg'>
									<Icon
										icon={reason.icon}
										className='w-8 h-8 text-white'
									/>
								</div>
							</div>

							{/* Content */}
							<div className='space-y-4'>
								<h3 className='text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-300'>
									{reason.title}
								</h3>

								<p className='text-gray-600 leading-relaxed text-base'>
									{reason.body}
								</p>
							</div>

							{/* Hover Indicator */}
							<div className='mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
								<div className='w-12 h-1 bg-orange-500 rounded-full'></div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Why;
