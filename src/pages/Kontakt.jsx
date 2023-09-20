import React from 'react'
import Contact from '../components/Contact'
import tanjir from '../assets/tanjir.PNG'
import NavBar from './NavBar'

const Kontakt = () => {
  return (
    <div>
    <NavBar />
    <div className='w-full h-auto py-14 px-20 flex justify-center items-center font-fontNavBar  flex-col bg-yellow-400'>
  
    <h1 className='text-5xl font-fontNavBar text-center font-extrabold border-b-4 pb-3 border-red-900 w-[300px]'>Kontakt</h1>
    <div className='w-full h-auto flex justify-center items-center py-10'>
        <form className='md:w-3/4 w-ful h-auto bg-yellow-500 p-10 z-10 rounded-lg'>
        <div className='flex justify-between items-center flex-col md:flex-row py-14'>
            <div className='flex flex-col pb-10 md:pb-0'>
            <label className='text-4xl pb-3'>Name</label>
            <input placeholder='Name' type='text'  className='w-[400px] p-4 rounded-md'/>
            </div>
            <div className='flex flex-col'>
            <label className='text-4xl pb-3'>Email</label>
            <input placeholder='Email' type='text' className='w-[400px] p-4 rounded-md'/>
            </div>
        </div>
        <div className='felx flex-col'>
        <label className='text-4xl pb-3 '>Type here</label>
        <textarea className='w-full h-[200px] p-5 rounded-md'></textarea>
        </div>
        <div className='w-full h-auto flex justify-center items-center py-4'>
        <button className='w-[170px] h-[70px] rounded-full bg-red-900 text-2xl mx-auto font-extrabold text-white'>SUBMIT</button>
        </div>
        </form>
        <img src={tanjir} alt='BG' className='w-full h-full object-cover blur absolute p-20'/>
        </div>
        <Contact />
    </div>
    </div>
  )
}

export default Kontakt