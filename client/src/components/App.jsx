import React from 'react';
import MovieList from './MovieList.jsx';
import MovieEntry from './MovieEntry.jsx';
import Search from './Search.jsx'; 

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      list: movies,
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(searched) {
    console.log(searched);
    // if this.state.list.includes(searched)
    this.handleSearchInput(searched); 
  }


  handleSearchInput(searchedTerm) {
    //create array to hold updated list
    var updatedList = []; 

    this.state.list.forEach(item => {
      // console.log('item', item, item.title);
      if (JSON.stringify(item.title.toUpperCase()).includes(searchedTerm.toUpperCase())) {
        console.log('item', item); 
        updatedList.push(item);
      }
    })
    console.log(updatedList)

    this.setState({
      list: updatedList, 
    })
    //iterate through this.state.list
      //for each item in list, check to see if this.state.list.title includes seearchedterm
      //if it does include it, push to array

      //setstate with new array
  }


  render() {
    return (
      <div>
      <button onClick={() => this.setState({ list: movies})} >clear</button>
        <h1 className= 'title'>Movie List </h1>
        <h2 className= 'list'>List of Movies</h2>
        <Search handleSearch={this.handleSearch}/>
        <MovieList movies={this.state.list}/>
      </div>
    )
  }
};

// const App = (props) => (
  
// );

export default App;