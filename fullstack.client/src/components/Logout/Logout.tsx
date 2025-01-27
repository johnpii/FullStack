import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/AuthService';

const LogoutRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
  
    const handleLogout = async () => {
      try {
        await logout();
        if (isMounted) {
          navigate('/');
        }
      } catch (error) {
        if (isMounted) {
          navigate('/login');
        }
      }
    };
  
    handleLogout();
  
    return () => {
      isMounted = false;
    };
  }, [navigate]);

  return null;
};

export default LogoutRedirect;
