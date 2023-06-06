import React, { Component } from 'react'
import { variables } from './Variables.js'
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';


export class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: []
        }

    }

    render() {
        return (
            < div >
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
        )
    }
}