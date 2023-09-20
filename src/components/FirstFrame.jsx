import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import firstImg from '../assets/Chipsy-Domacinski-baner-1366x550px-v1-SRB.jpg'
import secondImg from '../assets/Chipsy-Q1-baner-1366x550px-v1-SRB.jpg'
import thirdImage from '../assets/hb-classic.jpg'

import smallFirstImg from '../assets/Domacinski-mobile-1215x1080px-v2.jpg'
import smallSecondImg from '../assets/hb-mobile-classic.jpg'
import smallThirdImg from '../assets/Chipsy-Q1-baner-1080x1215px-v1-srb.jpg'

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

const FirstFrame = () => {
  return (
    <div className=''>
<div className='md:block hidden'>
    <Carousel responsive={responsive}  className='py-14 '>
    <img src={firstImg} alt='Picture' className='w-full h-auto object-cover hidden md:block'/>
    <img src={secondImg} alt='Picture' className='w-full h-auto object-cover hidden md:block'/>
    <img src={thirdImage} alt='Picture' className='w-full h-auto object-cover hidden md:block'/>
    </Carousel>
    </div>

    <div className='md:hidden block'> 
    <Carousel responsive={responsive}  className='py-14'>
    <img src={smallFirstImg} alt='Picture' className='w-full h-auto object-cover md:hidden'/>
    <img src={smallSecondImg} alt='Picture' className='w-full h-auto object-cover md:hidden'/>
    <img src={smallThirdImg} alt='Picture' className='w-full h-auto object-cover md:hidden'/>
    </Carousel>
    </div>
</div>
  )
}

export default FirstFrame