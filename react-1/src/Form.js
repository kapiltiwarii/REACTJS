import React, { useEffect, useState } from 'react'

function Form() {

    let [input, setinput] = useState({

        firstname: "",

        lastname: "",

        email: "",

        password: ""
    })
    let [data, SetData] = useState(null)
    useEffect(() => {
        let val = localStorage.getItem("data")
        let newData = JSON.parse(val)
        console.log(newData);
        SetData(newData)

    }, [])

    function fun1(e) {

        // console.log(e.target.name,e.target.value)

        let { name, value } = e.target;


        setinput({ ...input, [name]: (value) })

        // console.log(input)
    }

    function done(e) {

        e.preventDefault()

        // console.log(input)

        let a = JSON.stringify(input);
        localStorage.setItem('data', a)
      SetData(input)
        setinput({

            firstname: "",

            lastname: "",

            email: "",

            password: ""
        })
    }

   function delet(){
    localStorage.clear('data')
    SetData(null)
   }

    return (
<div>
        <form
            onSubmit={done}>

            <input
                onChange={fun1}
                type="text"
                name="firstname"
                value={input.firstname}
                placeholder='enter
 your name'/>


            <input
                onChange={fun1}
                type="text"
                name="lastname"
                value={input.lastname}
                placeholder='enter
 your lastname'/>


            <input
                onChange={fun1}
                type="text"
                name="email"
                value={input.email}
                placeholder='enter
 your email'/>

            <input
                onChange={fun1}
                type="password"
                name="password"
                value={input.password}
                placeholder='enter
 your  password'/>

            <button>Submit</button>

        </form>
      {
        data?(
            <>
            <h1>{data.firstname}</h1>
            <h1>{data.lastname}</h1>
            <h1>{data.email}</h1>
            </>):(<><h2></h2></>)
      }
      {
        data?(<button onClick={delet}>DELETE</button>)
:('')      }
      </div>
    )
}


export default Form