import React, { useState } from 'react'
import { useNavigate } from 'react-router'

export default function Writ({data,setData}) {
  const navigat = useNavigate()

  const [name,setName] = useState("")
  const [subject,setSubject] = useState("")
  const handleBtn = ()=>{
    let obj = {id:data.length +1 ,name,subject}
    setData([...data,obj])
    navigat("/read")

  }

  return (
    <div>
      <h1>Writ</h1>
      <input type="text" value={name} placeholder='Enter Name ' onChange={(e)=>{setName(e.target.value)}} />
      <input type="text" value={subject} placeholder='Enter subject ' onChange={(e)=>{setSubject(e.target.value)}} />

      <button onClick={handleBtn}>Add Data</button>

    </div>
  )
}
