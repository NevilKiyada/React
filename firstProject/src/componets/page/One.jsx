import React from 'react'
import { Link, useNavigate } from 'react-router'

export default function One() {
    const navigate = useNavigate()
  return (
    <div>
        <h1>Home</h1>
        <button onClick={()=>navigate('/two' ,{replace:true})}>GO to Two </button>
  
    </div>

  )
}
