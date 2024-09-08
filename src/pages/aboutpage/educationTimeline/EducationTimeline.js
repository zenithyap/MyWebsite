import { 
  Container, 
  Card, 
  Stepper, 
  Step, 
  StepButton,
  Stack
} from '@mui/material';
import '../../styling/text.css'
import FadeIn from '../../animations/FadeIn';
import { useState } from "react";
import * as Styles from './styles'

export default function EducationTimeline() {
  const educationArr = [
    {
      date: '2012 - 2016',
      school: 'Chung Cheng High School Yishun',
      description: 'Completed GCE O-Level examinations with distinctions in Mathematics and Science',
      extra: 'CCA: Member of Wushu Club',
    },
    {
      date: '2016 - 2018',
      school: 'Innova Junior College',
      description: 'Completed GCE A-Level examinations with distinctions in Math, Physics and Chemistry',
      extra: 'CCA: Member of Shooting Club',
    },
    {
      date: '2021 - current',
      school: "National University of Singapore",
      description: 'Computing Major with Specialisation in Software Engineering',
      extra: '',
    }
  ]
  const steps = ["Secondary", "Tertiary", "University"]
  const [activeStep, setActiveStep] = useState(0)
  const [toDisplay, setToDisplay] = useState()
  
  const setDisplay = (index) => {
    const item = educationArr[index]
    setToDisplay(      
      <Stack spacing={2}>
        <h5>{item.school}</h5>
        <div>{item.date}</div>
        <div className='p1left'>{item.description}</div>
        <div className='p1left'>{item.extra}</div>
      </Stack>
    )
  }

  const handleChange = (index) => () => {
    setActiveStep(index)
    setDisplay(index)
  }

  useState(() => setDisplay(0))
  return (
    <FadeIn>
    <Container style={{textAlign:'center', marginTop:'2%'}}>
      <Card style={Styles.mainContainerStyle}>
        <Stepper nonLinear activeStep={activeStep} sx={Styles.stepperStyle}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepButton onClick={handleChange(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
        </Stepper>
        <div style={Styles.displayStyle}>
          {toDisplay}
        </div>
      </Card>
    </Container>
    </FadeIn>
  )
}