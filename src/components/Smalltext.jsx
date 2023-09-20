import React from 'react'
import { Link } from 'react-router-dom'

const Smalltext = () => {
  return (
    <div className='w-full h-auto flex md:py-8 md:flex-row flex-col justify-center items-center text-xl'>
    <h1 className='px-10 font-kontakt py-4'><Link to='/kontakt'>Kontakt</Link></h1>
    <h1 className='px-10 font-kontakt p-4'><Link to='/kolacici'>Politika privatnosti i kolačića</Link></h1>
    </div>
  )
}

export default Smalltext