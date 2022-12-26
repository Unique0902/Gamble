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

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      {
        path: '/gamble',
        element: (
          <UserDataContextProvider>
            <ProtectedRoute>
              <Gamble />
            </ProtectedRoute>
          </UserDataContextProvider>
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
