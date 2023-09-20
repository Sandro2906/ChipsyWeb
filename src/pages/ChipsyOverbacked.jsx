import React, {useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import NavBar from './NavBar'
import imgBg from '../assets/cat-oven-baked-intro.jpg'
import Contact from '../components/Contact'
import Smalltext from '../components/Smalltext'
import { Link } from 'react-router-dom'

import Rebrasti from "../assets/rebrasti.png"
import Domacinski from '../assets/domacinski-alt.png'
import Stick from '../assets/sticks.png'
import Classic from '../assets/classic.png'



const data =[

    {
        id:1,
        name:'CHIPSY REBRASTI',
        pic: Rebrasti,
        style: "bg-red-700",
        link: "/chipsyrebrastichily" 
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
        name:'CHIPSY CLASSIC',
        pic: Classic,
        style: "bg-yellow-700",
        link: '/chipsyclassic'
    },
    {
        id:4,
        name:'CHIPSY STICK',
        pic: Stick,
        style: "bg-blue-700",
        link: '/chipsystick'
    },
]

const ChipshyOverbacked = () => {

  useEffect(()=>{
    Aos.init({duration: 1000})
  },[])

  return (
    <div className='bg-yellow-500'>
    <NavBar />
    <div className='md:px-20 px-7 pt-14'>
      <h1 data-aos='fade-left' className='text-4xl md:text-6xl font-fontNavBar font-extrabold'>CHIPSY OVERBAKED</h1>
    </div>
    <div className='w-ful h-auto md:px-20 px-7 py-14'>
    <div className='w-full h-auto flex flex-col lg:flex-row bg-white'>
    <div className='w-full h-auto'>
        <img alt='Pciture' src={imgBg} className='w-full h-full object-cover' />
    </div>
    <div className='w-full h-auto p-3 bg-white'>
    <div className='p-3'>
        <h1 className='text-3xl md:text-6xl font-fontNavBar font-extrabold text-red-700'>OVEN BAKED</h1>
    </div>
    <div className='p-3 text-xl md:text-3xl'>
        <h1 className='font-fontNavBar'>Prvi pečeni Chipsy! Oven Baked je pečen u rerni sa 50% manje masti u odnosu na klasičan čips pržen u ulju, što ga čini savršenim izborom za sve one koji žele da uživaju u grickanju bez griže savesti.

        Ako tražite predlog šta da poslužite vašim prijateljima uz neobavezno popodnevno ćaskanje naš predlog je da to bude nešto lagano i slasno – Oven Baked.</h1>
    </div>
    </div>
    </div>

    <div className='w-full h-auto flex pb-14 flex-col md:flex-row justify-center items-center pt-7'>

    {data.map(({ id, name, pic, style,link}) => (
        <div key={id} className={`w-[340px] h-[500px] ${style} flex flex-col pt-10 boxShadow`}>
          <div className='flex items-center justify-center w-[200px] h-[300px] mx-auto my-auto p-5'>
            <img src={pic} alt="Chipsy" className='w-full h-full object-cover'/>
          </div>
          <div className='w-full p-7 flex flex-col items-center justify-center text-center'> 
            <h1 className='text-xl pb-3 font-extrabold text-white font-fontNavBar'>{name}</h1>
            <Link to={link} className='w-[150px] h-[55px] flex justify-center items-center rounded-full bg-red-900 text-white text-2xl font-fontNavBar mt-3'>Saznaj više</Link>
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

export default ChipshyOverbacked