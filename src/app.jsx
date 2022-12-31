import './app.css';
import { Outlet } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import { UserDataContextProvider } from './context/UserDataContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <UserDataContextProvider>
          <Outlet />
        </UserDataContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
