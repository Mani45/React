import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        < div >
            <h3> This is Home Page</h3>
            <nav className='navbar navbar-expand-sm d-flex justify-content-center m-3' >
                <ul className="navbar-nav">
                    <li className="nav-item- m-1">
                        <NavLink className="btn btn-light btn-outline-primary" to="/home">Home</NavLink>
                    </li>

                    <li className="nav-item- m-1">
                        <NavLink className="btn btn-light btn-outline-primary" to="/strategies">Strategies</NavLink>
                    </li>

                    <li className="nav-item- m-1">
                        <NavLink className="btn btn-light btn-outline-primary" to="/settings">Settings</NavLink>
                    </li>

                    <li className="nav-item- m-1">
                        <NavLink className="btn btn-light btn-outline-primary" to="/aboutus">About Us</NavLink>
                    </li>
                </ul>
            </nav>
        </div >
    );
};

export default Navbar;
