import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import logo from '../../assets/images/auto-logo-without-bg.png';

function Navbar({ isMobileMenuOpen }) {
    return (
        <nav
            className={`app-navbar ${
                isMobileMenuOpen ? 'mobile-menu-open' : ''
            }`}
        >
            {isMobileMenuOpen ? (
                <ul className="ul-menu">
                    <li className="ul-li">
                        <NavLink to="/" className="li-link">
                            Pagrindinis
                        </NavLink>
                    </li>
                    <li className="ul-li">
                        <NavLink to="/about" className="li-link">
                            Apie mus
                        </NavLink>
                    </li>
                    <li className="ul-li">
                        <NavLink to="/contact" className="li-link">
                            Kontaktai
                        </NavLink>
                    </li>
                </ul>
            ) : (
                <ul className="ul-menu">
                    <li className="ul-li">
                        <NavLink to="/" className="li-link">
                            Pagrindinis
                        </NavLink>
                    </li>
                    <li className="ul-li">
                        <NavLink to="/about" className="li-link">
                            Apie mus
                        </NavLink>
                    </li>
                    <li className="ul-li">
                        <NavLink to="/contact" className="li-link">
                            Kontaktai
                        </NavLink>
                    </li>
                </ul>
            )}
        </nav>
    );
}

export default Navbar;
