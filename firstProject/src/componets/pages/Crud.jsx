import React, { useState } from 'react'

export default function Crud() {
    const [name,setName] = useState("")
    const handlechange = (e) =>{
        setName(e.target.value)
    }
    const [n,setName1] = useState("")

    //create simple calculator
    const [num1,setNum1] = useState()
    const [num2,setNum2] = useState()
    const [num3,setNum3] = useState()

    const handlechange1 = (e) =>{
        let sign = e.target.value

        if (sign == "+"){
            setNum3 ( Number(num1) + Number(num2))
        }
        else if (sign == "-"){
            setNum3 ( Number(num1) - Number(num2))
        }
        else if (sign == "*"){
            setNum3 ( Number(num1) * Number(num2))
        }
        else if (sign == "/"){
            setNum3 ( Number(num1) / Number(num2))
        }
        else{
            setNum3("enetr only + , - , * , / for operation")
        }
        // using spread operator
        const [nm , changeName ] = useState("")
        const [spr , allAtOnce] = useState([])
        
        const handleSubmit = ()=>{
            allAtOnce([...spr,nm])
        }
    }
  return (
    <div>
      <h1>CRUD</h1>
      <input type="text" onChange={(e)=>handlechange(e)}  placeholder='using full function  '/> <br/>
      <input type="text" onChange={(e)=>setName1(e.target.value)}  placeholder='Using one Line code  '/>
      <h2>{name}</h2>
      <h2>{n}</h2>
      <div>
        <input type="text" onChange={(e)=>setNum1(e.target.value)} placeholder='enter first number' />
        <input type="text" onChange={(e)=>setNum2(e.target.value)} placeholder='enter second number' />

        <input type="text" onChange={(e)=>handlechange1(e)} placeholder='enetr your sign'/>
        <h2>ans  = {num3}</h2>
        <br />
        <hr />

       <input type="text"
       placeholder='enter Your name' 
       
       onChange={(e)=>changeName(e.target.value) }
       />
       <button onClick={handleSubmit}>Submit</button>
       {
        spr.map((e,i)=>{
            return <h2> {i+1} - {e}</h2>
        })
      }
      </div>
    </div>
  ) 
}
