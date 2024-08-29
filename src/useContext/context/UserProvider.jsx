import { UserContext } from "./userContext";
import PropTypes from "prop-types";

const user = {
  id: 123,
  name: "Gustavo",
  email: "gustavo@gmail.com",
};

const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: "mundo", user: user }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
