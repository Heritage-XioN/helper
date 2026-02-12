import { Handshake } from 'lucide-react';
import React from 'react';
import Image from 'next/image';

const Navbar = () => {
	return (
		<div className='fixed top-0 left-0 right-0 z-50 w-full flex justify-center items-center py-4 px-4 bg-[#ffffff] border-b border-b-[#DEE1E6FF]'>
			<div className=''>
				<h1 className='flex items-center gap-2 text-[20px] leading-5 font-bold text-[#0f392f]'>
					<div className='w-10 h-8 rounded-[5px] bg-white'>
						<img
							src='/helpa-logo.svg'
							alt='Helpa Logo'
							className='w-full h-full object-cover rounded-[5px]'
						/>
					</div>
					Helpa
				</h1>
			</div>
		</div>
	);
};

export default Navbar;
