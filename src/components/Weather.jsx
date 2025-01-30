import React, { useState } from "react"
import { useFetch } from "../hooks/useFetch"

// OpenWeather API Endpoint: https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}&units=metric
const OpenWeatherAPIKey = import.meta.env.VITE_OPENWEATHER_API_KEY

export default function Weather() {
  const [weatherSearch, setWeatherSearch] = useState("")
  const [currentSelectedCountry, setCurrentSelectedCountry] = useState("Cairo")
  const [openWeatherEndpoint, setOpenWeatherEndpoint] = useState(
    `https://api.openweathermap.org/data/2.5/weather?q=${currentSelectedCountry}&appid=${OpenWeatherAPIKey}&units=metric`
  )
  const { data, loading, error } = useFetch(openWeatherEndpoint)

  function handleFormSubmit(e) {
    e.preventDefault()
    if (weatherSearch.trim() != "") {
      setCurrentSelectedCountry(weatherSearch)
      setOpenWeatherEndpoint(
        `https://api.openweathermap.org/data/2.5/weather?q=${weatherSearch}&appid=${OpenWeatherAPIKey}&units=metric`
      )
    }
    setWeatherSearch("")
  }

  return (
    <div className="weather">
      <h2 className="comfortaa">
        <i className="fa-solid fa-location-dot"></i> {currentSelectedCountry}
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
        {loading ? (
          "Fetching Weather Information From API..."
        ) : error ? (
          <h2 className="comfortaa">Not Found 😞</h2>
        ) : (
          <>
            {data.weather[0].main === "Clear" &&
              data.dt >= data.sys.sunrise &&
              data.dt < data.sys.sunset && <i className="bx bxs-sun"></i>}
            {data.weather[0].main === "Clear" &&
              (data.dt < data.sys.sunrise || data.dt >= data.sys.sunset) && (
                <i className="bx bxs-moon"></i>
              )}
            {data.weather[0].main === "Clouds" && (
              <i className="bx bxs-cloud"></i>
            )}
            {data.weather[0].main === "Rain" && (
              <i className="bx bxs-cloud-rain"></i>
            )}
            {data.weather[0].main === "Drizzle" && (
              <i className="bx bx-cloud-drizzle"></i>
            )}
            {data.weather[0].main === "Thunderstorm" && (
              <i className="bx bxs-cloud-lightning"></i>
            )}
            {data.weather[0].main === "Snow" && (
              <i className="bx bx-cloud-snow"></i>
            )}
            {data.weather[0].main === "Mist" && (
              <i className="bx bx-cloud"></i>
            )}
            {data.weather[0].main === "Haze" && (
              <i className="bx bx-cloud"></i>
            )}
            {data.weather[0].main === "Fog" && (
              <i className="bx bx-cloud"></i>
            )}
            {data.weather[0].main === "Smoke" && (
              <i className="bx bxs-cloud-smoke"></i>
            )}
            {data.weather[0].main === "Dust" && (
              <i className="bx bxs-cloud-dust"></i>
            )}
            {data.weather[0].main === "Sand" && (
              <i className="bx bxs-cloud-sand"></i>
            )}
            {data.weather[0].main === "Ash" && (
              <i className="bx bxs-cloud-hail"></i>
            )}
            {data.weather[0].main === "Squall" && (
              <i className="bx bx-wind"></i>
            )}
            {data.weather[0].main === "Tornado" && (
              <i className="bx bxs-tornado"></i>
            )}
            <h3 className="comfortaa">{data.weather[0].main}</h3>
            <h3 className="comfortaa">{Math.round(data.main.temp)}&deg;</h3>
          </>
        )}
      </div>
    </div>
  )
}
