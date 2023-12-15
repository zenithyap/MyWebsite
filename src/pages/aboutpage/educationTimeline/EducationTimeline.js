import { 
  Container, 
  Card, 
  Stepper, 
  Step, 
  StepButton,
  StepIcon
} from '@mui/material';
import '../../styling/text.css'
import FadeIn from '../../animations/FadeIn';
import { useState } from "react";
import * as Styles from './styles'

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
  const steps = ["Secondary", "Tertiary", "University"]
  const [activeStep, setActiveStep] = useState(0)
  const [toDisplay, setToDisplay] = useState()
  
  const setDisplay = (index) => {
    const item = educationArr[index]
    setToDisplay(      
      <div>
        <h5>{item.date}</h5>
        <div className='p1left'>{item.description}</div>
      </div>
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