import React from 'react'

class SongResults extends React.Component {

    render() {
        const { songData, match: { params: { songName } } } = this.props
        // console.log(this.props)
        console.log('songData: ', songData)
        console.log('songName: ', songName)
        console.log('songLyrics: ', this.props.songLyrics)

        // const selectedSong = allSongs.find(song => {
        //     return song.name === songName
        // })


        return (
            <div className='results'>
                {songData &&
                    <div>
                        <div>Title: {songData.strTrack}</div>
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