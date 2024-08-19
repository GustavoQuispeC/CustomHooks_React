import { useState } from "react";

export const UserForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    // ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
