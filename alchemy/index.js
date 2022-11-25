import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
    apiKey: "1NLyfwynVezncRdlPRMHLBxCoOt66Goq",
    network: Network.ETH_GOERLI,
};

const alchemy = new Alchemy(settings);  
  
// Get the latest block
alchemy.core.getBlockNumber().then(console.log);

// Access Alchemy Enhanced API requests
alchemy.core
  .getTokenBalances('0x93726293b44679c8B78092796aD0f60f2DfDBf1D')
  .then(console.log);
