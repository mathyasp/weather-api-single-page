import React, { useState } from 'react'
import DisplayWeather from './DisplayWeather'
import './Weather.css'

function Weather() {
  const [zipCode, setZipCode] = useState('')
  const [units, setUnits] = useState('imperial')
  const [weatherData, setWeatherData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const API_KEY = import.meta.env.VITE_API_KEY

  const handleChange = (e) => {
    setZipCode(e.target.value)
  }

  const handleUnitsChange = (e) => {
    setUnits(e.target.value)
    setWeatherData(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!zipCode || zipCode.length !== 5) {
      setError('Please enter a valid 5-digit zip code')
      return
    }

    setIsLoading(true)
    setError(null)
    
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=${units}&appid=${API_KEY}`
      )
      
      if (!response.ok) {
        throw new Error('Weather data not available')
      }
      
      const data = await response.json()
      console.log('Weather data:', data)
      setWeatherData(data)
    } catch (err) {
      setError('Failed to fetch weather data: ' + err.message)
      console.error('Weather fetch error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="weather-container">
      <h1>Weather Forecast</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={zipCode}
          onChange={handleChange}
          placeholder="Enter zip code"
          pattern="[0-9]{5}"
          title="Please enter a valid 5-digit zip code"
          maxLength="5"
          required
        />
        <div className="units-selector">
          <label htmlFor="units">Temperature Units:</label>
          <select 
            id="units" 
            value={units} 
            onChange={handleUnitsChange}
          >
            <option value="metric">Metric (°C)</option>
            <option value="imperial">Imperial (°F)</option>
            <option value="standard">Standard (K)</option>
          </select>
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Get Weather'}
        </button>
      </form>
      
      {error && <div className="error">{error}</div>}
      
      {weatherData && <DisplayWeather 
        weatherData={weatherData}
        units={units}
      />}
    </div>
  )
}

export default Weather