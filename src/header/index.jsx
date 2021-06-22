import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import uHostImg from '../images/uhost-icon.png'
import MobileNav from '../mobileNav';

const Header = () => {
  let [open, setToggle] = React.useState(false);

  return (
    <React.Fragment>
      <header className="main-header">
        <div>
          <button className="toggle-button" onClick={() => setToggle(true)}>
            <span className="toggle-button__bar"></span>
            <span className="toggle-button__bar"></span>
            <span className="toggle-button__bar"></span>
          </button>
          <Link to="/" className="main-header__brand">
            <img src={uHostImg} alt="uHost - Your favorite hosting company" />
          </Link>
        </div>
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
      </header>
      {
        open ? <MobileNav setToggle={setToggle} /> : null
      }
    </React.Fragment>
  )
}

export default Header;
