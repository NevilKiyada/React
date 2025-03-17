import React from 'react'

import {BrowserRouter, Link, Route, Routes} from "react-router-dom"

import One from './componets/page/One'
import Two from './componets/page/Two'
import Three from './componets/page/Three'



export default function App() {
  return (

    <div>

      <BrowserRouter>
      <h2>NavBar</h2>
      <Routes>
        <Route path='/' Component={One}></Route>
        <Route path='/two' Component={Two}></Route>
        <Route path='/three/:id' Component={Three}></Route>

    
      </Routes>
      
      </BrowserRouter>
      
    
    </div>
  )
}
