import { useForm } from "../hooks/useForm";
import { Message } from "./Message";
import { PasswordMessage } from "./PasswordMessage";


export const FormWithCustomHook = () => {

    const {formState, onInputChange, onResetForm, username,email,password} = useForm ({
        username: '',
        email: '',
        password: ''
    });

    // const {username,email,password} = formState;

    return (
        <>
            <h2>Form With Custom Hook</h2>
            <input
                type="text"
                className="form-control"
                placeholder="User name"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="danielm@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Insert your password"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button onClick={onResetForm} className="btn btn-secondary mt-2">Reset</button>
            <hr />
            {
                username === 'Nuk' &&  <Message/>
            }
            {
                (password.length > 0 && password.length < 6) && <PasswordMessage/>
            }
            
        </>
    )

}
