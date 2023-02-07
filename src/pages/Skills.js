import './text.css'
import Card from '@mui/material/Card'
import Container from '@mui/material/Container'

export default function Skills() {
  const skillsArr = [
		{
			title: 'Languages',
			description: 'English, Chinese'
		},
		{
			title: 'Coding Languages',
			description: 'Python, Java, Javascript, HTML, CSS, Reactjs'
		},
		{
			title: 'Soft Skills',
			description: "Teamwork, Work Ethic, Time management"
		}
	]
  return (
		<Container>
			{
				skillsArr && skillsArr.map((item, id) => {
					return (
						<Card variant='outlined' sx={{m:2, padding:2}}>
              <div>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
                </div>
              </Card>
						)
					})
				}
		</Container>
  )
}