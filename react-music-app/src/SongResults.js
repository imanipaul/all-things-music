import React from 'react'

class SongResults extends React.Component {

    render() {
        const { allSongs, match: { params: { songName } } } = this.props
        console.log(this.props)
        console.log('allSongs: ', allSongs)
        console.log('songName: ', songName)

        const selectedSong = allSongs.find(song => {
            return song.name === songName
        })


        return (
            <div className='results'>
                {selectedSong &&
                    <div>
                        <div>Title: {selectedSong.name}</div>
                        <div>Artist: {selectedSong.artist}</div>
                        <img alt={selectedSong.name} src={selectedSong.image[2]['#text']} />

                    </div>
                }
            </div>
        )
    }
}

export default SongResults