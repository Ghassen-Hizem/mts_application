import React from "react"
import Header from "./header"
import { ConnectButton } from "web3uikit"
import { MoralisProvider } from "react-moralis";
import { useEffect, useState } from "react"
import { useMoralis, useWeb3Contract } from "react-moralis"
import { useNotification } from "web3uikit"
import { ethers } from "ethers"

export default function Welcome() {

    return (
        <div className="welcome">
            <Header />
        <div class="mt-5 ml-8 container" >
            <h1 className="Title2" >Learn By Playing!</h1>
            <div className="mt-5 ml-auto py-2 px-4">
                <MoralisProvider >
                  
           <ConnectButton className="button1"  moralisAuth={false}></ConnectButton>

           </MoralisProvider>

         
            </div>
        </div>
        </div>
    )

}