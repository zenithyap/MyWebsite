import '../styling/bg.css'
import '../styling/text.css'
import NavigationBar from '../NavigationBar';

export default function home() {
  return (
    <div className='bg'>
      <NavigationBar />
      <div className='title' style={{position:'absolute', top:'40%', left:"50%", transform:'translate(-50%, -50%)'}}>Welcome</div>
    </div>
  )
}