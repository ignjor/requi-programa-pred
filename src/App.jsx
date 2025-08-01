import { useState } from 'react'
import './App.css'
import Programa from './components/programa'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Programa />
    </>
  )
}

export default App
