import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Pruebas sobre todoReducer', () => { 

    const initialState = [
        { 
        id: 1, 
        description: 'Demo todo', 
        done: false
        }
    ];

    test('Debe de regresar el estado inicial', () => {      

        const newState = todoReducer(initialState, {});

        expect(newState).toBe(initialState);

    });

    test('Debe de agregar un todo', () => { 
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2, 
                description: 'Demo todo #2', 
                done: false
            }
        };

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2); 
        expect(newState).toContain(action.payload); 

    });

    test('Debe de eliminar un TODO', () => { 
        const action = {
            type: '[TODO] Remove Todo',
            payload: {
                id: 2, 
                description: 'Demo todo #2', 
                done: true
            }
        };
        
        const newState = todoReducer(initialState, action);
        
        // console.log(action.payload.done);
        expect(newState.length).toBe(1);
        expect(action.payload.id).toBe(2)
        expect(action.payload.description).toBe('Demo todo #2')
        expect(action.payload.done).toBeTruthy();
        // expect(newState).toContain(action.payload)
    });
    
    test('Debe de realizar el toggle (CAMBIO) del TODO', () => {  
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };
        
        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true);
        
        const newState2 = todoReducer(newState, action);
        expect(newState2[0].done).toBe(false);

    
    })
})