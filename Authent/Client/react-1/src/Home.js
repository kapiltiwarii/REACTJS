import React from 'react'
import { useLocation } from 'react-router-dom'
import './Signup.css'
const Home = () => {
  const location = useLocation()
  const {kapil} = location.state
  let {name,lastname,email} = kapil

  // console.log(data);
  return (
    <div className='home'>
      <div className='under'>Home
    <h3>Name : {name} {lastname}</h3>
   
    <h3>E-Mail : {email}</h3>
    </div>
    </div>
  )
}

export default Home