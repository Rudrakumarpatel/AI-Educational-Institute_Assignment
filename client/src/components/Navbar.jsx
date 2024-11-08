// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <><nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4">
                <li>
                    <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="text-white hover:text-gray-300">About</Link>
                </li>
                <li>
                    <Link to="/courses" className="text-white hover:text-gray-300">Courses</Link>
                </li>
                <li>
                    <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
                </li>
                <li>
                    <Link to="/Login" className="text-white hover:text-gray-300">Login</Link>
                </li>
            </ul>
            </nav>
            </>
    );
};

export default Navbar;