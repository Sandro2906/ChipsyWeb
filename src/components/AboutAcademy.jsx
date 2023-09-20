
import Akademija from '../assets/akademija.jpg'
import React, {useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

const AboutAcademy = () => {
  useEffect(()=>{
    Aos.init({duration: 1000})
  },[])
  return (
    <div className='w-full h-auto flex flex-col lg:flex-row'>
    <div data-aos='fade-right' className='w-full h-auto'>
        <img alt='Pciture' src={Akademija} className='w-full h-full object-cover' />
    </div>
    <div data-aos='fade-left' className='w-full h-auto p-3 bg-white'>
    <div className='p-3'>
        <h1 className='text-3xl font-fontNavBar font-extrabold text-red-700'>USPERŠNO ZAVRŠENA TREĆA SEZONA CHIPSY AGRO AKADEMIJE</h1>
    </div>
    <div className='p-3 text-xl'>
        <h1 className='font-fontNavBar'>U skladu sa situacijom izazvanom pandemijom COVID-19, Agro akademija je ove godine održana u izmenjenim uslovima i u skladu sa strogim epidemiološkim merama. Studenti su imali prilike da sva predavanja prate onlajn putem posebno kreirane platforme. Polaznicima je na onlajn platformi bio dostupan specijalno kreiran materijal, a imali su prilike i da se upoznaju sa mentorima, agro ekspertima kompanije PepsiCo i diskutuju na zadatu temu vezanu za uzgoj krompira koji se pre svega odnosio na proces setve. Na samom kraju programa, polaznici su posetili njivu dobavljača na kojoj se uzgaja krompir gde su imali priliku da uvide praktičnu primenu znanja, nakon čega su obišli proizvodni pogon, a poseta je zaokružena svečanim uručivanjem Chipsy diplome o pohađanju programa.</h1>
    </div>
    </div>
    </div>
  )
}

export default AboutAcademy