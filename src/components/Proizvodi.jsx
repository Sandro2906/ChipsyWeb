import React,{useEffect} from 'react'
import Classic from '../assets/classic.png'
import Rebrasti from "../assets/rebrasti.png"
import Domacinski from '../assets/domacinski-alt.png'
import Stick from '../assets/sticks.png'
import Over from '../assets/oven-baked.png'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import "aos/dist/aos.css"

const data =[
    {
        id:1,
        name:'CHIPSY CLASSIC ',
        pic: Classic,
        style: "bg-yellow-700",
        link: '/chipsyclassic'
    },
    {
        id:2,
        name:'CHIPSY REBRASTI',
        pic: Rebrasti,
        style: "bg-red-700",
        link: "/chipsyrebrastichily" 
    },
    {
        id:3,
        name:'CHIPSY DOMACINSKI',
        pic: Domacinski,
        style: "bg-yellow-400",
        link: "/chipsydomacinski" 
    },
    {
        id:4,
        name:'CHIPSY OVERBACKED',
        pic: Over,
        style: "bg-green-700",
        link: "/chipsyoverbacked"
    },
    {
        id:5,
        name:'CHIPSY STICK',
        pic: Stick,
        style: "bg-blue-700",
        link: "/chipsystick"
    },
]


const Proizvodi = () => {

  useEffect(()=>{
    Aos.init({duration: 1500})
  },[])

  return (
    <div className='w-full h-auto flex pb-14 flex-col md:flex-row justify-center items-center '>

    {data.map(({ id, name, pic, style,link }) => (
        <div data-aos="zoom-in" key={id} className={`w-[340px] h-[500px] ${style} flex flex-col pt-10 boxShadow`}>
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
  )
}

export default Proizvodi