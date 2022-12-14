import { useState } from "react"


export const useCounter = (initialValue = 1) => {

    const [counter, setCounter] = useState(initialValue)

    const suma = (value = 1) =>{
        setCounter((current) => counter + value)
    }

    const resta = (value = 1) =>{
        if(counter === 0) return
        setCounter((current) => counter - value)
    }

    const reset = () => {
        setCounter(initialValue)
    }

    return {
        counter,
        suma,
        resta,
        reset,
    }
}
