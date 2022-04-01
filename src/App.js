import './App.css'
import Welcome from './component/Welcome'
import Greet from './component/Greet'
import Template from './component/Template'

function App() {
  return (
    <div className="App">
      <Welcome name="john" />
      <Greet name="john" />
      <Template>
        <Welcome name="john" />
        <Greet name="john" />
      </Template>
    </div>
  )
}

export default App
