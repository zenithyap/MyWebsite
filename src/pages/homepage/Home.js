import '../styling/text.css'
import '../styling/bg.css'
import NavigationBar from '../NavigationBar';
import About from '../aboutpage/About'
import { Container } from '@mui/material';
import FadeIn from '../animations/FadeIn';
import FadeInSecond from '../animations/FadeInSecond';
import FadeInThird from '../animations/FadeInThird';
import FadeInOpacity from '../animations/FadeInOpacity'
import VerticalProgress from '../animations/TopDownVerticalLine'

export default function Home() {
  return (
    <div className='bg'>
      <NavigationBar />
        <FadeInOpacity>
        <picture>
          <source srcSet={require("../../images/my_image.jpg" )}
                  media="(min-width: 1240px)"/>
          <img style={{ height:'45%', 
                    position:'absolute',
                    top:'33%',
                    left:'38%',
                    borderRadius:30 }}
                    src={require("../../images/my_image_mobile.jpg")} alt="" />
        </picture>
      </FadeInOpacity>
      <Container className='borderLeft' style={{position:'absolute', 
                        top:'45%', 
                        left:"50%", 
                        transform:'translate(-50%, -50%)'}} 
                  maxWidth='md'>
        <FadeIn>
          <h5 style={{ color:'rgb(224,224,224)', 
                      paddingTop:'1%'}}>Hello, this is</h5>
        </FadeIn>
        <FadeInSecond>
          <div className='myTitleLeft'>Zenith Yap</div>
        </FadeInSecond>
        <FadeInThird>
          <h5 style={{ 
                        color:'rgb(224,224,224)',
                        font:"'CoFo Sans', sans-serif",
                        paddingTop:'2%',
                        paddingBottom:'1%' }}>Aspiring web developer</h5>
        </FadeInThird>
      </Container>
      <About />
    </div>
  )
}
