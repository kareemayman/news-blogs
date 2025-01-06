import React, { useContext, useEffect, useState } from "react"
import { NewsContext } from "../context/NewsContext"

const GNewsAPIKey = import.meta.env.VITE_GNEWS_API_KEY

function Search({ placeholder }) {
  const [search, setSearch] = useState("")
  const [queryLastingFor2Secs, setQueryLastingFor2Secs] = useState("")
  const { newsEndpoint, setNewsEndpoint } = useContext(NewsContext)

  // Search For News If User Stopped Typing For 2+ Seconds
  useEffect(() => {
    const timeoutHandler = setTimeout(() => {
      setQueryLastingFor2Secs(search)
    }, 1000)

    return () => {
      clearTimeout(timeoutHandler)
    }
  }, [search])
  useEffect(() => {
    if (queryLastingFor2Secs === search && search.trim() !== "") {
      setNewsEndpoint(
        `https://gnews.io/api/v4/search?q="${search}"&lang=en&country=us&max=7&apikey=${GNewsAPIKey}`
      )
    }
  }, [queryLastingFor2Secs])

  function handleSubmit(event) {
    event.preventDefault()
    console.log("search submitted")
    if (search.trim() != "") {
      setNewsEndpoint(
        `https://gnews.io/api/v4/search?q="${search}"&lang=en&country=us&max=7&apikey=${GNewsAPIKey}`
      )
    } else {
      setNewsEndpoint(
        "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=7&apikey=" +
          GNewsAPIKey
      )
    }
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
