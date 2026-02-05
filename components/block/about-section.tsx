import React from 'react';
import AboutCard from '../ui/about-card';
import { Code, Earth, Handshake } from 'lucide-react';

const data = [
	{
		icon: <Earth className='size-8 text-[#00C389FF]' />,
		header: 'Beyond Boundaries',
		content:
			"We don't limit help to just one category. we cover situations from complex digital coding projects to hands-on home repairs, Helper a single accessible marketplace.",
	},
	{
		icon: <Code className='size-8 text-[#00C389FF]' />,
		header: 'Merit Over Network',
		content:
			"We believe finding work shouldn't depend on having the right connections. We level the playing field so that skills speak louder than status, giving everyone an equal shot at success.",
	},
	{
		icon: <Handshake className='size-8 text-[#00C389FF]' />,
		header: 'Trust & Simplicity',
		content:
			'We strip away the complexity of hiring and freelancing. With verified profiles, transparent reviews, and secure transactions, we make the exchange of services simple, safe, and stress-free.',
	},
];

const AboutSection = () => {
	return (
		<div className='py-16 px-10'>
			<div className='flex justify-center items-center mb-8'>
				<div className='text-center'>
					<h1 className='text-[25px] leading-10 font-extrabold'>
						What Helper Is All About
					</h1>
					<p className='text-[16px] leading-7 font-normal text-[#565D6DFF]'>
						We're building a platform that simplifies giving and receiving help,
						making community support accessible and efficient for everyone.
					</p>
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8'>
				{data.map((items) => (
					<AboutCard key={items.header} {...items} />
				))}
			</div>
		</div>
	);
};

export default AboutSection;
