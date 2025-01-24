import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/AuthService';

const LogoutRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await logout();
        navigate('/');
      } catch (error) {
        console.error('Logout failed:', error);
      }
    };

    handleLogout();
  }, [navigate]);

  return null;
};

export default LogoutRedirect;
