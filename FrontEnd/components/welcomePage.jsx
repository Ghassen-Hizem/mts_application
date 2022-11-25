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
                  
          <ConnectButton  moralisAuth={false}></ConnectButton> 

           </MoralisProvider>

         
            </div>
        </div>
        </div>
    )

}