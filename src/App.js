import './App.css'
import { useState } from 'react'

function App() {
  // const [input, setInput] = useState('')
  const [input2, setInput2] = useState([])

  const [data, setData] = useState([
    {
      nama: '',
      alamat: '',
      nohp: '',
    },
  ])

  const handlechange = (e) => {
    const { value } = e.target
    const { name } = e.target
    setInput2({
      ...input2,
      [name]: value,
    })
  }

  const handleData = (e) => {
    const { value } = e.target
    const { name } = e.target
    setData({
      ...data,
      [name]: value,
    })
  }

  return (
    <div className="App">
      <form action="">
        input2 :
        <input type="text" name="input2" onChange={handlechange} />
        <br />
        input3 :
        <input type="text" name="input3" onChange={handlechange} />
        <br />
        input4 :
        <input type="text" name="input4" onChange={handlechange} />
        <br />
        input5 :
        <input type="text" name="input5" onChange={handlechange} />
      </form>
      <button onClick={console.log(input2)}>print</button>

      <form action="">
        nama :
        <input type="text" name="nama" onChange={handleData} />
        <br />
        alamat :
        <input type="text" name="alamat" onChange={handleData} />
        <br />
        no hp :
        <input type="text" name="nohp" onChange={handleData} />
        <br />
      </form>
      <button onClick={console.log(data)}>print</button>
    </div>
  )
}

export default App
