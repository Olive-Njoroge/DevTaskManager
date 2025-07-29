import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './utils/protectedRoute'
import {Toaster} from '@/components/ui/sonner';

function App() {

  return (
    <BrowserRouter>
      <Toaster richColors position="top-right" />
      <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
