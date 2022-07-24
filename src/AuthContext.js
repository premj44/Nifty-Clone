import { createContext, useState } from "react";


export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [state, setState] = useState({
    isAuth: false,
    token: null,
  });

  const handleLogin = (token) => {
    setState({
      ...state,
      isAuth: true,
      token: token,
    });
  };
  const handleLogout = (token) => {
    setState({
      ...state,
      isAuth: false,
      token: null,
    });
  };

  return (
    <AuthContext.Provider value={{ state, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}