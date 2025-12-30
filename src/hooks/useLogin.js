import { useState } from "react";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";

const LOCAL_CREDENTIALS = {
  username: "admin",
  password: "1234",
};

export const useLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitLogin = async () => {
    console.log("ener her ");
    
    try {
      setIsLoading(true);
      setError(null);

      if (
        username !== LOCAL_CREDENTIALS.username ||
        password !== LOCAL_CREDENTIALS.password
      ) {
        throw new Error("Credenciales inválidas");
      }

      login({
        username,
      });
      navigate("/books");
    } catch (err) {
      setError("Error al iniciar sesión");
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    username,
    password,
    setUsername,
    setPassword,
    submitLogin,
    isLoading,
    error,
  };
};
