import React, {useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import Potato from '../assets/cartoon-potato-icon-png.png'
import Earth from '../assets/ff2.jpg'
import Chipsy from '../assets/ff3.jpg'
import Single from '../assets/ff4.jpg'
import Burger from '../assets/ff5.jpg'
import Man from '../assets/ff6.jpg'

const data = [
    {
        id:1,
        text:'2 do 4 krompira prosečne veličine čine jednu kesicu čipsa.',
        pic: Potato
    },
    {
        id:2,
        text:'Krompir je iz Južne Amerike došao u Evropu tek u 15. veku, a prve su ga gajile Inke pre više hiljada godina.',
        pic: Earth
    },
    {
        id:3,
        text:'Vazduh u kesici je zapravo azot koji služi da očuva svežinu proizvoda i pomogne u transportu, kako se listići čipsa ne bi lomili.',
        pic: Chipsy
    },
]

const dataTwdo = [
    {
        id:1,
        text:'Krompir je prvo povrće koje je čovek gajio u svemiru.',
        pic: Single
    },
    {
        id:2,
        text:'Jedan od prvih ukusa koji je Chipsy lansirao bio je Chipsy Burger.',
        pic: Burger
    },
    {
        id:3,
        text:'Krompir je u Srbiju doneo Dositej Obradović 1806. godine.',
        pic: Man
    },
]

const ZanimljiveCinjenice = () => {
    useEffect(()=>{
        Aos.init({duration: 1500})
      },[])
  return (

    <div className='w-full h-auto flex flex-col bg-yellow-500 px-7 md:px-20'>
    <h1 className='w-full h-auto pb-7 text-4xl md:text-6xl font-fontNavBar font-extrabold'>ZANIMLJIVE ČINJENICE</h1>
    
<div className=' flex flex-col justify-center items-center lg:justify-between lg:flex-row'>
<div className='py-4 px-4'>
{data.map(({id,text,pic})=>(
    <div data-aos='fade-right' key={id} className='w-full lg:max-w-[550px] lg:min-h-[219px] lg:max-h-[220px] h-auto md:h-auto flex-col mb-10 justify-center items-center flex md:flex-row py-6 bg-white '>
    <div className='w-[70px] h-[70px] flex justify-center items-center md:ml-7'>
        <img src={pic} alt='Potato' className='w-full md:mx-3 object-cover'/>
    </div>
    <div className='w-full h-auto md:py-0 py-3 px-16 flex items-center justify-center'>
        <h1 className='text-xl font-fontNavBar'>{text}</h1>
    </div>
</div>
))}
</div>

<div className='py-4 px-4'>
{dataTwdo.map(({id,text,pic})=>(
    <div data-aos='fade-left' key={id} className='w-full lg:max-w-[550px] lg:min-h-[219px] lg:max-h-[220px]  md:h-auto h-auto flex-col justify-center items-center flex md:flex-row mb-10 py-6 bg-white '>
    <div className='w-[70px] h-[70px] md:ml-7 flex justify-center items-center'>
        <img src={pic} alt='Potato' className='w-full md:mx-3 object-cover'/>
    </div>
    <div className='w-full h-auto px-16  md:py-0 py-3 flex items-center justify-center'>
        <h1 className='text-xl font-fontNavBar'>{text}</h1>
    </div>
</div>
))}
</div>
</div>

    </div>
  )
}

export default ZanimljiveCinjenice