import Web3 from 'web3'; // constructor function

const web3 = new Web3(window.web3.currentProvider); // arg is copy of web3 coming from metamask librayr

export default web3; 
