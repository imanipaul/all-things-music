import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Search extends Component {


    render() {

        return (
            <div>
                <form onSubmit={this.props.handleSubmitArtists}>

                    <label>
                        Search here for artist:
                <input onChange={this.props.handleChangeArtist} name='criteria' type='text' placeholder='enter artist ' />

                    </label>
                </form>

                <form onSubmit={this.props.handleSubmitSongs}>

                    <label>
                        Search here for song:
                <input onChange={this.props.handleChangeSong} name='criteria' type='text' placeholder='enter song' />

                    </label>
                </form>

                <form onSubmit={this.props.handleSubmitAlbums}>

                    <label>
                        Search here for album:
                <input onChange={this.props.handleChangeAlbum} name='criteria' type='text' placeholder='enter album' />

                    </label>
                </form>

                <div>
                    {this.props.allAlbums &&

                        this.props.allAlbums.map(element =>
                            <div>
                                <Link to={`/albums/${element.name}`}>{element.name} </Link>
                                <p>{element.artist}</p>
                            </div>
                        )
                    }
                </div>

                <div>
                    {this.props.allSongs &&

                        this.props.allSongs.map(element =>
                            <div>
                                <Link to={`/songs/${element.name}`} >{element.name} </Link>
                                <p>{element.artist}</p>

                            </div>
                        )
                    }
                </div>
                <div>
                    {this.props.artistInfo &&
                        <div>
                            <Link to={`/artists/${this.props.artistInfo.name}`}>{this.props.artistInfo.name} </Link>

                        </div>

                    }
                </div>




            </div>




        )
    }
}

export default Search

