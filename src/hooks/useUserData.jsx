import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  updateUserData,
  getUserData,
  removeUserData,
  makeNewUser,
} from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function useUserData() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();

  const userDataQuery = useQuery(
    ['userDatas', uid || ''],
    () => getUserData(uid),
    {
      enabled: !!uid,
    }
  );
  const makeUserData = useMutation((name) => makeNewUser(uid, name), {
    onSuccess: () => {
      queryClient.invalidateQueries(['userDatas', uid]);
    },
  });
  const addOrUpdateUserData = useMutation(
    (userData) => updateUserData(uid, userData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['userDatas', uid]);
      },
    }
  );

  const removeUser = useMutation(() => removeUserData(uid), {
    onSuccess: () => {
      queryClient.invalidateQueries(['userDatas', uid]);
    },
  });

  return {
    userDataQuery,
    makeUserData,
    addOrUpdateUserData,
    removeUserData: removeUser,
  };
}
