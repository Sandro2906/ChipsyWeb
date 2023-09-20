import React from 'react';
import AboutMain from '../components/AboutMain';
import FirstFrame from "../components/FirstFrame";
import Contact from '../components/Contact';
import Smalltext from '../components/Smalltext';
import Proizvodi from '../components/Proizvodi';
import VideoFullpage from '../components/VideoFullpage';
import NavBar from './NavBar'



const Home = () => {
  return (
    <div>
    <NavBar />
    <div className='w-full h-auto md:px-20 px-7 bg-yellow-500'>
   
        <FirstFrame />
        <Proizvodi />
        <AboutMain />
        <VideoFullpage />
        <Contact />
        <Smalltext />
    </div>
    </div>
  )
}

export default Home