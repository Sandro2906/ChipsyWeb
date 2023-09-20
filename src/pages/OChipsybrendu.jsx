import React, {useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import ChipsyHome from '../assets/CHIPSYhome.png'
import ZanimljiveCinjenice from '../components/ZanimljiveCinjenice'
import Contact from '../components/Contact'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import Smalltext from '../components/Smalltext'


const OChipsybrendu = () => {
  useEffect(()=>{
    Aos.init({duration: 1500})
  },[])

  return (
    <div>
    <NavBar />
    <div className='w-full h-auto md:px-14 px-7 bg-yellow-400'>
   
    <h1  className='px-20 text-4xl md:text-6xl font-extrabold font-fontNavBar pt-7 bg-yellow-500 '>O CHIPSY BRENDU</h1>
    <div className=' py-7 z-20 bg-yellow-500'>
    <div className='w-full h-auto flex lg:flex-row flex-col bg-white '>
    <div  className='w-full h-auto'>
    <img  src={ChipsyHome} alt='Picture' className='w-full h-full object-cover'/>
</div>
<div className='w-full h-auto flex flex-col p-2'>
<div><h1 className='w-full h-auto py-5 px-3 text-6xl font-fontNavBar font-extrabold text-red-700'>CHIPSY</h1></div>
<div className='px-5'><h1 className='text-md'>Chipsy nije samo čips, Chipsy je sinonim za vašu omiljenu grickalicu!
Pored raznih ukusa, oblika i vesele ambalaže ono što Chipsy čini vašim izborom su posebni standardi po kojima se pravi. Od krompira do aromatičnih začina koji ga čine onim što jeste.
Chipsy se uvek trudi da bude u dobrom društvu. Bilo da smo uz vas dok gledate neki film ili ste isplanirali celodnevni filmski maraton sa društvom.
Bilo da organizujete opušteno druženje kod kuće ili da pravite rođendansku žurku. Bilo da od kuće podržavate naše košarkaše, koje ponosno podržavamo kao sponzor nacionalnog saveza, ili da bodrite svoj tim na turniru na lokalnom igralištu.
Bilo da uživate u muzici preko svojih slušalica ili pravite planove za neke buduće posete muzičkim festivalima – Chipsy je uvek uz vas.
Naravno, ni utakmice Lige šampiona ne mogu da prođu bez vaše i naše omiljene grickalice, kao što ne mogu da prođu bez majstorija našeg brend ambasadora Lionela Mesija. Mi smo uvek tu u vašim trenucima uživanja i zabave, zato što želimo da svaki vaš osmeh ima bolji ukus uz Chipsy.
Svako od nas može pronaći Chipsy po svom ukusu.</h1></div>
</div>
    
    </div>
    </div>

    <ZanimljiveCinjenice />
    <Contact />
    <Smalltext />
    </div>
    </div>
  )
}

export default OChipsybrendu