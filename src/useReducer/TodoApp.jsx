import { useEffect, useReducer } from "react";
import { TodoReducer } from "./TodoReducer";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: "Recolectar piedras del infinito",
  //   done: false,
  // },
  // {
  //   id: new Date().getTime() * 3,
  //   description: "Salvar el mundo",
  //   done: false,
  // },
];
const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const TodoApp = () => {
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

  return (
    <>
      <h1>Todo App</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList 
          todos={todos} 
          onDeleteTodo={HandleDeleteTodo}
          onToggleTodo={HandleToggleTodo}
          />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={HandleNewTodo} />
        </div>
      </div>
    </>
  );
};

export default TodoApp;
