import Timeline from './educationTimeline/EducationTimeline'
import Skills from './Skills'
import '../styling/icons.css'
import { Container } from '@mui/material';
import FadeIn from '../animations/FadeIn';

export default function About() {
  return (
    <div style={{ marginLeft: 'auto', marginRight: 'auto', left: '0', right: '0' }}>
      <section id='about_me' />
      <FadeIn delayTime={200}>
        <div className='myTitleCenter'>About Me</div>
      </FadeIn>
      <Container sx={{ marginTop: '3%', marginBottom: '12%' }} maxWidth="md" >
        <FadeIn delayTime={200}>
          <div className='p1'>
            I am a Final year undergraduate at the National University of Singapore. I am a self-motivated, responsible and hard working individual, open to learning new frameworks and languages in order to further develop my personal skills. I aspire to be a Software Developer / Frontend web developer.
          </div>
        </FadeIn>
        <Container sx={{ marginTop: '20%' }}>
          <h3>Education</h3>
          <Timeline />
        </Container>
        <Container sx={{ marginTop: '20%' }}>
          <h3>Skills</h3>
          <Skills />
        </Container>
      </Container>
    </div>
  )
}