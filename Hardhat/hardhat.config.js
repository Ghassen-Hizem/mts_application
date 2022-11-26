require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("@nomiclabs/hardhat-etherscan")
require("solidity-coverage")
require("hardhat-deploy")

/** @type import('hardhat/config').HardhatUserConfig */

const Goerli_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
  namedAccounts: {
    deployer: {
        default: 0, // here this will by default take the first account as deployer
        1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
       
        "Goerli": '0x93726293b44679c8B78092796aD0f60f2DfDBf1D', //it can also specify a specific netwotk name (specified in hardhat.config.js)
    },
    
},
  solidity: "0.8.7",
  networks: {
    Goerli: {
      url: Goerli_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5,
    }
  }
};
