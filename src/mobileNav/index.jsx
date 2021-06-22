import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const MobileNav = ({ setToggle }) => {
  return (
    <nav className="mobile-nav" onBlur={() => setToggle(false)}>
      <ul className="mobile-nav__items">
        <li className="mobile-nav__item">
          <Link to="/packages">Packages</Link>
        </li>
        <li className="mobile-nav__item">
          <Link to="/customers">Customers</Link>
        </li>
        <li className="mobile-nav__item mobile-nav__item--cta">
          <Link to="/start_hosting">Start Hosting</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MobileNav;