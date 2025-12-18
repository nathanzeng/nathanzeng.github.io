import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Games from './pages/Games';
import CompoundInterestCalculator from './pages/CompoundInterestCalculator.tsx';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="mt-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route
            path="/compoundInterestCalculator"
            element={<CompoundInterestCalculator />}
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
