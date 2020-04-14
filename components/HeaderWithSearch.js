import React from 'react';
import {NavLink} from 'react-router-dom';
import Search from './Search';

export default () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <NavLink exact activeClassName="alert-primary" className="nav-link" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item active">
                                    <NavLink exact activeClassName="alert-primary" className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item active">
                                    <NavLink exact activeClassName="alert-primary" className="nav-link" to="/settings">Settings</NavLink>
                                </li>
                            </ul>
                        </div>
                        <Search/>
                    </nav>
                </div>
            </div>
        </div>
    )
}