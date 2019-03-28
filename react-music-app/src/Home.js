import React from 'react'
import Chart from 'react-google-charts'

const api_key = process.env.REACT_APP_LASTFM_KEY


class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            country: '',
            artistListeners: [],
            topArtists: []
        }

        this.handleChangeCountry = this.handleChangeCountry.bind(this)
        this.handleTopArtists = this.handleTopArtists.bind(this)
        this.handleSubmitCountry = this.handleSubmitCountry.bind(this)
    }

    componentDidMount() {
        // this.getTopArtists()
    }

    handleTopArtists() {

        let topArtists = this.state.topArtists

        let info = topArtists.map(artist => {
            const container = []
            container[0] = artist.name
            container[1] = parseInt(artist.listeners)
            return container
        })
        console.log('update', info.unshift(['Artist', 'Listeners']))
        this.setState({
            artistListeners: info
        })

        console.log('artistListeners', this.state.artistListeners)
    }

    handleSubmitCountry(event) {
        event.preventDefault()
        let endPoint = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${this.state.country}&limit=20&api_key=${api_key}&format=json`
        // console.log(endPoint)
        this.getTopArtists(endPoint)
    }

    getTopArtists(endPoint) {
        fetch(endPoint)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    topArtists: json.topartists.artist
                })
                console.log(this.state.topArtists)
                this.handleTopArtists()
            })
    }

    handleChangeCountry(event) {
        this.setState({
            country: event.target.value
        })
    }


    render() {
        return (

            <div>
                <h1>Music Charts</h1>
                <form onSubmit={this.handleSubmitCountry}>

                    <label>
                        Search here by Country:
                <input onChange={this.handleChangeCountry} name='country' type='text' placeholder='enter country ' />

                    </label>
                </form>

                <div className='chart'>
                    <Chart
                        width={'800px'}
                        height={'500px'}
                        chartType="BarChart"
                        loader={<div>Loading Chart</div>}
                        data={this.state.artistListeners}

                        options={{
                            title: `Top Artists in ${this.state.country}`,
                            titleTextStyle: {
                                color: 'black',
                                fontSize: 25,
                                bold: true
                            },
                            animation: {
                                startup: true,
                                easing: 'inAndOut',
                                duration: 900,

                            },
                            backgroundColor: {
                                fill: 'darkgrey'
                            },
                            vAxis: {
                                title: 'Listeners',


                            },
                            hAxis: {
                                title: 'Artists',
                                gridlines: {
                                    color: 'red',
                                    count: 0
                                }
                            },

                            legend: 'none',
                            // groupWidth: '80%',
                            // is3D: true,

                            enableInteractivity: true,

                        }}
                        chartEvents={[
                            {
                                eventName: 'animationfinish',
                                callback: () => {
                                    console.log('Animation Finished')
                                },
                            },
                            {
                                eventName: 'error',
                                callback: () => {

                                    console.log('errors detected')
                                },
                            },
                        ]}



                    />
                </div>
            </div>
        )
    }
}

export default Home