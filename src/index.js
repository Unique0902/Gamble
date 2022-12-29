import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Gamble from './pages/gamble/gamble';
import Home from './pages/home/home';
import NotFound from './pages/notFound/notFound';
import ProtectedRoute from './pages/ProtectedRoute';
import Gambles from './pages/gambles/gambles';
import HomeRoute from './pages/HomeRoute';
import UserMake from './pages/userMake/userMake';
import UserMakeRoute from './pages/userMakeRoute';

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
            <UserMakeRoute>
              <UserMake />
            </UserMakeRoute>
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
        children: [
          {
            index: true,
            element: <Gambles />,
          },
          {
            path: 'fa',
            element: <Gambles />,
          },
        ],
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
