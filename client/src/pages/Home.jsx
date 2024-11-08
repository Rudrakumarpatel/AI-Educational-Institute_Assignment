// src/pages/Home.jsx
import React, { useState } from 'react';
import ApplicationForm from '../components/ApplicationForm';
import Navbar from '../components/Navbar';

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <Navbar />
            <section>
                <h1>Welcome to Proviz School of AI</h1>
                <p>
                    At Proviz School of AI, we offer cutting-edge courses in artificial intelligence,
                    machine learning, and data science. Our mission is to empower students with the
                    knowledge and skills needed to excel in the AI field.
                </p>
                <button onClick={() => setIsModalOpen(true)}>Apply Now</button>
            </section>
            <ApplicationForm isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Home;