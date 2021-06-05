import React from 'react'
import './Banner.css'
function Banner() {
    return (
        <div className='banner'>
            <div className='content'>
                <h1 className='title'>Movie Name</h1>
                <div className='banner_button'>
                    <button className='button'>Play</button>
                    <button className='button'>Mt List</button>
                </div>
                <h1 className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis nunc sed id semper risus in. Etiam erat velit scelerisque in dictum non. </h1>
            </div>
            <div className='fade_bottom'></div>
        </div>
    )
}

export default Banner
