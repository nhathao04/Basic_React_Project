import  { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa'; 
import './ThemeToggle.scss';

function ThemeToggle() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div className="theme-toggle">
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        onChange={toggleTheme}
        checked={theme === 'dark'}
      />
      <label htmlFor="checkbox" className="label">
        <FaMoon className="icon moon" />
        <FaSun className="icon sun" />
        <div className="ball"></div>
      </label>
    </div>
  );
}

export default ThemeToggle;
