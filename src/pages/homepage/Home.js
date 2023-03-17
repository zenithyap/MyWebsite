import '../styling/text.css'
import '../styling/bg.css'
import NavigationBar from '../NavigationBar';
import About from '../aboutpage/About'
import { Container } from '@mui/material';
import FadeIn from '../animations/FadeIn';

export default function Home() {
  return (
    <div className='bg'>
      <NavigationBar />
      <Container style={{position:'absolute', top:'40%', left:"50%", transform:'translate(-50%, -50%)'}}>
        <FadeIn>
          <div className='title'>Welcome</div>
          <div className='h_line'/>
        </FadeIn>
      </Container>
      <About />
    </div>
  )
}
