import { memo } from "react"


export const Small = memo(({value}) => {

    console.log('Me volví a Dibujar... 💀')

  return (
    <small>{value}</small>
  )
});
