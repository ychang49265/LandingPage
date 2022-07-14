import React, { Component } from 'react';
import SectionOne from '../components/sections/SectionOne';
import SectionTwo from '../components/sections/SectionTwo';
import SectionThree from '../components/sections/SectionThree';
import Team from '../components/Team'
import Footer from '../components/Footer'

const Home = () => {

  return (
    <div className="home">
        <Navbar />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <Team />
        <Footer />
    </div>
  );
}

export default Home;