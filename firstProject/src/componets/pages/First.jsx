import React from 'react'

export default function First() {
    const name = 'first'
    const obj ={
        name: name,
        subject:'react'
    }
    const arr =['first', 'second', 'third', 'fourth', 'fifth']
  return (
    <div>
       <h3>hy {name}</h3>
       <h2>name :{obj.name}</h2>
       <h2>sub :{obj.subject}</h2>
        {arr.map((i,v)=>{
            return(
                <div key={v}>
                    <ul>  
                        <li>{v}</li> 
                        <li>{i}</li>
                    </ul> 

                </div>
            )
            
        })}
    </div>
  )
}
