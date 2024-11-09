// // src/App.jsx
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import ApplicationForm from './components/ApplicationForm';
// import About from './components/About'; // Import the About component
// import Courses from './components/Courses';
// import Contact from './components/Contact';
// import Login from './components/Login';
// import Signup from './components/Signup';

// // Import other components as needed

// const App = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     return (
//         <Router>
//             <Navbar />
//             <div className="container mx-auto p-4">
//                 <Routes>
//                     <Route path="/" element={
//                         <>
//                             <h1 className="text-3xl mb-4">Welcome to Proviz School of AI</h1>
//                             <button onClick={() => setIsModalOpen(true)} className="bg-green-500 text-white p-2 rounded hover:bg-green-600">Apply Now</button>
//                             <ApplicationForm isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} />
//                         </>
//                     } />
//                     <Route path="/about" element={<About />} />
//                     <Route path="/courses" element={<Courses />} />
//                     <Route path="/contact" element={<Contact />} />
//                     <Route path="/Login" element={<Login />} />
//                     <Route path="/Signup" element={<Signup />} />
                    
//                 </Routes>
//             </div>
//         </Router>
//     );
// };

// export default App;



// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaUserGraduate } from 'react-icons/fa';
import { MdOutlineSchool } from 'react-icons/md';
import Navbar from './components/Navbar';
import ApplicationForm from './components/ApplicationForm';
import About from './components/About'; // Import the About component
import Courses from './components/Courses';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';

// Import other components as needed

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Router>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen text-gray-100">
                <Navbar />
                <div className="container mx-auto p-6 md:p-12 text-center">
                    <Routes>
                        <Route path="/" element={
                            <>
                                <h1 className="text-4xl mt-10 md:text-5xl font-extrabold mb-6 text-white flex items-center justify-center">
                                    <MdOutlineSchool className="mr-2 text-yellow-300" /> Welcome to Proviz School of AI
                                </h1>
                                <button 
                                    onClick={() => setIsModalOpen(true)} 
                                    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transform transition-transform hover:scale-105 flex items-center mx-auto"
                                >
                                    <FaUserGraduate className="mr-2 text-xl" /> Apply Now
                                </button>
                                <ApplicationForm isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} />
                            </>
                        } />
                        <Route path="/about" element={<About />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/Signup" element={<Signup />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
