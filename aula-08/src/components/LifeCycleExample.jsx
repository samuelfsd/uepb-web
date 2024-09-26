import { useState } from "react"

const Title = ({ children }) => <h3>{children}</h3>

export function LifeCycleExample() {
  const [counter, setCounter] = useState(0)

  const add = () => {
    setCounter(prevState => prevState+1)
    console.log(counter)
  }

  const remove = () => {
    setCounter(prevState => prevState -1 )
    console.log(counter)
  }

  return (
    <>
     {counter !== 0 && <Title>{counter}</Title>}

     <button onClick={add}>+</button>
     <button onClick={remove}>-</button>
    </>
  )
}
