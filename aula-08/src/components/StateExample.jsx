import { useState } from "react"

export function StateExample() {
  const [counter, setCounter] = useState(0)

  const add = () => {
    setCounter(prevState => prevState + 1)
  }

  const remove = () => {
    setCounter(prevState => prevState - 1)
  }

  return (
    <>
      <h3>Contador: {counter} </h3>
      <button onClick={add}>+</button>
      <button onClick={remove}>-</button>
    </>
)
}