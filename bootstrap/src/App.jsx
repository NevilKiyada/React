import { useState } from 'react'
import Navbarj from './components/pages/navbarj'
import Cardj from './components/pages/cardj'
import FilterSearch from './components/pages/FilterSearch'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <FilterSearch />
    </div>
  )
}

export default App
