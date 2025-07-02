import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from "./treble-clef-svgrepo-com.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // close menu after click
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src={logo} alt="treble-clef" width="60" height="60"></img>
        <span className="logo-text">Ida Music Academy</span>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`navList ${menuOpen ? 'active' : ''}`}>
        <li className="nav-item" onClick={() => scrollToSection('home')}>Home</li>
        <li className="nav-item" onClick={() => scrollToSection('about')}>About</li>
        <li className="nav-item" onClick={() => scrollToSection('instruments')}>Instruments</li>
        <li className="nav-item" onClick={() => scrollToSection('programs')}>Programs</li>
        <li className="nav-item" onClick={() => scrollToSection('contact')}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;






