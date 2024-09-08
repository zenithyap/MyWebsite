import '../styling/text.css'
import Card from '@mui/material/Card'
import { Grid } from '@mui/material';
import FadeIn from '../animations/FadeIn';
import ProgressBar from '../animations/ProgressBar';
import { Description } from '@mui/icons-material';

export default function Skills() {
	const skillsArr = [
		{
			title: 'Languages',
			description: ['English (Written, Spoken)', 'Chinese (Spoken)']
		},
		{
			title: 'Soft Skills',
			description: ['Teamwork', 'Time Management', 'Adaptability', 'Empathy']
		}
	]
	return (
		<Grid container>
			<Grid item xs={12} lg={6} sm={6}>
				<FadeIn delayTime={200}>
					<Card sx={{
						m: 2,
						mr: 1,
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
									ml: 1,
									padding: 2,
									boxShadow: '1px 2px 9px',
									backgroundColor: 'rgba(19,27,37,1)'
								}}>
									<div>
										<h5>{item.title}</h5>
										<ul>
											{
												item.description.map((i, id) => (
													<li key={id}>{i}</li>
												))
											}
										</ul>
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