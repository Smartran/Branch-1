import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function marketplace() {
    return (
        <>
        <Navbar  />
        <div className="right flex flex-col bg-gradient-to-r from-blue-700 to-blue-500 p-8 rounded-xl w-1/4 mx-4 my-4">
        <input className ="px-4 h-12 my-2 border border-1 border-gray-600 rounded-lg outline-blue-600 bg-white text-black" type="text" placeholder="Amount (USD)"/>
        <input className ="px-4 h-12 my-2 border border-1 border-gray-600 rounded-lg outline-blue-600 bg-white text-black" type="text" placeholder="Enter Wallet Address"/>
        <input className ="px-4 h-12 my-2 border border-1 border-gray-600 rounded-lg outline-blue-600 bg-white text-black" type="password" placeholder="Add a note"/>
        <button className="bg-blue-600 text-white my-2 py-2 rounded-md font-bold hover:bg-blue-700">Upload Files</button>
        <hr className="my-2"/>
        <button className=" bg-green-500 text-white my-2 py-2 px-4 mx-auto rounded-md font-bold w-fit hover:bg-green-700" >Mint NFT</button>
        <span className="-bottom-10 text-sm">
        NFT will be minted to the entered wallet address</span>

    </div>
        <Footer />
        </>
        )
    }