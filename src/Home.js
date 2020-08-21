import React from 'react';
import Chart from 'react-google-charts';
import StackGrid, { transitions, easings } from 'react-stack-grid';

const { scaleDown } = transitions;

const api_key = process.env.REACT_APP_LASTFM_KEY;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: '',
      artistListeners: [],
      topArtists: [],
    };

    this.handleChangeCountry = this.handleChangeCountry.bind(this);
    this.handleTopArtists = this.handleTopArtists.bind(this);
    this.handleSubmitCountry = this.handleSubmitCountry.bind(this);
  }

  componentDidMount() {
    // this.getTopArtists()
  }

  handleTopArtists() {
    let topArtists = this.state.topArtists;

    let info = topArtists.map((artist) => {
      const container = [];
      container[0] = artist.name;
      // container[1] = parseInt(artist.listeners)
      container[1] = artist.image[2]['#text'];
      container[2] = artist.listeners;
      return container;
    });
    // console.log('update', info.unshift(['Artist', 'Listeners']))
    this.setState({
      artistListeners: info,
    });

    console.log('artistListeners', this.state.artistListeners);
  }

  handleSubmitCountry(event) {
    event.preventDefault();
    let endPoint = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${this.state.country}&limit=20&api_key=${api_key}&format=json`;
    // console.log(endPoint)
    this.getTopArtists(endPoint);
  }

  getTopArtists(endPoint) {
    fetch(endPoint)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          topArtists: json.topartists.artist,
        });
        console.log(this.state.topArtists);
        this.handleTopArtists();
      });
  }

  handleChangeCountry(event) {
    this.setState({
      country: event.target.value,
    });
  }

  render() {
    return (
      <div className="home-wrapper">
        <div className="home-text">
          <h1>Music Charts</h1>
          <form onSubmit={this.handleSubmitCountry}>
            <label>
              Search here by Country:
              <input
                onChange={this.handleChangeCountry}
                name="country"
                type="text"
                placeholder="enter country "
              />
            </label>
          </form>
        </div>
        <div className="grid">
          <StackGrid
            enter={scaleDown.enter}
            gutterWidth={50}
            gutterHeight={50}
            easing={easings.cubicOut}
            columnWidth={225}
          >
            {this.state.artistListeners.map((element, index) => (
              <div key={index} className="hoverbox">
                <img src={element[1]} className="hoverbox-layer-bottom" />
                <div className="hoverbox-layer-top">
                  <div className="hoverbox-text">
                    <div className="hoverbox-text-name">{element[0]}</div>
                    <div className="hoverbox-text-listeners">
                      {element[2]} listeners
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </StackGrid>
        </div>
      </div>
    );
  }
}

export default Home;
