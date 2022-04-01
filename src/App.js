import './App.css'

function App() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div className="App">
      {array.map((item, index) => {
        return <div key={index}>{item}</div>
      })}
    </div>
  )
}

export default App
