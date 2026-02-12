import React from 'react';

const HeroHeader = () => {
	return (
		<div className='flex justify-center items-center py-10 px-10'>
			<div className='flex flex-col gap-2 text-white'>
				<h1 className='text-5xl font-bold'>
					The New Way to Get Things Done: Fair, Simple, and Open to All.
				</h1>
				<p className='text-[16px] font-normal leading-5 text-[white]'>
					Helper is a community-driven platform where skilled individuals can
					showcase their talents and connect with those in need of their
					services.
				</p>
			</div>
		</div>
	);
};

export default HeroHeader;
