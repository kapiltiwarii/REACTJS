import React from 'react'
import { useLocation } from 'react-router-dom'
import './App.css'

const ViewCart = () => {
  const location = useLocation()
  const {cart,price}  = location.state
  // console.log(price,'rrr');
  let[btnA,setbtnA] = useState(price)
    let[btnB,setbtnB] = useState(price)
    
  return (
    <div>
     <h3>TotalPrice:{price}</h3>
     {
      cart.map((data)=>{
        return(<>
        <li>
          {data.name} -Quantity: {data.quantity}
            <button className='add' onClick={increase(a)}>+</button>
            <button className='add'>-</button>
        </li>
        </>)

      })
     }
       
    </div>
  )
}

export default ViewCart