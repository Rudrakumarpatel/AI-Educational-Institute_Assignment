import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [res, setRes] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', { email, password });
      setRes(response.data.message);

      // Clear the message after 2 seconds
      setTimeout(() => {
        setRes('');
      }, 2000);

    } catch (error) {
      console.error('Signup failed:', error);
      setRes('Signup failed. Please try again.');

      // Clear the error message after 2 seconds
      setTimeout(() => {
        setRes('');
      }, 2000);
    }
  };

  return (
    <>
      {res && (
        <div className="fixed top-4 right-4 bg-green-500 text-white text-sm p-3 rounded-md shadow-lg max-w-xs z-50">
          {res}
        </div>
      )}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto mt-10 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 text-black"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-black">
          Already have an account? <a href="/login" className="text-blue-500">Login</a>
        </p>
      </div>
    </>
  );
};

export default Signup;