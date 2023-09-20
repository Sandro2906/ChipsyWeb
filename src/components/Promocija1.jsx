import React, {useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import pormocijeImg from '../assets/pormocija.jpg'
import promocije2 from '../assets/promocija2.png'
import promocije3 from '../assets/promocija3.jpg'
import { Link } from 'react-router-dom'

const Promocija1 = () => {

    useEffect(()=>{
        Aos.init({duration: 1000})
      },[])

    const data = [
        {
            id:1,
            pic: pormocijeImg,
            link: '/promocijaOne',
            naslov: 'CHIPSY ZLATNA GROZNICA JE ZAVRŠENA!',
            text: 'Ovom prilikom želimo da se zahvalimo svim učesnicima Nagradne igre i čestitamo srećnim dobitnicima na izvučenom zlatu. Svi dobitnici koji su izvukli nagradne kupone, a još nisu kontaktirali namenski Kontakt Centar kako bi zamenili iste za vrednosne vaučere imaju prava d...'
        },
        {
            id:2,
            pic: promocije2,
            link: '/promocijaTwo',
            naslov: 'OPASNA AKCIJA JE ZAVRŠENA!',
            text: 'Obaveštavamo vas da je Chipsy promocija „Svaka kesica dobija“ završena. Ovom prilikom želimo da vam se zahvalimo na izuzetnom interesovanju i da vas informišemo da zamenske kupone iz kesica obeležnih baner trakom više nije moguće zameniti na obeleženim, prodajnim me...'
        },
        {
            id:3,
            pic: promocije3,
            link: '/promocijaThree',
            naslov: 'CHIPSY DONIRA GOLOVE SVIM SREDNJIM ŠKOLAMA U SRBIJI',
            text: 'U okviru društveno odgovorne kampanje „Otvori Chipsy, asistiraj za gol“, kompanija Marbo Product i brend Chipsy, doniraće komplete golova za mali fudbal svim srednjim školama na teritoriji Srbije.Pridružite nam se u misiji, otvorite Chipsy i asistirajte da sve srednje škole na teritoriji Srbije dobiju golove za mali fudbal!'
        },
    ]

  return (
    <div className='bg-yellowLogo px-4'>
    
    {data.map(({id,pic,naslov,text,link})=>(
        <div data-aos="flip-up" className='py-4'>
        <div className='w-full h-auto flex lg:flex-row flex-col bg-white '>
        <div key={id} className='w-full h-auto'>
        <img src={pic} alt='Picture' className='w-full h-full object-cover'/>
    </div>
    <div className='w-full h-auto flex flex-col p-6'>
    <div><h1 className='w-full h-auto py-5 text-4xl font-fontNavBar font-extrabold text-red-700'>{naslov}</h1></div>
    <div className='px-5'><h1 className='text-xl'>{text}</h1></div>
    <div className='w-full h-auto  flex justify-end items-center py-4 pr-10'><Link to={link} className='w-[150px] h-[70px] flex justify-center items-center bg-red-700 font-fontNavBar font-extrabold text-white text-2xl rounded'>Saznaj više</Link></div>
    </div>
        
        </div>
        </div>
    ))}

    </div>
  )
}

export default Promocija1