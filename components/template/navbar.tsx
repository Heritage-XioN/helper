import { Handshake } from 'lucide-react';
import React from 'react';

const Navbar = () => {
	return (
		<div className='fixed top-0 left-0 right-0 z-50 w-full flex justify-center items-center py-4 px-4 bg-[#ffffff] border-b border-b-[#DEE1E6FF]'>
			<div className=''>
				<h1 className='flex items-center gap-2 text-[20px] leading-5 font-bold'>
					<div className='size-8 rounded-[5px] bg-[#171A1FFF] flex justify-center items-center'>
						<Handshake className='size-4 text-[#ffffff]' />
					</div>
					Helper
				</h1>
			</div>
		</div>
	);
};

export default Navbar;
