import { Container, Card } from '@mui/material';
import '../styling/text.css'
import FadeIn from '../animations/FadeIn';

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
            <FadeIn>
              <Card variant='outlined' sx={{ m: 2, 
                                            padding: 2, 
                                            boxShadow: '1px 2px 9px',
                                            backgroundColor: 'rgb(35,35,35)' }}>
                <div>
                  <h5>{item.date}</h5>
                  <div className='p1left' >{item.description}</div>
                </div>
              </Card>
            </FadeIn>

          )
        })
      }
    </Container>
  )
}