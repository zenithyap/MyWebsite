import '../styling/text.css'
import Card from '@mui/material/Card'
import { Grid } from '@mui/material';
import FadeIn from '../animations/FadeIn';
import ProgressBar from '../animations/ProgressBar';

export default function Skills() {
	const skillsArr = [
		{
			title: 'Languages',
			description: 'English, Chinese'
		},
		{
			title: 'Soft Skills',
			description: "Teamwork, Work Ethic, Time management"
		}
	]
	return (
		<Grid container>
			<Grid item xs={12} lg={6} sm={6}>
				<FadeIn delayTime={200}>
					<Card sx={{
						m: 2,
						padding: 2,
						boxShadow: '1px 2px 9px',
						backgroundColor: 'rgba(19,27,37,1)'
					}}>
						<h5>Programming Languages</h5>
						<ProgressBar title="Java" percent="eight" />
						<ProgressBar title="Python" percent="seven" />
						<ProgressBar title="ReactJS" percent="six" />
						<ProgressBar title="JavaScript" percent="five" />
						<ProgressBar title="HTML" percent="five" />
						<ProgressBar title="CSS" percent="five" />
					</Card>
				</FadeIn>
			</Grid>
			<Grid item xs={12} lg={6} sm={6}>
				{
					skillsArr && skillsArr.map((item, id) => {
						return (
							<FadeIn key={id} delayTime={300}>
								<Card variant='outlined' sx={{
									m: 2,
									padding: 2,
									boxShadow: '1px 2px 9px',
									backgroundColor: 'rgba(19,27,37,1)'
								}}>
									<div>
										<h5>{item.title}</h5>
										<div className='p1left'>{item.description}</div>
									</div>
								</Card>
							</FadeIn>
						)
					})
				}
			</Grid>
		</Grid>
	)
}