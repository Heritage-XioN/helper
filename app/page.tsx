import About from '@/components/template/about';
import Audience from '@/components/template/audience';
import Hero from '@/components/template/hero';
import Usage from '@/components/template/usage';
import Waitlist from '@/components/template/waitlist';

export default function Home() {
	return (
		<div className='grid grid-cols-1 gap-4'>
			<Hero />
			<About />
			<Usage />
			<Audience />
			<Waitlist />
		</div>
	);
}
