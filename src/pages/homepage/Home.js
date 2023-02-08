import '../styling/bg.css'
import '../styling/text.css'
import NavigationBar from '../NavigationBar';

export default function home() {
  return (
    <div className='bg'>
      <NavigationBar />
      <div className='title'>Welcome</div>
    </div>
  )
}