import { renderHook ,act} from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm";

const initialForm = {
    name: 'Daniel',
    email: 'danielmateu@gmail.com'
}

describe('Pruebas sobre useForm', () => {  

    test('Debe de regresar los valores por defecto', () => { 
        const {result} = renderHook(() => useForm(initialForm));
        // console.log(result.current);
        expect(result.current).toEqual(
            {
                name: initialForm.name,
                email: initialForm.email,
                formState: initialForm,
                onInputChange: expect.any(Function),
                onResetForm: expect.any(Function),
            }
        );
    });

    test('Debe de cambiar el nombre del formulario', () => { 

        const newValue = 'Juan';

        //Montar el hook

        const {result} = renderHook(() => useForm({newValue}));

        const {onInputChange} = (result.current);

        //oninputChange() // act, event...
        act(()=> {
            onInputChange({target: {name: 'name', value: newValue}});
        });

        //expect, result.current.name === Juan
        expect(result.current.name).toBe(newValue);
        
        //expect, result.current.formState.name === Juan
        expect(result.current.formState.name).toBe(newValue);
    })


    // test('Debe de realizar el reset del formulario', () => { 

    //     const newValue = 'Juan';
    //     //Montar el hook
    //     const {result} = renderHook(() => useForm({initialForm}));
    //     const {onInputChange, onResetForm} = result.current;

    //     console.log(result.current.initialForm.name)

    //     //oninputChange() // act, event...
    //     act(()=> {
    //         onInputChange({target: {name: 'name', value: newValue}});
    //         onResetForm();
    //     });

    //     // console.log(initialForm.name)

    //     //expect, result.current.name === Juan
    //     expect(result.current.name).toBe(initialForm.name);
        
    //     //expect, result.current.formState.name === Juan
    //     // expect(result.current.formState.name).toBe(initialForm.name);
    // })

    test('Debe realizar el reset del formulario', () => { 

        const newValue = 'Juan';

        //Montar el hook

        const {result} = renderHook(() => useForm(initialForm));

        // console.log(result.current)
        const {onInputChange, onResetForm} = result.current;

        //oninputChange() // act, event...
        act(()=> {
            onInputChange({target: {name: 'name', value: newValue}});
            onResetForm();
        });

        //expect, result.current.name === Juan
        expect(result.current.name).toBe(initialForm.name);
        
        //expect, result.current.formState.name === Juan
        expect(result.current.formState.name).toBe(initialForm.name);
    })
})