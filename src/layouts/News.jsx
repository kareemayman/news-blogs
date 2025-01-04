import React from "react"
import Card from "../components/Card"

import blog2 from "/src/assets/images/blog2.jpg"
import health from "/src/assets/images/health.jpg"
import tech from "/src/assets/images/tech.jpg"
import science from "/src/assets/images/science.jpg"
import world from "/src/assets/images/world.jpg"
import nation from "/src/assets/images/nation.jpg"
import { useFetch } from "../api/useFetch"

const GNewsAPIKey = import.meta.env.VITE_GNEWS_API_KEY
let GNewsEndpoint =
  "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=7&apikey=" +
  GNewsAPIKey

export default function News() {
  const { data, loading, error } = useFetch(GNewsEndpoint)
  console.log(data)

  return (
    <>
      <div className="news-highlight">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error Fetching News From API...</div>
        ) : (
          <Card
            img={data.articles[0].image}
            bookmark={true}
            title={data.articles[0].title}
          ></Card>
        )}
      </div>

      <div className="news-grid">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error Fetching News From API...</div>
        ) : (
          <>
            <Card
              img={data.articles[1].image}
              bookmark={true}
              title={data.articles[1].title}
            ></Card>
            <Card
              img={data.articles[2].image}
              bookmark={true}
              title={data.articles[2].title}
            ></Card>
            <Card
              img={data.articles[3].image}
              bookmark={true}
              title={data.articles[3].title}
            ></Card>
            <Card
              img={data.articles[4].image}
              bookmark={true}
              title={data.articles[4].title}
            ></Card>
            <Card
              img={data.articles[5].image}
              bookmark={true}
              title={data.articles[5].title}
            ></Card>
            <Card
              img={data.articles[6].image}
              bookmark={true}
              title={data.articles[6].title}
            ></Card>
          </>
        )}
      </div>
    </>
  )
}
