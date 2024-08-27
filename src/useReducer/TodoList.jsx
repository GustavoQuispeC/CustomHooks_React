import PropTypes from "prop-types";

const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  const handleDeleteTodo = (todoId) => {
    onDeleteTodo(todoId);
  };

  const handleToggleTodo = (todoId) => {
    onToggleTodo(todoId);
  };

  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between"
          >
            <p className={`align-self-center ${todo.done&&'text-decoration-line-through '}`} onClick={()=>handleToggleTodo(todo.id)}>
              {todo.description}
            </p>
            <button onClick={()=>handleDeleteTodo(todo.id)} className="btn btn-danger">
              Borrar
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onDeleteTodo: PropTypes.func,
  onToggleTodo: PropTypes.func,
};
