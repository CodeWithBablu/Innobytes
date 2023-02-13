import React from 'react'
import { motion } from 'framer-motion'

import { IoLogoYoutube, IoLogoLinkedin, IoLogoFacebook, IoLogoTwitter, } from 'react-icons/io5';
import { MdCopyright } from 'react-icons/md';

import footerLinks from '@/config/footerLinks'


type FooterProps = {}

const Footer = () => {
  return (

    <div className='mx-0 lg:mx-10 xl:mx-28 mt-10 md:mb-10'>

      <div className=' flex flex-col space-y-10 w-full pt-20 px-2 sm:px-4 lg:px-10 pb-10 bg-primary'>

        <div className=' flex justify-between flex-col space-y-6 md:flex-row md:space-y-0 '>

          <span className=' font-poppins font-semibold text-xl text-white'>Stay ahead in a rapidly changing world.{' '}
            <span className=' text-gradient font-bold font-poppins text-2xl bg-gradient-to-r from-pink-400 to-pink-200 '>Subscribe to InnoBytes Insights.</span>
          </span>

          <div className=' flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-4'>

            <div className=' flex flex-col items-center space-y-4 justify-between'>

              <input onChange={() => { }} required className=' w-full text-dimWhite bg-navbar p-3 border-2 border-slate-500 hover:border-boagreen focus:border-boagreen outline-none font-poppins font-medium rounded-lg' name="email" placeholder='Your email address...' type="text" />

              <div className=' w-full flex space-x-2'>
                <input onChange={() => { }} required className=' h-5 w-5 cursor-pointer rounded-lg' name="privacy" type="checkbox" />
                <span className=' text-dimWhite'>*I have read the Privacy Policy and agree to its terms.</span>
              </div>

            </div>

            <motion.button whileTap={{ scale: 0.8 }} className=' w-full lg:w-44 h-12 bg-boagreen px-4 py-2 rounded-md font-poppins text-xl font-bold'>SUBSCRIBE</motion.button>

          </div>

        </div>


        <div className=' pt-4 flex justify-between flex-col space-y-6 md:flex-row md:space-y-0 '>

          <motion.div whileTap={{ scale: 0.7 }} className=' z-10 flex space-x-2 items-center cursor-pointer'>

            <img className=' w-6 h-6 sm:h-8 sm:w-8 rounded-full' src="/images/logo.png" alt='logo' />
            <h2 className=' flex text-xl sm:text-2xl  text-gradient bg-gradient-to-r from-indigo-500 via-indigo-300 to-boagreen font-semibold font-dynapuff '>Innobytes.</h2>

          </motion.div>

          <div className=' flex space-x-4 items-center'>

            <span className=' group flex justify-center items-center rounded-full p-2 bg-slate-600 hover:bg-white'>
              <IoLogoLinkedin className=' w-5 h-5 text-dimWhite rounded-xl group-hover:text-slate-700 ' />
            </span>

            <span className=' group flex justify-center items-center rounded-full p-2 bg-slate-600 hover:bg-white'>
              <IoLogoTwitter className=' w-5 h-5 text-dimWhite rounded-xl group-hover:text-slate-700 ' />
            </span>

            <span className=' group flex justify-center items-center rounded-full p-2 bg-slate-600 hover:bg-white'>
              <IoLogoYoutube className=' w-5 h-5 text-dimWhite rounded-xl group-hover:text-slate-700 ' />
            </span>

            <span className=' group flex justify-center items-center rounded-full p-2 bg-slate-600 hover:bg-white'>
              <IoLogoFacebook className=' w-5 h-5 text-dimWhite rounded-xl group-hover:text-slate-700 ' />
            </span>

          </div>

        </div>


        <div className=' flex flex-wrap'>
          {
            footerLinks.map((link) => (
              <span className=' mr-4 text-dimWhite text-base hover:text-indigo-200 hover:underline decoration-2 underline-offset-2 decoration-indigo-400 cursor-pointer font-medium font-fredoka'>{link.title}</span>
            ))
          }
        </div>

        <div className='w-full'>
          <span className=' flex text-slate-400 text-xs font-poppins font-semibold'>All rights reserved by Innobytes. Copyright
            <MdCopyright className=' w-4 h-4 mx-1' />
            2023
          </span>
        </div>


      </div>

    </div>

  )
}

export default Footer