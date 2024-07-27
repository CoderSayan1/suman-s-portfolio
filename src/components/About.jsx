import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaLinkedin  } from "react-icons/fa6";
import image from '/images/photo.png'


function About() {
  return (
    <div className=" w-full flex items-center justify-between h-screen md:px-20 px-10 md:py-6 py-3" id='home'>
      
      <div className='md:w-1/2 w-full'>
        <h3 className='md:text-2xl text-xl font-semibold'>Hello, I am</h3>
        <h1 className='md:text-6xl text-4xl font-bold mb-4'>Suman <span className='text-purple-500'>Maji</span></h1>
        <p className='md:text-lg text-[16px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias laudantium eius similique velit minima in, esse exercitationem, ex numquam, placeat perspiciatis soluta repudiandae.</p>
        <div className='flex my-4 items-center md:gap-x-8 gap-x-4 md:text-2xl text-xl p-2'>
          <a href='/' className='button-design transition duration-300 rounded-full border border-sky-500 w-10 h-10 inline-flex justify-center items-center border-solid bg-transparent text-[#0ef]'><FaFacebook /></a>
          <a href="https://www.instagram.com/sumanmaji2812?igsh=MTVpbHRyNHgyNThzaQ==" target='_blank' className='button-design transition duration-300 rounded-full border border-sky-500 w-10 h-10 inline-flex justify-center items-center border-solid bg-transparent text-[#0ef]'><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/suman-maji" target='_blank' className='button-design transition duration-300 rounded-full border border-sky-500 w-10 h-10 inline-flex justify-center items-center border-solid bg-transparent text-[#0ef]'><FaLinkedin /></a>
        </div>
        <div className='flex justify-between md:w-[70%] w-full'>
          <a href="tel:+91 7439749480" className="transition duration-300 bg-cyan-500 font-semibold md:text-xl text-lg md:px-4 px-2 py-2 rounded inline-block button-design text-black">Contact me</a>
          <a href="">
            <button className="transition duration-300 bg-cyan-500 font-semibold md:text-xl text-lg md:px-4 px-2 py-2 rounded inline-block button-design text-black">My CV</button>
          </a>
        </div>
      </div>
      <div className='md:w-1/2 md:block hidden'>
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default About
