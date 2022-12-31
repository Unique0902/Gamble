import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUserData, getUserData, removeUserData } from '../api/firebase';
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

  const addOrUpdateUserData = useMutation(
    (userData) => updateUserData(uid, userData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['userDatas', uid]);
      },
    }
  );

  const removeUser = useMutation((id) => removeUserData(uid, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['userDatas', uid]);
    },
  });

  return { userDataQuery, addOrUpdateUserData, removeUser };
}
