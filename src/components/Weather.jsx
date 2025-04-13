import React, { useState } from 'react'
import './Weather.css'

function Weather() {
  const [zipCode, setZipCode] = useState('')
  const [units, setUnits] = useState('imperial')

  const handleChange = (e) => {
    setZipCode(e.target.value)
  }

  const handleUnitsChange = (e) => {
    setUnits(e.target.value)
  }

  return (
    <div className="weather-container">
      <h1>Weather Forecast</h1>
      <form>
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
        <button type="submit">Get Weather</button>
      </form>
      <p>Current zip code: {zipCode}</p>
      <p>Units: {units === 'metric' ? 'Celsius' : units === 'imperial' ? 'Fahrenheit' : 'Kelvin'}</p>
    </div>
  )
}

export default Weather