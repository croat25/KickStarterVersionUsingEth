const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3')
 
const compiledFactory = require('./build/CampaignFactory.json')
const { interfaces } = require('mocha')
 
const provider = new HDWalletProvider(
    'captain pulp social remove tooth cluster curtain crouch history bleak omit grocery',
    'https://sepolia.infura.io/v3/2ed46155042441abbff6f806b8337ac6'
)
 
const web3 = new Web3(provider)
 
const deploy = async () => {
  const accounts = await web3.eth.getAccounts()
 
  console.log('Attempting to deploy from account', accounts[0])
 
  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
                .deploy({data: compiledFactory.bytecode })
                .send({ gas: '1000000', from: accounts[0] })

//   const result = await new web3.eth.Contract(abi)
//     .deploy({ data: evm.bytecode.object })
//     .send({ gas: '1000000', from: accounts[0] });
  console.log('Contract deployed to', result.options.address)
  provider.engine.stop()
}
 
deploy()