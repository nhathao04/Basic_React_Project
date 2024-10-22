import { Link } from 'react-router-dom';
import './Header.scss';
import ThemeToggle from '../../Components/ThemeToggle/ThemeToggle';

// eslint-disable-next-line react/prop-types
function Header({ user, onLogin, onLogout }) {
  return (
    <>
      <div className="header">
        <div className="logo-block">
          <h1 className="logo-content">
            OrchidShop
          </h1>
        </div>
        <div className="navbar">
          <ul className="navbar-list">
            <Link to={'/'} className='list-item'>
              <li>HOME</li>
            </Link>
            <Link to={'/about'} className='list-item'>
              <li>ABOUT</li>
            </Link>
            <Link to={'/natural'} className='list-item'>
              <li>NATURAL</li>
            </Link>
            <Link to={'/contact'} className='list-item'>
              <li>CONTACT</li>
            </Link>
            <Link to={'/dashboard'} className='list-item'>
              <li>DASHBOARD</li>
            </Link>
          </ul>
        </div>
        <div className="auth-controls">
          {user ? (
            <div>
              <span>Welcome, {user.displayName}</span>
              <button onClick={onLogout} className="logout-btn">Logout</button>
            </div>
          ) : (
            <button onClick={onLogin} className="login-btn">Login with Google</button>
          )}
        </div>
        <div className="theme-toggle">
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}

export default Header;
