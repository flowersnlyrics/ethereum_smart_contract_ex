import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import lottery from './lottery'; //copy of our contract

class App extends Component{
    
    constructor(props) {
        super(props); 

        this.state = {manager: ''}; 
    }
    
    async componentDidMount() {
        const manager = await lottery.methods.manager().call(); 

        this.setState({manager: manager}); 
    }



     render() {
      
      //web3.eth.getAccounts() // returns a promise (cant use async/await with a render method of a react component)
      //   .then(console.log); // chain on the promise with then

        return (
          <div>
            <h2> Lottery Contract </h2>
            <p> This contract is managed by {this.state.manager}</p>
          </div>
        );
    }  
}

export default App;
