//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
contract Subscription 
{
    address public subscriber;
    address public us = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
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