import PropTypes from "prop-types";
import { useForm } from "../hooks/useForm";

const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    
    if (description.length <= 1) return; 

    // crear nuevo todo
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    onNewTodo(newTodo); // Llama a la función y pasa el nuevo TODO
    onResetForm(); // Limpia el formulario
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        name="description"
        className="form-control"
        placeholder="¿Que hay que hacer?"
        value={description}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-1 btn-block">
        Agregar
      </button>
    </form>
  );
};

export default TodoAdd;

TodoAdd.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};
