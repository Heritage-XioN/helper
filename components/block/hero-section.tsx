import React from 'react';
import HeroHeader from '../ui/hero-header';
import HeroImage from '../ui/hero-image';

const HeroSection = () => {
	return (
		<div className='grid grid-cols-1 py-6 md:grid-cols-2 gap-4 bg-linear-118 from-[#155143]  to-[#36C9A7]'>
			<HeroHeader />
			<HeroImage />
		</div>
	);
};

export default HeroSection;
