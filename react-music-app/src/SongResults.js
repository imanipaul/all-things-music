import React from 'react'
import ReadMoreAndLess from 'react-read-more-less'
class SongResults extends React.Component {

    render() {
        const { songData, match: { params: { songName } } } = this.props


        return (
            <div className='results'>
                {songData &&
                    <div>
                        <h1>{songData.strTrack}</h1>
                        <div>Artist: {songData.strArtist}</div>

                        <div>Album: {songData.strAlbum}</div>
                        <div>Genre: {songData.strGenre}</div>

                        <div>
                            <ReadMoreAndLess
                                ref={this.ReadMore}
                                className="read-more-content"
                                charLimit={250}
                                readMoreText="Read more"
                                readLessText="Read less"
                            >{songData.strDescriptionEN}
                            </ReadMoreAndLess>
                        </div>

                        <a href={songData.strMusicVid}>{songData.strMusicVid}</a>
                        <img alt={songData.name} src={songData.strTrackThumb} />
                        <div>
                            <ReadMoreAndLess
                                ref={this.ReadMore}
                                className="read-more-content"
                                charLimit={250}
                                readMoreText="Read more"
                                readLessText="Read less"
                            >{this.props.songLyrics}</ReadMoreAndLess>
                        </div>

                    </div>
                }
            </div>
        )
    }
}

export default SongResults