import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let auddEndPoint = 'https://api.audd.io/findLyrics/?q=adele hello&X-RapidAPI-Key=994b09bee9msh014fda2b73cd198p12fedajsn3e27a271e24b'

let geniusEP = 'https://api.genius.com/songs/378195?access_token=Af1UBe2nNehuEPD-Pm6r1EqYDYmprRzC5-D7Rb4wlHaVgKR8j-gIzhKR4n7hST8t'


let lastFM = 'http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=d911ed54b5a0909fa852320983b0f66d&artist=cher&track=believe&format=json'

let lyrics = 'https://api.lyrics.ovh/v1/coldplay/clocks'

class Practice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lyrics: '',
            title: '',
            embed: ''
        }

    }
    //works for audd
    getApi(endPoint) {
        fetch(endPoint).then(response => response.json()).then(json => {
            console.log(json)
            console.log(json.result[0])
            this.setState({
                lyrics: json.result[0].lyrics
            })
        })
    }

    //for genius
    getApiGenius(endPoint) {
        fetch(endPoint).then(response => response.json()).then(json => {
            console.log('Genius full response', json)
            console.log('Genius song response', json.response.song)
            this.setState({
                title: json.response.song.title,
                embed: json.response.song.embed_content
            })
        })
    }

    //for LastFM

    getApiLastFM(endPoint) {
        fetch(endPoint).then(response => response.json()).then(json => {
            console.log('Last full response', json)
            // console.log(json.response.song)
            this.setState({
                title: json.track.name
            })
        })
    }

    getApiLyrics(endPoint) {
        fetch(endPoint).then(response => response.json()).then(json => {
            console.log('lyrics', json)
            this.setState({
                lyrics: json.lyrics
            })
            // console.log(json.response.song)
        })
    }


    componentDidMount() {
        // this.getApiLastFM(lastFM)
        this.getApiGenius(geniusEP)
        this.getApiLastFM(lastFM)
        this.getApiLyrics(lyrics)
    }

    render() {
        return (
            <div className="App">
                {this.state.lyrics && <div>{this.state.lyrics}</div>}


                {/* <div>{this.state.title}</div> */}

                {/* <div>{this.state.embed}</div> */}

            </div>
        );
    }
}

export default Practice;
