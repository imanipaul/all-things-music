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
                        <div>{artistData.name}</div>
                        <div>{artistData.bio.summary}</div>
                        <img alt={artistData.name} src={artistData.image[2]['#text']} />

                    </div>

                }
            </div>
        )
    }
}

export default ArtistResults