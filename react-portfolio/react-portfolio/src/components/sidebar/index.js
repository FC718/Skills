import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/conan.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faSuitcase, faUser, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
      </Link>

      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          onClick={() => setShowNav(false)}
          exact={true} activeClassName="active" to="/">
          <FontAwesomeIcon icon={faHome} color="4d4d4e" />
        </NavLink>

        <NavLink
          onClick={() => setShowNav(false)}

          exact={true} activeClassName="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="4d4d4e" />
        </NavLink>

        <NavLink
          onClick={() => setShowNav(false)}
          exact={true} activeClassName="active" className="portfolio-link" to="/portfolio">
          <FontAwesomeIcon icon={faSuitcase} color="4d4d4e" />
        </NavLink>

        <NavLink
          onClick={() => setShowNav(false)}
          exact={true} activeClassName="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
        </NavLink>

        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon'
        />
      </nav>

      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/fcass/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/FC718">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/FC718">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars} color="#ffd700" size="3x" className="hamburger-icon" />
    </div>
  );
};

export default Sidebar;
