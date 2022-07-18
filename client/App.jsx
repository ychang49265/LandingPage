import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/Home.jsx';
import Docs from './containers/Docs.jsx'
// import styles from './scss/styles.scss'

const App = () => {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/docs' element={<Docs />} />
       </Routes>
     </Router>
  );
}

export default App;