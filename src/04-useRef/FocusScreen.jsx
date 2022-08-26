
import { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();

    // console.log(ref);

    const onClick = () => {
    
        // console.log(inputRef)
        inputRef.current.select();
    }

  return (
    <>
        <h2>Focus Screen</h2>

        <input 
            ref={inputRef}
            type="text"
            placeholder='Introduce tu nombre'
            className='form-control '/>

        <input 
            // ref={inputRef}
            type="email"
            placeholder='Introduce tu mail'
            className='form-control mt-2 '/>
        
        <button 
            className='btn btn-primary mt-2' 
            onClick={onClick}
        >Set Focus
        </button>

        <hr />
    </>
  )
}
