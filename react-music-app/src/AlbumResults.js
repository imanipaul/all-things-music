import React from 'react'

class AlbumResults extends React.Component {

    render() {
        const { allAlbums, match: { params: { albumName } } } = this.props
        console.log('allAlbums: ', allAlbums)
        console.log('albumName: ', albumName)

        const selectedAlbum = allAlbums.find(album => {
            return album.name === albumName
        })


        return (
            <div className='results'>
                {selectedAlbum &&
                    <div>
                        <div>{selectedAlbum.name}</div>
                        <div>{selectedAlbum.artist}</div>
                    </div>

                }
            </div>
        )
    }
}

export default AlbumResults