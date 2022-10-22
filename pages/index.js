import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ConnectWallet } from "@thirdweb-dev/react";



export default function Home() {
  return (
    <div>
      <Head>
        <title>Harmony</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <nav className='text-black flex justify-between h-12 bg-gradient-to-r from-blue-700 to-blue-400 ' >
        <span className='mx-2 my-2 flex text-black text-3xl font-bold	hover:animate-bounce'>Smartran</span>
        <ul className= 'px-2 py-4 flex space-x-11'>
        <li className="transition ease-in-out delay-50 hover:-translate-y-1 cursor-pointer text-xl font-bold">About</li>
          <li className="transition ease-in-out delay-50 hover:-translate-y-1 cursor-pointer  text-xl font-bold">Admin</li>
          <li className="transition ease-in-out delay-50 hover:-translate-y-1 cursor-pointer  text-xl font-bold">Client</li>
          <li className="transition ease-in-out delay-50 hover:-translate-y-1 cursor-pointer  text-xl font-bold">Notification</li>
          <div className='overflow-visible	'>
          <ConnectWallet /></div>
         



        </ul>
      </nav>
      
      </div>
      <div className='flex items-center justify-center opacity-20	'>
      <main>
            <img src='/logo.png' ></img>
          </main>
          </div>

    


      

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
