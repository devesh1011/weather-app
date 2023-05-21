import React, {useState} from 'react'
import Header from './Header'
import WeatherDetails from './WeatherDetails'

const WeatherCard = () => {
  const [weather, setWeather] = useState(null);

  return (
    <div className='weather-card shadow'>
      <Header setWeather={setWeather}/>
      <WeatherDetails weather={weather}/>
    </div>
  )
}

export default WeatherCard
