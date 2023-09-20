import React, {useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

import NavBar from './NavBar'
import imgBg from '../assets/CHIPSYhome.png'
import Contact from '../components/Contact'
import Smalltext from '../components/Smalltext'
import { Link } from 'react-router-dom'

import Rebrasti from "../assets/rebrasti.png"
import Domacinski from '../assets/domacinski-alt.png'
import Stick from '../assets/sticks.png'
import Over from '../assets/oven-baked.png'



const data =[

    {
        id:1,
        name:'CHIPSY REBRASTI',
        pic: Rebrasti,
        style: "bg-red-700",
        link:"/chipsyrebrastichily" 
    },
    {
        id:2,
        name:'CHIPSY DOMACINSKI',
        pic: Domacinski,
        style: "bg-yellow-400",
        link: '/chipsydomacinski'
    },
    {
        id:3,
        name:'CHIPSY OVERBACKED',
        pic: Over,
        style: "bg-green-700",
        link: '/chipsyoverbacked'
    },
    {
        id:4,
        name:'CHIPSY STICK',
        pic: Stick,
        style: "bg-blue-700",
        link: '/chipsystick'
    },
]

const ChipshyClassic = () => {

  useEffect(()=>{
    Aos.init({duration: 1000})
  },[])

  return (
    <div className='bg-yellow-500'>
    <NavBar />
    <div className='md:px-20 px-7 pt-14'>
      <h1 data-aos="fade-left" className='text-4xl md:text-6xl font-fontNavBar font-extrabold'>CHIPSY CLASSIC</h1>
    </div>
    <div className='w-ful h-auto md:px-20 px-7 py-14'>
    <div className='w-full h-auto flex flex-col lg:flex-row bg-white'>
    <div className='w-full h-auto'>
        <img alt='Pciture' src={imgBg} className='w-full h-full object-cover' />
    </div>
    <div className='w-full h-auto p-3 bg-white'>
    <div className='p-3'>
        <h1 className='text-3xl md:text-6xl font-fontNavBar font-extrabold text-red-700'>CLASSIC</h1>
    </div>
    <div className='p-3  text-xl md:text-3xl'>
        <h1 className='font-fontNavBar'>Napravljen od pažljivo odabranih krompira, ispunjava najviše standarde kvaliteta. Njegovo hrskanje, svežina i prepoznatljiv ukus su ono što ga odvaja od svih. Chipsy Classic će se uvek potruditi da bude vaš izbor bilo da ga grickate sami ili ga delite sa nekim.

        Uz film, sport, zabavu ili bilo šta drugo, Chipsy Classic će se potruditi da vam ulepša ugođaj i izmami osmeh na lice.</h1>
    </div>
    </div>
    </div>

    <div className='w-full h-auto flex pb-14 flex-col md:flex-row justify-center items-center pt-7'>

    {data.map(({ id, name, pic, style, link}) => (
        <div data-aos="zoom-in" key={id} className={`w-[340px] h-[500px] ${style} flex flex-col pt-10 boxShadow`}>
          <div className='flex items-center justify-center w-[200px] h-[300px] mx-auto my-auto p-5'>
            <img src={pic} alt="Chipsy" className='w-full h-full object-cover'/>
          </div>
          <div className='w-full p-7 flex flex-col items-center justify-center text-center'> 
            <h1 className='text-xl pb-3 font-extrabold text-white font-fontNavBar'>{name}</h1>
            <Link to={link} className='w-[150px] flex justify-center items-center h-[55px] rounded-full bg-red-900 text-white text-2xl font-fontNavBar mt-3'>Saznaj više</Link>
          </div>
        </div>
      ))}
      
      
    </div>

    <Contact />
    <Smalltext/>
    </div>
    </div>
  )
}

export default ChipshyClassic