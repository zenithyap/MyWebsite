import '../styling/text.css'
import '../styling/bg.css'
import '../styling/progressBar.css'
import NavigationBar from '../NavigationBar';
import About from '../aboutpage/About'
import { Container } from '@mui/material';
import FadeIn from '../animations/FadeIn';
import Stars from '../animations/Stars'

export default function Home() {
  const win = window.innerHeight;
  return (
    <div className='bg'>
      <NavigationBar />
      <Stars numStars={200}></Stars>
        <Container className='borderLeft' maxWidth='md' style={{position:'absolute', 
                        top:'45%', 
                        left:"50%", 
                        transform:'translate(-50%, -50%)'}} >
        <FadeIn delayTime={200}>
          <h5 style={{ color:'rgb(224,224,224)', 
                      paddingTop:'1%'}}>Hello, this is</h5>
        </FadeIn>
        <FadeIn delayTime={350}>
          <div className='myTitleLeft'>Zenith Yap</div>
        </FadeIn>
        <FadeIn delayTime={500}>
          <h5 style={{ 
                        color:'rgb(224,224,224)',
                        font:"'CoFo Sans', sans-serif",
                        paddingTop:'2%',
                        paddingBottom:'1%' }}>Aspiring web developer</h5>
        </FadeIn>
      </Container>



      <About />
    </div>
  )
}
