import React from 'react'

function Landing(props) {
    return (
        <div className='landing'>
            <h1>All Things Music</h1>
            <h3>Your first stop for music industry information</h3>
            <p>All Things Music (ATM) provides all of your music industry data needs. Satisfy your curiosity with our album search or take a look at how your favorite artist is charting. </p>
            <form className='form-enter' action='/charts'>
                <input className='enter-button' type='submit' value='Enter' />
            </form>
        </div>
    )
}

export default Landing
