/** @format */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Navbar';
import Rockets from './components/Rockets';
import Profile from './components/Profile';
import Missions from './components/Missions';

function App() {
  return (
    <Router basename="/space-travelers-hub">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="rockets" element={<Rockets />} />
        <Route path="missions" element={<Missions />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
