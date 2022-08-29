import { render,screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples"


describe('Pruebas sobre <MultipleCustomHooks/>', () => { 
    
    test('Debe de mostrar el componente por defecto', () => {  
        render(<MultipleCustomHooks/>);

        expect(screen.getByText('Loading...'))
        expect(screen.getByText('BreakingBad Quotes'));

        const nextButton = screen.getByRole('button', {name:'Next Quote'});

        console.log(nextButton.disabled)
        expect(nextButton.disabled).toBeTruthy();

        screen.debug()
    })

    test('', () => { 
        
    })
})