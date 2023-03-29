import '../styling/progressBar.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function ProgressBar({ title, percent }) {
  return (
		<div>
			<div className='p1left'>
				{title}
			</div>
			<div className='progressBarBg'>
				<AnimationOnScroll animateOnce='true' animateIn={'progressBar ' + percent} />  
			</div>
		</div>
  )
}