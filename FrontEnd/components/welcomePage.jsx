import React from "react"
import Header from "./header"
import Link from 'next/link';
import { ConnectButton } from "web3uikit"
import { MoralisProvider } from "react-moralis";



export default function Welcome() {
    const moralisServerUrl = process.env.NEXT_APP_MORALIS_SERVER_URL;
    const moralisAppId = process.env.NEXT_APP_MORALIS_APP_ID;
    return (
        <div style={{ backgroundImage: `url("/pink.jpg")`  }} class=" bg-cover h-screen">
            
        <div class="sm:pl-44 pt-60 container pl-16" >
        <Header />
            <h1 class="ml-2 mt-4 sm:text-5xl text-3xl  text-white font-extrabold " >Learn By <span class="text-green-300 ">Playing!</span> </h1>
            <div className="mt-5 &&ml-auto ">
                <MoralisProvider  appId={1} serverUrl={'http://localhost:3001'} >
                  
          <ConnectButton onClick={() => {document.getElementById('courses').style.display = 'block'}}  moralisAuth={false}></ConnectButton> 

           </MoralisProvider>
         <Link href="/accountPage"> <button id="courses" type="button" class="hidden ml-4 mt-4 pl-16 pr-16 text-xl font-extrabold text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 rounded-lg px-5 py-2.5 text-center">Go To Courses</button></Link> 
          <button  type="button" class=" ml-4 mt-4 pl-16 pr-16 text-xl font-extrabold text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 rounded-lg px-5 py-2.5 text-center">Deploy Your own Course</button>
          <br/>
          <Link href="/PaymentPage"> <button  type="button" class=" ml-4 mt-4 pl-16 pr-16 text-xl font-extrabold text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 rounded-lg px-5 py-2.5 text-center">Go To Payment</button></Link> 
            </div>
        </div>
        </div>
    )

}