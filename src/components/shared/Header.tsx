import { useState } from 'react';
import '../../styles/Header.css';
import '../../styles/Header-responsive.css';
import LogoExtreme from '../../assets/logoExtreme.png';
import iconeLupa from '../../assets/Symbol.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      {/* Logo Section */}
      <div className="logo-container">
        <div className="logo-icon">
          <img src={LogoExtreme} alt="Logo" />
        </div>
        <h1 className="logo-text">Extreme Surfing</h1>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>

      {/* Navigation Links */}
      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#" className="nav-link active">
          HOME <span className="arrow">▾</span>
        </a>
        <a href="#" className="nav-link">
          ABOUT US
        </a>
        <a href="#" className="nav-link">
          SERVICES
        </a>
        <a href="#" className="nav-link">
          PAGES <span className="arrow">▾</span>
        </a>
        <a href="#" className="nav-link">
          BLOG <span className="arrow">▾</span>
        </a>
        <a href="#" className="nav-link">
          CONTACT US
        </a>
      </nav>

      {/* Right Side Actions */}
      <div className="header-actions">
        <button className="search-btn">
          <img src={iconeLupa} alt="Logo lupa" />
        </button>
        <a href="tel:+0123456789" className="phone-cta">
          <span className="phone-icon">📱</span>
          +0123456789
        </a>
      </div>
    </header>
  );
};

export default Header;