import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo/logo.png';

const Header = () => {
    let activeStyle = {
        color: "red"
    };

    let activeClassName = "underline";


    return (
        <header className="h-24 flex items-center justify-around shadow-md">
            <figure>
                <img className="w-28 cursor-pointer" src={logo} alt="" />
            </figure>
            <nav>
                <ul className="flex gap-2 uppercase font-medium">
                    <li> <NavLink to="/"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >Home</NavLink> </li>
                    <li> <NavLink to="/static">Static</NavLink> </li>
                    <li> <NavLink to="/dashboard">Dashboard</NavLink> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;