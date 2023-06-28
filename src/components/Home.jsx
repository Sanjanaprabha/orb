import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2 className="first">
        Orb
      </h2>
      <img src="logo.png" alt="loading" />
      <h3 className="second">
        Chat Gpt Version
      </h3>

      <button className="btn-orb">
        <Link to="/dashboard">try orb...</Link>
      </button>
    
    </div>
  );
};

export default Home;
