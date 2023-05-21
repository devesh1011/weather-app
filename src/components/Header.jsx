import React, { useState } from 'react'
import weatherData from '../services/weatherService';

const Header = (props) => {
    const { setWeather } = props;

    const [city, setCity] = useState('');

    const fetchWeather = async (e) => {
        e.preventDefault();
        const data = await weatherData(city);
        setWeather(data);
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="search-div">
                        <input value={city} id="search-focus" type="search" className="form-control" placeholder='Search City' onChange={(e) => setCity(e.target.value)} />
                    </div>
                    <a className='me-auto' href="" onClick={fetchWeather}><i className="fa-solid fa-magnifying-glass"></i></a>
                </div>
            </nav>
        </header>
    )
}

export default Header;
