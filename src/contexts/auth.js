import { createContext, useEffect, useState } from "react";
import firebase from '../services/firebaseConnection';

export const AuthContext = createContext({});

function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storageUser = localStorage.getItem('sistemaUser');

    if(storageUser) {
      setUser(JSON.parse(storageUser));
    }

    setLoading(false);
  })

  return (
    <AuthContext.Provider value={{ signed: !!user, user}}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider;