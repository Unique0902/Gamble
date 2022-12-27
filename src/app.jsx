import './app.css';
import { Outlet } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import { UserDataContextProvider } from './context/UserDataContext';

function App() {
  return (
    <AuthContextProvider>
      <UserDataContextProvider>
        <Outlet />
      </UserDataContextProvider>
    </AuthContextProvider>
  );
}

export default App;
