import React from 'react'

function Search(props) {
    return (
        <div>
            <form>

                <label>
                    Search here for artist:
                <input name='criteria' type='text' placeholder='enter artist ' />

                </label>
            </form>
            <form>

                <label>
                    Search here for song:
                <input name='criteria' type='text' placeholder='enter song' />

                </label>
            </form>
            <form>

                <label>
                    Search here for album:
                <input name='criteria' type='text' placeholder='enter album' />

                </label>
            </form>
        </div>


    )
}

export default Search


// return (
//     <form onSubmit={this.props.handleSubmit}>
//         <label>
//             Input text here:
//                 <input onChange={this.props.handleChange} name="message" type="text" value={this.props.message}
//             />

//         </label>
//         <input type="Submit" />

//     </form>
// )