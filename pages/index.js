import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import { ConnectWallet } from "@thirdweb-dev/react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



export default function Home() {
  return (
    <div>
      <Head>
        <title>Harmony</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      

      
      

      <div className='flex items-center justify-center opacity-20	'>
      <main>
            <Image 
            src='/logo.png' 
            alt=''
            width="800px"
            height="600px">
            </Image>
            
          </main>
          </div>
          <Footer />
    </div>
  )
}
