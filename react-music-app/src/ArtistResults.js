import React from 'react'

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
                        <p>{artistData.strBiographyEN}</p>
                        <img alt={artistData.name} src={artistData.strArtistThumb} />

                    </div>

                }
            </div>
        )
    }
}

export default ArtistResults