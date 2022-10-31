import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';



export default function navbar() {
  return (
    <div>
      <div>
      <nav className='text-black flex justify-between h-11 bg-gradient-to-r from-blue-700 to-blue-400 ' >
        <span className='mx-2 my-2 flex text-black text-3xl font-bold	hover:animate-bounce'><Link href={"/"}>Smartran</Link></span>
        <ul className= 'px-2 py-3 flex space-x-11'>
          <Link href={"/about"}>
        <li className="transition ease-in-out delay-50 hover:-translate-y-1 cursor-pointer text-xl font-bold hover:text-white">About</li>
        </Link>
        <Link href={"/admin"}>
        <li className="transition ease-in-out delay-50 hover:-translate-y-1 cursor-pointer  text-xl font-bold hover:text-white">Admin</li>
        </Link>
        <Link href={"/client"}>
        <li className="transition ease-in-out delay-50 hover:-translate-y-1 cursor-pointer  text-xl font-bold hover:text-white">Client</li>
        </Link>
        <Link href={"/marketplace"}>
        <li className="transition ease-in-out delay-50 hover:-translate-y-1 cursor-pointer  text-xl font-bold hover:text-white">Marketplace</li>
        </Link>
        <div className='overflow-visible'>
        </div> 




        </ul>
      </nav>
      </div>
      </div>
        )
      }
