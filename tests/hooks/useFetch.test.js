import { renderHook, waitFor } from "@testing-library/react";
import { useFetch } from "../../src/hooks";



describe('Pruebas sobre useFetch', () => { 

    const page = 1;
    const url = `https://www.breakingbadapi.com/api/quotes/${page}`;


    test('Debe de regresar el estado inicial', () => {  
        
        const { result } = renderHook(() => useFetch());
        console.log(result);

        const {data, isLoading, hasError} = result.current;

        expect(data).toBeNull();
        expect(isLoading).toBeTruthy();
        expect(hasError).toBeNull();
    });

    test('Debe de retornar un arreglo y isLoading en false', () => { 
        
        

        // fetch(url)
        // .then(data => {
        //     expect(data).toBeGreaterThan(0);

        //     done();
        // })
        
    })
})