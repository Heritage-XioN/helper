import React from 'react';
import WaitlistForm from '../ui/waitlist-form';

const WaitlistSection = () => {
	return (
		<div className='py-16 px-10 bg-linear-109 from-[#00C389FF] to-[#3366FFFF]'>
			<div className='flex justify-center items-center mb-8'>
				<div className='text-center'>
					<h1 className='text-[25px] leading-10 font-extrabold'>
						Join the Helper Waitlist Today!
					</h1>
					<p className='text-[20px] leading-7 font-normal text-[#565D6DFF]'>
						Be among the first to experience the power of community support.
						Sign up for early access and updates.
					</p>
				</div>
			</div>
			<div className='flex justify-center items-center w-full'>
				<WaitlistForm />
			</div>
		</div>
	);
};

export default WaitlistSection;
