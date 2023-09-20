
import Academy from '../assets/academy-new.jpg'
import React, {useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

const TextAbout = () => {
  return (
    <div className='w-full h-auto flex flex-col lg:flex-row pb-14'>
        <div data-aos="fade-right" className='w-full h-auto'>
            <img alt='Picture' src={Academy} className='w-full h-full object-cover' />
        </div>
        <div data-aos='fade-left' className='flex flex-col w-full h-auto bg-white px-6 py-3'>
            <div className='w-full h-auto py-4'>
                <h1 className='text-4xl font-fontNavBar font-extrabold text-red-700'>O CHIPSY AGRO AKADEMIJI</h1>
            </div>
            <div className=''>
                <h1>Chipsy Agro Akademija je projekat pokrenut sa ciljem da studentima omogući praktična znanja u oblasti uzgajanja krompira u skladu sa najvišim standardima koji se primenjuju za potrebe proizvodnje čipsa brenda Chipsy, kao i u cilju stvaranja nove generacije poljoprivrednika i podrške lokalnoj proizvodnji krompira. Namenjen je studentima završnih godina Poljoprivrednih fakulteta Univerziteta u Beogradu i Novom Sadu.
                <br/> <br/>
                Program je koncipiran tako da stručnjaci agro tima kompanije Marbo Product prvo predstavljaju deo svoje ekspertize u oblasti uzgajanja krompira, a posle uvodnog teorijskog dela, prezentuju i konkretan zadatak za studente. Rešavanjem zadatka, studenti dobijaju priliku da uđu u finalni izbor i kandiduju se za učešće u praktičnom delu. Najbolja rešenja bira stručni žiri koji čine predstavnici kompanije Marbo Product i predstavnici Poljoprivrednih fakulteta Univerziteta u Beogradu i Novom Sadu. Pobednički timovi zatim imaju priliku da učestvuju u praktičnom delu projekta, odnosno u procesu od setve do žetve krompira.
                <br/> <br/>
                Za više informacija i novosti, pratite naš sajt www.chipsy.rs</h1>
            </div>
        </div>
    </div>
  )
}

export default TextAbout