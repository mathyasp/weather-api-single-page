import React from 'react';
import './DisplayWeather.css'

function DisplayWeather({weatherData, units}) {
  return (
    <div className="weather-info">
      <div className="weather-heading">
        <h2>{weatherData.name}</h2>
        <img 
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt={weatherData.weather[0].description}
          className="weather-icon"
        />
      </div>

      <p className="temperature">{weatherData.main.temp}°{units === 'metric' ? 'C' : units === 'imperial' ? 'F' : 'K'}</p>
      <p className="description">{weatherData.weather[0].description}</p>
      <p>Feels like: {weatherData.main.feels_like}°{units === 'metric' ? 'C' : units === 'imperial' ? 'F' : 'K'}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind: {weatherData.wind.speed} {units === 'imperial' ? 'mph' : 'm/s'}</p>
      <p>Pressure: {weatherData.main.pressure} hPa</p>
    </div>
  )
}

export default DisplayWeather;