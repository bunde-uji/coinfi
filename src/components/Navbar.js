import React, { useState } from 'react';
import '../components/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';


function Navbar() {
    const [click, setClick] = useState(false);

    function handleClick(){
        setClick(!click);
    }

    return (  
        <div className='header'>
            <div className="container">
                <a href='/'><h1 style={{color: 'rgb(36, 34, 34)'}}>Coin<span className='primary'>Fi</span></h1></a>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Featured</a></li>
                    <li><a href="/">Earn</a></li>                                                                                                                                                                                                                               
                    <li><a href="/">Contact</a></li>
                </ul>
                <div className="btn-group">
                    <button className="btn">Connect Wallet</button>
                </div>
                <div className="hamburger" onClick={handleClick}>
                    {click ? <FaTimes size={20} style={{color: '#333'}} /> : <FaBars size={20} style={{color: '#333'}} />}
                </div>
            </div>
        </div>
    );
}

export default Navbar;