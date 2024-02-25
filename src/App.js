import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import AboutMe from './Component/AboutMe';
import Project from './Component/Project';
import ContactMe from './Component/ContactMe';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/ContactMe" element={<ContactMe />} />
      </Routes>
    </Router>
  );
}

export default App;
