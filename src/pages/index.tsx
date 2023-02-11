import Head from 'next/head'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react';

const arrowicon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" w-6 h-6 sm:w-10 sm:h-10">
  <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
</svg>;

const minusicon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" />
</svg>;



export default function Home() {


  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  })

  const SCALEX_Val = useTransform(scrollYProgress, [0, 1], ['1.5', '1']);
  const SCALEY_Val = useTransform(scrollYProgress, [0, 1], ['1.5', '1']);
  const OPACITY_Val = useTransform(scrollYProgress, [0, 1], ['0', '1']);


  console.log("heelo:", scrollYProgress);


  return (
    <>
      <main>

        {/* ////  1st Page*/}
        <div className=' flex flex-col justify-around h-90vh pt-0 md:pt-32 px-2 max:px-0 '>

          <div className=' w-[100%] flex justify-between space-x-6 '>

            <div className=' flex flex-col justify-center space-y-4 bg-navbar rounded-xl px-4 py-4 lg:w-[50%] xl:px-16 '>

              <h1 className=' text-gradient text-2xl md:text-4xl xl:text-5xl font-bold font-prostone bg-gradient-to-r from-boagreen to-indigo-500'>We are focused on Innovation
                in products and services we give.
              </h1>
              <span className=' text-dimWhite text-lg'>
                We are a Team of IITs and IIMs come together to take up challenges in various fields and solve them by the extreme knowledge we posses.
              </span>

            </div>

            <div className=' hidden lg:flex flex-grow justify-center'>
              <img className=' max-h-96 ' src="/images/index1.svg" alt="" />
            </div>

          </div>

          {/* //// show scroll down widget */}
          <div className=' flex space-x-6'>

            <div className=' relative w-2 h-32 rounded-full bg-slate-800 overflow-hidden'>

              <motion.span
                initial={{ y: -90 }}
                animate={{ y: 200 }}
                transition={{ repeat: Infinity, duration: 3 }}
                className=' absolute w-2 h-10 rounded-full bg-gradient-to-b from-boagreen to-indigo-400'></motion.span>

            </div>

            <span className=' font-poppins text-2xl text-dimWhite'>SCROLL DOWN</span>
          </div>

        </div>
        {/* //// 1st Page end */}



        {/* //// 2nd Page Start */}
        <div className=' flex flex-col px-2 space-y-2 justify-between h-[500px] sm:px-10 lg:grid lg:grid-cols-2 gap-0 lg:h-[500px] pt-32'>

          <div className='flex items-center lg:justify-center'>

            <div>
              <h2 className=' text-dimWhite text-2xl sm:text-5xl font-bold font-poppins'>What our{' '}
                <span className=' sm:block text-gradient bg-gradient-to-br from-cyan-400 to-pink-500 text-4xl sm:text-6xl font-bold font-poppins'>Clients say</span>
              </h2>
            </div>

          </div>


          <motion.div
            ref={ref}
            style={{ scaleX: SCALEX_Val, scaleY: SCALEY_Val }}
            className=' pt-4 sm:pt-20 px-2 sm:px-10 2xl:px-24 h-[230px] sm:h-[250px] lg:h-full bg-indigo-700'>

            <motion.div
              style={{ opacity: OPACITY_Val }}
              className=' flex h-full flex-col justify-around'
            >
              <span className=' text-white font-sono text-sm sm:text-lg'>They think about products in terms of how it works and not just how it looks. They're experts at what they do</span>

              <div className=' flex items-center justify-between text-white'>
                <span className=' flex items-baseline font-poppins sm:text-xl'>{minusicon} NEIL JOGLEKAR (Uber)</span>
                <motion.span whileTap={{ scale: 0.6 }} className=' flex items-center cursor-pointer'>{arrowicon}</motion.span>
              </div>
            </motion.div>

          </motion.div>

        </div>

        {/* //// 2nd Page end */}

        <div className=' w-full bg-primary h-[1900px]'></div>

      </main>
    </>
  )
}
