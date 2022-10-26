import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



export default function Footer() {
return (
    <footer className={styles.footer}>
        
    <div className='flex items-center justify-center space-x-4 cursor-pointer '>


    <div className='transition ease-in-out delay-50 hover:-translate-y-1 cursor-pointer  opacity-30 hover:opacity-90'>

    <a href='https://github.com/ayush035/Harmony'>
    <img src='/github-1.png'>
        </img>
        </a>
        </div>
        <div className='text-gray-700 text-3xl'>
        |
        </div>




    <div className='transition ease-in-out delay-50 hover:-translate-y-1 cursor-pointer opacity-30 hover:opacity-90'>
    <a href='https://twitter.com/___Ayushhh'>

    <img src='/twitter-1.png'>
        </img>
        </a>
       
    </div>
    <div className='text-gray-500 '>
        Copyright © 2022 Smartran Inc. All rights reserved
        </div>

    </div>
    
        
    </footer>


)
}
