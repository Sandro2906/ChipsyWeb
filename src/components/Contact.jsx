import React from 'react'
import Facebook from '../assets/Facebook-logo-blue-circle-large-white-f.png'
import Instagram from '../assets/pngtree-instagram-icon-png-image_6315974.png'
import Youtube from '../assets/Youtube_logo.png'

const dataLogo = [
    {
        id:1,
        picture: Facebook,
        link:'https://www.facebook.com/ChipsyMarbo/'
    },
    {
        id:2,
        picture: Instagram,
        link:'https://www.instagram.com/chipsymarbo/',
        style: 'px-5'
    },
    {
        id:3,
        picture: Youtube,
        link:'https://www.youtube.com/@ChipsyWestBalkan'
    },
]

const Contact = () => {
  return (
    <div className='w-full h-auto bg-yellow-600 px-20 md:py-5 flex flex-col py-3 md:flex-row justify-between'>
    <h1 className='text-7xl w-[250px] text-center font-fontNavBar font-extrabold shadowText text-blue-900 -rotate-3'>Nađi nas i na:</h1>
    
    <div className='flex items-center justify-center'>
    {dataLogo.map(({picture, id, link,style})=>(
        <a href={link} className={`${style} pt-10 md:pt-0`}>
        <div key={id} className='w-[100px] h-[100px] hover:w-[120px] hover:duration-100 hover:h-[120px] flex justify-center items-center border-2 border-white  rounded-full overflow-hidden p-1'>
            <img src={picture} alt='SocMed' className='w-full h-full object-cover rounded-full to-transparent ' />
        </div>
        </a>
    ))}
    </div>
    </div>
  )
}

export default Contact