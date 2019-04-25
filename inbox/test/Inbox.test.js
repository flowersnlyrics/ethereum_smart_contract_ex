const assert = require('assert');
const ganache = require('ganache-cli');
// A constructor used to create a web3 instance 
const Web3 = require('web3');
// local ganache network creates a set of accounts 
// all functions are asynchronous in nature (always returns a promise)
const web3 = new Web3(ganache.provider());
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
    

});

describe('Inbox', () => {
    it('deploys a contract', () => { // add an it statement to make sure beforeEach runs at least once 
        console.log(inbox); 
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
