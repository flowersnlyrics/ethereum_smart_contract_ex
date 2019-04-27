// functional component to class based component
import React, { Component } from 'react'; 

// JS class! 
// Give it access to all React Component's STUFF
class SearchBar extends Component{

    // every React component must have a defined render method
    render () {
        //return <input onChange={this.onInputChange} />;
        return <input onChange={event => console.log(event.target.value)} />;
    }

    // event handler
   // onInputChange(event) { // context/info about event that occured
   //     console.log(event.target.value); 
   // }
}

export default SearchBar; 


// OLD 
// exporting modules, classes and states

// Need to include Reach into all components  that have JSX
// since it creates a React.create component call or whatever 
//import React from 'react' ;
//
//const SearchBar = () => {
//    return <input />
//}
//
//export default SearchBar;

