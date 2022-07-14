import React, { Component } from 'react';
import SectionOne from './sections/SectionOne';
import SectionTwo from './sections/SectionTwo';
import SectionThree from './sections/SectionThree';
import Team from './Team'
import Footer from './Footer'

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