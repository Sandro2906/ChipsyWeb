import React, { useState } from 'react'
import Logo from '../assets/chips.png'
import Facebook from '../assets/Facebook-logo-blue-circle-large-white-f.png'
import Instagram from '../assets/pngtree-instagram-icon-png-image_6315974.png'
import Youtube from '../assets/Youtube_logo.png'
import Proizvodi from '../components/Proizvodi'
import { Link } from 'react-router-dom'
const NavBar = () => {


    const dataLogo = [
        {
            id:1,
            picture: Facebook,
            link:'https://www.facebook.com/ChipsyMarbo/'
        },
        {
            id:2,
            picture: Instagram,
            link:'https://www.instagram.com/chipsymarbo/'
        },
        {
            id:3,
            picture: Youtube,
            link:'https://www.youtube.com/@ChipsyWestBalkan'
        },
    ]

    const data = [
        {
            id:1,
            name:"O CHIPSY BRENDU",
            link:"/about",
            style: "border-t-2 border-blue-900"
        },
        {
            id:2,
            name:"PROIZVODI",
            link:"/proizvodi"
        },
        {
            id:3,
            name:"PROMOCIJE",
            link:"/promocije"
        },
        {
            id:4,
            name:"CHIPSY AKADEMIJA",
            link:"/akademija"
        },
        {
            id:5,
            name:"KONTAKT",
            link:"/kontakt"
        },
    ]


    const [nav, setNav]= useState(false);

  return (

    
    <div className='w-full h-24 bg-yellowLogo pl-10 pr-10 z-50 flex items-center justify-between'>
        <Link to='/'>
            <div className='w-[150px] h-20 flex justify-center items-center'>
                <img src={Logo} alt='Logo'  className='w-full h-full object-cover'/>
            </div>
            </Link>
            <div className='w-full h-auto flex items-center '>

            <div className='w-full h-auto justify-between pl-20 pr-10 lg:flex hidden'>
            {data.map(({id,name,link})=>(
              <Link to={link}>
                <div key={id} className=' flex items-center justify-center hover:duration-300 hover:bg-red-900 rounded-full'>
                
                    <h1 className='md:text-md xl:text-2xl hover:text-white text-blue-900 hover:shadowText-none shadowText font-fontNavBar font-extrabold px-6'>{name}</h1>
                   
                    </div>
                    </Link>
            ))}
            
            {dataLogo.map(({picture, id, link})=>(
                <a href={link} className='md:flex hidden'>
                <div key={id} className='w-[40px] h-[40px] flex justify-center items-center border-2 border-blue-900 rounded-full overflow-hidden p-1'>
                    <img src={picture} alt='SocMed' className='w-full h-full object-cover rounded-full ' />
                </div>
                </a>
            ))}
               
            </div>
            
            </div>


            <div className='lg:hidden flex flex-col '> {/* Wrap button and menu items in a flex container */}
  <button className='z-50' onClick={() => setNav(!nav)}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 z-50">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  </button>
  </div>

  
  {nav && (
    <div className='flex 
    flex-col 
    justify-center 
    items-center 
    top-0 
    left-0 
    absolute 
    w-full 
    h-screen 
    z-50
    bg-yellow-500'>
    <button className='z-10 absolute top-4 right-4' onClick={()=> setNav(!nav)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </button>
      {data.map(({ id, name, link,style }) => (
        <Link to={link} className={`w-full h-auto border-b-2 border-blue-900 hover:bg-yellow-700 py-1 ${style}`}>
        <div className=' w-full h-10 flex py-10 justify-center items-center' key={id}>
          <h1 className='text-3xl  text-blue-900 font-fontNavBar font-extrabold shadowText'>{name}</h1>
        </div>
        </Link>
      ))}

    </div>
  )}

    </div>
  )
}

export default NavBar