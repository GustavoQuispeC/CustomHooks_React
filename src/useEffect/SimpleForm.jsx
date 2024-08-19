import { useEffect, useState } from "react";
import Message from "./Message";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Gusstavo",
    email: "gustavo@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  useEffect(() => {
    // console.log("useEffect_prueba");
  }, []);

  useEffect(() => {
    // console.log("formState_prueba");
  }, [formState]);

  useEffect(() => {
    // console.log("email_prueba");
  }, [email]);


  

  return (
    <div className="container border border-primary p-5 ">
      <h3>Formulario simple</h3>
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
        type="email"
        className="form-control mt-2"
        name="email"
        placeholder="ejemplo@ejemplo.com"
        value={email}
        onChange={onInputChange}
      />
        <hr />
      {
        (username ==='Gusstavo2') && <Message />
      }
    </div>
  );
};

export default SimpleForm;
