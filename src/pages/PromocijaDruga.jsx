import React from 'react'
import Contact from '../components/Contact'
import Smalltext from '../components/Smalltext'
import { Link } from 'react-router-dom'
import promocijeImg2 from '../assets/promocija2.png'
import NavBar from './NavBar'

const PromocijaDruga = () => {

  return (
    <div>
    <NavBar />
    <div className='bg-yellow-500 md:px-20  px-7 -z-50'>
  
        <div className=' py-7 z-20 relative'>
        <div className='w-full h-auto flex lg:flex-row flex-col bg-white '>
        <div  className='w-full h-auto'>
        <img src={promocijeImg2} alt='Picture' className='w-full h-full object-cover'/>
    </div>
    <div className='w-full h-auto flex flex-col p-2'>
    <div><h1 className='w-full h-auto py-5 text-4xl font-fontNavBar font-extrabold text-red-700'>OPASNA AKCIJA JE ZAVRŠENA!</h1></div>
    <div className='px-5'><h1 className='text-xl'>Obaveštavamo vas da je Chipsy promocija „Svaka kesica dobija“ završena. Ovom prilikom želimo da vam se zahvalimo na izuzetnom interesovanju i da vas informišemo da zamenske kupone iz kesica obeležnih baner trakom više nije moguće zameniti na obeleženim, prodajnim mestima.</h1></div>
    <div className='w-full h-auto  flex justify-end items-center py-4 pr-10'><Link to='/promocije' className='w-[150px] h-[70px] bg-red-700 font-fontNavBar font-extrabold text-white text-2xl rounded flex justify-center items-center'>NAZAD</Link></div>
    </div>
        
        </div>
        </div>
        <Contact  />
        <Smalltext />
    </div>
    </div>
  )
}

export default PromocijaDruga