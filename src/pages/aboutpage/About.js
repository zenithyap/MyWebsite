import '../styling/text.css'
import NavigationBar from '../NavigationBar';
import Timeline from './EducationTimeline'
import Skills from './Skills'
import { Container, Box } from '@mui/material';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import RocketIcon from '@mui/icons-material/Rocket';
import { useSpring, animated } from '@react-spring/web'

export default function About() {
  const leftToRight = useSpring({
    from: { x: -100 },
    to: { x: 0 },
  })

  const rightToLeft = useSpring({
    from: { x: 100 },
    to: { x: 0 },
  })

  return (
    <div className='bg'>
      <NavigationBar />
      <animated.div
        style={{...leftToRight}}  
      >
        <div className='title'>About Me</div>
      </animated.div>
      <div className='h_line'/>
      <Container sx={{marginTop: '3%', marginBottom:'12%'}} maxWidth="md" >
        <animated.div
          style={{...rightToLeft}}
        >
          <div className='p1'>
            I am a Year 2 Computer Science Major currently studying at National University of Singapore. I am a self-motivated, responsible and hard working individual, open to learning new frameworks and languages in order to further develop my personal skills. I aspire to be a Software Developer / Frontend web developer. With that said, I hope to land an internship soon so as to gain the necessary industry related skills and experience in order to further my career in the software developer field.
          </div>
        </animated.div>
        <Container sx={{marginTop: '5%'}}>
          <h3>Education</h3>
          <div className='h_line'/>
          <Timeline/>
        </Container>
        <Container sx={{marginTop:'5%'}}>
          <h3>Skills</h3>
          <div className='h_line'/>
          <Skills/>
        </Container>
      </Container>
      <h1 position='absolute'>
          My Interests
      </h1>
      <Box display='flex' justifyContent='center'>
        <ArrowCircleDownIcon style={{color:'whitesmoke'}}/>
      </Box>
      <Box position='flex' alignItems='center'>
        <ul style={{listStyle:'none', textAlign:'center'}}>
          <li>
            <SportsEsportsIcon onClick={() => window.open('https://steamcommunity.com/profiles/76561198262957792/', '_blank')}
                              sx={{ "&:hover": { color: "grey" }, 
                                    fontSize:'1200%', 
                                    color:'whitesmoke', 
                                    padding:2,
                                    marginRight:4}}/>
          </li>
          <li>
            <MusicNoteIcon onClick={() => window.open('https://www.songsterr.com/', '_blank')}
                              sx={{ "&:hover": { color: "grey" }, 
                                    fontSize:'1200%', 
                                    color:'whitesmoke', 
                                    padding:2,
                                    marginRight:4}}/>
          </li>
          <li>
            <RocketIcon onClick={() => window.open('https://www.nasa.gov/', '_blank')}
                              sx={{ "&:hover": { color: "grey" }, 
                                    fontSize:'1200%', 
                                    color:'whitesmoke', 
                                    padding:2,
                                    marginRight:4}}/>
          </li>
        </ul>
      </Box>
    </div>
  )
}
