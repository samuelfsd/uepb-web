import { useState } from "react"

const Title = ({ children }) => <h3>{children}</h3>

export function LifeCycleExample() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Title>{count}</Title>

     <button onClick={handleAdd}>+</button>
     <button onClick={handleRemove}>-</button>
    </>
  )
}
