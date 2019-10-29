import React from 'react';

const Navbar = ({ total }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">Navbar&nbsp;
                <span className="badge badge-pill badge-secondary">
                    {total}
                </span>
            </span>
        </nav>
    );
}

export default Navbar;