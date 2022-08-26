import { useState } from "react"
import { useEffect } from "react"


export const Message = () => {

  const [coords, setCoords] = useState({x:0,y:0})

  useEffect(() => {

    const onMouseMove = ({x,y}) =>{
      const coords = {x,y}
      setCoords(coords)
    }
    
    window.addEventListener('mousemove', onMouseMove )
  
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])
  

  return (
    <>
    <h3 className="alert">El usuario ya existe</h3>
    {JSON.stringify(coords)} 💀
    </>
    
  )
}
