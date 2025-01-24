import React from "react"

export default function Weather() {
  return (
    <div className="weather">
        <h2 className="comfortaa">
            <i className="fa-solid fa-location-dot"></i> Tbilisi
        </h2>

        <form>
            <input type="text" name="weather-search" id="weather-search" placeholder="Enter Location"/>
            <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>

        <div className="weather__info">
            <h3>Sunny</h3>
            <h3 className="comfortaa">Clear</h3>
            <h3 className="comfortaa">30&deg;</h3>
        </div>
    </div>
  )
}
