import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { useUserDataContext } from '../context/UserDataContext';

export default function ProtectedRoute({ isUserMake, children }) {
  const { user } = useAuthContext();
  const { userData } = useUserDataContext();
  if (!user) {
    return <Navigate to='/' replace />;
  }

  if (!isUserMake) {
    if (!userData) {
      return <Navigate to='/usermake' replace />;
    }
  }

  return children;
}
