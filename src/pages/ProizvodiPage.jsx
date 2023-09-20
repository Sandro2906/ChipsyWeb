
import NavBar from './NavBar'
import Proizvodi from '../components/Proizvodi'
import Smalltext from '../components/Smalltext'
import Contact from '../components/Contact'

import React, {useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

const ProizvodiPage = () => {

  useEffect(()=>{
    Aos.init({duration: 1500})
  },[])

  return (
    <div>
      <NavBar />
      <div className='w-full h-auto bg-yellow-500 px-7 md:px-20'>
        <div data-aos="fade-left" className='w-full h-auto'>
          <h1 className='text-4xl md:text-6xl font-fontNavBar font-extrabold py-7'>PROIZVODI</h1>
        </div>
        <div className='bg-yellowLogo pt-14 px-5 '>
          <Proizvodi />
        </div>
        <Contact/>
        <Smalltext />
      </div>
    </div>
  )
}

export default ProizvodiPage