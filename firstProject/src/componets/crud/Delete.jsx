import React, { useState } from 'react'
import { useNavigate } from 'react-router'

export default function Delete({data,setData}) {
  const navigat = useNavigate()
  const [id,setId]=useState("")
  const hdldel = ()=>{
    let finaldata = data.filter((item)=>item.id !== Number(id))
    setData(finaldata)
    navigat("/read")
  }


  
  return (
    <div>
      <h1>Delete</h1>
      <input type="text" onChange={(e)=>{setId(e.target.value)}} placeholder='Enter Id for delete record ' />
      <button onClick={hdldel}>Delete Data</button>
    </div>
  )
}
