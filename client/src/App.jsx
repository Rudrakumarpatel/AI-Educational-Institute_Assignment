// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ApplicationForm from './components/ApplicationForm';
import About from './components/About'; // Import the About component
import Courses from './components/Courses';
import Contact from './components/Contact';

// Import other components as needed

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Router>
            <Navbar />
            <div className="container mx-auto p-4">
                <Routes>
                    <Route path="/" element={
                        <>
                            <h1 className="text-3xl mb-4">Welcome to Proviz School of AI</h1>
                            <button onClick={() => setIsModalOpen(true)} className="bg-green-500 text-white p-2 rounded hover:bg-green-600">Apply Now</button>
                            <ApplicationForm isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} />
                        </>
                    } />
                    <Route path="/about" element={<About />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;