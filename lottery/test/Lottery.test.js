const assert = require('assert'); 
const ganache = require('ganache-cli'); // automatically boots up test network
const Web3 = require('web3');
//const web3 = require(ganache.provider()); // what connects us to the network
const provider = ganache.provider(); 
const web3 = new Web3(provider); 

const {interface, bytecode} = require('../compile'); // {} because we're requiring an object

let lottery; 
let accounts; 

// deploy contract and get list of all of our accounts
// before every test
beforeEach(async () => {
    accounts = await web3.eth.getAccounts(); 

    lottery = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode})
        .send({from: accounts[0], gas: '1000000' });
});


describe('Lottery Contract', () => {
    it('deploys a contract', () => {
        assert.ok(lottery.options.address);
    });


});


