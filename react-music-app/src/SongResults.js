import React from 'react'
import ReadMoreAndLess from 'react-read-more-less'
class SongResults extends React.Component {

    render() {
        const { songData } = this.props


        return (
            <div className='song-results'>
                {songData &&
                    <div className='song-results-render'>
                        <div className='song-info'>
                            <h1>{songData.strTrack}</h1>
                            <div>Artist: {songData.strArtist}</div>

                            <div>Album: {songData.strAlbum}</div>
                            <div>Genre: {songData.strGenre}</div>
                        </div>

                        <div className='song-image-description'>
                            {songData.strTrackThumb ? <img alt={songData.name} src={songData.strTrackThumb} /> : <div></div>}
                            <div className='song-description'>
                                Description:
                                {songData.strDescriptionEN ?
                                    <ReadMoreAndLess
                                        ref={this.ReadMore}
                                        className="read-more-content"
                                        charLimit={250}
                                        readMoreText="Read more"
                                        readLessText="Read less"
                                    >
                                        {songData.strDescriptionEN}
                                    </ReadMoreAndLess> : <div></div>
                                }
                            </div>

                            <div className='song-lyrics'>
                                Lyrics:
                                {this.props.songLyrics ?
                                    <ReadMoreAndLess
                                        ref={this.ReadMore}
                                        className="read-more-content"
                                        charLimit={250}
                                        readMoreText="Read more"
                                        readLessText="Read less"
                                    >
                                        {this.props.songLyrics}
                                    </ReadMoreAndLess> : <div></div>
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>

        )
    }
}

export default SongResults