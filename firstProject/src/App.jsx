import React from 'react'

import {BrowserRouter, Link, Route, Routes} from "react-router-dom"

import One from './componets/page/One'
import Two from './componets/page/Two'
import Three from './componets/page/Three'
import Read from './componets/crud/Read'
import Writ from './componets/crud/Writ'
import Update from './componets/crud/Update'
import Delete from './componets/crud/Delete'



export default function App() {
  const data =[{
    name: "inc", subject: "maths"
  }]
  return (

    <div>

      <BrowserRouter>
      <h2>NavBar</h2>
      <Routes>
        <Route path='/' Component={One}></Route>
        <Route path='/two' Component={Two}></Route>
        <Route path='/three/:id' Component={Three}></Route>
        <Route path='/three/' Component={Three}></Route>

        <Route path='/read' element={<Read record={data}/>}></Route>
        <Route path='/writ' element={<Writ record={data}/>}></Route>
        <Route path='/update' element={<Update record={data}/>}></Route>
        <Route path='/delete' element={<Delete record={data}/>}></Route>


    
      </Routes>
      
      </BrowserRouter>
      
    
    </div>
  )
}
