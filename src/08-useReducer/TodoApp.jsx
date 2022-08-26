
import { useTodos } from '../hooks';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';


export const TodoApp = () => {

    const {todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo} = useTodos();

    return (
        <>
            <h2>Todo App: {todosCount} - <small>Pendientes: {pendingTodosCount}</small> 🙃</h2>

            <hr />

            <div className="row">
                <div 
                className="col-6">
                    <TodoList 
                    todos= {todos} 
                    onDeleteTodo = {id => handleDeleteTodo(id)}
                    onToggleTodo = {handleToggleTodo}/>
                </div>

                <div 
                className="col-6">
                <h4>Agregar ToDo</h4>
                        
                <TodoAdd 
                onNewTodo={handleNewTodo}/>
                        
                </div>
            </div>
        </>

    )
}
