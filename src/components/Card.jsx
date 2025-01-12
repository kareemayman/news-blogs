import React, { useEffect, useRef, useState } from "react"
import NewsModal from "./NewsModal"

function Card({ img, title, bookmark, articleData, blog }) {
  const imgRef = useRef(null)
  const [cardModalVisible, changeCardModalVisible] = useState(false)

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
        onClick={() => {
          !blog && changeCardModalVisible(!cardModalVisible)
        }}
      >
        <div className="img" ref={imgRef}>
          {/* <img src={img} alt="highlight-img" /> */}
        </div>

        <div className="title">
          <h2 className="bebas-neue-regular">{title}</h2>

          {bookmark && (
            <div className="bookmark-icon">
              <i className="fa-regular fa-bookmark"></i>
              <i className="fa-regular fa-bookmark"></i>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Card
