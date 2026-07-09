import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Button } from './ui/Button';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isAdmin = user?.role === 'ADMIN';

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-brand">
            <Link to="/" className="navbar-logo">
              Darshan<span className="navbar-logo-highlight">Ease</span>
            </Link>
          </div>
          <div className="navbar-links">
            <Link to="/temples" className="navbar-link">
              Temples
            </Link>
            {user ? (
              <>
                <Link to={isAdmin ? "/admin/dashboard" : "/dashboard"} className="navbar-link">
                  Dashboard
                </Link>
                <Button variant="outline" onClick={handleLogout} className="navbar-btn-logout">
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" className="navbar-link">
                  Sign In
                </Link>
                <Link to="/register">
                  <Button className="navbar-btn-signup">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
