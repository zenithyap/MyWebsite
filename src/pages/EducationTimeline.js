import { Container, Card} from '@mui/material';
import './text.css'

export default function EducationTimeline() {
	const educationArr = [
		{
			date: '2012 - 2016',
			description: 'Chung Cheng High School Yishun'
		},
		{
			date: '2016 - 2018',
			description: 'Innova Junior College'
		},
		{
			date: '2021 - current',
			description: "Computing major at National University of Singapore"
		}
	]
	
	return (
		<Container>
			{
				educationArr && educationArr.map((item, id) => {
					return (
						<Card variant='outlined' sx={{m:2, padding:2}}>
							<div>
								<h5>{item.date}</h5>
								<p>{item.description}</p>
							</div>
						</Card>
						)
					})
				}
		</Container>
		)
	}