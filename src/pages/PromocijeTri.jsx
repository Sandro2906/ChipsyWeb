import React from 'react'
import Contact from '../components/Contact'
import Smalltext from '../components/Smalltext'
import { Link } from 'react-router-dom'
import promocijeImg3 from '../assets/promocija3.jpg'
import NavBar from './NavBar'

const PromocijaTri = () => {

  return (
    <div>
    <NavBar />
    <div className='bg-yellow-500 md:px-20  px-7 -z-50'>
   
        <div className=' py-7 z-20 relative'>
        <div className='w-full h-auto flex lg:flex-row flex-col bg-white '>
        <div  className='w-full h-auto'>
        <img src={promocijeImg3} alt='Picture' className='w-full h-full object-cover'/>
    </div>
    <div className='w-full h-auto flex flex-col p-2'>
    <div><h1 className='w-full h-auto py-5 text-4xl font-fontNavBar font-extrabold text-red-700'>CHIPSY DONIRA GOLOVE SVIM SREDNJIM ŠKOLAMA U SRBIJI</h1></div>
    <div className='px-5'><h1 className='text-xl'>Donacija se realizuje uz podršku Ministarstva prosvete, nauke i tehnološkog razvoja Republike Srbije koji će zajedno sa kompanijom Marbo Product i brendom Chipsy podsticati promociju sporta kod dece i omladine.

    Kampanja „Otvori Chipsy, asistiraj za gol“ svojevrstan je nastavak kampanje „Pokaži fudbalski strast“ u okviru koje je Chipsy brend donirao setove lopti svim osnovnim školama Srbiji i regionu. Golovi će ovoga puta biti donirani svim srednjim školama u Crnoj Gori, Bosni i Hercegovini i Republici Srpskoj. Na taj način će srednjoškolci u Srbiji, ali i regionu, imati priliku da da se aktivno bave sportovima, uživaju u fizičkoj aktivnosti, ali i razvijaju timski duh i fer plej.</h1></div>
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

export default PromocijaTri