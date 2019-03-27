import React from 'react'

class ArtistResults extends React.Component {

    render() {
        const { artistData, match: { params: { artistName } } } = this.props
        console.log(this.props)
        console.log('artistData: ', artistData)
        console.log('artistName: ', artistName)



        return (
            <div className='results'>
                {artistData &&
                    <div>
                        <h1>{artistData.strArtist}</h1>
                        <p>{artistData.strBiographyEN}</p>
                        <img alt={artistData.name} src={artistData.strArtistThumb} />

                    </div>

                }
            </div>
        )
    }
}

export default ArtistResults