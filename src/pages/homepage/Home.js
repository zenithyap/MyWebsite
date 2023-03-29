import '../styling/text.css'
import '../styling/bg.css'
import '../styling/progressBar.css'
import NavigationBar from '../NavigationBar';
import About from '../aboutpage/About'
import { Container } from '@mui/material';
import FadeIn from '../animations/FadeIn';
import FadeInOpacity from '../animations/FadeInOpacity'

export default function Home() {
  const win = window.innerHeight;
  return (
    <div className='bg'>
      <NavigationBar />
      <FadeInOpacity>
      <picture>
        <source srcSet={require("../../images/my_image.jpg" )}
                media="(min-width: 1100px)"/>
        <img style={{ width:'60%', 
                  marginTop:win/4.5,
                  marginLeft:'35%',
                  borderRadius:30 }}
                  src={require("../../images/my_image_mobile.jpg")} alt="" />
      </picture>
      </FadeInOpacity>
      <Container className='borderLeft' style={{position:'absolute', 
                        top:'45%', 
                        left:"50%", 
                        transform:'translate(-50%, -50%)'}} 
                  maxWidth='md'>
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
