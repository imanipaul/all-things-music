import React from 'react'


class TopTracks extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            topTracks: []
        }
    }

    componentDidMount() {
        this.getTopTracks('https://www.theaudiodb.com/api/v1/json/1/trending.php?country=us&type=itunes&format=singles')
    }

    // handleTopArtists() {

    //     let topArtists = this.state.topArtists

    //     let info = topArtists.map(artist => {
    //         const container = []
    //         container[0] = artist.name
    //         container[1] = parseInt(artist.listeners)
    //         return container
    //     })
    //     console.log('update', info.unshift(['Artist', 'Listeners']))
    //     this.setState({
    //         artistListeners: info
    //     })

    //     console.log('artistListeners', this.state.artistListeners)
    // }



    getTopTracks(endPoint) {
        fetch(endPoint)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    topTracks: json.trending
                })
                console.log(this.state.topTracks)
                // this.handleTopArtists()
            })
    }




    render() {
        return (

            <div>
                {/* {this.state.topTracks} */}
            </div>
        )
    }
}

export default TopTracks