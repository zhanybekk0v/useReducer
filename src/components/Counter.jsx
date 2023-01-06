import React, { useContext } from 'react'
import { counterContext } from './contexts/CounterContextProvaider'

const Counter = () => {
  const {counter, increment,decrement,increment10,decrement10,add , title} = useContext(counterContext)
  return (
    <div align ='center'>
      <h1>{counter}</h1>
      <button onClick={increment}>Pluc</button>
      <button onClick={decrement}>Minus</button>
      <button onClick={increment10}>Pluc 10</button>
      <button onClick={decrement10}>Minus -10</button>
      <div>
        <h2>
          {title}
        </h2>
        <input onChange={add} type="text" />
  
      </div>
    </div>
  )
}

export default Counter