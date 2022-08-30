import { render,screen, fireEvent } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext"
import { LoginPage } from "../../src/09-useContext/LoginPage"


describe('Pruebas en <LoginPage/>', () => { 
    const setUserMock = jest.fn();

    const user = {
        id : 1, 
        name: 'Dani'
    }
    
    test('Debe de mostrar el componente sin el user', () => { 
        render(
            <UserContext.Provider value = {{user:null}}>
                <LoginPage/>
            </UserContext.Provider>
        )

        screen.debug()

        const preTag = screen.getByLabelText('pre');

        // console.log(preTag.innerHTML);

        expect(preTag.innerHTML).toBe('null');
    })

    test('Debe de llamar al setUser cuando se hace click en el boton', () => { 

        render(
            <UserContext.Provider value = {{user, setUser: setUserMock}}>
                <LoginPage/>
            </UserContext.Provider>
        )

        const button = screen.getByRole('button');
        console.log(button);
        fireEvent.click(button);

        expect(setUserMock).toHaveBeenCalledWith(
            {
                "email": "daniel@gmail.com",
                "id": 123,
                "nombre": "Dani"
            });
        })
})