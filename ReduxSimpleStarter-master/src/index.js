// RULE: one component per file!! 

// Get react from installed modules
// transpiler turns JSX to JS (Babel!) 
import React from 'react'; // core react works with react components
// render component into the DOM from reactDOM
import ReactDOM from 'react-dom';

// Create a new component. This component should produce some HTML
// ES6 thing
// HTML looking stuff is JSX which allows you to write
// what looks like JS but is really HTML
// ES6 syntax replace 'function' keywork with a fat arrow => 
const App = () => {
    return <div>Hi!</div>;
}

// Take this component's generated HTML 
// and put it on the page (in the DOM)
// purpose of JSX is to make our code a lot more legible
// when we write ES6 code
// App is the class and <App /> is the instance
// next argument is the target container, target DOM node
// if you don't enter that then React doesn't know where to put 
// the component 
// <div class="container"></div> root container 
ReactDOM.render(<App />, document.querySelector('.container') ); 




