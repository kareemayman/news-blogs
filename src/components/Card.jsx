import React, { useEffect, useRef, useState } from "react"
import NewsModal from "./NewsModal"

function Card({ img, title, bookmark, articleData }) {
  const imgRef = useRef(null)
  const [cardModalVisible, changeCardModalVisible] = useState(false)

  useEffect(() => {
    imgRef.current.style.backgroundImage = `url(${img})`
  }, [img])

  return (
    <>
      {cardModalVisible &&
        title != "No News Available For This Search Query!" && (
          <NewsModal data={articleData} img={img} title={title}></NewsModal>
        )}
      <div
        className="card"
        onClick={() => {
          changeCardModalVisible(!cardModalVisible)
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
