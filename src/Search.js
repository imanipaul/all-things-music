import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Search extends Component {

    render() {
        return (
            <div className='search-page'>
                <h3>What are you looking for?</h3>
                <div className='forms-results'>
                    <div className='forms'>

                        <form onSubmit={this.props.handleSubmitArtists}>

                            <label>
                                An artist:
                        <input onChange={this.props.handleChangeArtist} name='artist' type='text' placeholder='Enter Artist Name' />

                            </label>
                            <input type='Submit' />
                        </form>

                        <form className='songs-submit' onSubmit={this.props.handleSubmitSongs}>

                            <label className='songs-submit-label'>
                                A song:
                        <input className='songs-submit-input-artist' onChange={this.props.handleChangeArtist} name='criteria' type='text' placeholder='artist' />
                                <input className='songs-submit-input-song' onChange={this.props.handleChangeSong} name='criteria' type='text' placeholder='Enter Song Title' />

                            </label>
                            <input className='songs-submit-button' type='Submit' onClick={this.toggleSongClicked} />
                        </form>

                        <form onSubmit={this.props.handleSubmitAlbums}>

                            <label>
                                An album:
                        <input onChange={this.props.handleChangeAlbum} name='album' type='text' placeholder='Enter Album Name' />

                            </label>
                            <input type='Submit' />
                        </form>

                    </div>

                    <div className='results' >
                        {
                            (this.props.render === 'album' &&
                                <div>
                                    <h4>Results</h4>
                                    {this.props.allAlbums.map(element =>
                                        <div key={element.idAlbum}>
                                            <Link className='album-link' to={`/albums/${element.strAlbum}/${element.strArtist}`}>{element.strAlbum} By: {element.strArtist} </Link><p className='album-artist'></p>

                                        </div>
                                    )}
                                </div>) ||

                            this.props.render === 'song' &&
                            <div>
                                <h4>Results</h4>
                                {this.props.songData &&
                                    <div>
                                        <Link to={`/songs/${this.props.songData.strTrack}`} >{this.props.songData.strTrack} </Link>
                                        <p>{this.props.songData.strArtist}</p>
                                    </div>

                                }
                            </div> ||

                            this.props.render === 'artist' &&
                            <div>
                                <h4>Results</h4>
                                {this.props.artistInfo &&
                                    <div>
                                        <Link to={`/artists/${this.props.artistInfo.strArtist}`}>{this.props.artistInfo.strArtist} </Link>
                                    </div>
                                }
                            </div>

                        }
                    </div>
                </div>
            </div>




        )
    }
}

export default Search

