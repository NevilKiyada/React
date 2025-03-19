import React, { useState } from 'react'

export default function Update({data,setData}) {
  const [id,setId]= useState("")
  const [name,setName]= useState("")
  const [subject,setSubject]= useState("")
  const hdlupd=()=>{
    let finaldata  = data.filter((item)=>{})
  }
  return (
    <div>
      <h1>Update</h1>
      <input type="text" placeholder='Enter Id ' onChange={(e)=>{setId(e.target.value)}} />
      <input type="text" placeholder='Enter name ' onChange={(e)=>{setName(e.target.value)}} />
      <input type="text" placeholder='Enter Subject ' onChange={(e)=>{setSubject(e.target.value)}} />
      <button onClick={hdlupd}>Update Record</button>
    </div>
  )
}
