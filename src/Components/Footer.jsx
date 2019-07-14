import React from 'react';

function Footer(props) {
    return (
        // <div className="fixed-bottom">
            <nav className="navbar">
                <a className="navbar-brand" href="/">
                    <h5 className="footer">&copy; {props.copyright}</h5> 
                </a>
            </nav>
        // </div>
    )
}

export default Footer;