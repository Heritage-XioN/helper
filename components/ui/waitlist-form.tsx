import { Mail } from 'lucide-react';
import React from 'react';

const WaitlistForm = () => {
	return (
		<form
			action=''
			className='flex items-center flex-col w-full lg:flex-row lg:w-[70%] gap-4'
		>
			<input
				type='text'
				className='px-4 py-4.5 border border-[#000000FF] bg-[#19191FE6] w-full lg:w-[75%] text-[14px] leading-6 font-normal text-zinc-200 placeholder:text-zinc-500 rounded-md'
				placeholder='Enter your email address'
			/>
			<button className='px-4 py-4 flex items-center gap-2 bg-[#FFFFFFFF] text-[#00C389FF] text-[18px] leading-7 font-medium border border-[#000000FF] rounded-md'>
				<Mail />
				Sign Up Now
			</button>
		</form>
	);
};

export default WaitlistForm;
