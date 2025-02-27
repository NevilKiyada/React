import { useState } from 'react'
import Navbarj from './components/pages/navbarj'
import Cardj from './components/pages/cardj'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Navbarj />
        <Cardj />
    </div>
  )
}

export default App
