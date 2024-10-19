import { createContext, useContext, useState } from "react";
import { api } from "../services/api";

// Criação do contexto
export const AuthContext = createContext({});

// Criação do provedor do contexto
function AuthProvider({ children }) {
  const [data, setData] = useState({});
  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      // Adicionando um token do tipo Bearer de autorização em todos as requisições que o usuário realizar
      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar");
      }
    }
  }
  return (
    <AuthContext.Provider value={{ signIn, user: data.user }}>{children}</AuthContext.Provider>
  );
}

// Uso do contexto
function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
