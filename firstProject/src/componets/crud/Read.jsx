import React from 'react'
import { useNavigate } from 'react-router'

export default function Read({record}) {
    // console.log(record);
    const navigat = useNavigate()
    
  return (
    <div>
        <h1>Read</h1>
       {
        record.map((e,i)=>{
        return    <ul key={i}>
            <li>{e.name}</li>
            <li>{e.subject}</li>
        </ul>
        })
       }

       <button onClick={()=>{navigat(`/update`)}}>Update</button>
       <button onClick={()=>{navigat(`/delete`)}}>Delete</button>
       <button onClick={()=>{navigat(`/writ`)}}>Writ</button>
       
    </div>

  )
}
