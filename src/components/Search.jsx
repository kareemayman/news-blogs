import React, { useContext, useState } from "react"
import { NewsContext } from "../context/NewsContext"

const GNewsAPIKey = import.meta.env.VITE_GNEWS_API_KEY

function Search({ placeholder }) {
  const [search, setSearch] = useState("")
  const { newsEndpoint, setNewsEndpoint } = useContext(NewsContext)

  function handleSubmit(event) {
    event.preventDefault()
    console.log("search submitted")
    setNewsEndpoint(
      `https://gnews.io/api/v4/search?q="${search}"&lang=en&country=us&max=7&apikey=${GNewsAPIKey}`
    )
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={placeholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  )
}

export default Search
