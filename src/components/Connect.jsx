import React from 'react'
import connectImage from '../assets/Group-43.png'
const Connect = () => {
  return (
    <div  className="w-full h-full bg-cover bg-center bg-no-repeat mt-30 relative"
          >
      <img src={connectImage} alt="" className='w-full h-40  md:h-full'/>
      <div className='absolute  top-3 left-5 lg:top-10 lg:left-30 w-70 sm:w-90 md:w-1/2'>
    <h3 className=' text-white text-[10px] md:text-2xl lg:text-5xl font-bold '> Looking to Elevate Your Digital Presence?</h3> 
    <p className='text-white text-[10px] sm:text-1xl md:text-2xl font-light'>Schedule a free consultation with us & discover how our cutting-edge mobile and web development solutions can transform your business.</p>
    <button className='bg-yellow-500 text-white font-semibold py-1 sm:py-2 px-1  sm:px-3 rounded-xl mt-3 text-[12px] md:text-[13px]'>Let's Connect</button>
    </div>
    </div>
  )
}

export default Connect
