import { Handshake } from 'lucide-react';
import React from 'react';

interface aboutCarfdProps {
	icon: React.ReactNode;
	header: string;
	content: string;
}

const AboutCard = ({ icon, header, content }: aboutCarfdProps) => {
	return (
		<div className='px-7 py-6 bg-[#ffff] rounded-md shadow grid grid-cols-1 gap-6'>
			<div className='w-full flex justify-center items-center'>
				<div className='size-16 rounded-full bg-[#00C3891A] flex justify-center items-center'>
					{icon}
				</div>
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
	);
};

export default AboutCard;
