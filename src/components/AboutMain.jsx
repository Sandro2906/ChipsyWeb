
import ChipsyHome from '../assets/CHIPSYhome.png'
import React, {useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

const AboutMain = () => {
  useEffect(()=>{
    Aos.init({duration: 1500})
  },[])
  return (
    <div className='w-full h-auto flex md:flex-row flex-col'>
        <div data-aos="fade-right" className='md:w-2/4 w-full h-auto flex items-center justify-center'>
            <img src={ChipsyHome} alt='Mainimg' className='w-full h-full object-cover'/>
        </div>
        <div data-aos="fade-left" className='flex flex-col bg-white w-full md:w-2/4 p-10 text-2xl'>
        <h1 className='md:text-8xl  text-5xl font-fontNavBar font-semibold pb-10'>Chipsy</h1>
            <h1 className='font-fontNavBar md:text-2xl text-[20px]'>Chipsy ima misiju da ulepša svaki vaš trenutak uživanja u filmovima, muzici,
             fudbalu, košarci i druženju sa prijateljima. Zahvaljujući raznovrsnoj ponudi ukusa i oblika, 
             svako će pronaći svoj savršeni Chipsy, bez obzira na to da li tražite nešto klasično, 
             možda začinjenije ili pak posno. Trudimo se da uvek budemo vaš saigrač: od uživanja u utakmicama 
             Lige šampiona pa do velikih muzičkih festivala,
             zato što želimo da svaki vaš dan ima bolji ukus uz Chipsy.</h1>
            <button className='w-[170px] h-[50px] items-center justify-center flex bg-red-900 mt-14 rounded-full text-sm font-extrabold text-white'>SAZNAJ VIŠE</button>
        </div>
    </div>
  )
}

export default AboutMain