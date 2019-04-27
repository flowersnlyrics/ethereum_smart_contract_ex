// functional component to class based component
// class based when you need state
// functional when you only need to spit out some JSX 
import React, { Component } from 'react'; 

// JS class! 
// Give it access to all React Component's STUFF
// state is a plain JS object used to record and react
// whenever a component's state is changed it forces it
// to re-render and force its children to re-render as well
class SearchBar extends Component{

    constructor(props){
        super(props); 

        this.state = { term: ''}; // term being short for search term  
    }

    // every React component must have a defined render method
    render () {
        //return <input onChange={this.onInputChange} />;
        // OK for referencing not setting
        // control field is an element whose value is set by the state
        // input changing tells the state that it needs to change
        // input is a controlled form element by adding a value
        // onChange updates the value of the state when a usr enters a value
        // and then value gets updated because state is updated
        // updating the state causes the entire thing to re render
        return (
            <div>
                <input 
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value})} />
            </div>
        );
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

