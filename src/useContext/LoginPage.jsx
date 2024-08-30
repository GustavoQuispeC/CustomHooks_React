import { useContext } from "react";
import { UserContext } from "./context/userContext";

const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>Login Page</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 5)}</pre>

      <button
        className="btn btn-primary"
        onClick={() => {
          setUser({ id: 123, name: "Gustavo", email: "gustavo@gmail.com" });
        }}
      >
         usuario
      </button>
    </>
  );
};

export default LoginPage;
