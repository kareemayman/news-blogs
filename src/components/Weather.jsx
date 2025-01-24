import React, { useState } from "react"

export default function Weather() {
  const [weatherSearch, setWeatherSearch] = useState("")

  function handleFormSubmit(e) {
    e.preventDefault()
    setWeatherSearch("")
  }

  return (
    <div className="weather">
      <h2 className="comfortaa">
        <i className="fa-solid fa-location-dot"></i> Tbilisi
      </h2>

      <form onSubmit={(e) => handleFormSubmit(e)}>
        <input
          type="text"
          name="weather-search"
          id="weather-search"
          placeholder="Enter Location"
          value={weatherSearch}
          onChange={(e) => setWeatherSearch(e.target.value)}
        />
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>

      <div className="weather__info">
        <h3>Sunny</h3>
        <h3 className="comfortaa">Clear</h3>
        <h3 className="comfortaa">30&deg;</h3>
      </div>
    </div>
  )
}
