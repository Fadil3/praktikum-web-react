import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  return (
    <>
      <div className="App">
        {count === 0 ? (
          <h1>coba klik tombol nya</h1>
        ) : (
          <h1>Hello World {count}</h1>
        )}
        <button onClick={() => setCount(count - 1)}>kurang - </button>
        <button onClick={() => setCount(count + 1)}>tambah +</button>
      </div>
      <div className="App">
        {isLoading ? <h1>Loading...</h1> : <h1>Hello World</h1>}
        <button onClick={() => setIsLoading(!isLoading)}>
          is loading ? {isLoading === true ? 'true' : 'false'}
        </button>
      </div>
    </>
  )
}

export default App
