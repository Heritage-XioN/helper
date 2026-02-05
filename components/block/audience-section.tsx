import React from 'react';
import AudienceCard from '../ui/audience-card';

const data = [
	{
		header: 'The Busy Individual',
		subHeader: 'Reclaim Your Time',
		content:
			"For the person with an endless to-do list, Helper is your productivity partner. Offload tasks you don't have time for and find reliable assistance without the hassle of vetting strangers.",
	},
	{
		header: 'The Skilled Professional',
		subHeader: 'Monetize Your Skills',
		content:
			'For freelancers, tradespeople, and experts, Helper is your launchpad. Access a steady stream of clients and build your reputation based on the quality of your work, not your marketing budget.',
	},
	{
		header: 'The Community Builder',
		subHeader: 'Building a Fairer Eco-system',
		content:
			'When barriers to work are removed, the whole community thrives. We empower local economies and digital nomads alike by facilitating honest work and fair pay for everyone involved.',
	},
];

const AudienceSection = () => {
	return (
		<div className='py-16 px-10'>
			<div className='flex justify-center items-center mb-8'>
				<div className='text-center'>
					<h1 className='text-[25px] leading-10 font-extrabold'>
						Who Benefits From Helper?
					</h1>
					<p className='text-[16px] leading-7 font-normal text-[#565D6DFF]'>
						Whether you're looking for a hand or offering one, Helper is
						designed for everyone in the community.
					</p>
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
				{data.map((items) => (
					<AudienceCard key={items.header} {...items} />
				))}
			</div>
		</div>
	);
};

export default AudienceSection;
