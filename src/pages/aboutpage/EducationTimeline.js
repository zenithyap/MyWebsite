import { Container, Card } from '@mui/material';
import '../styling/text.css'
import FadeIn from '../animations/FadeIn';
import { useState } from "react";
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import Brightness7Icon from '@mui/icons-material/Brightness7';


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
  const [toDisplay, setToDisplay] = useState()
  const [animateLeft, setAnimateLeft] = useState()
  const [animateMid, setAnimateMid] = useState()
  const [animateRight, setAnimateRight] = useState()
  
  const display = (index) => {
    const item = educationArr[index]
    if (index === 0) {
      setAnimateLeft(true)
    }
    if (index === 1) {
      setAnimateMid(true)
    }
    if (index === 2) {
      setAnimateRight(true)
    }
    setToDisplay(      
      <div>
        <h5>{item.date}</h5>
        <div className='p1left'>{item.description}</div>
      </div>
    )
  }
  return (
    <FadeIn>
    <Container style={{textAlign:'center', marginTop:'2%'}}>
      <Card style={{backgroundColor: 'rgba(19,27,37,1)', 
                    m: 2, 
                    padding: 2, 
                    boxShadow: '1px 2px 9px'}} >
        <div style={{textAlign:'center', marginBottom:'5%', marginTop:'2%'}}>
          <Brightness5Icon sx={{marginLeft: '10%', marginRight: '10%'}} 
                          onClick={() => display(0)}  
                          className={animateLeft ? 'icon' : ''}
                          onAnimationEnd={() => setAnimateLeft(false)}
                          >test</Brightness5Icon>

          <Brightness6Icon sx={{marginLeft: '10%', marginRight: '10%'}} 
                          onClick={() => display(1)}  
                          className={animateMid ? 'icon' : ''}
                          onAnimationEnd={() => setAnimateMid(false)}>test</Brightness6Icon>

          <Brightness7Icon sx={{marginLeft: '10%', marginRight: '10%'}} 
                          onClick={() => display(2)}  
                          className={animateRight ? 'icon' : ''}
                          onAnimationEnd={() => setAnimateRight(false)}>test</Brightness7Icon>
        </div>
        <div style={{marginBottom: '2%'}}>
          {toDisplay}
        </div>
      </Card>
    </Container>
    </FadeIn>
  )
}