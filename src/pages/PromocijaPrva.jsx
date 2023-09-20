import React from 'react'
import pormocijeImg from '../assets/pormocija.jpg'
import Contact from '../components/Contact'
import Smalltext from '../components/Smalltext'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

const PromocijaPrva = () => {

  return (
    <div>
    <NavBar />
    <div className='bg-yellow-500 md:px-20  px-7 -z-50'>
   
        <div className=' py-7 z-20 relative'>
        <div className='w-full h-auto flex lg:flex-row flex-col bg-white '>
        <div  className='w-full h-auto'>
        <img src={pormocijeImg} alt='Picture' className='w-full h-full object-cover'/>
    </div>
    <div className='w-full h-auto flex flex-col p-2'>
    <div><h1 className='w-full h-auto py-5 text-4xl font-fontNavBar font-extrabold text-red-700'>CHIPSY ZLATNA GROZNICA JE ZAVRŠENA!</h1></div>
    <div className='px-5'><h1 className='text-xl'>Ovom prilikom želimo da se zahvalimo svim učesnicima Nagradne igre i čestitamo srećnim dobitnicima na izvučenom zlatu. Svi dobitnici koji su izvukli nagradne kupone, a još nisu kontaktirali namenski Kontakt Centar kako bi zamenili iste za vrednosne vaučere imaju prava da to urade do 2. aprila 2023. godine. Pravila Nagradne igre možete pogledati ovde.</h1></div>
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

export default PromocijaPrva