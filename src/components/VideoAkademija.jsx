import React, {useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

const VideoAkademija = () => {
  useEffect(()=>{
    Aos.init({duration: 1000})
  },[])
  return (
    <div className='w-full h-auto md:py-24 py-7 flex justify-center items-center bg-yellowLogo'>
    <iframe data-aos='fade-up' className='md:w-[640px] md:h-[480px] lg:w-[1280px] lg:h-[720px] w-[480px] h-[360px] md:p-14' src="https://www.youtube.com/embed/_U9-5L64W4U?si=8PRMemCwj_AQtfle" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default VideoAkademija