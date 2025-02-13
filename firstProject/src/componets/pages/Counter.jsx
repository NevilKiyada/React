import React, { useState } from 'react'

export default function Counter() {
    const [count , setCount] = useState(0)
    const [str , setStr] = useState("rahul")
    const [bool , setBool] = useState(false)
    const [array , setArray] = useState([1,2,3,4,5,6,7])
    const [object , setObject] = useState({
        name : 'priyak'
    })
    const vadharo = ()=>{
        setCount(count + 1)
    }
    const ghatado = ()=>{
        setCount(count - 1)
    }
    const zerokaro = ()=>{
        setCount(0)
    }
    
   
    
  return (
    <div>
        <h1>counter</h1>
        <h1>{count}</h1>
        <button onClick={vadharo}>Vadharo karo</button>
        <button onClick={ghatado}>ghatado karo</button>
        <button onClick={zerokaro}>hatu evu karo</button>
    </div>
  )
}
