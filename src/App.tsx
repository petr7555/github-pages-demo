import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <HashRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<Navigate replace to="/"/>}/>
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
