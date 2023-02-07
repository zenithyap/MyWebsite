import './text.css'
import NavigationBar from './NavigationBar';
import Timeline from './EducationTimeline'
import Skills from './Skills'
import { Container, Box, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import RocketIcon from '@mui/icons-material/Rocket';

/*
<Container style={{textAlign:'center'}}>
  <a href='https://www.google.com/'>
  <svg width='40%' height='40%' enable-background="new 0 0 566.93 566.93" version="1.1" viewBox="0 0 566.93 566.93" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m464.88 107.9c-0.111-0.584-0.448-1.079-0.98-1.373l-7.378-4.305c2.387-3.007 4.688-5.935 6.752-8.592-5.07-20.952-28.642-23.632-28.642-23.632l-7.266 9.993-5.725-5.576c-0.421-0.434-1-0.621-1.588-0.569-0.584 0.037-1.13 0.332-1.485 0.803l-4.3 5.664c-0.364 0.471-0.509 1.074-0.374 1.648 0.084 0.495 0.355 0.934 0.757 1.228 0.069 0.047 0.14 0.103 0.21 0.145l7.088 4.123-5.052 6.953-6.015-5.846c-0.411-0.425-0.99-0.616-1.578-0.565-0.593 0.038-1.13 0.327-1.485 0.789l-4.314 5.678c-0.354 0.472-0.49 1.064-0.364 1.653 0.084 0.486 0.369 0.925 0.767 1.219 0.061 0.051 0.13 0.093 0.214 0.145l7.401 4.319-5.239 7.2-6.275-6.108c-0.43-0.439-1.009-0.621-1.583-0.579-0.593 0.042-1.135 0.336-1.484 0.803l-4.319 5.673c-0.351 0.472-0.49 1.069-0.364 1.644 0.089 0.495 0.364 0.934 0.766 1.232 0.061 0.047 0.131 0.093 0.21 0.14l8.223 4.795c0.131 0.075 0.267 0.103 0.401 0.145l-5.318 15.656 16.539 12.561 15.045-8.732c0.08 0.383 0.243 0.752 0.542 1.042l6.831 6.645c0.062 0.065 0.131 0.117 0.191 0.163 0.397 0.304 0.883 0.444 1.392 0.406 0.584-0.033 1.126-0.327 1.485-0.793l4.305-5.683c0.36-0.462 0.495-1.064 0.379-1.634-0.122-0.583-0.453-1.079-0.977-1.373l-8.236-4.795c-0.028-0.014-0.061-0.014-0.084-0.028 1.597-1.957 3.553-4.347 5.762-7.069l6.668 6.481c0.061 0.061 0.121 0.112 0.187 0.164 0.393 0.294 0.888 0.453 1.392 0.406 0.593-0.037 1.121-0.327 1.485-0.794l4.31-5.683c0.354-0.462 0.495-1.055 0.374-1.634-0.117-0.579-0.444-1.079-0.981-1.368l-7.783-4.543c1.793-2.218 3.637-4.501 5.486-6.804l6.275 6.107c0.07 0.065 0.126 0.122 0.196 0.168 0.388 0.294 0.888 0.439 1.387 0.406 0.593-0.038 1.13-0.336 1.485-0.803l4.319-5.673c0.342-0.466 0.491-1.073 0.365-1.643zm-52.456 11.468c-1.205 1.578-3.479 1.896-5.066 0.686-1.592-1.209-1.91-3.483-0.695-5.071 1.219-1.597 3.483-1.9 5.075-0.696 1.592 1.21 1.905 3.479 0.686 5.081zm10.88-14.335c-1.21 1.597-3.475 1.91-5.066 0.701-1.593-1.209-1.9-3.474-0.687-5.066 1.214-1.602 3.483-1.915 5.071-0.71 1.592 1.218 1.901 3.482 0.682 5.075zm4.996-18.519c1.214-1.602 3.479-1.9 5.071-0.696 1.588 1.205 1.905 3.47 0.69 5.076-1.204 1.592-3.479 1.891-5.07 0.677-1.588-1.205-1.9-3.469-0.691-5.057zm-0.477 44.546c-1.204 1.592-3.479 1.905-5.075 0.691-1.583-1.209-1.905-3.479-0.687-5.071 1.209-1.606 3.479-1.905 5.075-0.696 1.589 1.205 1.906 3.484 0.687 5.076zm10.89-14.321c-1.219 1.587-3.483 1.9-5.071 0.686-1.597-1.205-1.91-3.483-0.7-5.071 1.205-1.592 3.492-1.905 5.071-0.696 1.596 1.21 1.914 3.479 0.7 5.081zm10.739-14.144c-1.204 1.583-3.465 1.891-5.062 0.677-1.588-1.209-1.91-3.474-0.7-5.066 1.209-1.602 3.492-1.905 5.075-0.696 1.593 1.219 1.911 3.489 0.687 5.085z"/><path d="m297.82 301.1 111.83-152.49-15.787-12.005-102.44 130.16c-0.952-0.817-1.857-1.602-2.666-2.32-25.999-21.134-47.395-25-64.316-7.779-10.955 11.169-10.6 21.26-15.446 29.371-26.112 43.631-62.268 34.974-90.405 64.882-21.008 22.329-19.43 53.908-9.722 71.391 25.485 45.887 106.81 103.1 149.09 58.48 27.825-29.376 24.076-57.705 32.163-85.166 2.672-9.04 10.133-22.824 18.197-30.697 4.707-4.608 17.543-6.079 21.923-17.599 6.751-17.726-36.759-27.121-32.426-46.223zm-71.259 24.172c8.063-10.623 23.216-12.691 33.839-4.617 10.614 8.064 12.683 23.217 4.609 33.839-8.069 10.614-23.212 12.683-33.835 4.614-10.618-8.069-12.678-23.216-4.613-33.836zm3.287 103.85-58.055-44.117 7.162-9.437 58.064 44.112-7.171 9.442zm28.427-13.047c-6.313 2.046-9.475 2.69-20.513-5.473-8.434-7.298-12.323-13.518-3.577-27.391 6.164-8.102 11.743-11.444 18.696-10.613 7.103 0.032 26.41-8.05 28.213-31.943-0.29-5.869 4.562-6.49 7.196 8.143 1e-3 0 6.323 46.363-30.015 67.277z" clip-rule="evenodd" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/></svg>
  </a>
</Container>
*/

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function About() {
  return (
    <div className='bg'>
      <NavigationBar />
      <div className='title'>About Me</div>
      <div className='h_line'/>
      <Container sx={{marginTop: '3%', marginBottom:'12%'}} maxWidth="md" >
        <div className='p1'>
          I am a Year 2 Computer Science Major currently studying at National University of Singapore. I am a self-motivated, responsible and hard working individual, open to learning new frameworks and languages in order to further develop my personal skills for a job in the future. I aspire to be a Software Developer / Frontend web developer as these 2 years in University made me realise that designing a nice GUI is very fulfilling. With that said, I hope to land an internship soon so as to gain the necessary industry related skills and experience in order to further my career in the software developer field.
        </div>
        <Grid container spacing='5' marginTop={6}>
          <Grid item xs={6}>
            <Item>
              <h3>Education</h3>
              <div className='h_line'/>
              <Timeline/>
            </Item>
            
          </Grid>
          <Grid item xs={6}>
            <Item>
              <h3>Skills</h3>
              <div className='h_line'/>
              <Skills/>
            </Item>
          </Grid>
        </Grid>
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
