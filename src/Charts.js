import React, { useEffect, useState } from 'react';

function Charts() {
  const [data, setData] = useState(0);
  const [albums, setAlbums] = useState('');
  const [artists, setArtists] = useState('');
  const [tracks, setTracks] = useState('');

  useEffect(() => {
    console.log('charts is mounted');
    getCharts('https://api.deezer.com/chart');
  }, []);

  const getCharts = (endPoint) => {
    fetch(endPoint)
      .then((response) => response.json())
      .then((json) => {
        console.log('json is', json);
        setData(json);
        setArtists(json.artists.data);
        setAlbums(json.albums.data);
        setTracks(json.tracks.data);
      });
  };

  return (
    <section className="charts">
      <h3>Top Charts</h3>
      <div className="data">
        <div className="data-column">
          <h4>Albums</h4>
          {albums && (
            <div>
              {albums.map((album) => (
                <div key={album.id} className="album">
                  <img src={album.cover} alt="album cover" />
                  <p>{album.title}</p>
                  <p>{album.artist.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="data-column">
          <h4>Artists</h4>
          {artists && (
            <div>
              {artists.map((artist) => (
                <div key={artist.id} className="artist">
                  <img src={artist.picture} alt="artist" />
                  <p>{artist.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="data-column">
          <h4>Tracks</h4>
          {tracks && (
            <div>
              {tracks.map((track) => (
                <div key={track.id} className="track">
                  <img src={track.album.cover} alt="album cover" />
                  <p>{track.title}</p>
                  <p>{track.artist.name}</p>
                  <audio controls src={track.preview}></audio>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Charts;
