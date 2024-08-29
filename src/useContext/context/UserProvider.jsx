import { useState } from "react";
import { UserContext } from "./userContext";
import PropTypes from "prop-types";

// const user = {
//   id: 123,
//   name: "Gustavo",
//   email: "gustavo@gmail.com",
// };

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
