import { useEffect } from 'react';
import { createContext, useContext } from 'react';
import useUserData from '../hooks/useUserData';

const UserDataContext = createContext();

export function UserDataContextProvider({ children }) {
  const {
    userDataQuery: { data: userData },
    makeUserData,
    addOrUpdateUserData,
    removeUserData,
  } = useUserData();
  // useEffect(() => {
  //   console.log(userData);
  // }, [userData]);
  const removeUser = () => removeUserData.mutate();
  const updateUser = (userData) => addOrUpdateUserData.mutate(userData);
  const makeUser = (name) => makeUserData.mutate(name);
  return (
    <UserDataContext.Provider
      value={{
        userData,
        removeUserData: removeUser,
        updateUserData: updateUser,
        makeUserData: makeUser,
        money: userData && userData.money,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
}

export function useUserDataContext() {
  return useContext(UserDataContext);
}
