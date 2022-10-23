import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



export default function footer() {
return (
<footer className={styles.footer}>
    <div className='flex items-center justify-center space-x-6 transition ease-in-out delay-50 hover:-translate-y-1 cursor-pointer'>
        <a href='https://github.com/ayush035/Harmony'>
        <img src='/github-1.png'></img></a>
        <a href='https://twitter.com/___Ayushhh'>

        <img src='/twitter-1.png'></img></a>




    </div>
    
        
    </footer>


)
}