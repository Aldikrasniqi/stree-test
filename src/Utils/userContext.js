// use context to store user data
import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    isLogged: false,
  });

  const setUserData = (newUser) => {
    setUser((prevUser) => ({ ...prevUser, ...newUser }));
  };
  return (
    <UserContext.Provider value={{ user, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
