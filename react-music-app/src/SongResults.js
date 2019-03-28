import React from 'react'

class SongResults extends React.Component {

    render() {
        const { songData, match: { params: { songName } } } = this.props


        return (
            <div className='results'>
                {songData &&
                    <div>
                        <h1>{songData.strTrack}</h1>
                        <div>Artist: {songData.strArtist}</div>

                        <div>Album: {songData.strAlbum}</div>
                        <div>Genre: {songData.strGenre}</div>
                        <div>Description: {songData.strDescriptionEN}</div>
                        <a href={songData.strMusicVid}>{songData.strMusicVid}</a>
                        <img alt={songData.name} src={songData.strTrackThumb} />
                        <div>lyrics: {this.props.songLyrics}</div>

                    </div>
                }
            </div>
        )
    }
}

export default SongResults