import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <h1 className="text-2xl font-bold text-white">
                    <Link to="/">Proviz School of AI</Link>
                </h1>
                <div className="block lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
                <ul
                    className={`lg:flex lg:space-x-4 absolute lg:relative top-16 left-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent transition-transform duration-300 ease-in-out ${
                        isOpen ? 'transform translate-x-0' : 'transform -translate-x-full lg:translate-x-0'
                    }`}
                >
                    <li className="border-b border-gray-700 lg:border-none">
                        <Link to="/" className="text-white block px-4 py-2 hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link>
                    </li>
                    <li className="border-b border-gray-700 lg:border-none">
                        <Link to="/about" className="text-white block px-4 py-2 hover:text-gray-300" onClick={() => setIsOpen(false)}>About</Link>
                    </li>
                    <li className="border-b border-gray-700 lg:border-none">
                        <Link to="/courses" className="text-white block px-4 py-2 hover:text-gray-300" onClick={() => setIsOpen(false)}>Courses</Link>
                    </li>
                    <li className="border-b border-gray-700 lg:border-none">
                        <Link to="/contact" className="text-white block px-4 py-2 hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</Link>
                    </li>
                    <li className="border-b border-gray-700 lg:border-none">
                        <Link to="/Login" className="text-white block px-4 py-2 hover:text-gray-300" onClick={() => setIsOpen(false)}>Login</Link>
                    </li>
                    <li>
                        <Link to="/Signup" className="text-white block px-4 py-2 hover:text-gray-300" onClick={() => setIsOpen(false)}>Signup</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
