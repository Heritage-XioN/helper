import React from 'react';
import UsageCard from '../ui/usage-card';

const data = [
	{
		step: '1',
		header: 'Post or Browse',
		content:
			'Have a task? Post the details and your budget. Have a skill? Create a profile showcasing what you do. It takes less than two minutes to join the ecosystem.',
	},
	{
		step: '2',
		header: 'Connect & Match',
		content:
			'Review proposals or browse talent based on ratings, skills, and price. Chat directly to ensure you’re on the same page before any work begins, no middleman delays.',
	},
	{
		step: '3',
		header: 'Complete & Transact',
		content:
			'Get the job done. Payment is held securely by Helper and only released to the provider once the help seeker confirms the task is completed to satisfaction.',
	},
];

const UsageSection = () => {
	return (
		<div className='py-16 px-10 bg-[#FAFAFBFF]'>
			<div className='flex justify-center items-center mb-8'>
				<div className='text-center'>
					<h1 className='text-[25px] leading-10 font-extrabold'>
						How Helpa Works in 3 Simple Steps
					</h1>
					<p className='text-[16px] leading-7 font-normal text-[#565D6DFF]'>
						Getting started with Helper is intuitive and straightforward. Here's
						a quick guide to connecting with your community.
					</p>
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8'>
				{data.map((items) => (
					<UsageCard key={items.step} {...items} />
				))}
			</div>
		</div>
	);
};

export default UsageSection;
