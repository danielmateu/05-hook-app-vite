import { renderHook, waitFor } from "@testing-library/react";
import { useFetch } from "../../src/hooks";


describe('Pruebas sobre useFetch', () => { 

    const url = 'https://www.breakingbadapi.com/api/quotes/1'

    test('Debe de regresar el estado inicial', () => {  
        
        const { result } = renderHook(() => useFetch(url));
        console.log(result);

        const {data, isLoading, hasError} = result.current;

        expect(data).toBeNull();
        expect(isLoading).toBeTruthy();
        expect(hasError).toBeNull();
    });

    test('Debe de retornar un arreglo y isLoading en false', async() => { 
        
        // const {result} = renderHook(() => useFetch(url));

        // console.log(result.current.data)

        // await waitFor(
        //     () => expect(result.current.data.length).toBe(0),
        // );



        // const {data,isLoading} = result.current;
        
        // expect(data.length).toBeGreaterThan(0);

        // expect(isLoading).toBeFalsy();
    })
})