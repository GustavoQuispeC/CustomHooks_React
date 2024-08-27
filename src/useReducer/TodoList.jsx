import PropTypes from 'prop-types'

const TodoList = ({todos}) => {
  return (
    <>
     <ul className="list-group">
            {todos.map((todo, i) => (
              <li
                key={todo.id}
                className="list-group-item d-flex justify-content-between"
              >
                <span className="align-self-center">
                  {i + 1}. {todo.description}
                </span>
                <button className="btn btn-danger">Borrar</button>
              </li>
            ))}
          </ul>
    </>
  )
}

export default TodoList

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
    }