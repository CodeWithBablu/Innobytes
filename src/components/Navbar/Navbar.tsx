import Image from 'next/image'

import { AnimatePresence, motion } from 'framer-motion'
import navbarItems from '@/config/navbar'
import Link from 'next/link'
import { useState } from 'react';
import Menu from './Menu';


const arrowicon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>;

const menuicon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>;


const Navbar = () => {

  const [menuStatus, setMenuStatus] = useState(false);

  return (
    <>

      <div className=' absolute left-0 right-0 mx-auto top-4 flex items-center justify-between px-4 py-3 rounded-lg md:py-2 bg-transparent md:bg-navbar'>


        <div className=' relative flex items-center space-x-4 '>

          {/* <div className="absolute z-0 right-6 w-12 h-12 bg-lime-400 rounded-full
    filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="absolute z-0 bottom-2 left-0 w-12 h-12 bg-cyan-400 rounded-full
     filter blur-xl opacity-80 animate-blob animation-delay-3000"></div> */}

          <Link href={`/`}>

            <motion.div whileTap={{ scale: 0.7 }} className=' z-10 flex space-x-2 items-center cursor-pointer'>

              <img className=' w-6 h-6 sm:h-8 sm:w-8 rounded-full' src="/images/logo.png" alt='logo' />
              <h2 className=' flex text-xl sm:text-2xl  text-gradient bg-gradient-to-r from-boagreen via-rose-300 to-cyan-300 font-semibold font-dynapuff '>Innobytes.</h2>

            </motion.div>
          </Link>

        </div>

        <div className='hidden md:flex items-center space-x-6 text-sm text-dimWhite font-prostone'>
          {
            navbarItems.map((item) => (
              <div key={item.title} className=' group'>
                <Link href={"/"} className=' flex items-center font-semibold text-xs group-hover:text-sm group-hover:text-cyan-200' >{item.title} {item.content.length > 0 && arrowicon} </Link>

                {item.content.length > 0 &&

                  <div className=' hidden group-hover:flex sidebar flex-grow flex-col absolute top-[35px] left-0 right-0 mx-auto rounded-xl max-w-[1100px]'>

                    <div className=' w-full h-10 bg-transparent' />

                    <div className=' flex justify-center w-full px-2 py-6 rounded-xl  bg-secondary'>

                      <div className=' grid grid-cols-4 gap-x-8 gap-y-6 '>
                        {
                          item.content.map((link) => (
                            <span key={link} className=' hover:underline underline-offset-2 decoration-2 decoration-lime-300 cursor-pointer hover:text-lime-300 text-sm font-poppins font-medium'>{link}</span>
                          ))
                        }
                      </div>

                    </div>

                  </div>
                }

              </div>
            ))

          }
        </div>

        <div className=' flex items-center space-x-4'>

          <Link href={`/contact-us/contact-form-page`}>
            <motion.button whileTap={{ scale: 0.7 }} className=' hidden md:flex rounded-lg py-2 px-4 text-white text-xs md:text-sm font-dynapuff border-[1px] border-cyan-200 hover:border-cyan-400'>Contact Us</motion.button>
          </Link>

          <motion.span whileTap={{ scale: 0.7 }} onClick={() => setMenuStatus(true)} className=' md:hidden text-dimWhite cursor-pointer'>{menuicon}</motion.span>

        </div>

      </div>

      <AnimatePresence>{menuStatus && <Menu navbarItems={navbarItems} setMenuStatus={setMenuStatus} />}</AnimatePresence>

    </>
  )
}

export default Navbar