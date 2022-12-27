import { createContext, useContext, useEffect, useState } from 'react';
import {
  getUserData,
  makeNewUser,
  removeUserData,
  updateUserData,
  BASIC_MONEY,
} from '../api/firebase';
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
  const makeUserData = (name) => {
    makeNewUser(uid, name);
    setUserData({ uid, name, money: BASIC_MONEY });
  };
  useEffect(() => {
    if (uid) {
      getUserData(uid).then((userData) => setUserData(userData));
    }
  }, [uid]);

  return (
    <UserDataContext.Provider
      value={{
        userData,
        removeUserData: removeUser,
        updateUserData: updateUser,
        makeUserData,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
}

export function useUserDataContext() {
  return useContext(UserDataContext);
}
