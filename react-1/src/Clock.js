import {React,useState} from 'react'

function Clock() {
    let[time,settime]=useState();
    setInterval(()=>{
        let a=new Date().toLocaleTimeString()
        settime(a)
    })
  return (
    <>
    <div>kapil</div>
    <h2>{time}</h2></>
  )
}

export default Clock