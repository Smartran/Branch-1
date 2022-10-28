import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function about() {
    return (
        <>
        <Navbar  />
        <div className='flex justify-center items-center'>
        <div className='text-6xl text-white my-28'>
            
            Website under development ! 🛠

        </div>
        </div>
        <Footer />
        </>
    )
    }