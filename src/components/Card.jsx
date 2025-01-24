import React, { useEffect, useRef, useState } from "react"
import NewsModal from "./NewsModal"

function Card({ img, title, bookmark, articleData, blog, cardBookmarked }) {
  const imgRef = useRef(null)
  const [cardModalVisible, changeCardModalVisible] = useState(false)
  const [cardBookmarkedState, setCardBookmarkedState] = useState(cardBookmarked)

  useEffect(() => {
    imgRef.current.style.backgroundImage = `url(${img})`
  }, [img])

  // useEffect For showing, hiding overlay
  useEffect(() => {
    if (
      cardModalVisible &&
      title != "No News Available For This Search Query!"
    ) {
      document.body.classList.add("show-overlay")
    } else {
      document.body.classList.remove("show-overlay")
    }
  }, [cardModalVisible])

  // Function For Adding or Removing Articles to Bookmarks
  function toggleBookmarks() {
    // Remember React Doesn't Update State Until Next Rerender So Reverse If Conditions
    setCardBookmarkedState(!cardBookmarkedState)

    const localData =
      JSON.parse(localStorage.getItem("bookmarkedArticles")) || null
    if (localData == null) {
      const arr = []
      arr.push(articleData)
      localStorage.setItem("bookmarkedArticles", JSON.stringify(arr))
    } else {
      // If the card wasn't bookmarked and now got bookmarked (react doesn't update state immediately so I used !)
      if (cardBookmarkedState === false) {
        localData.push(articleData)
        localStorage.setItem("bookmarkedArticles", JSON.stringify(localData))
      } else {
        const newBookmarks = localData.filter((art) => {
          return art.title != articleData.title
        })

        localStorage.setItem("bookmarkedArticles", JSON.stringify(newBookmarks))
      }
    }
  }

  return (
    <>
      {cardModalVisible &&
        title != "No News Available For This Search Query!" && (
          <NewsModal
            data={articleData}
            img={img}
            title={title}
            cardModalVisible={cardModalVisible}
            changeCardModalVisible={changeCardModalVisible}
          ></NewsModal>
        )}
      <div
        className="card"
        onClick={(e) => {
          if (!e.target.matches(".bookmark-icon i")) {
            !blog && changeCardModalVisible(!cardModalVisible)
          }
        }}
      >
        <div className="img" ref={imgRef}>
          {/* <img src={img} alt="highlight-img" /> */}
        </div>

        <div className="title">
          <h2 className="bebas-neue-regular">{title}</h2>

          {bookmark && (
            <div className="bookmark-icon" onClick={toggleBookmarks}>
              <i
                className={`${
                  cardBookmarkedState ? "fa-solid" : "fa-regular"
                } fa-bookmark`}
              ></i>
              <i
                className={`${
                  cardBookmarkedState ? "fa-solid" : "fa-regular"
                } fa-bookmark`}
              ></i>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Card
