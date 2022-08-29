import { render,screen,fireEvent } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples"
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch"

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');


describe('Pruebas sobre <MultipleCustomHooks/>', () => { 

    const mockIncrement = jest.fn();

        useCounter.mockReturnValue({
            counter: 1,
            suma: mockIncrement
        });

        beforeEach(() => {
            jest.clearAllMocks();
        });
    
    test('Debe de mostrar el componente por defecto', () => {  

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        })

        render(<MultipleCustomHooks/>);
        screen.debug();

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('BreakingBad Quotes'));

        const nextButton = screen.getByRole('button', {name:'Next Quote'});

        // console.log(nextButton.disabled)
        expect(nextButton.disabled).toBeTruthy();

        
    })

    test('Debe de mostrar un Quote', () => { 

        useFetch.mockReturnValue({
            data: [{author:'Dani', quote: 'Hola mundo'}],
            isLoading: false,
            hasError: null,
        })
        render(<MultipleCustomHooks/>);
        // screen.debug();

        expect(screen.getByText('Hola mundo')).toBeTruthy();
        expect(screen.getByText('Dani')).toBeTruthy();

        const nextButton = screen.getByRole('button', {name:'Next Quote'});
        expect(nextButton.disabled).toBeFalsy();

    })

    test('Debe llamar la funcion de incrementar', () => {  

        useFetch.mockReturnValue({
            data: [{author:'Dani', quote: 'Hola mundo'}],
            isLoading: false,
            hasError: null,
        });

        render(<MultipleCustomHooks/>);
        const nextButton = screen.getByRole('button', {name:'Next Quote'});
        fireEvent.click( nextButton );

        expect(mockIncrement).toHaveBeenCalled()
    })
})