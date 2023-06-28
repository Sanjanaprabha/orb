import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/dashboard';
import './App.css';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
