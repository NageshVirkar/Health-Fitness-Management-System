// UserContext.js
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userRegistrationData, setUserRegistrationData] = useState(null);

  const saveUserData = (userData) => {
    setUserRegistrationData(userData);
  };

  const getUserData = () => userRegistrationData;

  return (
    <UserContext.Provider value={{ saveUserData, getUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
