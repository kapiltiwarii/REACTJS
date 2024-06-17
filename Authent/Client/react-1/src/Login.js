import React,{useState} from 'react'
import axios from 'axios'
import './Signup.css'

const Login = () => {
  let [loginData,Setinput]=useState({
    
    email:"",
    passWord:""  })
    function fun1(e){
      let {name,value}=e.target
      Setinput({...loginData,[name]:value})
     }
    async function done(e){
      e.preventDefault();
      let res = await axios.post('http://localhost:5000/login',loginData)
      if(res.data=='invalid'){
        alert('wrong username or password')
      }
      else{
        alert('login success')
      }
      console.log(res);
    }
  return (
    <div>
      <div className='top'>
      <form className='for' onSubmit={done}>
        Email: <input className='inp' name='email' value={loginData.email} onChange={fun1} />
        Password: <input className='inp'name='passWord' value={loginData.passWord} onChange={fun1}/>
       <button>Login</button>
      </form>
      </div>
    </div>
  )
}

export default Login