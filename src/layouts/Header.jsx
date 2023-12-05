import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/service">Service</NavLink>
                </li>
                <li>
                    <NavLink to="/nice">error</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header