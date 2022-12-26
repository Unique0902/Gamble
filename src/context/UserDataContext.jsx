import { createContext, useContext, useEffect, useState } from 'react';
import { getUserData, removeUserData, updateUserData } from '../api/firebase';
import { useAuthContext } from './AuthContext';

const UserDataContext = createContext();

export function UserDataContextProvider({ children }) {
  const [userData, setUserData] = useState();
  const { uid } = useAuthContext();

  const removeUser = () => {
    removeUserData(uid);
    setUserData(null);
  };
  const updateUser = (userData) => {
    updateUserData(uid, userData);
    setUserData(userData);
  };
  useEffect(() => {
    getUserData(uid).then((userData) => setUserData(userData));
  }, []);

  return (
    <UserDataContext.Provider
      value={{
        userData,
        removeUserData: removeUser,
        updateUserData: updateUser,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
}

export function useUserDataContext() {
  return useContext(UserDataContext);
}
