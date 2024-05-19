import React, { useEffect, useState } from 'react'
import Card from './Card'
import { useNavigate } from 'react-router-dom'

const Card1 = () => {
    const [data,SetData]=useState([])
    useEffect(()=>{
        SetData(Card.map(item=>({...item,quantity:0})))
    },[])
    let[cart,setcart] = useState([])
    

 
    
    function addCart(id){
        
        let update = data.map(item=>item.id===id?{...item,quantity:1}:item)
        SetData(update)
        // console.log(id );
        const addCartdata= {...data.find(item=>item.id===id),quantity:1}
        setcart([...cart,addCartdata])

 }
 let navigate = useNavigate()
    function cartdata(){
      let filtercart= data.filter(item=>item.quantity>0)
      let price=getTotalprice()
        navigate('/view',{ state : {cart:filtercart,price:price}})
    }
 function increaseval(id){
       let updatecart= data.map(item=>item.id===id?{...item,quantity:item.quantity+1}:item)
       SetData(updatecart)
       let productadd={...data[id]}
       setcart([...cart,productadd])
}
 function deccreaseval(id){
    let updatecart= data.map(item=>item.id===id && item.quantity>0?{...item,quantity:item.quantity-1}:item)
    SetData(updatecart)
    let productadd={...data[id]}
    setcart([...cart,productadd])
 }

 let getTotalprice=()=>{
    return data.reduce((total,item)=>
    total+item.price*item.quantity,0)

 }
 
  return (
    <div>
      <h2 className='cafe'>CAFE THIKANA</h2>
      <button className='view' onClick={()=>cartdata()}>ViewCart({data.filter(item=>item.quantity>0).length})</button>
      <p className='ttt'>total Price :${getTotalprice()}</p>
      {
        data.map(value=>(

            <>
             
         <div className='container'>
            <div className='main'>
            <img src={value.image} className='img'/>
            <div className='down'>
            <p>{value.id}</p>
            <p>{value.name}</p>
            <p>{value.price}</p>
            <p>{value.description}</p>
            <p>{value.quantity}</p>addCart
            {
                value.quantity===0?
                ( <button className='add' onClick={()=>(value.id)}>ADD TO CART</button>):(
                    <>
                    <button onClick={()=>increaseval(value.id)}>+</button>
                    <button onClick={()=>deccreaseval(value.id)}>-</button>
                    
                    </>
                )
            }
           
            </div>

            </div>
            </div>
            </>
        ))
      }
    </div>
  )
}

export default Card1