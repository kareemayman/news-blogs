import React, { useState } from "react"

function Search({ placeholder }) {
  const [search, setSearch] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    console.log("search submitted")
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
