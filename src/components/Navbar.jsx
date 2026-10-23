import React from 'react';
import { navLinks } from '../constants';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <header>
        <nav className='nav layout-wrapper'>
            <div className="nav-logo"></div>
            <ul className='nav-list'>
                {navLinks.map((label) => (
                    <li className='nav-link' key={label.label}>
                        <a href={label.label}>{label.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
