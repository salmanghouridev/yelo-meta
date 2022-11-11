import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from './Banner'
import Navbar from './Navbar'

export default function Home() {
  return (
   <>
   
   {/* <Navbar/>
   <Banner/>
    */}
    {/* <Navbar/> */}
    <section className="bg-[#0a0f0c] text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
      Comming Soon
       
      </h1>
      <p className="mt-4 sm:text-xl sm:leading-relaxed">
        The Biggest Online Developer OpenSource Community Ever...
      </p>
    
    </div>
  </div>
</section>


   </>
  )
}
