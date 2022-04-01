import './App.css'

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

const Greet = (props) => <h1>Good Morning, {props.name}</h1>

const Template = (props) => (
  <div style={{ color: 'green' }}>{props.children}</div>
)

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
