import { render, screen, fireEvent } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem"

describe('Pruebas sobre <TodoItem>', () => {
    
    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false,
    };
    
    const onDeleteTodoMock = jest.fn(); 
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks()) //En cada una de las pruebas se resetean las evaluaciones
    
    test('Debe de mostrar el todo pendiente de completar', () => {  
        render(<TodoItem 
            todo= {todo} 
            onToggleTodo = {onToggleTodoMock} 
            onDeleteTodo = {onDeleteTodoMock}
            />
            )

            const liElement = screen.getByRole('listitem');
            console.log(liElement.innerHTML);

            expect(liElement.className).toBe('list-group-item d-flex justify-content-between mt-2');

            const spanElement = screen.getByLabelText('span');
            expect(spanElement.className).toContain('align-self-center');

            // screen.debug();

            
    })
    test('Debe de mostrar el todo completado', () => { 
        
        todo.done = true;

        render(<TodoItem 
            todo= {todo} 
            onToggleTodo = {onToggleTodoMock} 
            onDeleteTodo = {onDeleteTodoMock}
            />
            )

            const spanElement = screen.getByLabelText('span');
            expect(spanElement.className).toContain('text-decoration-line-through');

            // screen.debug();


    })

    test('Span debe llamar el ToggleTodo cuando se hace click', () => {  


        render(<TodoItem 
            todo= {todo} 
            onToggleTodo = {onToggleTodoMock} 
            onDeleteTodo = {onDeleteTodoMock}
            />
            )

            const spanElement = screen.getByLabelText('span');
            fireEvent.click(spanElement);

            expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
    });

    test('button debe llamar el deteleTodo', () => { 
        
        render(<TodoItem 
            todo= {todo} 
            onToggleTodo = {onToggleTodoMock} 
            onDeleteTodo = {onDeleteTodoMock}
            />
            )

            const deleteButton = screen.getByRole('button');//Hay que tener cuidado con la referencia que se le da! xD
            fireEvent.click(deleteButton);
            
            expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
    })
})