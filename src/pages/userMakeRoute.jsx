import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserDataContext } from '../context/UserDataContext';

export default function UserMakeRoute({ children }) {
  const { userData } = useUserDataContext();

  if (userData) {
    return <Navigate to='/gambles/' replace />;
  }

  return children;
}
