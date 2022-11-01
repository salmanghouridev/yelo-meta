import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from './Banner'
import Navbar from './Navbar'

export default function Home() {
  return (
   <>
   
   <Navbar/>
   <Banner/>
   </>
  )
}
