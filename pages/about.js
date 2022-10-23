import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function about() {
    return (
        <>
        <Navbar />
        <div>
            <main>
                <div>
            <h2 className='text-black text-2xl font-bold font-mono mx-4 py-2 transition ease-in-out delay-50 hover:-translate-y-1 cursor-pointer'>🔗 Defi </h2>
          <p className=' text-black text-xl p-3 mx-auto '>
            Our project aims to make transactions (mainly payment of salaries
            <br />
            and deals) completely decentralized and transparent along with
            <br />
            solving a problem that is suffered by most of the employees/partners
            <br />
            or everyone receiving payment for their work as a job.
            <br />
          </p>
        </div>
        <div>
          <h2 className='text-black text-2xl font-bold font-mono mx-4 py-2 transition ease-in-out delay-50 hover:-translate-y-1 cursor-pointer'>⚓️ The problem </h2>
          <p className=' text-black text-xl p-3 mx-auto'>
            In the current and recurring payoff system we are paid once in month
            <br />
            and then have to wait for another month to get paid . This arises
            <br />
            many day to day problem in ones life which can create problems at
            <br />
            the time of any serious issues. Also, there are many delays in the
            <br />
            pay in any organization that occurs due to various reasons, people
            <br />
            get very uncertain about their pay as organizations starts cutting
            <br />
            off their pay at the time of financial loss. Which harms public in
            <br />
            many ways.
          </p>
        </div>
        <div>
          <h2 className='text-black text-2xl font-bold font-mono mx-4 py-2 transition ease-in-out delay-50 hover:-translate-y-1 cursor-pointer'>🛠 Solution</h2>
          <p className=' text-black text-xl p-3 mx-auto'>
            Our Application provides live time streaming of money that flows
            <br />
            into the account of clients continuously with every second of time
            <br />
            which can be easily withdrawn or transferred to any other wallet at
            <br />
            any point of time. Providing transparency and security of payments.
            <br />
            The payment that is to be made to the clients will be locked in the
            <br />
            smart contract signed by both admin and client. Then the money will
            <br />
            flow into the account of clients every second. Youll receive your
            <br />
            entire payment by the end of the certain and predefined time but
            <br />
            wont have to wait for you term to get over to receive your pay
            <br />
            again . Thus making it much more convenient for the clients to
            <br />
            receive their payment with transparency and with easy and convenient
            <br />
            way.
          </p>
          </div>

                
            </main>
        </div>
        <Footer  />

        </>
    



    )
}