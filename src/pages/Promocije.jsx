import React from 'react'

import Promocija1 from '../components/Promocija1'
import Contact from '../components/Contact'
import Smalltext from '../components/Smalltext'
import NavBar from './NavBar'

const Promocije = () => {
  return (
    <div>
    <NavBar />
    <div className='w-full h-auto bg-yellow-400 flex flex-col py-3 md:px-20 px-7 '>
    
    <div className='w-full h-auto bg-yellowLogo py-7 pl-5'>
        <h1 className='text-6xl font-fontNavBar font-extrabold'>PROMOCIJE</h1>
    </div>
        <Promocija1 />
        <Contact />
        <Smalltext />
    </div>
    </div>
  )
}

export default Promocije