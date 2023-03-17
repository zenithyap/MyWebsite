import '../styling/text.css'
import '../styling/bg.css'
import NavigationBar from '../NavigationBar';
import { Container} from '@mui/material';

export default function Hobbies() {
  return (
    <div className='bg'>
      <NavigationBar/>
      <Container style={{position:'absolute', top:'40%', left:"50%", transform:'translate(-50%, -50%)'}}>
        <div className='title'>My Hobbies</div>
        <div className='h_line'/>
      </Container>
    </div>
  )
}