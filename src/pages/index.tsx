import Head from 'next/head'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react';
import feedBacks from '@/config/feedback';
import Footer from '@/components/Footer/Footer';

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
  const SCALEY_Val = useTransform(scrollYProgress, [0, 1], ['1.6', '1']);
  const OPACITY_Val = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const [feedbackSelected, setFeedbackSelected] = useState(0);

  return (
    <>
      <main>

        {/* ////  1st Page*/}
        <div className=' flex flex-col justify-center space-y-20 h-90vh pt-0 md:pt-32 px-2 max:px-0 '>

          <div className=' w-[100%] flex justify-between space-x-6 '>

            <div className=' flex flex-col justify-center space-y-4 rounded-xl px-4 py-4 lg:w-[50%] xl:px-16 '>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className=' text-gradient text-2xl md:text-4xl xl:text-5xl font-bold font-prostone bg-gradient-to-r from-boagreen to-indigo-500'>We are focused on Innovation
                in products and services we give.
              </motion.h1>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className=' text-dimWhite text-lg'>
                We are a Team of IITs and IIMs come together to take up challenges in various fields and solve them by the extreme knowledge we posses.
              </motion.span>

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
        <div className=' rounded-2xl flex flex-col px-1 justify-around h-[500px] space-y-2 sm:px-16 lg:space-y-0 lg:grid lg:grid-cols-2 gap-0 pt-28'>

          <div className='flex items-center lg:justify-center'>

            <div>
              <h2 className=' text-dimWhite text-2xl sm:text-5xl font-bold font-poppins'>What our{' '}
                <span className=' sm:block text-gradient bg-gradient-to-br from-sky-500 to-rose-500 text-4xl sm:text-6xl font-bold font-poppins'>Clients say</span>
              </h2>
            </div>

          </div>


          <motion.div
            id='slider'
            ref={ref}
            style={{ scaleX: SCALEX_Val, scaleY: SCALEY_Val }}
            className=' flex w-full bg-indigo-700 pt-4 lg:pt-10 h-[230px] sm:h-[250px] lg:rounded-none lg:h-full overflow-hidden'>
            {
              feedBacks.map((feedback) => {
                if (feedback.id === feedbackSelected) {
                  return (

                    <motion.div
                      key={feedback.id}
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      style={{ opacity: OPACITY_Val }}
                      className=' shrink-0 w-full h-full'
                    >

                      <div className=' flex flex-col h-full justify-around px-2 sm:px-10 2xl:px-24'>
                        <span className=' text-white font-sono text-base lg:text-lg'>{feedback.note}</span>

                        <div className=' flex items-center justify-between text-white'>
                          <span className=' flex items-baseline font-poppins sm:text-xl'>{minusicon} {feedback.user} ({feedback.designation})</span>
                          <motion.span whileTap={{ scale: 0.6 }}
                            onClick={() => setFeedbackSelected((prev) => prev === feedBacks.length - 1 ? 0 : prev + 1)}
                            className=' flex items-center cursor-pointer'>{arrowicon}</motion.span>
                        </div>
                      </div>

                    </motion.div>
                  )
                }
              })
            }

          </motion.div>

        </div>

        {/* //// 2nd Page end */}




        {/* //// 3 Page start */}

        {/* //// 3 Page end */}


      </main>
    </>
  )
}



// flex w-full overflow-x-scroll pt-4 px-2 sm:px-10 lg:pt-10 2xl:px-24 h-[230px] sm:h-[250px] lg:rounded-none lg:h-full