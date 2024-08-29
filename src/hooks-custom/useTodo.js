import { useReducer, useEffect } from "react";
import { TodoReducer } from "../useReducer/TodoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

export const useTodo = (initialState = [] ) => {

    const [todos, dispatch] = useReducer(TodoReducer, initialState, init);
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
  
    const HandleNewTodo = (todo) => {
      const action = {
        type: "[TODO]Add Todo",
        payload: todo,
      };
      dispatch(action);
    };
  
    const HandleDeleteTodo = (todoId) => {
      const action = {
        type: "[TODO]Delete Todo",
        payload: todoId,
      };
      dispatch(action);
    };
  
    const HandleToggleTodo = (todoId) => {
      const action = {
        type: "[TODO]Toggle Todo",
        payload: todoId,
      };
      dispatch(action);
      
    }
    return {
        todos,

        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo=> !todo.done).length,
        
        HandleNewTodo,
        HandleDeleteTodo,
        HandleToggleTodo,
        };


}