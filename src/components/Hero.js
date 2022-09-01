import React from 'react';
import './Hero.css';
import heroImg from '../assets/hero-img.png';


function Hero() {
    return (  
        <div className="hero">
            <div className="container">
                <div className="hero-left">
                    <p>Buy & Sell Crypto 24/7 in just a few clicks</p>
                    <h1>Invest in cryptocurrency with your IRA</h1>
                    <p>Buy, sell, and store hundreds of cryptocurrencies</p>
                    <div className="input-container">
                        <input type="email" placeholder='Enter your email' />
                        <button className="btn">Learn more</button>
                    </div>
                </div>

                <div className="hero-right">
                    <div className="img-container">
                        <img src={heroImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;