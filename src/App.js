// use state
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count - 1)
  }

  return (
    <div className="App">
      <h1>telah di-klik sebanyak {count}</h1>
      <button onClick={() => setCount(count + 1)}>tambah +</button>
      <br />
      <button onClick={handleClick}>kurang - </button>
    </div>
  )
}

export default App
