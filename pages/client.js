import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function about() {
    return (
        <>
        <Navbar  />
        <div className='text-6xl text-white'>
            Website under development ! 🛠

        <div className='text-3xl text-white'>
            We will be right back... 😉

        </div>

        </div>
        <Footer />
        </>
    )
    }