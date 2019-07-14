import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Client from './Client';
import Admin from './Admin';
import './Book.css';

const NavBar = () => {
    return (
        <Router>
            <nav className="navbar">
                <a className="navbar-brand" href="/">
                    <h3 className="logo">National BookStore</h3>
                </a>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link to='/' style={{ padding: '10px' }} className="routerLink">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/admin' className="routerLink">Admin</Link>
                    </li>
                </ul>
            </nav>
            
            <Route path="/" exact component={Client} />
            <Route path="/admin" component={Admin} />
        </Router>

    )
}

export default NavBar;