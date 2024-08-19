//import { useEffect } from "react";
import { UserForm } from "../hooks/userForm";

const FormWithCustomHook = () => {
  const { formState, onInputChange,onResetForm } = UserForm({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formState;
  

  
  return (
    <div className="container border border-primary p-5 ">
      <h3>Formulario con custom hook</h3>
      <hr />
      <input
        type="text"
        className="form-control"
        name="username"
        placeholder="Username"
        onChange={onInputChange}
        value={username}
      />
      <input
        type="text"
        className="form-control mt-2"
        name="email"
        placeholder="email"
        onChange={onInputChange}
        value={email}
      />
      <input
        type="password"
        className="form-control mt-2"
        name="password"
        placeholder="contraseña"
        value={password}
        onChange={onInputChange}
      />

      <button className="btn btn-primary mt-2" onClick={onResetForm}>
        Reset
      </button>
    </div>
  );
};

export default FormWithCustomHook;
