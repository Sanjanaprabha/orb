import React from 'react';
import './translation.css';
import { useState } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

const Translation = ({ doStuff, setInput, result }) => {
  const [loading, setLoading] = useState(false);
  const color = '#36d7b7'; // Define the color value you want to use for the loader

  const handleClick = async () => {
    setLoading(true); // Start displaying the loading animation
    await doStuff(); // Make the API call or perform the necessary action
    setLoading(false); // Stop displaying the loading animation
  };

  return (
    <div>
       <Navbar/>
      <div className="text-area-container">
        <textarea className="text-area" cols={55} rows={10} onChange={(e) => setInput(e.target.value)}></textarea>
        {loading && (
          <div className="loader-container">
            <PropagateLoader color={color} loading={loading} />
          </div>
        )}
      </div>
      <br />
      {!loading && (
        <button className="action-btn" onClick={handleClick}>
          Submit!
        </button>
      )}
      {result.length > 0 && !loading && <h3 className="result-text">{result}</h3>}
    </div>
  );
};

export default Translation;
