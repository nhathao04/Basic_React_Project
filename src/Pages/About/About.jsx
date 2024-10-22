import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext/ThemeContext'; // Import ThemeContext
import './About.scss'; // Import file SCSS cho trang About

const About = () => {
  const { theme } = useContext(ThemeContext); // Lấy giá trị theme từ context

  return (
    <div className={`about-page ${theme === 'dark' ? 'dark' : 'light'}`}> 
      <h1>About Orchid Company</h1>
      <p>Welcome to Orchid Company, your number one source for all things orchids...</p>

      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Founded in 2020 by Jane Doe, Orchid Company has come a long way from its beginnings...
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide the best quality orchids and to share our love for these beautiful plants...
        </p>
      </section>

      <section className="about-section">
        <h2>Contact Us</h2>
        <p>If you have any questions or comments, please do not hesitate to contact us.</p>
      </section>
    </div>
  );
};

export default About;
