import { useContext } from "react"
import { UserContext } from "./context/UserContext";


export const LoginPage = () => {

  const {user, setUser} = useContext(UserContext);
  console.log(user)

  
 
  return (
    <>
    <h2>Login Page</h2>
    <hr />
      <pre aria-label="pre">
        {
          JSON.stringify(user,null,3)
        }
      </pre>

      <button 
      onClick={() => setUser({id:123, nombre: 'Dani', email: 'daniel@gmail.com'})}
      className="btn btn-outline-primary">Establecer Usuario</button>
    </>
  )
}
