import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home.js';
import Search from './Search.js';
import Charts from './Charts.js';
import AlbumResults from './AlbumResults.js';
import ArtistResults from './ArtistResults.js';
import SongResults from './SongResults.js';
import Landing from './Landing';
import Footer from './Footer';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: '',
      song: '',
      album: '',
      lyrics: '',
      artistResponse: [],
      songResponse: [],
      albumResponse: [],
      songData: '',
      albumData: [],
      artistData: '',

      albumClicked: false,
      songClicked: false,
      artistClicked: false,
      render: '',
    };
    this.handleChangeAlbum = this.handleChangeAlbum.bind(this);
    this.handleChangeSong = this.handleChangeSong.bind(this);
    this.handleChangeArtist = this.handleChangeArtist.bind(this);
    this.handleSubmitArtists = this.handleSubmitArtists.bind(this);
    this.handleSubmitSongs = this.handleSubmitSongs.bind(this);
    this.handleSubmitAlbums = this.handleSubmitAlbums.bind(this);
    this.reload = this.reload.bind(this);
  }

  handleChangeArtist(event) {
    this.setState({
      artist: event.target.value,
    });
    console.log(this.state.artist);
  }

  handleChangeAlbum(event) {
    this.setState({
      album: event.target.value,
    });
  }

  handleChangeSong(event) {
    this.setState({
      song: event.target.value,
    });
  }

  //for songs
  getApiSongs(endPoint) {
    fetch(endPoint)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          songData: json.track[0],
        });
        console.log(this.state.songData);
      });
  }

  getLyrics(endPoint) {
    fetch(endPoint)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          lyrics: json.lyrics,
        });
        console.log('lyrics', this.state.lyrics);
      });
  }

  //for albums
  getApiAlbums(endPoint) {
    fetch(endPoint)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          albumData: json.album,
        });
        console.log(this.state.albumData);
      });
  }

  //for artists
  getApiArtists(endPoint) {
    fetch(endPoint)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          artistData: json.artists[0],
        });
        console.log(this.state.artistData);
      });
  }

  handleSubmitSongs(event) {
    event.preventDefault();
    let songEndPoint = `https://www.theaudiodb.com/api/v1/json/1/searchtrack.php?s=${this.state.artist}&t=${this.state.song}`;
    let lyricsEndPoint = `https://api.lyrics.ovh/v1/${this.state.artist}/${this.state.song}`;
    this.getApiSongs(songEndPoint);
    this.getLyrics(lyricsEndPoint);
    this.setState({
      render: 'song',
      albumClicked: false,
      songClicked: true,
      artistClicked: false,
    });
  }

  handleSubmitArtists(event) {
    event.preventDefault();
    let endPoint = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${this.state.artist}`;
    this.getApiArtists(endPoint);
    this.setState({
      render: 'artist',
      albumClicked: false,
      songClicked: false,
      artistClicked: true,
    });
  }

  handleSubmitAlbums(event) {
    event.preventDefault();
    let endPoint = `https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?a=${this.state.album}`;
    this.getApiAlbums(endPoint);
    this.setState({
      render: 'album',
      albumClicked: true,
      songClicked: false,
      artistClicked: false,
    });
  }

  reload() {
    this.setState({
      render: '',
    });
  }

  render() {
    return (
      <div className="App">
        <nav className="nav">
          <Link to="/" className="nav-links">
            <button>Home</button>
          </Link>
          <Link to="/charts" className="nav-links">
            <button>Charts</button>
          </Link>

          <Link to="/search" className="nav-links">
            <button onClick={this.reload}>Search</button>
          </Link>
        </nav>

        <Route exact path="/" component={Landing} />
        <Route exact path="/charts" component={Charts} />

        {/* <Route exact path="/charts" render={(props) => <Home {...props} />} /> */}

        <Route
          exact
          path="/search"
          render={(props) => (
            <Search
              {...props}
              render={this.state.render}
              albumClicked={this.state.albumClicked}
              songClicked={this.state.songClicked}
              artistClicked={this.state.artistClicked}
              songData={this.state.songData}
              allAlbums={this.state.albumData}
              artistInfo={this.state.artistData}
              handleChangeSong={this.handleChangeSong}
              handleChangeArtist={this.handleChangeArtist}
              handleChangeAlbum={this.handleChangeAlbum}
              handleSubmitSongs={this.handleSubmitSongs}
              handleSubmitAlbums={this.handleSubmitAlbums}
              handleSubmitArtists={this.handleSubmitArtists}
            />
          )}
        />

        <Route
          exact
          path="/albums/:albumName/:artistName"
          render={(props) => (
            <AlbumResults {...props} allAlbums={this.state.albumData} />
          )}
        />

        <Route
          exact
          path="/artists/:artistName"
          render={(props) => (
            <ArtistResults {...props} artistData={this.state.artistData} />
          )}
        />

        <Route
          exact
          path="/songs/:songName"
          render={() => (
            <SongResults
              songData={this.state.songData}
              songLyrics={this.state.lyrics}
            />
          )}
        />

        {/* </div> */}
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
