import { createContext, useContext, useState } from "react";

export const UserContext = createContext({
  user: null,
  setUser: () => {},
});

export const useUser = () => {
  return useContext(UserContext);
};

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const value = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
