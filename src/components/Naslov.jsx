import React, {useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

const Naslov = () => {
  useEffect(()=>{
    Aos.init({duration: 1500})
  },[])
  return (
    <div className='w-full h-auto py-7'>
    <h1 data-aos="fade-left" className='text-5xl font-fontNavBar font-extrabold'>VESTI</h1>
    </div>
  )
}

export default Naslov