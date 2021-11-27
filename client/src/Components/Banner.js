import React from 'react';
import './Banner.css';
import Navbar from './Navbar';
import { useHistory } from 'react-router-dom';

function Banner() {

    const history = useHistory();


    function handleGetStarted(e) {
        e.preventDefault();
               
        history.push('/workers');
        
    }


    return (
        <div className="banner" style={{ backgroundImage: "url(Media/banner.png)", opacity: 0.85, backgroundPosition: 'center', backgroundSize: 'cover',}}>
            <Navbar />
            <div className="banner__content">
                <h2>Workers Log</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam.</h3>
                <button onClick={handleGetStarted} className="banner__btn">
                    <h2>Get Started</h2>
                </button>
            </div>
        </div>
    )
}

export default Banner
