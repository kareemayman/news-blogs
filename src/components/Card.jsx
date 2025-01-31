import React, { useContext, useEffect, useRef, useState } from "react"
import NewsModal from "./NewsModal"
import { NewsContext } from "../context/NewsContext"

function Card({ img, title, bookmark, articleData, blog, cardBookmarked, description }) {
  const imgRef = useRef(null)
  const [cardModalVisible, changeCardModalVisible] = useState(false)
  const [cardBookmarkedState, setCardBookmarkedState] = useState(cardBookmarked)
  const {renderBlogs, setRenderBlogs} = useContext(NewsContext)

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
          return art.url != articleData.url
        })

        localStorage.setItem("bookmarkedArticles", JSON.stringify(newBookmarks))
      }
    }
  }

  // Function For Deleting Blogs
  function deleteBlog() {
    const localData = JSON.parse(localStorage.getItem("blogs")) || null
    const newBlogs = localData.filter((blog) => {
      return blog.title != title
    })

    localStorage.setItem("blogs", JSON.stringify(newBlogs))
    setRenderBlogs(false)
    setTimeout(() => {
      setRenderBlogs(true)
    }, 0)
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
            isBlog={blog}
            description={description}
          ></NewsModal>
        )}
      <div
        className="card"
        onClick={(e) => {
          if (!e.target.matches(".bookmark-icon i") && !e.target.matches(".blog-buttons i")) {
            changeCardModalVisible(!cardModalVisible)
          }
        }}
      >
        <div className="img" ref={imgRef}>
          <img src={img} alt="highlight-img" />
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

        {blog && (
          <div className="blog-buttons">
            <i className="fa-solid fa-pen-to-square"></i>
            <i className="fa-solid fa-circle-xmark" onClick={deleteBlog}></i>
          </div>
        )}
      </div>
    </>
  )
}

export default Card
