// frontend/pages/index.js
"use client"
import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [torrentFileUrl, setTorrentFileUrl] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send user input to the backend to generate .torrent file
      const response = await axios.post('/generate-torrent', { inputValue }, { responseType: 'blob' });

      // Create a Blob from the response data
      const blob = new Blob([response.data], { type: 'application/x-bittorrent' });
      const url = URL.createObjectURL(blob);

      // Set the generated .torrent file URL to state
      setTorrentFileUrl(url);
    } catch (error) {
      console.error('Error generating torrent:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">User Input Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="inputField" className="block text-gray-700 font-medium mb-1">Input Field</label>
            <input
              type="text"
              id="inputField"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your input"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Generate .torrent
          </button>
        </form>
        {torrentFileUrl && (
          <a href={torrentFileUrl} download="generated.torrent" className="block mt-4 text-blue-500 hover:underline">
            Download .torrent file
          </a>
        )}
      </div>
    </div>
  );
};

export default Home;
