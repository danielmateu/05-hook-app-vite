import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {

  const { counter,suma,resta,reset } = useCounter()  

  return (
    <>
    <hr />
    <h2>Counter With Hook: {counter}</h2>
    <button className="btn btn-info" onClick={() => suma(2)} >Suma </button>
    <button className="btn btn-secondary" onClick={reset} >Reset</button>
    <button className="btn btn-danger" onClick={() => resta(2)} >Resta</button>
    <hr />
    </>
  )
}
