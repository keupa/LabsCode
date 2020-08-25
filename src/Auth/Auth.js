import React, { useEffect, useState } from "react";
import { auth } from '../components/Firebase/firebase'

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [pending, setPending] = useState(true)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
      setPending(false)
    });
  }, []);

  if(pending){
    return <> Loading... </>
  }

  return (
    <AuthContext.Provider
      value={{
        pending,
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};