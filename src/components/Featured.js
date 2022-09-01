import React, {useState, useEffect} from 'react';
import './Featured.css';
import axios from 'axios';
import btc from '../assets/btc-img.png';
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi';


function Featured() {
    const [data, setData] = useState();

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false'

    useEffect(()=>{
        axios.get(url).then(response => {
            setData(response.data)
        }).catch(error => {
            console.log(error);
        })
    }, [])

    console.log(data);

    if (!data) return null;

    return (  
        <div className='featured'>
            <div className="container">
                <div className="featured-left">
                    <h2>Explore top cryptos like Bitcoin, Ethereum and Dogecoin</h2>
                    <p>See all available assets: Cryptocurrencies and NFT's</p>
                    <button className="btn">See more coins</button>
                </div>

                <div className="featured-right">
                    {data.map(i => {
                        return (
                            <div className="card">
                                <div className="top">
                                    <img src={i.image} alt="" />
                                </div>
                                <div>
                                    <h5>{i.name}</h5>
                                    <p>${i.current_price.toLocaleString()}</p>
                                </div>
                                
                                {i.price_change_percentage_24h < 0  ? (
                                    <span className='red'>
                                        <FiArrowDown className='icon' />
                                        {i.price_change_percentage_24h.toFixed(2)}%
                                    </span>
                                ) : (
                                    <span className='green'>
                                        <FiArrowUpRight className='icon' />
                                        {i.price_change_percentage_24h.toFixed(2)}%
                                    </span>
                                )
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Featured;