import { useState } from 'react'
import Card from './Card/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card width={412} />
    </>
  )
}

export default App
