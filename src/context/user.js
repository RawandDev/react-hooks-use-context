import { useContext } from "react";

const UserContext = useContext();

const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={null}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserProvider };
