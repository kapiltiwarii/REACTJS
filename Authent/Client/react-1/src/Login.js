import React from 'react'
import './Signup.css'
const Login = () => {
  return (
    <div>
      <div className='top'>
      <form className='for'>
        Email: <input className='inp'/>
        Password: <input className='inp'/>
       <button>Login</button>
      </form>
      </div>
    </div>
  )
}

export default Login