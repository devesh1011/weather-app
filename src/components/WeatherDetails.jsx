import React from 'react'

const WeatherDetails = (props) => {
    const { weather } = props;

    if (!weather) return (<h1>Loading...</h1>
    )

    console.log(weather);

    return (
        <>
            <section id="weather-details" className='weather text-center'>
                <h2>{weather.name} Weather</h2>
                <h1 >{weather.weather[0].main}</h1>

                <div className="row weather-details-container">
                    <div className="col-lg-4 col-md-6">
                        <div className="weather-details-container__gif py-2">
                            <img src="https://media.giphy.com/media/3o7aD2FQDSVdppqWIQ/giphy.gif" alt="weather gif" />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="weather-details-container__temperature text-center py-2">
                            <h1>{weather.main.temp}°C</h1>
                        </div>
                        <p>Real Temp</p>
                    </div>

                    <div className="col-lg-4 py-2">
                        <div className="weather-details-container__other-details">
                            <div className="row">
                                <div className="col col-2 col-sm-2 col-lg-12 col-md-4">
                                    <i className="fa-solid fa-droplet"></i>
                                    <h6>{weather.main.humidity }%</h6>
                                </div>
                                <div className="col col-2 col-sm-2 col-lg-12 col-md-4">
                                    <i className="fa-solid fa-wind"></i>
                                    <h6>{weather.wind.speed} kmph</h6>
                                </div>
                                <div className="col col-2 col-sm-2 col-lg-12 col-md-4">
                                    <i className="fa-solid fa-umbrella"></i>
                                    <h6>54%</h6>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>




            </section>
        </>
    )
}

export default WeatherDetails
