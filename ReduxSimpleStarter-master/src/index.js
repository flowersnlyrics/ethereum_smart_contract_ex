// RULE: one component per file!!
// most parent component should be responsible for fetching it 

// Get react from installed modules
// transpiler turns JSX to JS (Babel!) 
import React, {Component} from 'react'; // core react works with react components
// render component into the DOM from reactDOM
import ReactDOM from 'react-dom';
// youtube API search
import YTSearch from 'youtube-api-search'; 
// importing our own files we need a file reference 
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDmwRp2qUU042QWsQoPDQ8AeIQ3tYYJ7P8';


// function is a callback function 

// Create a new component. This component should produce some HTML
// ES6 thing
// HTML looking stuff is JSX which allows you to write
// what looks like JS but is really HTML
// ES6 syntax replace 'function' keywork with a fat arrow =>
// right now App is a functional component cause it doesn't 
//   have a concept of state 
class App extends Component  {

    constructor(props){
        super(props); 

        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards'); 
        
       
    }

    videoSearch(term){ // search term input
        // setting state causes App to render`
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos, 
                selectedVideo: videos[0]
            } ); 
            //this.setState({ videos: videos }); 
            // only works if they're the same word
        });  
    }

    render() {
      return(
          <div>
              <SearchBar onSearchTermChange={term => this.videoSearch(term) } />
              <VideoDetail video={this.state.selectedVideo} />
              <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} /> 
          </div>
      ); 
    }
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




