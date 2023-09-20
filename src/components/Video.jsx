import React,{useEffect} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Aos from 'aos'
import "aos/dist/aos.css"

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Video = () => {

  useEffect(()=>{
    Aos.init({duration: 1500})
  },[])

  return (
    
    <Carousel className="w-[700px] h-[500px] z-20 mx-auto" responsive={responsive}>
      <iframe data-aos="zoom-in" className='md:w-full md:h-[400px] w-[350px] h-[180px] z-20 object-cover' src="https://www.youtube.com/embed/kp9ptrS-e-A?si=M4cxXjdRnzCwVq1T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe className='md:w-full md:h-[400px] w-[350px] h-[180px] z-20'  src="https://www.youtube.com/embed/IshAX7Yj1Us?si=AxCo5ghvn43YLFLG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe className='md:w-full md:h-[400px] w-[350px] h-[180px] z-20'  src="https://www.youtube.com/embed/3FsXmX93wGk?si=YZjebvmG94UCe6Ly" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </Carousel>
  
  )
}

export default Video