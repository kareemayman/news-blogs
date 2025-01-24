import React, { useContext } from "react"
import Card from "../components/Card"
import { useFetch } from "../hooks/useFetch"
import { NewsContext } from "../context/NewsContext"

import noImg from "../assets/images/no-img.png"

export default function News() {
  const { newsEndpoint } = useContext(NewsContext)
  const { data, loading, error } = useFetch(newsEndpoint)

  // Function To Check If Card Is Saved In LocalStorage
  function CheckInLocalStorage(cardUrl) {
    const localData =
      JSON.parse(localStorage.getItem("bookmarkedArticles")) || null

    if (localData == null) {
      return false
    } else {
      const check = localData.filter((art) => {
        return art.url === cardUrl
      })

      if (check.length === 0) {
        return false
      } else {
        return true
      }
    }
  }

  if (newsEndpoint === "bookmarks") {
    const localData =
      JSON.parse(localStorage.getItem("bookmarkedArticles")) || null

    if (localData == null) {
      return (
        <>
          <div className="news-highlight">
            <div>Can't find any bookmarked articles...</div>
          </div>

          <div className="news-grid">
            <div>Can't find any bookmarked articles...</div>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className="news-highlight">
            <Card
              key={0}
              img={localData[0].image}
              bookmark={true}
              articleData={localData[0]}
              title={localData[0].title}
              cardBookmarked={true}
            ></Card>
          </div>

          <div className="news-grid">
            {localData.map((art, i) => {
              if (i != 0) {
                return (
                  <Card
                    key={i}
                    img={art.image}
                    bookmark={true}
                    articleData={art}
                    title={art.title}
                    cardBookmarked={true}
                  ></Card>
                )
              }
            })}
          </div>
        </>
      )
    }
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
            cardBookmarked={CheckInLocalStorage(data.articles[0]?.url)}
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
              cardBookmarked={CheckInLocalStorage(data.articles[1]?.url)}
            ></Card>
            <Card
              img={data.articles[2]?.image || noImg}
              bookmark={true}
              articleData={data.articles[2]}
              title={
                data.articles[2]?.title ||
                "No News Available For This Search Query!"
              }
              cardBookmarked={CheckInLocalStorage(data.articles[2]?.url)}
            ></Card>
            <Card
              img={data.articles[3]?.image || noImg}
              bookmark={true}
              articleData={data.articles[3]}
              title={
                data.articles[3]?.title ||
                "No News Available For This Search Query!"
              }
              cardBookmarked={CheckInLocalStorage(data.articles[3]?.url)}
            ></Card>
            <Card
              img={data.articles[4]?.image || noImg}
              bookmark={true}
              articleData={data.articles[4]}
              title={
                data.articles[4]?.title ||
                "No News Available For This Search Query!"
              }
              cardBookmarked={CheckInLocalStorage(data.articles[4]?.url)}
            ></Card>
            <Card
              img={data.articles[5]?.image || noImg}
              bookmark={true}
              articleData={data.articles[5]}
              title={
                data.articles[5]?.title ||
                "No News Available For This Search Query!"
              }
              cardBookmarked={CheckInLocalStorage(data.articles[5]?.url)}
            ></Card>
            <Card
              img={data.articles[6]?.image || noImg}
              bookmark={true}
              articleData={data.articles[6]}
              title={
                data.articles[6]?.title ||
                "No News Available For This Search Query!"
              }
              cardBookmarked={CheckInLocalStorage(data.articles[6]?.url)}
            ></Card>
          </>
        )}
      </div>
    </>
  )
}
