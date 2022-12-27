import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Gamble from './pages/gamble 1/gamble';
import Home from './pages/home/home';
import NotFound from './pages/notFound/notFound';
import ProtectedRoute from './pages/ProtectedRoute';
import { UserDataContextProvider } from './context/UserDataContext';
import Gambles from './pages/gambles/gambles';
import HomeRoute from './pages/HomeRoute';
import UserMake from './pages/userMake/userMake';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: '/',
        element: (
          <HomeRoute>
            <Home />
          </HomeRoute>
        ),
      },
      {
        path: '/usermake',
        element: (
          <ProtectedRoute isUserMake>
            <UserMake />
          </ProtectedRoute>
        ),
      },
      {
        path: '/gamble',
        element: (
          <ProtectedRoute>
            <Gamble />
          </ProtectedRoute>
        ),
      },
      {
        path: '/gambles',
        element: (
          <ProtectedRoute>
            <Gambles />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
