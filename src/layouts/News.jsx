import React, { useContext } from "react"
import Card from "../components/Card"
import { useFetch } from "../hooks/useFetch"
import { NewsContext } from "../context/NewsContext"

export default function News() {
  const { newsEndpoint } = useContext(NewsContext)
  const { data, loading, error } = useFetch(newsEndpoint)

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
