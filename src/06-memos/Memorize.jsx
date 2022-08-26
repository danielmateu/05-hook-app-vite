import { useState } from "react";
import { useCounter } from "../hooks"
import { Small } from "./Small";


export const Memorize = () => {

    const {counter, suma} = useCounter(10);

    const [show, setShow] = useState(true)

  return (
    <>
    <h1>Counter: <Small value={counter}/> </h1>
    
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
