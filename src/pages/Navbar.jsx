
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

function Navbar() {
  // State to toggle hamburger menu
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Toggle the hamburger menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className='navbar'>
        {/* Logo */}
        <Link to='/' className="logo">
          <h1 className='los'>Thinny</h1>
        </Link>

        {/* Hamburger Icon */}
        <div className={`menu-icon ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <Link to='/'  onClick={closeMenu}>Home</Link>
          <Link to='/AboutUs' onClick={closeMenu}>AboutUs</Link>
          <Link to='/Services' onClick={closeMenu}>Services</Link>
          <Link to='/ContactUs' className='lastly' onClick={closeMenu}>Get in touch</Link>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
