import React from 'react';
import './DisplayWeather.css'

function DisplayWeather({weatherData, units}) {

  return (
    (
      <div className="weather-info">
        <h2>{weatherData.name}</h2>
        <p className="temperature">{weatherData.main.temp}°{units === 'metric' ? 'C' : units === 'imperial' ? 'F' : 'K'}</p>
        <p className="description">{weatherData.weather[0].description}</p>
        <p>Feels like: {weatherData.main.feels_like}°{units === 'metric' ? 'C' : units === 'imperial' ? 'F' : 'K'}</p>
        <p>Humidity: {weatherData.main.humidity}%</p>
        <p>Wind: {weatherData.wind.speed} {units === 'imperial' ? 'mph' : 'm/s'}</p>
      </div>
    )
  )
}

export default DisplayWeather;