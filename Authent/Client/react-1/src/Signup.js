import React, { useState } from 'react'
import './Signup.css'
const Signup = () => {
  let [input,Setinput]=useState({
    name:"",
    lastname:"",
    email:"",
    passWord:""  })

    function fun1(e){
     let {name,value}=e.target
     Setinput({...input,[name]:value})
    }
    function done(e){
      e.preventDefault();
      console.log('raaam',input);
    }

  return (
    <div>
      <div className='top'>
      <form className='for' onSubmit={done}>
        Name: <input className='inp' name='name' type='text' value={input.name} onChange={fun1}/>
        Lastname: <input className='inp'name='lastname' type='text' value={input.lastname}onChange={fun1}/>
        Email: <input className='inp' name='email' type='email' value={input.email} onChange={fun1}/>
        Password: <input className='inp' name='passWord' type='password' value={input.passWord} onChange={fun1}/>
        <button className='btn'>Save</button>
      </form>
      </div> </div>
  )
}

export default Signup