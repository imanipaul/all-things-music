import React, { Component } from 'react'

class Search extends Component {


    render() {
        // if (this.props.allAlbums) {
        //     let allAlbums = this.props.getAlbums()
        // }

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
                                <a key={Math.random()} href={`/albums/${element.name}`}>{element.name} </a>
                                <p>{element.artist}</p>
                            </div>
                        )
                    }
                </div>

                <div>
                    {this.props.allSongs &&

                        this.props.allSongs.map(element =>
                            <div>
                                <a key={Math.random()} href={`/songs/${element.name}`} >{element.name} </a>
                                <p>{element.artist}</p>
                            </div>
                        )
                    }
                </div>
                <div>
                    {this.props.artistInfo &&
                        <div>
                            <a key={Math.random()} href={`/artists/${this.props.artistInfo.name}`}>{this.props.artistInfo.name} </a>
                            <p>{this.props.artistInfo.bio.summary} </p>
                        </div>

                    }
                </div>



            </div>




        )
    }
}

export default Search

