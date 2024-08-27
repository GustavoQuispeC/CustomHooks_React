import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import { useTodo } from "../hooks/useTodo";

const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    HandleDeleteTodo,
    HandleToggleTodo,
    HandleNewTodo,
  } = useTodo();

  return (
    <>
      <h1>
        TodoApp: {todosCount}, <small>pendientes: {pendingTodosCount}</small>{" "}
      </h1>
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
          <h4>Agregar un nuevo ToDo</h4>
          <hr />
          <TodoAdd onNewTodo={HandleNewTodo} />
        </div>
      </div>
    </>
  );
};

export default TodoApp;
