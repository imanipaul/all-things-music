import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Search extends Component {


    render() {
        return (
            <div className='forms'>
                <form onSubmit={this.props.handleSubmitArtists}>

                    <label>
                        Search here for artist:
                <input onChange={this.props.handleChangeArtist} name='artist' type='text' placeholder='enter artist ' />

                    </label>
                    <input type='Submit' />
                </form>

                <form className='songs-submit' onSubmit={this.props.handleSubmitSongs}>

                    <label className='songs-submit-label'>
                        Search here for song:
                        <input className='songs-submit-input-artist' onChange={this.props.handleChangeArtist} name='criteria' type='text' placeholder='artist' />
                        <input className='songs-submit-input-song' onChange={this.props.handleChangeSong} name='criteria' type='text' placeholder='track title' />

                    </label>
                    <input className='songs-submit-button' type='Submit' />
                </form>

                <form onSubmit={this.props.handleSubmitAlbums}>

                    <label>
                        Search here for album:
                <input onChange={this.props.handleChangeAlbum} name='album' type='text' placeholder='enter album' />

                    </label>
                    <input type='Submit' />
                </form>

                <div>
                    {this.props.allAlbums &&

                        this.props.allAlbums.map(element =>
                            <div key={element.idAlbum}>
                                <Link to={`/albums/${element.strAlbum}/${element.strArtist}`}>{element.strAlbum} </Link>
                                <p>{element.strArtist}</p>
                            </div>
                        )
                    }
                </div>

                <div>
                    {this.props.songData &&


                        <div>
                            <Link to={`/songs/${this.props.songData.strTrack}`} >{this.props.songData.strTrack} </Link>
                            <p>{this.props.songData.strArtist}</p>
                        </div>

                    }
                </div>
                <div className='artist-info'>
                    {this.props.artistInfo &&
                        <div>
                            <Link to={`/artists/${this.props.artistInfo.strArtist}`}>{this.props.artistInfo.strArtist} </Link>
                        </div>
                    }
                </div>
            </div>




        )
    }
}

export default Search

