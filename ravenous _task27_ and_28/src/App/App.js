import logo from '../logo.svg';
import './App.css';
import React from 'react';
import './App.css'
import SearchBar from '../components/SearchBar/SearchBar';
import BusinessList from '../components/BusinessList/BusinessList';
import Yelp from '../util/Yelp';

// var business={
    
//    imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
//     name: 'MarginOtto Pizzeria',
//     address: '1010 Paddington Way',
//     city: 'Flavortown',
//     state: 'NY',
//     zipCode: '10101',
//     category: 'Italian',
//     rating: 4.5,
//     reviewCount: 90
// }
// var businesses= [ 
//   business,
//   business,
//   business,
//   business,
//   business,
//   business,
// ]

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {businesses:[]}
    this.searchYelp = this.searchYelp.bind(this)
  }
  searchYelp(term , location , sortBy){
    // console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`)
    Yelp.search(term , location , sortBy).then(
      (businesses)=>{
        console.log("buisness = ", businesses)
        this.setState({businesses : businesses})
      }
    )
  }
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp ={this.searchYelp}/>
        <BusinessList businesses = {this.state.businesses}/>
      </div>
    )
  }
  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>
  // );
}

export default App;
