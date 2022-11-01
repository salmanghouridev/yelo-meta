import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header aria-label="Site Header" className="bg-white">
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between mt-4">
        <div className="flex-1 md:flex md:items-center md:gap-12 ">
          <Link href="/">
          <Image
      src="/yelo.png"
      alt="Picture of the author"
      width={180}
      height={400}
    />
          </Link>
        </div>
        <div className="md:flex md:items-center md:gap-12">
          <nav aria-label="Site Nav" className="hidden md:block">
            <ul className="flex items-center gap-3 text-lg font-bold font-mono">
              <li>
                <a className="text-[#05B251] font-extrabold transition hover:text-green-500/75 underline underline-offset-8" href="/">
                 PARTNERS
                </a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75 hover:underline underline-offset-8" href="/">
                  ABOUT
                </a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75 hover:underline underline-offset-8" href="/">
                  HACKATHON
                </a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75 hover:underline underline-offset-8" href="/">
                  BENIFITS
                </a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75 hover:underline underline-offset-8" href="/">
                  COURSES
                </a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75 hover:underline underline-offset-8" href="/">
                  WORKSHOPS
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
            
              <div className="hidden sm:flex">
                <a className="rounded-md bg-[#05B251] px-5 py-2.5 text-lg font-bold text-black border-solid border-2 border-black outline outline-offset-4 " href="/">
                  REGISTER NOW
                </a>
              </div>
            </div>
            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  
  )
}

export default Navbar