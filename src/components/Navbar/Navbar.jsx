import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Build Nepal
            <i class="fa fa-industry" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              <Link
                to='/design-services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Design Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/consultancy-service'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Consultancy Service
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/equipment-rental'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Equipment Rentals
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/technicians'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Technicians
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Link to = '/sign-up'>
            <button className = "navbarButton">SIGN UP</button>
          </Link>}
         
        </div>

        {/* <div className="search">
                <i className="fa fa-search"></i>
                <i className="fa fa-shopping-basket"></i>
        </div> */}
      </nav>
    </>
  );
}

export default Navbar;