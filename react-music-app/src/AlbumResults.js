import React from 'react'

class AlbumResults extends React.Component {


    render() {
        const { allAlbums, match: { params: { albumName, artistName } } } = this.props
        console.log(this.props)
        console.log('allAlbums: ', allAlbums)
        console.log('albumName: ', albumName)
        console.log('artistName: ', artistName)

        const selectedAlbum = allAlbums.find(album => {
            return (album.strAlbum === albumName && album.strArtist === artistName)
        })

        return (
            <div className='results'>
                {selectedAlbum &&
                    <div>
                        <div>Album Name: {selectedAlbum.strAlbum}</div>
                        <div>Artist: {selectedAlbum.strArtist}</div>
                        <div>Label: {selectedAlbum.strLabel}</div>
                        <div>Genre: {selectedAlbum.strGenre}</div>
                        <img alt={selectedAlbum.strAlbum} src={selectedAlbum.strAlbumThumb} />
                        {selectedAlbum.strDescriptionEN && <div>Description: {selectedAlbum.strDescriptionEN}</div>}

                    </div>

                }
            </div>
        )
    }
}

export default AlbumResults