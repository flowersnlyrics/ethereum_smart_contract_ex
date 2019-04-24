const assert = require('assert');
const ganache = require('ganache-cli');
// A constructor used to create a web3 instance 
const Web3 = require('web3');
// local ganache network creates a set of accounts 
// all functions are asynchronous in nature (always returns a promise)
const web3 = new Web3(ganache.provider()); 

beforeEach(() => {

    // Get a list of all accounts
    web3.eth.getAccounts()
        .then(fetchedAccounts => {
            console.log(fetchedAccounts);
        });

    // Use one of those accounts to deploy the contract

});

describe('Inbox', () => {
    it('deploys a contract', () => { // add an it statement to make sure beforeEach runs at least once 

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
