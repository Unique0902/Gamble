import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export default function HomeRoute({ children }) {
  const { user } = useAuthContext();

  if (user) {
    return <Navigate to='/gambles/' replace />;
  }

  return children;
}
