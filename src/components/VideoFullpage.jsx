import React from 'react'
import bg from '../assets/tanjir.PNG'
import Video from '../components/Video'

const VideoFullpage = () => {
  return (
    <div className='md:w-[700px] md:h-[700px] my-auto mx-auto flex justify-center items-center overflow-hidden '>
        <Video className="z-20" />
        <img src={bg} className='w-full h-full blur object-cover absolute z-10 p-20' alt='BG'/>
    </div>
  )
}

export default VideoFullpage