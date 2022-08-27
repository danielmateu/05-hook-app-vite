import { act,render, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter";

const initialValue = 1;

describe('Pruebas en useCount', () => { 
    
    test('Debe de retornar los valores por defecto', () => {  

        const {result} = renderHook(() => useCounter());
        
        // console.log(result);
        const {counter, suma, resta, reset} = result.current;

        expect(counter).toBe(1);
        expect(resta).toEqual(expect.any(Function));
        expect(suma).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));

    })

    test('Debe generar el counter con el valor de 100', () => {  

        const {result} = renderHook(() => useCounter(100));
        const {counter} = result.current;

        expect(counter).toBe(100);
    })

    test('Debe de incrementar el contador', () => { 

        const {result} = renderHook(() => useCounter());
        const {counter,suma} = result.current;

        act(() => {
        
            suma(5);
        })

        expect(result.current.counter).toBe(initialValue + 5)

    });

    test('Debe de decrementar el contador', () => { 

        const {result} = renderHook(() => useCounter());
        const {counter,resta} = result.current;

        act(() => {
            
            resta(2)
            
        })

        expect(result.current.counter).toBe(initialValue - 2)

    });

    test('Debe de establecer el valor predefinido', () => { 

        const {result} = renderHook(() => useCounter(initialValue));
        const {counter,reset} = result.current;

        act(() => {
            reset();
            
        })

        expect(result.current.counter).toBe(initialValue)

    });
});