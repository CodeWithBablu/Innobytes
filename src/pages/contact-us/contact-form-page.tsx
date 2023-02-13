import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const Contactform = (props: Props) => {
  return (
    <div className=' pt-32'>

      <form>

        <div className=' flex flex-col space-y-8 lg:space-y-0 lg:grid grid-cols-2'>

          <span className=' flex items-center lg:justify-center text-4xl lg:text-7xl text-gradient bg-gradient-to-r from-indigo-500 via-indigo-300 to-lime-400 font-bold'>Contact Us</span>

          <div className=' flex flex-col space-y-4 px-2 lg:px-20'>

            <span className=' text-dimWhite text-sm md:text-base font-poppins font-semibold'>
              Please complete the form below, So we can help serve you better.
            </span>

            <span className=' text-sky-200 text-sm md:text-base font-poppins font-semibold'>
              Please Note : Due to the volume of inquiries, we cannot respond to everyone. Where we can, we will respond as soon as possible.
            </span>

            <span className=' text-slate-400 font-semibold'> <span className=' text-rose-500 font-bold text-lg'>*</span> Reason for contacting InnoBytes:</span>

            <select className=' p-3 text-dimWhite text-base font-medium rounded-md bg-slate-800' defaultValue={0} required={true} name="reason" id="reason">
              <option disabled={true} value="0">Reason for contacting Innobytes</option>
              <option value="1">Bussiness inquiry: I'm exploring hiring Innobytes</option>
              <option value="2">Partnership request: I'd like to be considered for Innobytes's Alliance</option>
              <option value="3">Peaker request: I'd like to have a Innobytes expert speak at my event</option>
              <option value="4">Career information: I'd like to work at innobytes</option>
            </select>

          </div>

        </div>



        <hr className=' my-10 border-dashed border-2 border-x-0 border-b-0 border-slate-500' />



        <div className=' flex flex-col space-y-8 lg:space-y-0 lg:grid grid-cols-2'>

          <span className=' flex items-center lg:justify-center text-3xl lg:text-5xl text-gradient bg-gradient-to-r from-indigo-500 via-indigo-300 to-lime-400 font-bold'>About You</span>

          <div className=' flex flex-col space-y-4 px-4 lg:px-20'>

            <span className=' text-slate-400 font-semibold'> <span className=' text-rose-500 font-bold text-lg'>*</span> First Name</span>
            <input onChange={() => { }} required className=' text-dimWhite bg-navbar p-3 border-2 border-slate-500 hover:border-boagreen focus:border-boagreen outline-none font-poppins font-medium rounded-lg' name="firstname" type="text" />

            <span className=' text-slate-400 font-semibold'> <span className=' text-rose-500 font-bold text-lg'>*</span> Last Name</span>
            <input onChange={() => { }} required className=' text-dimWhite bg-navbar p-3 border-2 border-slate-500 hover:border-boagreen focus:border-boagreen outline-none font-poppins font-medium rounded-lg' name="lastname" type="text" />

            <span className=' text-slate-400 font-semibold'> <span className=' text-rose-500 font-bold text-lg'>*</span> Email Address</span>
            <input onChange={() => { }} required className=' text-dimWhite bg-navbar p-3 border-2 border-slate-500 hover:border-boagreen focus:border-boagreen outline-none font-poppins font-medium rounded-lg' name="email" type="email" />

            <span className=' text-slate-400 font-semibold'>Phone Number :</span>
            <input onChange={() => { }} required className=' text-dimWhite bg-navbar p-3 border-2 border-slate-500 hover:border-boagreen focus:border-boagreen outline-none font-poppins font-medium rounded-lg' name="phoneno" type="number" />


          </div>

        </div>



        <hr className=' my-10 border-dashed border-2 border-x-0 border-b-0 border-slate-500' />



        <div className=' flex flex-col space-y-8 lg:space-y-0 lg:grid grid-cols-2'>

          <span className=' flex items-center lg:justify-center text-3xl lg:text-5xl text-indigo-100 text-gradient bg-gradient-to-r from-indigo-500 via-indigo-300 to-lime-400 font-bold'>About your business</span>

          <div className=' flex flex-col space-y-4 px-4 lg:px-20'>

            <span className=' text-slate-400 font-semibold'> <span className=' text-rose-500 font-bold text-lg'>*</span> Company Name :</span>
            <input onChange={() => { }} required className=' text-dimWhite bg-navbar p-3 border-2 border-slate-500 hover:border-boagreen focus:border-boagreen outline-none font-poppins font-medium rounded-lg' name="companyname" type="text" />

          </div>

        </div>



        <hr className=' my-10 border-dashed border-2 border-x-0 border-b-0 border-slate-500' />



        <div className=' flex flex-col space-y-8 lg:space-y-0 lg:grid grid-cols-2'>

          <span className=' flex items-center lg:justify-center text-3xl lg:text-5xl text-gradient bg-gradient-to-r from-indigo-500 via-indigo-300 to-lime-400 font-bold'>Your message</span>

          <div className=' flex flex-col space-y-4 px-4 lg:px-20'>

            <span className=' text-slate-400 font-semibold'> <span className=' text-rose-500 font-bold text-lg'>*</span> Message :</span>
            <textarea onChange={() => { }} required className=' text-dimWhite bg-navbar h-44 p-3 border-2 border-slate-500 hover:border-boagreen focus:border-boagreen outline-none font-poppins font-medium rounded-lg' name="message" />

            <div className=' flex items-center space-x-4'>
              <input onChange={() => { }} required className=' h-5 w-5 cursor-pointer rounded-lg' name="privacy" type="checkbox" />
              <span className=' text-dimWhite'><span className=' text-rose-500 font-bold text-lg mx-1'>*</span>I have read the <motion.span whileTap={{ scale: 0.9 }} className=' inline-block cursor-pointer text-cyan-300 font-bold mx-1'>Privacy Policy</motion.span> and agree to its terms.</span>
            </div>

            <motion.button whileTap={{ scale: 0.8 }} className=' bg-lime-400 px-4 py-2 rounded-md font-poppins text-xl font-bold'>SUBMIT</motion.button>

          </div>

        </div>


      </form>

    </div>
  )
}

export default Contactform;