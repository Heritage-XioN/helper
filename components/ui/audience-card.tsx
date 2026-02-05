import React from 'react';

interface audienceCardProps {
	header: string;
	subHeader: string;
	content: string;
}

const AudienceCard = ({ header, subHeader, content }: audienceCardProps) => {
	return (
		<div className='bg-[#ffffff] rounded-md shadow'>
			<div className='w-full flex items-center px-7 py-6'>
				<div className='bg-linear-118 from-[#E6FFF7FF] to-[#FFFFFF] rounded-full size-24'></div>
			</div>
			<div className='px-4 lg:px-8 py-6 grid grid-cols-1 gap-3'>
				<div className='w-full flex items-center'>
					<h1 className='text-[20px] lg:text-[24px] leading-8 font-semibold'>
						{header}
					</h1>
				</div>
				<div className='w-full flex items-center'>
					<p className='text-[16px] leading-5 font-bold text-[#00C389FF]'>
						{subHeader}
					</p>
				</div>
				<div className='w-full flex items-center'>
					<p className='text-[16px] leading-5 font-normal text-[#565D6DFF]'>
						{content}
					</p>
				</div>
			</div>
		</div>
	);
};

export default AudienceCard;
