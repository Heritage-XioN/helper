import React from 'react';

interface usageCardProps {
	step: string;
	header: string;
	content: string;
}

const UsageCard = ({ step, header, content }: usageCardProps) => {
	return (
		<div className='bg-[#ffffff] rounded-md shadow'>
			<div className='w-full h-48 flex justify-center items-center bg-linear-118 from-[#E6FFF7FF] to-[#FFFFFF] rounded-t-md'></div>
			<div className='px-4 lg:px-7 py-6 grid grid-cols-1 gap-3'>
				<div className='w-full flex justify-center items-center'>
					<p className='text-[16px] leading-5 font-bold text-[#00C389FF]'>
						Step {step}
					</p>
				</div>
				<div className='w-full flex justify-center items-center'>
					<h1 className='text-[20px] text-center lg:text-[24px] leading-8 font-semibold'>
						{header}
					</h1>
				</div>
				<div className='w-full flex justify-center items-center text-center'>
					<p className='text-[16px] leading-5 font-normal text-[#565D6DFF] text-center'>
						{content}
					</p>
				</div>
			</div>
		</div>
	);
};

export default UsageCard;
