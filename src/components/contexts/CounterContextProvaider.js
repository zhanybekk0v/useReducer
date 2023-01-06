import React, { createContext, useReducer } from 'react'

export const counterContext = createContext()
const INIT_STATE = {
  counter: 0,
  title: ""
}
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: action.payload }
    case 'DECREMENT':
      return { ...state, counter: action.payload }
    case 'INCREMENT10':
      return { ...state, counter: action.payload }
    case 'DECREMENT10':
      return { ...state, counter: action.payload }
      case "ADD":
        return {...state, title: action.payload}
    default:
      return state;
  }

}
const CounterContextProvaider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE)
  function increment() {
    dispatch({ type: 'INCREMENT', payload: state.counter + 1})
  }
  function decrement() {
    dispatch({ type: 'DECREMENT', payload: state.counter -1})
  }
  function increment10() {
    dispatch({ type: 'INCREMENT10', payload: state.counter + 10 })
  }
  function decrement10() {
    dispatch({ type: 'DECREMENT10', payload: state.counter - 10 })
  }
  function add(e) {
    dispatch({ type: 'ADD', payload: e.target.value})
  }

  const values = { counter: state.counter, increment, decrement, increment10, decrement10 ,add , title: state.title}
  return (
    <div>
      <counterContext.Provider value={values}>{children}</counterContext.Provider>
    </div>
  )
}

export default CounterContextProvaider