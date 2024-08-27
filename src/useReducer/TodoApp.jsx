import { useReducer } from "react";
import { TodoReducer } from "./TodoReducer";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

const TodoApp = () => {
  const initialState = [
    {
      id: new Date().getTime(),
      description: "Recolectar piedras del infinito",
      done: false,
    },
    {
      id: new Date().getTime() * 3,
      description: "Salvar el mundo",
      done: false,
    },
  ];

  const HandleNewTodo = (todo) => {
    console.log("HandleNewTodo", { todo });
  };

  const [todos, dispatch] = useReducer(TodoReducer, initialState);

  return (
    <>
      <h1>Todo App</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
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
