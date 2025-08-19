import { hero } from "@/assets";
import Image from "next/image";

const Solutions = () => {
	return (
		<div className='bg-primary-blue text-white py-16 px-6 lg:px-20'>
			{/* Header Section */}
			<div className='max-w-5xl mx-auto text-center'>
				<h2 className='text-3xl md:text-4xl font-bold mb-4'>
					Business Management Solution
				</h2>
				<p className='text-lg md:text-xl text-gray-200 leading-relaxed'>
					A cloud-based platform designed to simplify and automate
					Business processes, ensuring your workforce operates at its
					best.
				</p>
			</div>

			{/* Features Section */}
			<div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mt-12'>
				<ul className='space-y-4 text-gray-100'>
					<li>
						✔️ Project Management: Streamline tasks, timelines, and
						team collaboration.
					</li>
					<li>
						✔️ Customer Relationship Management (CRM): Build stronger
						relationships.
					</li>
					<li>
						✔️ Digital Planner: Simplify scheduling & task
						organization.
					</li>
					<li>
						✔️ Leads Management: Track, nurture, and convert leads.
					</li>
					<li>
						✔️ Assets Management: Organize, track, and optimize
						resources.
					</li>
					<li>
						✔️ QR Code Creator: Generate QR codes for easy access &
						sharing.
					</li>
					<li>
						✔️ Recruitment Dashboard: Centralize hiring insights.
					</li>
				</ul>

				<ul className='space-y-4 text-gray-100'>
					<li>
						✔️ Payroll Management: Automate salary computations &
						payouts.
					</li>
					<li>
						✔️ Time & Attendance Tracking: Monitor hours with
						precision.
					</li>
					<li>
						✔️ Recruitment & Onboarding: Streamline hiring processes.
					</li>
					<li>
						✔️ Performance Management: Boost employee engagement.
					</li>
					<li>
						✔️ Leave Management: Simplify time-off requests &
						approvals.
					</li>
					<li>✔️ Benefits Administration: Manage employee perks.</li>
					<li>
						✔️ Reporting & Analytics: Make data-driven decisions.
					</li>
				</ul>
			</div>

			{/* Hero Image Section */}
			<div className='max-w-4xl mx-auto mt-16'>
				<Image
					src={hero}
					alt='Business Management Solution'
					className='rounded-2xl shadow-lg w-full object-cover'
					priority
				/>
			</div>
		</div>
	);
};

export default Solutions;
