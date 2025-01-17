import React, { useContext } from "react"
import Card from "../components/Card"
import { useFetch } from "../hooks/useFetch"
import { NewsContext } from "../context/NewsContext"

import noImg from "../assets/images/no-img.png"

export default function News() {
  const { newsEndpoint } = useContext(NewsContext)
  const { data, loading, error } = useFetch(newsEndpoint)

  if (newsEndpoint === 'bookmarks') {
    return (
      <>
      </>
    )
  }

  return (
    <>
      <div className="news-highlight">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error Fetching News From API...</div>
        ) : (
          <Card
            img={data.articles[0]?.image || noImg}
            bookmark={true}
            articleData={data.articles[0]}
            title={
              data.articles[0]?.title ||
              "No News Available For This Search Query!"
            }
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
              img={data.articles[1]?.image || noImg}
              bookmark={true}
              articleData={data.articles[1]}
              title={
                data.articles[1]?.title ||
                "No News Available For This Search Query!"
              }
            ></Card>
            <Card
              img={data.articles[2]?.image || noImg}
              bookmark={true}
              articleData={data.articles[2]}
              title={
                data.articles[2]?.title ||
                "No News Available For This Search Query!"
              }
            ></Card>
            <Card
              img={data.articles[3]?.image || noImg}
              bookmark={true}
              articleData={data.articles[3]}
              title={
                data.articles[3]?.title ||
                "No News Available For This Search Query!"
              }
            ></Card>
            <Card
              img={data.articles[4]?.image || noImg}
              bookmark={true}
              articleData={data.articles[4]}
              title={
                data.articles[4]?.title ||
                "No News Available For This Search Query!"
              }
            ></Card>
            <Card
              img={data.articles[5]?.image || noImg}
              bookmark={true}
              articleData={data.articles[5]}
              title={
                data.articles[5]?.title ||
                "No News Available For This Search Query!"
              }
            ></Card>
            <Card
              img={data.articles[6]?.image || noImg}
              bookmark={true}
              articleData={data.articles[6]}
              title={
                data.articles[6]?.title ||
                "No News Available For This Search Query!"
              }
            ></Card>
          </>
        )}
      </div>
    </>
  )
}
