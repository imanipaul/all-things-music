import React from 'react'
import ReadMoreAndLess from 'react-read-more-less'


class AlbumResults extends React.Component {


    render() {
        const { allAlbums, match: { params: { albumName, artistName } } } = this.props

        const selectedAlbum = allAlbums.find(album => {
            return (album.strAlbum === albumName && album.strArtist === artistName)
        })

        return (
            <div className='album-results'>
                {selectedAlbum &&
                    <div className='album-results-render'>
                        <div className='album-info'>
                            <h1>{selectedAlbum.strAlbum}</h1>
                            <div>Artist: {selectedAlbum.strArtist}</div>
                            <div>Label: {selectedAlbum.strLabel}</div>
                            <div>Genre: {selectedAlbum.strGenre}</div>
                        </div>
                        <div className='album-image-description'>
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
                                {/* {selectedAlbum.strDescriptionEN} */}
                            </div>
                        </div>

                    </div>

                }
            </div>
        )
    }
}

export default AlbumResults