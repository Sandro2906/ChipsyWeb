import React, { useEffect } from 'react'
import AboutAcademy from '../components/AboutAcademy'
import Naslov from '../components/Naslov'
import VideoAkademija from '../components/VideoAkademija'
import Naslov2 from '../components/Naslov2'
import TextAbout from '../components/TextAbout'
import Contact from '../components/Contact'
import Smalltext from '../components/Smalltext'
import NavBar from './NavBar'

import Aos from 'aos'
import "aos/dist/aos.css"

const ChipsyAkademija = () => {



  return (
    <div>
    <NavBar />
    <div className='w-full h-auto flex flex-col md:px-20 px-7 bg-yellow-400 overflow-hidden'>
    <Naslov />
    <AboutAcademy />
    <VideoAkademija />
    <Naslov2 />
    <TextAbout />
    <Contact />
    <Smalltext />
    </div>
    </div>
  )
}

export default ChipsyAkademija