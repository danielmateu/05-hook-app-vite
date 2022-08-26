
import { useMemo,useState } from "react";

import { useCounter } from "../hooks"


const heavyStuff = ( iterationNumber = 100) =>{
  for(let i = 0; i < iterationNumber; i++){
    console.log('Ahí vamos... ');
  }

  return `${iterationNumber} iteraciones...`
}


export const MemoHook = () => {

    const {counter, suma} = useCounter(4000);

    const [show, setShow] = useState(true)

    const memorizeValue =  useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
    
    <h1>Counter: <small>{counter}</small> </h1>

    <h4>{memorizeValue}</h4>
    
    <button 
    className="btn btn-primary" 
    onClick={() => suma()}
    >Suma 1</button>

    <button
    className="btn btn-secondary"
    onClick={() => setShow(!show)}
    >Show/Hide {JSON.stringify(show)}
    </button>

    </>

    
  )
}
