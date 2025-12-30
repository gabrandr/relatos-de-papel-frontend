import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = user !== null;

  return {
    user,
    isAuthenticated,
    login,
    logout,
  };
};
