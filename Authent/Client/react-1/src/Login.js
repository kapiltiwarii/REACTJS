import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import './Signup.css'

const Login = () => {
  const navigate = useNavigate()
  let [input,Setinput]=useState({
    
    email:"",
    passWord:""  })
    function fun1(e){
      let {name,value}=e.target
      Setinput({...input,[name]:value})
     }
    async function done(e){
      e.preventDefault();
      let res = await axios.post('http://localhost:5000/login',input)
      if(res.data=='invalid'){
        alert('wrong username or password')
      }
      else{
        alert('login success')
      }
      console.log(res);
      let a = localStorage.setItem('Kapil',JSON.stringify(res.data))
      let b = localStorage.getItem('Kapil')
      let {loginData}= res.data

      console.log(b);
       
      if(res.data){
      
        navigate('/home',{state:{kapil:loginData}})
      }
    }
  return (
    <div>
      <div className='top'>
      <form className='for' onSubmit={done}>
        Email: <input className='inp' name='email' value={input.email} onChange={fun1} />
        Password: <input className='inp'name='passWord' value={input.passWord} onChange={fun1}/>
       <button>Login</button>
      </form>
      </div>
    </div>
  )
}

export default Login