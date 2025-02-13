import React, { useState } from 'react'

export default function Crud() {
    const [name,setName] = useState("")
    const handlechange = (e) =>{
        setName(e.target.value)
    }
  return (
    <div>
      <h1>CRUD</h1>
      <input type="text" onChange={(e)=>handlechange(e)} />
      <h2>{name}</h2>
    </div>
  )
}
