import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className=' mt-8'>

        <div className=' w-[100%] flex justify-between space-x-6 p-4 lg:p-0'>

          <div className=' flex flex-col justify-center space-y-4 bg-primary rounded-xl px-4 py-4 lg:w-[50%] xl:px-16 '>

            <h1 className=' text-gradient text-2xl md:text-4xl xl:text-5xl font-bold font-prostone bg-gradient-to-r from-boagreen to-indigo-500'>We are focused on Innovation
              in products and services we give.
            </h1>
            <span className=' text-dimWhite text-lg'>
              We are a Team of IITs and IIMs come together to take up challenges in various fields and solve them by the extreme knowledge we posses.
            </span>

          </div>

          <div className=' hidden lg:flex flex-grow justify-center'>
            <img className='max-h-96 ' src="/images/index1.svg" alt="" />
          </div>

        </div>

      </main>
    </>
  )
}
