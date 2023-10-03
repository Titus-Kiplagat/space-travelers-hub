import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Navbar';
import Rockets from './components/Rockets';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="rockets" element={<Rockets />} />
      </Routes>
    </Router>
  );
}

export default App;
