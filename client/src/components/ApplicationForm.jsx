// src/components/ApplicationForm.jsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

const ApplicationForm = ({ isOpen, onRequestClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        statement: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/apply', formData);
            setMessage(response.data.message);
            setFormData({ name: '', phone: '', email: '', statement: '' });
        } catch (error) {
            setMessage('Error submitting application');
        }
        onRequestClose(); // Close the modal after submission
    };

    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose} 
            ariaHideApp={false} 
            className="modal bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto transition-transform transform duration-300 ease-out scale-100 md:scale-95"
        >
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Application Form</h2>
            {message && <p className="text-red-500 text-center mb-4 animate-fade">{message}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                    required
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                    required
                />
                <textarea
                    name="statement"
                    placeholder="Brief Statement"
                    value={formData.statement}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 resize-none"
                    required
                />
                <button 
                    type="submit" 
                    className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-200 transform hover:scale-105 active:scale-95"
                >
                    Submit
                </button>
            </form>
        </Modal>
    );
};

export default ApplicationForm;
