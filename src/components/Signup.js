import React from 'react';
import './Signup.css';
import crypto from '../assets/trade.png';


function Signup() {
    return (  
        <div className="signup">
            <div className="container">
                <div className="left">
                    <img src={crypto} alt="" />
                </div>

                <div className="right">
                    <h2>Earn passive income with crypto.</h2>
                    <p>
                        Earn up to 12% annual rewards on 30+ digital assets. Buy and sell popular digital currencies, keep track of them in the one place.
                        Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly.
                    </p>
                    <div className="input-container">
                        <input type="email" placeholder='Enter your email' />
                        <button className="btn">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;