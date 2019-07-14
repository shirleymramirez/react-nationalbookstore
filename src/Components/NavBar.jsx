import React from 'react';
import './Book.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <a className="navbar-brand" href="/">
                <h3 className="logo">National BookStore</h3>
            </a>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link" href="/admin">Admin</a>
                </li>
            </ul>
        </nav>

    )
}

export default NavBar;