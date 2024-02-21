import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

function Navbar({ isMobileMenuOpen }) {
    return (
        <nav
            className={`app-navbar ${
                isMobileMenuOpen ? 'mobile-menu-open' : ''
            }`}
        >
            <ul className="ul-menu">
                <li className="ul-li">
                    <NavLink to="/" className="li-link">
                        Pradžia
                    </NavLink>
                </li>
                <li className="ul-li">
                    <NavLink to="/" className="li-link">
                        Paslaugos
                    </NavLink>
                </li>
                <li className="ul-li">
                    <NavLink to="/prices" className="li-link">
                        Kainos
                    </NavLink>
                </li>
                <li className="ul-li">
                    <NavLink to="/contacts" className="li-link">
                        Kontaktai
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
