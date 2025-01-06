import React from 'react'
import image1 from '../assets/images/1.jpg'

const Hero = () => {
  return (
    <div>
        <div>
          <img src={image1} alt="" />
        </div>

        <div className='bg-green-300 px-20 py-10'>
          <p className='font-bold'>Somos una empresa comprometida con el medio ambiente</p>
        </div>

    </div>
  )
}

export default Hero