import React from 'react';

function Footer(props) {
    return (
        <nav className="navbar">
            <a className="navbar-brand" href="/">
                <h5 className="footer">&copy; {props.copyright}</h5> 
            </a>
        </nav>
    )
}

export default Footer;