import React, { useState } from 'react'
import './Weather.css'

function Weather() {
  const [zipCode, setZipCode] = useState('')

  const handleChange = (e) => {
    setZipCode(e.target.value)
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
          pattern="[0-9]*"
          maxLength="5"
        />
        <button type="submit">Get Weather</button>
      </form>
      <p>Current zip code: {zipCode}</p>
    </div>
  )
}

export default Weather