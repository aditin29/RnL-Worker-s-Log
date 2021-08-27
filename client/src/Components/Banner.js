import React from 'react';
import './Banner.css';
import Navbar from './Navbar';

function Banner() {
    return (
        <div className="banner">
            <Navbar />
            <div className="banner__content">
                <h2>Workers Log</h2>
                <img src="Media/workers.png" alt="" className="banner__img" />
            </div>
        </div>
    )
}

export default Banner
