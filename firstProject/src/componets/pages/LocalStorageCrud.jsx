import React, { useState } from 'react'

export default function LocalStorageCrud() {
    const [name , setName] = useState("")
    const [sub , setSub] = useState("")
  return (
    <div>
        <br />
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" placeholder='eneter Your sweet Name'/>
        <br />  
        <input type="text" placeholder='eneter Your fev Sub '/>
        <br />      
        <button type='submit'>SUBMIT</button>
      </form>
    </div>
  )
}
