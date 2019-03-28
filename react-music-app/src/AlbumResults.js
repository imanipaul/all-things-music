import React from 'react'
import ReadMoreAndLess from 'react-read-more-less'


class AlbumResults extends React.Component {


    render() {
        const { allAlbums, match: { params: { albumName, artistName } } } = this.props

        const selectedAlbum = allAlbums.find(album => {
            return (album.strAlbum === albumName && album.strArtist === artistName)
        })

        return (
            <div className='results'>
                {selectedAlbum &&
                    <div>
                        <h1>{selectedAlbum.strAlbum}</h1>
                        <div>Artist: {selectedAlbum.strArtist}</div>
                        <div>Label: {selectedAlbum.strLabel}</div>
                        <div>Genre: {selectedAlbum.strGenre}</div>
                        <img alt={selectedAlbum.strAlbum} src={selectedAlbum.strAlbumThumb} />
                        <div className='album-description'>
                            <ReadMoreAndLess
                                ref={this.ReadMore}
                                className="read-more-content"
                                charLimit={250}
                                readMoreText="Read more"
                                readLessText="Read less"
                            >{selectedAlbum.strDescriptionEN}
                            </ReadMoreAndLess>
                        </div>

                    </div>

                }
            </div>
        )
    }
}

export default AlbumResults