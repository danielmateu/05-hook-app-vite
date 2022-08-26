import { useEffect, useState } from "react";
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Nuk',
        email: 'nukp3luk@gmail.com',
    })

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        })
    };

    useEffect(() => {
        // console.log('useEffect Called!')
    }, []);

    useEffect(() => {
        // console.log('formState Changed!')
    }, [formState]);

    useEffect(() => {
        // console.log('email Changed!')
    }, [email]);

    useEffect(() => {
        
    }, [])


    return (
        <>
            <h2>Simple Form</h2>
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
            <hr />
            {
                username === 'Nuk' &&  <Message/>
            }
        </>
    )

}
