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

    // What behavior do you really care about with this contract?

    // Any time someone calls enter, make sure their address gets
    // added if they send the correct amount of money
    it('allows one account to enter', async() => {
        await lottery.methods.enter().send({
            from: accounts[0], 
            value: web3.utils.toWei('0.02', 'ether') 
        }); 

        const players = await lottery.methods.getPlayers().call({
            from: accounts[0]
        });
        
        assert.equal(accounts[0], players[0]); // should be, is 
        assert.equal(1, players.length); 
    });

    // able to enter on multiple accounts and that they 
    // are stored in the players array 
    it('allows mutiple account to enter', async() => {
        
        // 1 account enters
        await lottery.methods.enter().send({
            from: accounts[0], 
            value: web3.utils.toWei('0.02', 'ether') 
        }); 
        // 2 accounts enter 
        await lottery.methods.enter().send({
            from: accounts[1], 
            value: web3.utils.toWei('0.02', 'ether') 
        }); 
        // 3 accounts enter 
        await lottery.methods.enter().send({
            from: accounts[2], 
            value: web3.utils.toWei('0.02', 'ether') 
        }); 


        const players = await lottery.methods.getPlayers().call({
            from: accounts[0]
        });
        
        assert.equal(accounts[0], players[0]);  // is, should be 
        assert.equal(accounts[1], players[1]);  // is, should be 
        assert.equal(accounts[2], players[2]);  // is, should be 
        assert.equal(3, players.length); 
    });
});


