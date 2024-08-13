import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/themes">Themes</Link></li>
                <li><Link to="/chat">Chat</Link></li>
                <li><Link to="/timer">Timer</Link></li>
                <li><Link to="/tasks">Tasks</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;