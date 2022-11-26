//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
contract Subscription 
{
    address public subscriber;
    address public us = 0x882e69d75Ded755adE24e88Ff3836EcD83FA0248;
    uint256 constant public fee =10**20;
    address[] public subscribers;
    
    function pay(address adr) public returns (string memory){
        if (adr.balance<fee){return "Sorry, \n you don't have enough token.";}
        subscriber=adr;
        payable(us).transfer(fee);
        subscribers.push(subscriber);
        return "welcome to The GamVersity";
    }
}