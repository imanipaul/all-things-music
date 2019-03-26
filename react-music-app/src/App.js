import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Home from './Home.js'
import Search from './Search.js'
import AlbumResults from './AlbumResults.js'
import './App.css';

const api_key = process.env.REACT_APP_LASTFM_KEY;


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artist: '',
      song: '',
      album: '',
      artistResponse: [],
      songResponse: [],
      albumResponse: [],
      songData: '',
      albumData: '',
      artistData: '',
    }
    this.handleChangeAlbum = this.handleChangeAlbum.bind(this)
    this.handleChangeSong = this.handleChangeSong.bind(this)
    this.handleChangeArtist = this.handleChangeArtist.bind(this)
    this.handleSubmitArtists = this.handleSubmitArtists.bind(this)
    this.handleSubmitSongs = this.handleSubmitSongs.bind(this)
    this.handleSubmitAlbums = this.handleSubmitAlbums.bind(this)
  }

  handleChangeArtist(event) {
    this.setState({
      artist: event.target.value
    })
    console.log(this.state.artist)
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


  //for songs
  getApiSongs(endPoint) {
    fetch(endPoint).then(response => response.json()).then(json => {
      this.setState({
        songData: json.results.trackmatches.track

      })
      console.log(this.state.songData)
    })
  }


  //for albums
  getApiAlbums(endPoint) {
    fetch(endPoint).then(response => response.json()).then(json => {
      this.setState({
        albumData: json.results.albummatches.album

      })
      console.log(this.state.albumData)
    })

  }

  //for artists
  getApiArtists(endPoint) {
    fetch(endPoint).then(response => response.json()).then(json => {
      this.setState({
        artistData: json.artist

      })
      console.log(this.state.artistData)
    })
  }

  handleSubmitSongs(event) {
    event.preventDefault()
    let endPoint = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${this.state.song}&api_key=d911ed54b5a0909fa852320983b0f66d&format=json`
    console.log(endPoint)
    this.getApiSongs(endPoint)
  }

  handleSubmitArtists(event) {
    event.preventDefault()
    let endPoint = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${this.state.artist}&api_key=d911ed54b5a0909fa852320983b0f66d&format=json`
    console.log(endPoint)
    this.getApiArtists(endPoint)
  }

  handleSubmitAlbums(event) {
    event.preventDefault()
    let endPoint = `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${this.state.album}&api_key=d911ed54b5a0909fa852320983b0f66d&format=json`
    console.log(endPoint)
    this.getApiAlbums(endPoint)
  }



  // componentDidMount() {
  //   this.getTopTracks()
  // }


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
            render={(props) =>
              <Search {...props}
                allSongs={this.state.songData}
                allAlbums={this.state.albumData}
                artistInfo={this.state.artistData}
                handleChangeSong={this.handleChangeSong}
                handleChangeArtist={this.handleChangeArtist}
                handleChangeAlbum={this.handleChangeAlbum}
                handleSubmitSongs={this.handleSubmitSongs}
                handleSubmitAlbums={this.handleSubmitAlbums}
                handleSubmitArtists={this.handleSubmitArtists} />}
          />

          <Route
            path='/albums/:albumName'
            render={(props) => (
              <AlbumResults
                {...props}
                allAlbums={this.state.albumData}
              />
            )} />


        </div>
      </div>
    );
  }
}

export default App;
