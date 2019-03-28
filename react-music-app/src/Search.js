import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AlbumSearch from './AlbumSearch.js'
import SongSearch from './SongSearch.js'
import ArtistSearch from './ArtistSearch.js'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            albumClicked: false,
            songClicked: false,
            artistClicked: false


        }
        this.toggleAlbumClicked = this.toggleAlbumClicked.bind(this)
        this.toggleSongClicked = this.toggleSongClicked.bind(this)
        this.toggleArtistClicked = this.toggleArtistClicked.bind(this)
    }

    toggleAlbumClicked(event) {
        event.preventDefault()
        this.setState({
            albumClicked: true,
            songClicked: false,
            artistClicked: false
        })
        console.log('clicked')
        console.log(this.state.albumClicked)
    }
    toggleSongClicked(event) {
        event.preventDefault()
        this.setState({
            albumClicked: false,
            songClicked: true,
            artistClicked: false
        })
    }
    toggleArtistClicked(event) {
        event.preventDefault()
        this.setState({
            albumClicked: false,
            songClicked: false,
            artistClicked: true
        })
    }


    render() {
        return (
            <div className='forms'>

                <form onSubmit={this.props.handleSubmitArtists && this.toggleArtistClicked}>

                    <label>
                        Search here for artist:
                        <input onChange={this.props.handleChangeArtist} name='artist' type='text' placeholder='enter artist ' />

                    </label>
                    <input type='Submit' />
                </form>

                <form className='songs-submit' onSubmit={this.props.handleSubmitSongs && this.toggleSongClicked}>

                    <label className='songs-submit-label'>
                        Search here for song:
                        <input className='songs-submit-input-artist' onChange={this.props.handleChangeArtist} name='criteria' type='text' placeholder='artist' />
                        <input className='songs-submit-input-song' onChange={this.props.handleChangeSong} name='criteria' type='text' placeholder='track title' />

                    </label>
                    <input className='songs-submit-button' type='Submit' onClick={this.toggleSongClicked} />
                </form>

                <form onSubmit={this.props.handleSubmitAlbums && this.toggleAlbumClicked}>

                    <label>
                        Search here for album:
                        <input onChange={this.props.handleChangeAlbum} name='album' type='text' placeholder='enter album' />

                    </label>
                    <input type='Submit' />
                </form>

                {this.state.albumClicked ? <AlbumSearch /> : <div></div>}
                {this.state.songClicked ? <SongSearch /> : <div></div>}
                {this.state.artistClicked ? <ArtistSearch /> : <div></div>}




            </div>




        )
    }
}

export default Search

