import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul className="main-nav__items">
        <li className="main-nav__item">
          <Link to="/packages">Packages</Link>
        </li>
        <li className="main-nav__item">
          <Link to="/customers">Customers</Link>
        </li>
        <li className="main-nav__item main-nav__item--cta">
          <Link to="/start_hosting">Start Hosting</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;