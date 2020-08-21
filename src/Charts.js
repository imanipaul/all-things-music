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
      <div>
        Albums
        {albums && (
          <div>
            {albums.map((album) => (
              <div key={album.id}>{album.title}</div>
            ))}
          </div>
        )}
      </div>
      <div>
        Artists
        {artists && (
          <div>
            {artists.map((artist) => (
              <div key={artist.id}>{artist.name}</div>
            ))}
          </div>
        )}
      </div>
      <div>
        Tracks
        {tracks && (
          <div>
            {tracks.map((track) => (
              <div key={track.id}>{track.title}</div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Charts;
