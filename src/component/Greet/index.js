import Ucapan from './Ucapan'

const Greet = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      <Ucapan />
    </>
  )
}

export default Greet
