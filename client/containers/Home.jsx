import React, { Component } from 'react';
import SectionOne from '../components/sections/SectionOne.jsx';
import SectionTwo from '../components/sections/SectionTwo.jsx';
import SectionThree from '../components/sections/SectionThree.jsx';
import Team from '../components/Team.jsx'
import Footer from '../components/Footer.jsx'
import RTNavBar from '../components/RTNavbar.jsx'
import RTHeader from '../components/sections/RTHeader.jsx'

const Home = () => {

  return (
    <div style={{padding: '16px'}} className="home">
        <RTNavBar />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <RTHeader/>
        <Team />
        {/* <Team 
          name={'Yoojin'}
          description={'In her free time blah blah'}
        />
        <Team 
          name={'Raisa'}
          description={'In her free time blah blah'}
        />
        <Team 
          name={'Anthony'}
          description={'In her free time blah blah'}
        />
        <Team 
          name={'Louis'}
          description={'In her free time blah blah'}
        /> */}

        <Footer />
    </div>
  );
}

export default Home;