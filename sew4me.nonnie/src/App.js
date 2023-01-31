import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import GetInTouch from './components/GetInTouch';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/get-in-touch" element={<GetInTouch/>}/>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
