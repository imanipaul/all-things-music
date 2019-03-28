import React from 'react'
import ReadMoreAndLess from 'react-read-more-less'

class ArtistResults extends React.Component {

    render() {
        const { artistData, match: { params: { artistName } } } = this.props

        return (
            <div className='results'>
                {artistData &&
                    <div>
                        <h1>{artistData.strArtist}</h1>
                        <div>Country: {artistData.strCountry}</div>
                        <div>Genre: {artistData.strGenre}</div>
                        <div>Label: {artistData.strLabel}</div>

                        <div>
                            <ReadMoreAndLess
                                ref={this.ReadMore}
                                className="read-more-content"
                                charLimit={250}
                                readMoreText="Read more"
                                readLessText="Read less"
                            >{artistData.strBiographyEN}
                            </ReadMoreAndLess>
                        </div>


                        <img alt={artistData.name} src={artistData.strArtistThumb} />

                    </div>

                }
            </div>
        )
    }
}

export default ArtistResults