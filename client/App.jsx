import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';


const App = () => {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Docs' element={<Docs />} />
       </Routes>
     </Router>
  );
}

export default App;