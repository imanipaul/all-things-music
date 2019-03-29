import React from 'react'
import ReadMoreAndLess from 'react-read-more-less'

class ArtistResults extends React.Component {

    render() {
        const { artistData, match: { params: { artistName } } } = this.props

        return (
            <div className='artist-results'>
                {artistData &&
                    <div className='artist-results-render'>
                        <div className='artist-info'>
                            <h1>{artistData.strArtist}</h1>
                            <div>Country: {artistData.strCountry}</div>
                            <div>Genre: {artistData.strGenre}</div>
                            <div>Label: {artistData.strLabel}</div>
                        </div>
                        <div className='artist-image-description'>
                            <img alt={artistData.name} src={artistData.strArtistThumb} />
                            <div className='artist-description'>
                                <ReadMoreAndLess
                                    ref={this.ReadMore}
                                    className="read-more-content"
                                    charLimit={700}
                                    readMoreText="Read more"
                                    readLessText="Read less"
                                >{artistData.strBiographyEN}
                                </ReadMoreAndLess>
                            </div>
                        </div>




                    </div>

                }
            </div>
        )
    }
}

export default ArtistResults