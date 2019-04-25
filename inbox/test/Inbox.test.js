const assert = require('assert');
const ganache = require('ganache-cli');
// A constructor used to create a web3 instance 
const Web3 = require('web3');
// web3 broken kind of, this is the fix
const provider = ganache.provider(); 
const web3 = new Web3(provider); 

// local ganache network creates a set of accounts 
// all functions are asynchronous in nature (always returns a promise)
//const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile'); 

let accounts; 
let inbox; 

beforeEach(async () => {

    // Get a list of all accounts
    accounts = await web3.eth.getAccounts()

    // Use one of those accounts to deploy the contract
    // web3 is portal to ethereum 
    // eth is the ethereum module of web3 (can use other platforms(
    // Contract is us calling the contract constructor 
    //    First argument is the ABI: comms between solidity and JS
    //    Interface is a JSON interface, we parse it to get back 
    //    the JS object 
    // First line tells web3 that there is an contract out there
    // with this interface
    // 2nd/3rd lines are customizing
    // deploy line creates a transaction object 
    //     arguments: pass into Inbox.sol contract Constructor argument
    //                in an array in case constructor needs multiple arguments
    //     calling deploy creates an object that can be deplyed
    // send function deploys the function to the network
    //     account we use to deploy the contrct
    //     gas we are willing to spend
    // can also use web3 to get access to contracts already deployed
    //  to the network
    //  contract will have an address once it has been deployed
    //  succesfully
    //  value returned is the javascript representation 
    //     of the contract. represents what exists on the 
    //     blockchain 
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: ['Hi there!']})
        .send({from: accounts[0], gas:'1000000'});

    inbox.setProvider(provider); 
    

});

describe('Inbox', () => {
    it('deploys a contract', () => { // add an it statement to make sure beforeEach runs at least once 
        /*console.log(inbox);*/
        // presence of an address means its succesfully deployed to ganache 
        // ok method makes sure that value exists (not NULL or undefined) 
        assert.ok(inbox.options.address); // wherever this contract was deployed to 
    });

    // anytime we deploy an instance of our contract we def get a default message on our instance 
    it('has a default message', async () => {
        // write some code to somehow look at the inbox 
        // and somehow pull up the message property.
        // call a method on our inbox contract
        // calling a method is going to return a promise
        // and we have to wait for that promise to be resolved
        // contract has property called methods
        //     all public functions are in the methods object
        // first set of () - pass in any arguments
        // second set of () - used to customize transaction - how fx gets called 
        //     are attempting to send out to the network
        //     like who is going to send a message and how much gas to use
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Hi there!'); 
    });

    // attempt to modify and retrieve message
    it('can change the message', async () => {
        // initial setup
        // we have to send transaction out to the network
        await inbox.methods.setMessage('bye').send({from:accounts[0]}) ;
        // whenever we send transaction we get back an object
        // which is kind of like a receipt for the transaction
        // we sent in 
        const message = await inbox.methods.message().call(); 
        assert.equal(message, 'bye'); 
    });
});

// debug
//class Car{
//    park(){
//        return 'stopped'; 
//    }
//
//    drive(){
//        return 'vroom';
//    }
//}
//
//
//let car; // use let so that we can change the value of car 
//
//beforeEach(() => { // before each it statement 
//    car = new Car();
//});
//
//describe('Car', () => {
//    it('can park', () => {
//        assert.equal(car.park(), 'stopped');
//    });
//
//    it('can drive', () => { 
//        assert.equal(car.drive(), 'vroom');
//    });
//});
