import { useContext } from "react"
import { UserContext } from "./context/UserContext"


export const HomePage = () => {

  const {user} = useContext(UserContext);

  return (
    <>
    <h2>Home Page <span>{user?.nombre}</span></h2>
    <hr />

    <pre>
      {JSON.stringify(user,null,3)}
    </pre>
    </>
  )
}
