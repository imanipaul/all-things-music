import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Home from './Home.js'
import Search from './Search.js'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artist: '',
      song: '',
      album: ''

    }

  }

  handleChangeArtist(event) {
    this.setState({
      artist: event.target.value
    })
  }
  handleChangeAlbum(event) {
    this.setState({
      album: event.target.value
    })
  }
  handleChangeSong(event) {
    this.setState({
      song: event.target.value
    })
  }




  render() {
    return (
      <div className='App'>
        <nav className='nav'>
          <Link to='/'>Home</Link>
          <Link to='/search'>Search</Link>
        </nav>

        <div className='main'>
          <Route
            exact path='/'
            component={Home} />

          <Route
            exact path='/search'
            component={Search} />


        </div>



      </div>

    );
  }
}

export default App;
