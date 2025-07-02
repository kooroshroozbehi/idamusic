import React, { useEffect, useState } from 'react';
import './Navbar.css';

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
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFklEQVR4nO1baWhdRRQ+aWO1VVye5t35vpn3no1xexrFxgVXXCrVugVccMGCiAuKPwrFrYq41AWsf1RQRFSkKlgFRYogWrCIqFFw6R8L4oJNUKFqrBUbE5nk3XAyzk2K/vC+aT4Ykjdz3jDn3Lln+WaeyCz+fzjnjgXwAYAzZWcDgKtJbic5BmBLrVY7QHYWALjVK64bgE8ajcZukjoAXEDyr9AArXaHpIxqtdpN8tcC5X0bJrmvpAoAr0+jfN5WSIoAsKhA4Sk7AsBnkiJIPhlRfjDLsoVeadU3mmVZVRLDHJI/Rgxwvh/0f4P+8yQlZFl2WCTsrVcic0n+oMaulZQA4IrQANbapYHMO8oAt0tKAHBzYIAhEekMZF5U4yslJZB8KNj+L0Vk3k02FJJcFRjgFj2eZdnuALYpmUslJZBcGbwCUxQEcJMeN8YcIynBWrsscIAX5WOVSmVPAN/qcedcRVICgBMDA1ysxp4Ldsfnkhq6u7v3IjmifMBtvr9WqzGSHD0oKYLkgFLyBdU/qNNgkgdJigCwWim6Me8nuVb1r5PEiZCx/Ek3Go29fb+1dnmrb8Q51yupIsuyhUEuME6E+pDX+rxaUoW1dinJbwJnd2druBPA281mc56khq6urj1IrokRIQDeyOUALJDUYK11gecPDfCTiHRIigDQp+v7omatPVBSg3Ou1z/dHSA/fc5/pSRIew9Ns+2fAPC++vyYpIJmszmP5EcFiv+RP22f6qqxAUkFAB4pUP5na+2psYQIwJ/Oufm+3xOhLb8x4Nkhb7C2CY3OuV5d7Kj2m7X2OC2bJz7KCCf5/nq9jsj3v/KVpJQdJNdFFu8Lm3O1HIB+fxIcyE3SXwA2RXbQNr2Dyvr0xyILn+LgWtx/7FB0bS4D4JmCub73JbWUESTvjyz6l3q9vk8uA6BedCgK4Dsl1+9fmwK5cQ6hdCC5MbLYx7WMD3+BzBR/4bPGXNb/D+DTyJxfSgnR6T15ZLH9SmaujwRqbDPJE0hujXGE6iRpNJy3dGeGxphGQYp7ZIGP2J4zviQ3KKM8HM4d2wXW2tOkTHDOVWIGyLLs8FyG5BlqbE0BQ7QhnBvAy5GdVbrLVB3BgUa+0CW5gDHmFPUEl+X9JC9R8r/39fXtoicm+Upk3kVSNpB8M7LQ+4IIkBc/Zxe9PsaYo2dwrltDI5UCxpjrIq/BoL7xRfJrv1MAnKy/GzDCN06XWwB4WsoI59z8QJF/8PskF1er1Sz8LoDXlPzzRUdpvpgiebCUFSSvjxhgRL/zMfh7AErJTap/STBX6U+LOwJ+P28+9V2VV3whgggxCmC//LxQJUtPSTugMnHIub4o3SX5gPcBrUxvAcmaMeasIM6fk89H8mOSd7UVb9jT07MrgGdjRtiRBuDefK4sy/aXdgXJ4wG89y8M8JYkhA4f2wHc7amyliePKT2ZSPmawV+pk0Qxx7M+xphDnXM9LYfnr8cdpQ3iiVXZmYAJh6grv8WSEDqNMRcCuMdnekXlrKbSk7kkWa1Ws1Yo0+/8sA99oWxAp98gKQCRcrb1hLcYY7oC2cnL0jNlj22BykQmN/57oIJ2VS7rKzxfDisDnC7tDpK1GWK+psIv00VPUdrcjtfjh4oMkFNbAA4JKslXJRUAuKbAB2wGcDnJRzUx6gsna+0RkhIwlfebqZW+5P0vP5Acnib/90dfyyVluAn2eAXJD1vG8Fv/C0+HJ3lLZBazkNLjb5r5S3VZ7krkAAAAAElFTkSuQmCC" alt="treble-clef"></img>
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






